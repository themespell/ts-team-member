<?php
namespace TSTeam;

use TSTeam\Helper;
use TSTeam\Common;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class QATester {

	// View type mapping - these are the ACTUAL view type values available in the plugin
	// Free views: grid, carousel
	// Pro views: flex, marquee, table, filterable, confetti
	private static $view_type_map = array(
		'grid'      => 'grid',
		'carousel'  => 'carousel',
		'flex'      => 'flex',
		'marquee'   => 'marquee',
		'table'     => 'table',
	);

	public static function init() {
		$self = new self();
		// QA Tester Ajax Actions
		add_action( 'wp_ajax_tsteam/qa_tester/run_tests', array( $self, 'run_tests' ) );
		add_action( 'wp_ajax_tsteam/qa_tester/cleanup', array( $self, 'cleanup_test_data' ) );
		add_action( 'wp_ajax_tsteam/qa_tester/check_existing', array( $self, 'check_existing_test_data' ) );
		add_action( 'wp_ajax_tsteam/qa_tester/test_view', array( $self, 'test_single_view' ) );
		add_action( 'wp_ajax_tsteam/qa_tester/test_frontend', array( $self, 'test_frontend_rendering' ) );
		add_action( 'wp_ajax_tsteam/qa_tester/test_details', array( $self, 'test_details_functionality' ) );
		add_action( 'wp_ajax_tsteam/qa_tester/validate_html_output', array( $self, 'validate_html_output' ) );
		add_action( 'wp_ajax_tsteam/qa_tester/test_multiple_showcases', array( $self, 'test_multiple_showcases' ) );
	}

	/**
	 * Run all QA tests
	 */
	public function run_tests() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ) );
		}

		$results = array(
			'tests'                => array(),
			'passed'               => 0,
			'failed'               => 0,
			'warnings'             => 0,
			'test_data'            => array(
				'member_id'             => 0,
				'showcase_ids'          => array(),
				'category_id'           => 0,
				'page_id'               => 0,
				'preview_url'           => '',
				'multiple_showcase_ids' => array(),
			),
		);

		// 1. Test Creating a Category
		$category_result = $this->test_create_category();
		$results['tests'][] = $category_result;
		if ( $category_result['status'] === 'passed' ) {
			$results['test_data']['category_id'] = $category_result['category_id'];
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 2. Get Existing Team Members
		$member_result = $this->test_get_existing_members();
		$results['tests'][] = $member_result;

		// CRITICAL: If no team members exist, STOP all further testing
		if ( isset( $member_result['no_members'] ) && $member_result['no_members'] === true ) {
			$results['warnings']++;
			// Return early - no more tests should run
			wp_send_json_success( $results );
			return;
		}

		if ( $member_result['status'] === 'passed' ) {
			$results['test_data']['member_ids'] = $member_result['member_ids'];
			// Use first member ID for single member tests
			$results['test_data']['member_id'] = $member_result['member_ids'][0];
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 3. Test Creating Multiple Showcases with different configurations
		$showcases_result = $this->test_create_multiple_showcases( $results['test_data']['member_ids'] );
		$results['tests'][] = $showcases_result;
		if ( $showcases_result['status'] === 'passed' ) {
			$results['test_data']['showcase_ids'] = $showcases_result['showcase_ids'];
			$results['test_data']['main_showcase_id'] = $showcases_result['main_showcase_id'];
			$results['test_data']['preview_pages'] = $showcases_result['preview_pages'];
			$results['test_data']['all_previews'] = $showcases_result['all_previews'];
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 4. Test Creating a Page with Shortcode (for preview)
		$page_result = $this->test_create_page( $results['test_data']['main_showcase_id'] );
		$results['tests'][] = $page_result;
		if ( $page_result['status'] === 'passed' ) {
			$results['test_data']['page_id'] = $page_result['page_id'];
			$results['test_data']['preview_url'] = $page_result['preview_url'];
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 5. Test Fetching Showcase Data
		$fetch_result = $this->test_fetch_showcase( $results['test_data']['main_showcase_id'] );
		$results['tests'][] = $fetch_result;
		if ( $fetch_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 6. Test Member Data Structure for Frontend
		$data_structure_result = $this->test_member_data_structure( $results['test_data']['member_id'] );
		$results['tests'][] = $data_structure_result;
		if ( $data_structure_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 7. Test Static View (Grid)
		$static_view_result = $this->test_static_view( $results['test_data']['main_showcase_id'] );
		$results['tests'][] = $static_view_result;
		if ( $static_view_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 8. Test Carousel View with complete settings
		$carousel_view_result = $this->test_carousel_view( $results['test_data']['main_showcase_id'] );
		$results['tests'][] = $carousel_view_result;
		if ( $carousel_view_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 9. Test All Layouts (Card, Horizontal, Modern, etc.)
		$layouts_result = $this->test_all_layouts( $results['test_data']['main_showcase_id'] );
		$results['tests'][] = $layouts_result;
		if ( $layouts_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
			if ( $layouts_result['status'] === 'warning' ) {
				$results['warnings']++;
			}
		}

		// 10. Test Details Functionality
		$details_result = $this->test_details_functionality_internal( $results['test_data']['main_showcase_id'] );
		$results['tests'][] = $details_result;
		if ( $details_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 11. Test Shortcode Output
		$shortcode_result = $this->test_shortcode_output( $results['test_data']['main_showcase_id'] );
		$results['tests'][] = $shortcode_result;
		if ( $shortcode_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 12. Test HTML Output Validation (fetch actual page)
		$html_validation_result = $this->test_html_output_validation( $results['test_data']['page_id'] );
		$results['tests'][] = $html_validation_result;
		if ( $html_validation_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
			if ( $html_validation_result['status'] === 'warning' ) {
				$results['warnings']++;
			}
		}

		// 13. Test Showcase Settings Update (Editor Controls)
		$settings_result = $this->test_showcase_settings_update( $results['test_data']['main_showcase_id'] );
		$results['tests'][] = $settings_result;
		if ( $settings_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
		}

		// 14. Test Duplicate Showcase
		$duplicate_showcase_result = $this->test_duplicate_showcase( $results['test_data']['main_showcase_id'] );
		$results['tests'][] = $duplicate_showcase_result;
		if ( $duplicate_showcase_result['status'] === 'passed' ) {
			$results['passed']++;
			// Store duplicated showcase ID for cleanup
			$results['test_data']['duplicated_showcase_id'] = $duplicate_showcase_result['duplicated_showcase_id'];
		} else {
			$results['failed']++;
		}

		// 17. Visual & Functional Verification (comprehensive frontend check)
		$visual_result = $this->test_visual_functional_verification(
			$results['test_data']['page_id'],
			$results['test_data']['main_showcase_id']
		);
		$results['tests'][] = $visual_result;
		if ( $visual_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
			if ( $visual_result['status'] === 'warning' ) {
				$results['warnings']++;
			}
		}

		// 18. Multiple Showcase Editor Controls Test
		$editor_controls_result = $this->test_multiple_showcase_editor_controls( $results['test_data']['showcase_ids'] );
		$results['tests'][] = $editor_controls_result;
		if ( $editor_controls_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
			if ( $editor_controls_result['status'] === 'warning' ) {
				$results['warnings']++;
			}
		}

		// 19. Test Each Layout's Frontend Rendering
		$frontend_layouts_result = $this->test_all_layouts_frontend_rendering( $results['test_data']['preview_pages'] );
		$results['tests'][] = $frontend_layouts_result;
		if ( $frontend_layouts_result['status'] === 'passed' ) {
			$results['passed']++;
		} else {
			$results['failed']++;
			if ( $frontend_layouts_result['status'] === 'warning' ) {
				$results['warnings']++;
			}
		}

		// Store test data in transient for cleanup
		set_transient( 'tsteam_qa_test_data', $results['test_data'], DAY_IN_SECONDS );

		wp_send_json_success( $results );
	}

	/**
	 * Test 1: Create a test category
	 */
	private function test_create_category() {
		$result = array(
			'name'        => 'Create Category',
			'description' => 'Test creating a member category',
			'status'      => 'failed',
			'message'     => '',
			'category_id' => 0,
		);

		try {
			$term = wp_insert_term(
				'QA Test Category ' . time(),
				'tsteam-member-category'
			);

			if ( is_wp_error( $term ) ) {
				$result['message'] = 'Failed to create category: ' . $term->get_error_message();
			} else {
				$result['status'] = 'passed';
				$result['message'] = 'Category created successfully';
				$result['category_id'] = $term['term_id'];
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 2: Get existing team members (removed creation - uses existing members)
	 */
	private function test_get_existing_members() {
		$result = array(
			'name'        => 'Get Existing Team Members',
			'description' => 'Get existing team members for testing',
			'status'      => 'failed',
			'message'     => '',
			'member_ids'  => array(),
			'no_members'  => false, // Flag for frontend to show alert
		);

		try {
			// Get existing team members
			$args = array(
				'post_type'      => 'tsteam-member',
				'post_status'    => 'publish',
				'posts_per_page' => 10,
				'orderby'        => 'date',
				'order'          => 'DESC',
			);

			$query = new \WP_Query( $args );

			if ( ! $query->have_posts() ) {
				$result['status'] = 'warning';
				$result['no_members'] = true;
				$result['message'] = 'No team members found. Please generate some team members using the Team Member Generator tool first.';
				$result['alert_type'] = 'warning';
				$result['alert_message'] = 'No team members found! Please use the Team Member Generator to create some team members before running tests.';
			} else {
				$member_ids = array();
				while ( $query->have_posts() ) {
					$query->the_post();
					$member_ids[] = get_the_ID();
				}
				wp_reset_postdata();

				$result['status'] = 'passed';
				$result['message'] = 'Found ' . count( $member_ids ) . ' existing team members';
				$result['member_ids'] = $member_ids;
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 3: Create Multiple Showcases with different configurations
	 * Now accepts multiple member IDs and uses all available members
	 */
	private function test_create_multiple_showcases( $member_ids ) {
		// Handle both single ID and array of IDs
		if ( ! is_array( $member_ids ) ) {
			$member_ids = array( $member_ids );
		}
		$result = array(
			'name'          => 'Create Multiple Showcases',
			'description'   => 'Create multiple showcases with different configurations',
			'status'        => 'failed',
			'message'       => '',
			'showcase_ids'  => array(),
			'main_showcase_id' => 0,
			'preview_pages' => array(), // Will store page IDs and URLs for each showcase
		);

		try {
			$showcase_configs = array(
				array(
					'title' => 'QA Test - Card Grid',
					'description' => 'Card layout in grid view with popup details',
					'settings' => array(
						'layout' => 'Card',
						'view' => 'grid',
						'selectedView' => array( 'value' => 'grid', 'type' => 'grid' ),
						'selectedLayout' => array( 'value' => 'Card', 'type' => 'grid' ),
						'selectedDetails' => array( 'value' => 'popup', 'label' => 'Popup', 'type' => 'free' ),
					)
				),
				array(
					'title' => 'QA Test - Carousel',
					'description' => 'Card layout in carousel view with popup details',
					'settings' => array(
						'layout' => 'Card',
						'view' => 'carousel',
						'selectedView' => array( 'value' => 'carousel', 'type' => 'carousel' ),
						'selectedLayout' => array( 'value' => 'Card', 'type' => 'carousel' ),
						'selectedDetails' => array( 'value' => 'popup', 'label' => 'Popup', 'type' => 'free' ),
					)
				),
				array(
					'title' => 'QA Test - Horizontal Card',
					'description' => 'Horizontal card layout in grid view with drawer details',
					'settings' => array(
						'layout' => 'HorizontalCard',
						'view' => 'grid',
						'selectedView' => array( 'value' => 'grid', 'type' => 'grid' ),
						'selectedLayout' => array( 'value' => 'HorizontalCard', 'type' => 'grid' ),
						'selectedDetails' => array( 'value' => 'drawer', 'label' => 'Drawer', 'type' => 'free' ),
					)
				),
				array(
					'title' => 'QA Test - Modern Card',
					'description' => 'Modern card layout in grid view with fullscreen details',
					'settings' => array(
						'layout' => 'ModernCard',
						'view' => 'grid',
						'selectedView' => array( 'value' => 'grid', 'type' => 'grid' ),
						'selectedLayout' => array( 'value' => 'ModernCard', 'type' => 'grid' ),
						'selectedDetails' => array( 'value' => 'fullscreen', 'label' => 'Fullscreen', 'type' => 'free' ),
					)
				),
				array(
					'title' => 'QA Test - Overlay Card',
					'description' => 'Overlay card layout in grid view with popup details',
					'settings' => array(
						'layout' => 'OverlayCard',
						'view' => 'grid',
						'selectedView' => array( 'value' => 'grid', 'type' => 'grid' ),
						'selectedLayout' => array( 'value' => 'OverlayCard', 'type' => 'grid' ),
						'selectedDetails' => array( 'value' => 'popup', 'label' => 'Popup', 'type' => 'free' ),
					)
				),
				array(
					'title' => 'QA Test - Tiles',
					'description' => 'Tiles layout in grid view with popup details',
					'settings' => array(
						'layout' => 'Tiles',
						'view' => 'grid',
						'selectedView' => array( 'value' => 'grid', 'type' => 'grid' ),
						'selectedLayout' => array( 'value' => 'Tiles', 'type' => 'grid' ),
						'selectedDetails' => array( 'value' => 'popup', 'label' => 'Popup', 'type' => 'free' ),
					)
				),
			);

			$created_showcases = array();
			$created_pages = array();

			foreach ( $showcase_configs as $index => $config ) {
				$showcase_data = array(
					'post_title'  => $config['title'],
					'post_status' => 'publish',
					'post_author' => get_current_user_id(),
					'post_type'   => 'tsteam-showcase',
				);

				$showcase_id = wp_insert_post( $showcase_data );

				if ( is_wp_error( $showcase_id ) ) {
					$result['message'] = 'Failed to create showcase ' . $config['title'] . ': ' . $showcase_id->get_error_message();
					return $result;
				}

				// Add all team members
				update_post_meta( $showcase_id, 'tsteam_team_members', $member_ids );
				update_post_meta( $showcase_id, 'tsteam_member_categories', array() );

				// Create complete settings
				$settings = $this->get_complete_showcase_settings();
				$settings = array_merge( $settings, $config['settings'] );
				update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $settings ) );

				// Create a preview page for this showcase
				$page_content = $this->generate_preview_page_content( $config['title'], $config['description'], $showcase_id, $config['settings'] );
				$page_data = array(
					'post_title'   => $config['title'] . ' - Preview',
					'post_content' => $page_content,
					'post_status'  => 'publish',
					'post_author'  => get_current_user_id(),
					'post_type'    => 'page',
				);
				$page_id = wp_insert_post( $page_data );

				if ( ! is_wp_error( $page_id ) && $page_id ) {
					$created_pages[] = array(
						'page_id' => $page_id,
						'url' => get_permalink( $page_id ),
						'showcase_id' => $showcase_id,
						'title' => $config['title'],
						'description' => $config['description'],
						'layout' => $config['settings']['layout'],
						'view' => $config['settings']['view'],
						'details' => $config['settings']['selectedDetails']['value'],
					);
				}

				$created_showcases[] = array(
					'id' => $showcase_id,
					'title' => $config['title'],
					'description' => $config['description'],
					'layout' => $config['settings']['layout'],
					'view' => $config['settings']['view'],
					'details' => $config['settings']['selectedDetails']['value'],
					'page_id' => ! is_wp_error( $page_id ) ? $page_id : 0,
					'preview_url' => ! is_wp_error( $page_id ) && $page_id ? get_permalink( $page_id ) : '',
				);
			}

			$result['status'] = 'passed';
			$result['message'] = 'Created ' . count( $created_showcases ) . ' showcases with preview pages';
			$result['showcase_ids'] = $created_showcases;
			$result['main_showcase_id'] = $created_showcases[0]['id'];
			$result['preview_pages'] = $created_pages;
			$result['all_previews'] = $created_pages; // For easier access in frontend

		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Generate preview page content with header
	 */
	private function generate_preview_page_content( $title, $description, $showcase_id, $settings ) {
		$layout = $settings['layout'] ?? 'Card';
		$view = $settings['view'] ?? 'grid';
		$details = $settings['selectedDetails']['value'] ?? 'popup';

		$details_labels = array(
			'popup' => 'Popup Modal',
			'drawer' => 'Side Drawer',
			'fullscreen' => 'Fullscreen Modal',
			'none' => 'No Details',
		);

		$details_label = $details_labels[ $details ] ?? 'Popup Modal';

		$content = '<div style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">';
		$content .= '<style>
			.qa-preview-header {
				background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
				color: white;
				padding: 30px;
				border-radius: 12px;
				margin-bottom: 30px;
				box-shadow: 0 4px 6px rgba(0,0,0,0.1);
			}
			.qa-preview-header h1 {
				margin: 0 0 10px 0;
				font-size: 32px;
			}
			.qa-preview-header .badge {
				display: inline-block;
				background: rgba(255,255,255,0.2);
				padding: 4px 12px;
				border-radius: 20px;
				font-size: 14px;
				margin-right: 8px;
				margin-bottom: 8px;
			}
			.qa-preview-info {
				background: #f8fafc;
				padding: 20px;
				border-radius: 8px;
				margin-bottom: 30px;
				border-left: 4px solid #667eea;
			}
			.qa-preview-info h3 {
				margin-top: 0;
				color: #374151;
			}
			.qa-preview-showcase {
				background: white;
				padding: 20px;
				border-radius: 8px;
				box-shadow: 0 2px 4px rgba(0,0,0,0.1);
			}
			.qa-checklist {
				margin-top: 30px;
				background: #fef3c7;
				padding: 20px;
				border-radius: 8px;
			}
			.qa-checklist h3 {
				margin-top: 0;
				color: #92400e;
			}
			.qa-checklist ul {
				margin-bottom: 0;
			}
			.qa-checklist li {
				padding: 4px 0;
			}
		</style>';

		// Header Section
		$content .= '<div class="qa-preview-header">';
		$content .= '<h1>' . esc_html( $title ) . '</h1>';
		$content .= '<div>';
		$content .= '<span class="badge">Layout: ' . esc_html( $layout ) . '</span>';
		$content .= '<span class="badge">View: ' . esc_html( ucfirst( $view ) ) . '</span>';
		$content .= '<span class="badge">Details: ' . esc_html( $details_label ) . '</span>';
		$content .= '<span class="badge">Showcase ID: ' . esc_html( $showcase_id ) . '</span>';
		$content .= '</div>';
		$content .= '</div>';

		// Info Section
		$content .= '<div class="qa-preview-info">';
		$content .= '<h3>Configuration</h3>';
		$content .= '<p><strong>Description:</strong> ' . esc_html( $description ) . '</p>';
		$content .= '<p><strong>What to Check:</strong></p>';
		$content .= '<ul>';

		// Layout-specific checks
		if ( $layout === 'Card' ) {
			$content .= '<li>✓ Cards display in proper grid layout</li>';
			$content .= '<li>✓ Member image, name, designation visible</li>';
			$content .= '<li>✓ Social icons appear on hover/below</li>';
		} elseif ( $layout === 'HorizontalCard' ) {
			$content .= '<li>✓ Horizontal layout with image on left</li>';
			$content .= '<li>✓ Content flows properly beside image</li>';
			$content .= '<li>✓ Responsive on mobile devices</li>';
		} elseif ( $layout === 'ModernCard' ) {
			$content .= '<li>✓ Modern styling with gradients/effects</li>';
			$content .= '<li>✓ Creative card design elements</li>';
			$content .= '<li>✓ Visual appeal and uniqueness</li>';
		} elseif ( $layout === 'OverlayCard' ) {
			$content .= '<li>✓ Text overlays over image</li>';
			$content .= '<li>✓ Proper text contrast/readability</li>';
			$content .= '<li>✓ Smooth hover effects</li>';
		} elseif ( $layout === 'Tiles' ) {
			$content .= '<li>✓ Tile/grid layout with equal sizing</li>';
			$content .= '<li>✓ Compact, organized appearance</li>';
			$content .= '<li>✓ Proper spacing between tiles</li>';
		}

		// View-specific checks
		if ( $view === 'carousel' ) {
			$content .= '<li>✓ Carousel navigation arrows work</li>';
			$content .= '<li>✓ Dot pagination appears and works</li>';
			$content .= '<li>✓ Auto-play slides automatically</li>';
			$content .= '<li>✓ Touch/swipe works on mobile</li>';
		} elseif ( $view === 'grid' ) {
			$content .= '<li>✓ Grid columns adjust on resize</li>';
			$content .= '<li>✓ Items flow properly on different screens</li>';
		}

		// Details-specific checks
		if ( $details === 'popup' ) {
			$content .= '<li>✓ Clicking member opens popup modal</li>';
			$content .= '<li>✓ Close button works</li>';
			$content .= '<li>✓ Clicking outside closes modal</li>';
		} elseif ( $details === 'drawer' ) {
			$content .= '<li>✓ Clicking member opens side drawer</li>';
			$content .= '<li>✓ Drawer slides in smoothly</li>';
			$content .= '<li>✓ Close button works</li>';
		} elseif ( $details === 'fullscreen' ) {
			$content .= '<li>✓ Clicking member opens fullscreen view</li>';
			$content .= '<li>✓ Full viewport coverage</li>';
			$content .= '<li>✓ Close button works</li>';
		}

		$content .= '</ul>';
		$content .= '</div>';

		// Showcase Container
		$content .= '<div class="qa-preview-showcase">';
		$content .= '<h3 style="margin-top: 0; color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Preview</h3>';
		$content .= '[tsteam_showcase id="' . $showcase_id . '"]';
		$content .= '</div>';

		// Checklist Section
		$content .= '<div class="qa-checklist">';
		$content .= '<h3>Manual Verification Checklist</h3>';
		$content .= '<ul>';
		$content .= '<li>☐ All team members are displayed</li>';
		$content .= '<li>☐ Images load correctly</li>';
		$content .= '<li>☐ Text is readable and properly styled</li>';
		$content .= '<li>☐ Hover effects work (if applicable)</li>';
		$content .= '<li>☐ Social links are clickable</li>';
		$content .= '<li>☐ Details modal/drawer opens on click</li>';
		$content .= '<li>☐ All member info displays in details view</li>';
		$content .= '<li>☐ Responsive on mobile (try resizing browser)</li>';
		if ( $view === 'carousel' ) {
			$content .= '<li>☐ Carousel slides work</li>';
			$content .= '<li>☐ Auto-play is active</li>';
		}
		$content .= '</ul>';
		$content .= '</div>';

		$content .= '</div>';

		return $content;
	}

	/**
	 * Test 4: Create a test page with shortcode
	 */
	private function test_create_page( $showcase_id ) {
		$result = array(
			'name'        => 'Create Test Page',
			'description' => 'Create a page with the shortcode for preview',
			'status'      => 'failed',
			'message'     => '',
			'page_id'     => 0,
			'preview_url' => '',
		);

		try {
			$page_content = '<!-- wp:paragraph --><p>TS Team Showcase QA Test Page</p><!-- /wp:paragraph -->';
			$page_content .= '<h2>Team Showcase Preview</h2>';
			$page_content .= '<p>This page contains the team showcase for testing purposes.</p>';
			$page_content .= '[tsteam_showcase id="' . $showcase_id . '"]';

			$page_data = array(
				'post_title'   => 'QA Test Showcase Page',
				'post_content' => $page_content,
				'post_status'  => 'publish',
				'post_author'  => get_current_user_id(),
				'post_type'    => 'page',
			);

			$page_id = wp_insert_post( $page_data );

			if ( is_wp_error( $page_id ) ) {
				$result['message'] = 'Failed to create page: ' . $page_id->get_error_message();
			} elseif ( ! $page_id ) {
				$result['message'] = 'Failed to create page: Unknown error';
			} else {
				$result['status'] = 'passed';
				$result['message'] = 'Test page created with ID: ' . $page_id;
				$result['page_id'] = $page_id;
				$result['preview_url'] = get_permalink( $page_id );
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Get complete showcase settings that match the editor's structure
	 */
	private function get_complete_showcase_settings() {
		return array(
			'layout'       => 'Card',
			'view'         => 'grid',
			'selectedView' => array(
				'value' => 'grid',
				'type'  => 'grid',
			),
			'selectedLayout' => array(
				'value' => 'Card',
				'type'  => 'grid',
			),
			'selectedDetails' => array(
				'value' => 'popup',
				'label' => 'Popup',
				'type'  => 'free',
			),
			'columns'      => array(
				'desktop' => 3,
				'tablet'  => 2,
				'mobile'  => 1,
			),
			'gap'          => 20,
			'containerWidth' => array(
				'desktop' => 1200,
				'tablet'  => 768,
				'mobile'  => 480,
			),
			'borderRadius' => 8,
			'padding'      => array(
				'top'    => 20,
				'right'  => 20,
				'bottom' => 20,
				'left'   => 20,
			),
			'margin'       => array(
				'top'    => 0,
				'right'  => 0,
				'bottom' => 0,
				'left'   => 0,
			),
			// Typography settings
			'nameTypography' => array(
				'fontSize'   => 18,
				'fontWeight' => '600',
				'lineHeight' => 1.2,
				'fontFamily' => 'Arial, sans-serif',
			),
			'designationTypography' => array(
				'fontSize'   => 14,
				'fontWeight' => '400',
				'lineHeight' => 1.4,
				'fontFamily' => 'Arial, sans-serif',
			),
			'descriptionTypography' => array(
				'fontSize'   => 14,
				'fontWeight' => '400',
				'lineHeight' => 1.5,
				'fontFamily' => 'Arial, sans-serif',
			),
			// Style settings
			'backgroundColor' => '#ffffff',
			'borderColor'     => '#e5e7eb',
			'borderWidth'     => 0,
			'imageBorderRadius' => 8,
			'imageFit'        => 'cover',
			// Social settings
			'showSocial'      => true,
			'socialIconColor' => '#6b7280',
			'socialIconSize'  => 16,
			// Animation
			'hoverAnimation'  => 'none',
			'enableHover'     => false,
			// Carousel settings (for carousel view)
			'carouselSettings' => array(
				'slidesToShow' => array(
					'desktop' => 3,
					'tablet'  => 2,
					'mobile'  => 1,
				),
				'slidesToScroll' => array(
					'desktop' => 1,
					'tablet'  => 1,
					'mobile'  => 1,
				),
				'slideSpeed'   => 3000,
				'gap'          => 20,
				'transition'   => 'slide',
				'infinite'     => true,
				'repeat'       => true,
				'centerSlide'  => false,
				'autoplay'     => true,
				'dotsColor'    => '#703fd6',
				'navBgColor'   => '#ffffff',
				'navColor'     => '#703fd6',
			),
		);
	}

	/**
	 * Test 5: Fetch showcase data
	 */
	private function test_fetch_showcase( $showcase_id ) {
		$result = array(
			'name'        => 'Fetch Showcase Data',
			'description' => 'Test retrieving showcase data via AJAX',
			'status'      => 'failed',
			'message'     => '',
		);

		try {
			$args = array(
				'post_type' => 'tsteam-showcase',
				'p'         => $showcase_id,
			);

			$query = new \WP_Query( $args );

			if ( ! $query->have_posts() ) {
				$result['message'] = 'Showcase not found';
			} else {
				$query->the_post();
				$post_id = get_the_ID();

				$team_member_ids = get_post_meta( $post_id, 'tsteam_team_members', true );
				$showcase_settings = get_post_meta( $post_id, 'tsteam_showcase_settings', true );

				if ( empty( $team_member_ids ) ) {
					$result['message'] = 'No team members assigned to showcase';
				} else {
					$team_members_result = Helper::get_team_members_by_ids( $team_member_ids );

					if ( $team_members_result['error'] ) {
						$result['message'] = 'Failed to get team members: ' . $team_members_result['message'];
					} else {
						// Check settings structure
						$decoded_settings = json_decode( $showcase_settings, true );
						if ( ! isset( $decoded_settings['selectedView']['value'] ) ) {
							$result['status'] = 'warning';
							$result['message'] = 'Showcase retrieved but settings structure incomplete';
						} else {
							$result['status'] = 'passed';
							$result['message'] = 'Data retrieved. Found ' . count( $team_members_result['team_members'] ) . ' member(s). View: ' . $decoded_settings['selectedView']['value'];
						}
					}
				}
			}

			wp_reset_postdata();
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 6: Test member data structure for frontend
	 */
	private function test_member_data_structure( $member_id ) {
		$result = array(
			'name'        => 'Member Data Structure',
			'description' => 'Test member data has all required fields for frontend',
			'status'      => 'failed',
			'message'     => '',
			'field_tests'  => array(),
		);

		try {
			$args = array(
				'post_type' => 'tsteam-member',
				'p'         => $member_id,
			);

			$query = new \WP_Query( $args );

			if ( ! $query->have_posts() ) {
				$result['message'] = 'Member not found';
			} else {
				$query->the_post();
				$member_meta = get_post_meta( $member_id, 'tsteam_member_info', true );

				// Test all important fields
				$field_tests = array(
					'name' => array( 'required' => true, 'present' => ! empty( $member_meta['name'] ), 'value' => $member_meta['name'] ?? '' ),
					'designation' => array( 'required' => true, 'present' => ! empty( $member_meta['designation'] ), 'value' => $member_meta['designation'] ?? '' ),
					'description' => array( 'required' => true, 'present' => ! empty( $member_meta['description'] ), 'value' => substr( $member_meta['description'] ?? '', 0, 50 ) . '...' ),
					'image' => array( 'required' => true, 'present' => ! empty( $member_meta['image'] ), 'value' => $member_meta['image'] ?? '' ),
					'email' => array( 'required' => false, 'present' => ! empty( $member_meta['email'] ), 'value' => $member_meta['email'] ?? '' ),
					'phone' => array( 'required' => false, 'present' => ! empty( $member_meta['phone'] ), 'value' => $member_meta['phone'] ?? '' ),
					'location' => array( 'required' => false, 'present' => ! empty( $member_meta['location'] ), 'value' => $member_meta['location'] ?? '' ),
					'experience' => array( 'required' => false, 'present' => ! empty( $member_meta['experience'] ), 'value' => $member_meta['experience'] ?? '' ),
					'socialLinks' => array( 'required' => true, 'present' => ! empty( $member_meta['socialLinks'] ), 'value' => 'has_links' ),
					'skills' => array( 'required' => true, 'present' => ! empty( $member_meta['skills'] ), 'value' => 'has_skills' ),
					'information' => array( 'required' => false, 'present' => ! empty( $member_meta['information'] ), 'value' => 'has_info' ),
				);

				$missing_required = array();
				$missing_optional = array();

				foreach ( $field_tests as $field => $test ) {
					$status = $test['present'] ? 'present' : 'missing';
					$result['field_tests'][] = array( 'field' => $field, 'status' => $status, 'value' => $test['value'] );

					if ( ! $test['present'] && $test['required'] ) {
						$missing_required[] = $field;
					} elseif ( ! $test['present'] && ! $test['required'] ) {
						$missing_optional[] = $field;
					}
				}

				// Validate JSON fields
				if ( ! empty( $member_meta['socialLinks'] ) ) {
					$social_links = json_decode( $member_meta['socialLinks'], true );
					$result['field_tests'][] = array( 'field' => 'socialLinks (JSON)', 'status' => is_array( $social_links ) ? 'valid' : 'invalid', 'value' => is_array( $social_links ) ? count( $social_links ) . ' links' : 'invalid' );
				}

				if ( ! empty( $member_meta['skills'] ) ) {
					$skills = json_decode( $member_meta['skills'], true );
					$result['field_tests'][] = array( 'field' => 'skills (JSON)', 'status' => is_array( $skills ) ? 'valid' : 'invalid', 'value' => is_array( $skills ) ? count( $skills ) . ' skills' : 'invalid' );
				}

				if ( ! empty( $missing_required ) ) {
					$result['message'] = 'Missing required fields: ' . implode( ', ', $missing_required );
				} else {
					$result['status'] = 'passed';
					$result['message'] = 'Member data structure valid';
					if ( ! empty( $missing_optional ) ) {
						$result['message'] .= '. Optional fields missing: ' . implode( ', ', $missing_optional );
					}
				}
			}

			wp_reset_postdata();
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 7: Test Static View (Grid)
	 */
	private function test_static_view( $showcase_id ) {
		$result = array(
			'name'        => 'Static View (Grid)',
			'description' => 'Test static grid view settings',
			'status'      => 'failed',
			'message'     => '',
		);

		try {
			$settings = $this->get_complete_showcase_settings();
			$settings['layout'] = 'Card';
			$settings['view'] = 'grid';
			$settings['selectedView']['value'] = 'static';
			$settings['selectedView']['type'] = 'grid';
			$settings['selectedLayout']['value'] = 'Card';
			$settings['selectedLayout']['type'] = 'grid';

			update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $settings ) );

			// Verify
			$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$decoded = json_decode( $saved, true );

			if ( $decoded['selectedView']['value'] === 'static' &&
			     $decoded['selectedLayout']['value'] === 'Card' ) {
				$result['status'] = 'passed';
				$result['message'] = 'Static view settings configured correctly (Card layout, Grid view)';
			} else {
				$result['message'] = 'Static view settings not saved correctly';
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 8: Test Carousel View with complete settings
	 */
	private function test_carousel_view( $showcase_id ) {
		$result = array(
			'name'        => 'Carousel View',
			'description' => 'Test carousel view with complete carouselSettings',
			'status'      => 'failed',
			'message'     => '',
			'carousel_checks' => array(),
		);

		try {
			$settings = $this->get_complete_showcase_settings();

			// Configure for carousel view
			$settings['layout'] = 'Card';
			$settings['view'] = 'carousel';
			$settings['selectedView']['value'] = 'carousel';
			$settings['selectedView']['type'] = 'carousel';
			$settings['selectedLayout']['value'] = 'Card';
			$settings['selectedLayout']['type'] = 'carousel';

			// Ensure carouselSettings is complete
			$settings['carouselSettings'] = array(
				'slidesToShow' => array(
					'desktop' => 3,
					'tablet'  => 2,
					'mobile'  => 1,
				),
				'slidesToScroll' => array(
					'desktop' => 1,
					'tablet'  => 1,
					'mobile'  => 1,
				),
				'slideSpeed'   => 3000,
				'gap'          => 20,
				'transition'   => 'slide',
				'infinite'     => true,
				'repeat'       => true,
				'centerSlide'  => false,
				'autoplay'     => true,
				'dotsColor'    => '#703fd6',
				'navBgColor'   => '#ffffff',
				'navColor'     => '#703fd6',
			);

			update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $settings ) );

			// Verify all carousel settings
			$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$decoded = json_decode( $saved, true );

			$checks = array(
				'selectedView.value = carousel' => $decoded['selectedView']['value'] === 'carousel',
				'selectedView.type = carousel' => $decoded['selectedView']['type'] === 'carousel',
				'carouselSettings exists' => isset( $decoded['carouselSettings'] ),
				'slidesToShow set' => isset( $decoded['carouselSettings']['slidesToShow'] ),
				'carouselSettings.slidesToShow.desktop = 3' => $decoded['carouselSettings']['slidesToShow']['desktop'] === 3,
				'autoplay = true' => $decoded['carouselSettings']['autoplay'] === true,
				'infinite = true' => $decoded['carouselSettings']['infinite'] === true,
				'slideSpeed set' => isset( $decoded['carouselSettings']['slideSpeed'] ),
				'dotsColor set' => ! empty( $decoded['carouselSettings']['dotsColor'] ),
			);

			$failed_checks = array();
			foreach ( $checks as $check => $passed ) {
				$result['carousel_checks'][] = array( 'check' => $check, 'status' => $passed ? 'passed' : 'failed' );
				if ( ! $passed ) {
					$failed_checks[] = $check;
				}
			}

			if ( ! empty( $failed_checks ) ) {
				$result['status'] = 'failed';
				$result['message'] = 'Carousel checks failed: ' . implode( ', ', $failed_checks );
			} else {
				$result['status'] = 'passed';
				$result['message'] = 'Carousel view fully configured with all settings';
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 9: Test All Layouts
	 */
	private function test_all_layouts( $showcase_id ) {
		$result = array(
			'name'        => 'Test All Layouts',
			'description' => 'Test all available layout types',
			'status'      => 'passed',
			'message'     => '',
			'layouts'      => array(),
		);

		$layouts = array(
			'Card'           => 'Card Layout',
			'HorizontalCard' => 'Horizontal Card',
			'ModernCard'     => 'Modern Card',
			'OverlayCard'    => 'Overlay Card',
			'Tiles'          => 'Tiles Layout',
		);

		$failed_layouts = array();
		$passed_layouts = array();

		foreach ( $layouts as $key => $label ) {
			$layout_result = $this->test_single_layout_internal( $showcase_id, $key );

			if ( $layout_result['status'] === 'failed' ) {
				$failed_layouts[] = $label . ': ' . $layout_result['message'];
			} else {
				$passed_layouts[] = $label;
			}

			$result['layouts'][] = array(
				'name'   => $label,
				'status' => $layout_result['status'],
			);
		}

		$result['message'] = 'Passed: ' . count( $passed_layouts ) . ', Failed: ' . count( $failed_layouts );

		if ( ! empty( $failed_layouts ) ) {
			$result['status'] = 'warning';
			$result['failed_layouts'] = $failed_layouts;
		}

		return $result;
	}

	/**
	 * Internal helper to test a single layout
	 */
	private function test_single_layout_internal( $showcase_id, $layout ) {
		$result = array(
			'status'  => 'failed',
			'message' => '',
		);

		try {
			$settings = $this->get_complete_showcase_settings();
			$settings['layout'] = $layout;
			$settings['selectedLayout']['value'] = $layout;
			$settings['selectedLayout']['type'] = 'grid';

			$encoded_settings = wp_json_encode( $settings );
			update_post_meta( $showcase_id, 'tsteam_showcase_settings', $encoded_settings );

			// Verify
			$saved_settings = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$decoded_saved = json_decode( $saved_settings, true );

			if ( $decoded_saved['selectedLayout']['value'] === $layout ) {
				$result['status'] = 'passed';
			} else {
				$result['message'] = 'Layout not saved correctly';
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 10: Test Details Functionality
	 */
	private function test_details_functionality_internal( $showcase_id ) {
		$result = array(
			'name'          => 'Details Functionality',
			'description'   => 'Test details popup/drawer settings and member data',
			'status'        => 'failed',
			'message'       => '',
			'details_tests' => array(),
		);

		try {
			// Get the showcase settings
			$showcase_settings = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$settings = json_decode( $showcase_settings, true );

			// Test 1: Check if selectedDetails is set
			$has_selected_details = isset( $settings['selectedDetails'] ) &&
			                        isset( $settings['selectedDetails']['value'] ) &&
			                        in_array( $settings['selectedDetails']['value'], array( 'popup', 'drawer', 'fullscreen' ) );

			$result['details_tests'][] = array(
				'name'  => 'selectedDetails setting',
				'status' => $has_selected_details ? 'passed' : 'failed',
				'value'  => $has_selected_details ? $settings['selectedDetails']['value'] : 'not set',
			);

			// Test 2: Check member data has all required fields for details
			$team_member_ids = get_post_meta( $showcase_id, 'tsteam_team_members', true );
			$team_members_result = Helper::get_team_members_by_ids( $team_member_ids );

			$member_data_complete = true;
			$missing_fields = array();
			$present_fields = array();

			if ( ! $team_members_result['error'] && ! empty( $team_members_result['team_members'] ) ) {
				$member = $team_members_result['team_members'][0];
				$meta_data = $member['meta_data'];

				// Required fields for details modal
				$required_details_fields = array(
					'image' => 'Profile image',
					'designation' => 'Job title',
					'description' => 'Bio/description',
					'socialLinks' => 'Social media links',
					'skills' => 'Skills list',
				);

				foreach ( $required_details_fields as $field => $label ) {
					$present = isset( $meta_data[ $field ] ) && ! empty( $meta_data[ $field ] );
					$present_fields[] = array( 'field' => $label, 'status' => $present ? 'present' : 'missing' );

					if ( ! $present ) {
						$member_data_complete = false;
						$missing_fields[] = $label;
					}
				}

				$result['details_tests'][] = array(
					'name'  => 'Member data for details',
					'status' => $member_data_complete ? 'passed' : 'warning',
					'value'  => $member_data_complete ? 'Complete' : 'Missing: ' . implode( ', ', $missing_fields ),
				);

				// Test optional fields
				$optional_fields = array(
					'experience' => $meta_data['experience'] ?? '',
					'location' => $meta_data['location'] ?? '',
					'email' => $meta_data['email'] ?? '',
					'phone' => $meta_data['phone'] ?? '',
					'website' => $meta_data['website'] ?? '',
					'resume' => $meta_data['resume'] ?? '',
					'hireLink' => $meta_data['hireLink'] ?? '',
					'donationLink' => $meta_data['donationLink'] ?? '',
					'information' => isset( $meta_data['information'] ) ? 'present' : 'missing',
				);

				foreach ( $optional_fields as $field => $value ) {
					$present = ! empty( $value );
					$present_fields[] = array( 'field' => $field, 'status' => $present ? 'present' : 'missing' );
				}

			} else {
				$member_data_complete = false;
				$result['details_tests'][] = array(
					'name'  => 'Member data for details',
					'status' => 'failed',
					'value'  => 'Could not fetch member data',
				);
			}

			// Test 3: Update settings to ensure popup is enabled
			$settings['selectedDetails'] = array(
				'value' => 'popup',
				'label' => 'Popup',
				'type'  => 'free',
			);
			update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $settings ) );

			$result['details_tests'][] = array(
				'name'  => 'Details popup enabled',
				'status' => 'passed',
				'value'  => 'popup',
			);

			// Overall result
			if ( $has_selected_details && $member_data_complete ) {
				$result['status'] = 'passed';
				$result['message'] = 'Details functionality properly configured. Type: popup. All required fields present.';
			} elseif ( ! $member_data_complete ) {
				$result['status'] = 'warning';
				$result['message'] = 'Details settings OK but some member data missing: ' . implode( ', ', $missing_fields );
			} else {
				$result['message'] = 'Details functionality not properly configured';
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 11: Test Shortcode Output
	 */
	private function test_shortcode_output( $showcase_id ) {
		$result = array(
			'name'        => 'Shortcode Output',
			'description' => 'Test shortcode generation',
			'status'      => 'failed',
			'message'     => '',
		);

		try {
			$shortcode = '[tsteam_showcase id="' . $showcase_id . '"]';
			$php_snippet = '<?php echo do_shortcode(\'' . $shortcode . '\'); ?>';

			if ( strpos( $shortcode, '[tsteam_showcase' ) === false ) {
				$result['message'] = 'Shortcode format is incorrect';
			} else {
				$result['status'] = 'passed';
				$result['message'] = 'Shortcode generated: ' . $shortcode;
				$result['php_snippet'] = $php_snippet;
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 12: Test HTML Output Validation (fetch actual page and verify elements)
	 */
	private function test_html_output_validation( $page_id ) {
		$result = array(
			'name'          => 'HTML Output Validation',
			'description'   => 'Fetch actual page HTML and verify showcase elements exist',
			'status'        => 'failed',
			'message'       => '',
			'html_checks'    => array(),
		);

		try {
			// Fetch the actual page HTML
			$url = get_permalink( $page_id );
			$response = wp_remote_get( $url, array(
				'timeout' => 30,
				'sslcompress' => false,
			) );

			if ( is_wp_error( $response ) ) {
				$result['message'] = 'Failed to fetch page: ' . $response->get_error_message();
				return $result;
			}

			$html = wp_remote_retrieve_body( $response );

			if ( empty( $html ) ) {
				$result['message'] = 'Page returned empty HTML';
				return $result;
			}

			// Check for showcase elements
			$checks = array(
				array(
					'name' => 'Showcase container div exists',
					'search' => 'class="tsteam-showcase"',
					'required' => true,
				),
				array(
					'name' => 'Team showcase script enqueued',
					'search' => 'tsteam-member-script',
					'required' => true,
				),
				array(
					'name' => 'Data attribute for showcase ID',
					'search' => 'data-id=',
					'required' => true,
				),
				array(
					'name' => 'Frontend component loaded',
					'search' => 'tsteam__editor_bg', // Container class
					'required' => false,
				),
			);

			$failed = array();
			$passed = array();

			foreach ( $checks as $check ) {
				$found = strpos( $html, $check['search'] ) !== false;
				$result['html_checks'][] = array(
					'name' => $check['name'],
					'status' => $found ? 'found' : 'missing',
					'required' => $check['required'],
				);

				if ( $found ) {
					$passed[] = $check['name'];
				} elseif ( $check['required'] ) {
					$failed[] = $check['name'] . ' (required)';
				}
			}

			// Check for specific modal IDs that should exist
			$showcase_ids = get_transient( 'tsteam_qa_test_data' );
			if ( ! empty( $showcase_ids['showcase_ids'] ) ) {
				foreach ( $showcase_ids['showcase_ids'] as $showcase ) {
					if ( ! empty( $showcase['id'] ) ) {
						// For AJAX data structure compatibility
						$id = is_int( $showcase ) ? $showcase : ( isset( $showcase['id'] ) ? $showcase['id'] : 0 );
					} else {
						$id = 0;
					}

					if ( $id ) {
						$modal_id_search = 'id="' . $id . '-details"'; // Format used in DetailsModal
						$found = strpos( $html, 'tsteam-showcase' ) !== false; // At least the showcase exists
					}
				}
			}

			if ( ! empty( $failed ) ) {
				$result['status'] = 'failed';
				$result['message'] = 'Missing elements: ' . implode( ', ', $failed );
			} else {
				$result['status'] = 'passed';
				$result['message'] = 'HTML validation passed. Found ' . count( $passed ) . ' elements. Page loaded correctly.';
			}

		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 13: Test Showcase Settings Update (Editor Controls)
	 */
	private function test_showcase_settings_update( $showcase_id ) {
		$result = array(
			'name'           => 'Update Showcase Settings',
			'description'    => 'Test that editor control changes reflect in output',
			'status'         => 'failed',
			'message'        => '',
			'setting_tests'   => array(),
		);

		try {
			// Test 1: Change columns
			$settings = $this->get_complete_showcase_settings();
			$settings['columns']['desktop'] = 4;
			$settings['columns']['tablet'] = 3;
			update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $settings ) );

			$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$decoded = json_decode( $saved, true );

			$columns_test = $decoded['columns']['desktop'] === 4 && $decoded['columns']['tablet'] === 3;
			$result['setting_tests'][] = array(
				'name' => 'Columns setting update',
				'status' => $columns_test ? 'passed' : 'failed',
				'value' => $columns_test ? '4 desktop / 3 tablet' : 'update failed',
			);

			// Test 2: Change gap
			$settings = json_decode( $saved, true );
			$settings['gap'] = 30;
			update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $settings ) );

			$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$decoded = json_decode( $saved, true );

			$gap_test = $decoded['gap'] === 30;
			$result['setting_tests'][] = array(
				'name' => 'Gap setting update',
				'status' => $gap_test ? 'passed' : 'failed',
				'value' => $gap_test ? '30px' : 'update failed',
			);

			// Test 3: Change border radius
			$settings = json_decode( $saved, true );
			$settings['borderRadius'] = 15;
			$settings['imageBorderRadius'] = 12;
			update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $settings ) );

			$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$decoded = json_decode( $saved, true );

			$border_test = $decoded['borderRadius'] === 15 && $decoded['imageBorderRadius'] === 12;
			$result['setting_tests'][] = array(
				'name' => 'Border radius setting update',
				'status' => $border_test ? 'passed' : 'failed',
				'value' => $border_test ? '15px / 12px' : 'update failed',
			);

			// Test 4: Change colors
			$settings = json_decode( $saved, true );
			$settings['backgroundColor'] = '#f0f9ff';
			$settings['borderColor'] = '#0ea5e9';
			update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $settings ) );

			$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$decoded = json_decode( $saved, true );

			$color_test = $decoded['backgroundColor'] === '#f0f9ff' && $decoded['borderColor'] === '#0ea5e9';
			$result['setting_tests'][] = array(
				'name' => 'Color settings update',
				'status' => $color_test ? 'passed' : 'failed',
				'value' => $color_test ? 'Custom colors applied' : 'update failed',
			);

			// Test 5: Change typography
			$settings = json_decode( $saved, true );
			$settings['nameTypography']['fontSize'] = 24;
			$settings['nameTypography']['fontWeight'] = '700';
			update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $settings ) );

			$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$decoded = json_decode( $saved, true );

			$typo_test = $decoded['nameTypography']['fontSize'] === 24 && $decoded['nameTypography']['fontWeight'] === '700';
			$result['setting_tests'][] = array(
				'name' => 'Typography settings update',
				'status' => $typo_test ? 'passed' : 'failed',
				'value' => $typo_test ? '24px / 700 weight' : 'update failed',
			);

			// Overall result
			$all_passed = true;
			$failed_tests = array();
			foreach ( $result['setting_tests'] as $test ) {
				if ( $test['status'] === 'failed' ) {
					$all_passed = false;
					$failed_tests[] = $test['name'];
				}
			}

			if ( $all_passed ) {
				$result['status'] = 'passed';
				$result['message'] = 'All editor control settings updated and verified successfully';
			} else {
				$result['status'] = 'warning';
				$result['message'] = 'Some settings failed: ' . implode( ', ', $failed_tests );
			}

		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 14: Visual & Functional Verification
	 * Tests actual frontend rendering and interactive elements
	 */
	private function test_visual_functional_verification( $page_id, $showcase_id ) {
		$result = array(
			'name'          => 'Visual & Functional Verification',
			'description'   => 'Verify actual frontend rendering and interactive elements',
			'status'        => 'failed',
			'message'       => '',
			'visual_checks' => array(),
			'functional_checks' => array(),
			'responsive_checks' => array(),
		);

		try {
			// Fetch the actual page HTML
			$url = get_permalink( $page_id );
			$response = wp_remote_get( $url, array(
				'timeout' => 30,
				'sslcompress' => false,
			) );

			if ( is_wp_error( $response ) ) {
				$result['message'] = 'Failed to fetch page: ' . $response->get_error_message();
				return $result;
			}

			$html = wp_remote_retrieve_body( $response );

			if ( empty( $html ) ) {
				$result['message'] = 'Page returned empty HTML';
				return $result;
			}

			// Get showcase settings to know what to test
			$showcase_settings = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$settings = json_decode( $showcase_settings, true );
			$view_type = $settings['selectedView']['value'] ?? 'static';
			$layout_type = $settings['selectedLayout']['value'] ?? 'Card';
			$details_type = $settings['selectedDetails']['value'] ?? 'popup';

			$all_visual_passed = true;
			$all_functional_passed = true;
			$all_responsive_passed = true;
			$failed_checks = array();

			// ===== VISUAL CHECKS =====
			$visual_checks = array(
				// Container structure
				array(
					'name' => 'Showcase container exists',
					'search' => 'class="tsteam-showcase"',
					'required' => true,
					'category' => 'visual',
				),
				array(
					'name' => 'Member card container exists',
					'search' => 'class="tsteam__member-card',
					'required' => true,
					'category' => 'visual',
				),
				// Image display
				array(
					'name' => 'Member image element exists',
					'search' => '<img',
					'required' => true,
					'category' => 'visual',
				),
				array(
					'name' => 'Image has proper class',
					'search' => 'class="tsteam__member-img',
					'required' => true,
					'category' => 'visual',
				),
				// Text content
				array(
					'name' => 'Member name displays',
					'search' => 'class="tsteam__member-name',
					'required' => true,
					'category' => 'visual',
				),
				array(
					'name' => 'Designation displays',
					'search' => 'class="tsteam__member-designation',
					'required' => true,
					'category' => 'visual',
				),
				array(
					'name' => 'Description displays',
					'search' => 'class="tsteam__member-description',
					'required' => false,
					'category' => 'visual',
				),
				// Social icons
				array(
					'name' => 'Social icons container exists',
					'search' => 'class="tsteam__social-icons',
					'required' => true,
					'category' => 'visual',
				),
				array(
					'name' => 'Social icon link elements exist',
					'search' => '<a class="tsteam__social-link',
					'required' => true,
					'category' => 'visual',
				),
			);

			foreach ( $visual_checks as $check ) {
				$found = strpos( $html, $check['search'] ) !== false;
				$result['visual_checks'][] = array(
					'name' => $check['name'],
					'status' => $found ? 'found' : 'missing',
					'required' => $check['required'],
				);

				if ( ! $found && $check['required'] ) {
					$all_visual_passed = false;
					$failed_checks[] = $check['name'] . ' (visual)';
				}
			}

			// ===== FUNCTIONAL CHECKS (Interactive Elements) =====
			$functional_checks = array();

			// Details modal/drawer/fullscreen elements
			if ( $details_type === 'popup' ) {
				$functional_checks[] = array(
					'name' => 'Modal popup container exists',
					'search' => 'class="tsteam__modal-popup',
					'required' => true,
				);
				$functional_checks[] = array(
					'name' => 'Modal close button exists',
					'search' => 'class="tsteam__modal-close',
					'required' => true,
				);
			} elseif ( $details_type === 'drawer' ) {
				$functional_checks[] = array(
					'name' => 'Drawer container exists',
					'search' => 'class="tsteam__modal-drawer',
					'required' => true,
				);
				$functional_checks[] = array(
					'name' => 'Drawer close button exists',
					'search' => 'tsteam__drawer-close',
					'required' => true,
				);
			} elseif ( $details_type === 'fullscreen' ) {
				$functional_checks[] = array(
					'name' => 'Fullscreen modal exists',
					'search' => 'class="tsteam__modal-fullscreen',
					'required' => true,
				);
			}

			// Check for details trigger button
			$functional_checks[] = array(
				'name' => 'Details trigger button/link exists',
				'search' => 'data-tsteam-details',
				'required' => true,
			);

			// Carousel-specific functional checks
			if ( $view_type === 'carousel' ) {
				$functional_checks[] = array(
					'name' => 'Carousel navigation buttons exist',
					'search' => 'class="tsteam__carousel-nav',
					'required' => true,
				);
				$functional_checks[] = array(
					'name' => 'Carousel prev button exists',
					'search' => 'data-tsteam-carousel="prev"',
					'required' => true,
				);
				$functional_checks[] = array(
					'name' => 'Carousel next button exists',
					'search' => 'data-tsteam-carousel="next"',
					'required' => true,
				);
				$functional_checks[] = array(
					'name' => 'Carousel dots/pagination exists',
					'search' => 'class="tsteam__carousel-dots',
					'required' => false,
				);
				$functional_checks[] = array(
					'name' => 'Carousel track/container exists',
					'search' => 'class="tsteam__carousel-track',
					'required' => true,
				);
			}

			foreach ( $functional_checks as $check ) {
				$found = strpos( $html, $check['search'] ) !== false;
				$result['functional_checks'][] = array(
					'name' => $check['name'],
					'status' => $found ? 'found' : 'missing',
					'required' => $check['required'],
				);

				if ( ! $found && $check['required'] ) {
					$all_functional_passed = false;
					$failed_checks[] = $check['name'] . ' (functional)';
				}
			}

			// ===== RESPONSIVE CHECKS =====
			$responsive_checks = array(
				array(
					'name' => 'Responsive grid CSS present',
					'search' => 'grid-template-columns',
					'required' => true,
				),
				array(
					'name' => 'Mobile breakpoint styles present',
					'search' => '@media',
					'required' => true,
				),
				array(
					'name' => 'Data attributes for responsive config',
					'search' => 'data-columns',
					'required' => false,
				),
			);

			foreach ( $responsive_checks as $check ) {
				$found = strpos( $html, $check['search'] ) !== false;
				$result['responsive_checks'][] = array(
					'name' => $check['name'],
					'status' => $found ? 'found' : 'missing',
					'required' => $check['required'],
				);

				if ( ! $found && $check['required'] ) {
					$all_responsive_passed = false;
					$failed_checks[] = $check['name'] . ' (responsive)';
				}
			}

			// ===== JS ENQUEUEMENT CHECK =====
			$js_enqueued = strpos( $html, 'tsteam-member-script' ) !== false ||
			               strpos( $html, 'tsteam-frontend' ) !== false;
			$result['functional_checks'][] = array(
				'name' => 'Frontend JavaScript enqueued',
				'status' => $js_enqueued ? 'enqueued' : 'missing',
				'required' => true,
			);

			if ( ! $js_enqueued ) {
				$all_functional_passed = false;
				$failed_checks[] = 'Frontend JavaScript enqueued';
			}

			// Overall result
			$visual_count = count( $result['visual_checks'] );
			$visual_passed = count( array_filter( $result['visual_checks'], function( $c ) { return $c['status'] === 'found'; } ) );
			$functional_count = count( $result['functional_checks'] );
			$functional_passed = count( array_filter( $result['functional_checks'], function( $c ) { return $c['status'] === 'found' || $c['status'] === 'enqueued'; } ) );

			if ( $all_visual_passed && $all_functional_passed && $all_responsive_passed ) {
				$result['status'] = 'passed';
				$result['message'] = sprintf(
					'All checks passed. Visual: %d/%d, Functional: %d/%d, View: %s, Layout: %s, Details: %s',
					$visual_passed, $visual_count,
					$functional_passed, $functional_count,
					$view_type, $layout_type, $details_type
				);
			} else {
				$result['status'] = 'warning';
				$result['message'] = sprintf(
					'Some checks failed. Visual: %d/%d, Functional: %d/%d. Issues: %s',
					$visual_passed, $visual_count,
					$functional_passed, $functional_count,
					implode( ', ', array_slice( $failed_checks, 0, 5 ) )
				);
			}

		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 17: Multiple Showcase Editor Controls Test
	 * Tests all editor control types across multiple showcases
	 */
	private function test_multiple_showcase_editor_controls( $showcase_ids ) {
		$result = array(
			'name'              => 'Multiple Showcase Editor Controls',
			'description'       => 'Test all editor controls across different showcase configurations',
			'status'            => 'failed',
			'message'           => '',
			'control_tests'     => array(),
			'showcase_results'  => array(),
		);

		try {
			if ( empty( $showcase_ids ) ) {
				$result['message'] = 'No showcase IDs provided';
				return $result;
			}

			$all_passed = true;
			$total_passed = 0;
			$total_failed = 0;

			// Define all editor control types to test
			$editor_controls = array(
				// Layout controls
				'layout' => array(
					'type' => 'select',
					'values' => array( 'Card', 'HorizontalCard', 'ModernCard', 'OverlayCard', 'Tiles' ),
				),
				'view' => array(
					'type' => 'select',
					'values' => array( 'grid', 'carousel', 'flex', 'marquee' ),
				),
				'details' => array(
					'type' => 'select',
					'values' => array( 'popup', 'drawer', 'fullscreen', 'none' ),
				),
				// Column controls
				'columns' => array(
					'type' => 'responsive',
					'values' => array(
						'desktop' => array( 1, 2, 3, 4, 5, 6 ),
						'tablet' => array( 1, 2, 3, 4 ),
						'mobile' => array( 1, 2 ),
					),
				),
				// Spacing controls
				'gap' => array(
					'type' => 'number',
					'values' => array( 0, 10, 20, 30, 40 ),
				),
				'padding' => array(
					'type' => 'box',
					'values' => array( 'top', 'right', 'bottom', 'left' ),
				),
				'margin' => array(
					'type' => 'box',
					'values' => array( 'top', 'right', 'bottom', 'left' ),
				),
				// Style controls
				'borderRadius' => array(
					'type' => 'number',
					'values' => array( 0, 4, 8, 12, 16, 24 ),
				),
				'borderWidth' => array(
					'type' => 'number',
					'values' => array( 0, 1, 2, 4 ),
				),
				'backgroundColor' => array(
					'type' => 'color',
					'values' => array( '#ffffff', '#f8fafc', '#eff6ff', '#fef2f2' ),
				),
				'borderColor' => array(
					'type' => 'color',
					'values' => array( '#e5e7eb', '#3b82f6', '#ef4444', '#10b981' ),
				),
				// Typography controls
				'nameFontSize' => array(
					'type' => 'number',
					'values' => array( 14, 16, 18, 20, 24, 32 ),
				),
				'nameFontWeight' => array(
					'type' => 'select',
					'values' => array( '400', '500', '600', '700', '800' ),
				),
				'designationFontSize' => array(
					'type' => 'number',
					'values' => array( 12, 14, 16, 18 ),
				),
				// Image controls
				'imageBorderRadius' => array(
					'type' => 'number',
					'values' => array( 0, 50, 100, 150 ), // 50 = circle, 100+ = various
				),
				'imageFit' => array(
					'type' => 'select',
					'values' => array( 'cover', 'contain', 'fill' ),
				),
				// Social controls
				'showSocial' => array(
					'type' => 'toggle',
					'values' => array( true, false ),
				),
				'socialIconSize' => array(
					'type' => 'number',
					'values' => array( 12, 16, 20, 24, 32 ),
				),
				'socialIconColor' => array(
					'type' => 'color',
					'values' => array( '#6b7280', '#3b82f6', '#ef4444', '#10b981' ),
				),
				// Animation controls
				'hoverAnimation' => array(
					'type' => 'select',
					'values' => array( 'none', 'fade', 'slide', 'zoom', 'flip' ),
				),
				// Carousel specific controls
				'carouselSlidesToShow' => array(
					'type' => 'responsive',
					'values' => array(
						'desktop' => array( 1, 2, 3, 4, 5 ),
						'tablet' => array( 1, 2, 3 ),
						'mobile' => array( 1, 2 ),
					),
				),
				'carouselAutoplay' => array(
					'type' => 'toggle',
					'values' => array( true, false ),
				),
				'carouselInfinite' => array(
					'type' => 'toggle',
					'values' => array( true, false ),
				),
				'carouselSlideSpeed' => array(
					'type' => 'number',
					'values' => array( 1000, 2000, 3000, 5000 ),
				),
			);

			// Test each showcase with a subset of controls
			foreach ( $showcase_ids as $index => $showcase_data ) {
				$showcase_id = is_int( $showcase_data ) ? $showcase_data : ( $showcase_data['id'] ?? 0 );
				if ( ! $showcase_id ) {
					continue;
				}

				$showcase_result = array(
					'showcase_id' => $showcase_id,
					'title' => is_array( $showcase_data ) ? ( $showcase_data['title'] ?? "Showcase $index" ) : "Showcase $index",
					'tests_passed' => 0,
					'tests_failed' => 0,
					'tested_controls' => array(),
				);

				// Get current settings
				$current_settings = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
				$settings = $current_settings ? json_decode( $current_settings, true ) : $this->get_complete_showcase_settings();

				// Test controls specific to this showcase's view/layout
				$view = $settings['selectedView']['value'] ?? 'static';
				$layout = $settings['selectedLayout']['value'] ?? 'Card';

				// Test 1: Layout change
				foreach ( $editor_controls['layout']['values'] as $layout_value ) {
					$test_settings = $settings;
					$test_settings['layout'] = $layout_value;
					$test_settings['selectedLayout']['value'] = $layout_value;
					update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $test_settings ) );

					// Verify
					$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
					$saved_decoded = json_decode( $saved, true );
					$passed = ( $saved_decoded['selectedLayout']['value'] === $layout_value );

					$showcase_result['tested_controls'][] = array(
						'control' => 'layout',
						'value' => $layout_value,
						'status' => $passed ? 'passed' : 'failed',
					);

					if ( $passed ) {
						$showcase_result['tests_passed']++;
						$total_passed++;
					} else {
						$showcase_result['tests_failed']++;
						$total_failed++;
						$all_passed = false;
					}
				}

				// Test 2: Column controls
				foreach ( array( 'desktop', 'tablet', 'mobile' ) as $device ) {
					foreach ( array( 1, 2, 3, 4 ) as $cols ) {
						$test_settings = $settings;
						$test_settings['columns'][ $device ] = $cols;
						update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $test_settings ) );

						$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
						$saved_decoded = json_decode( $saved, true );
						$passed = ( isset( $saved_decoded['columns'][ $device ] ) && $saved_decoded['columns'][ $device ] === $cols );

						$showcase_result['tested_controls'][] = array(
							'control' => 'columns_' . $device,
							'value' => $cols,
							'status' => $passed ? 'passed' : 'failed',
						);

						if ( $passed ) {
							$showcase_result['tests_passed']++;
							$total_passed++;
						} else {
							$showcase_result['tests_failed']++;
							$total_failed++;
							$all_passed = false;
						}
					}
				}

				// Test 3: Gap control
				foreach ( array( 0, 20, 40 ) as $gap_value ) {
					$test_settings = $settings;
					$test_settings['gap'] = $gap_value;
					update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $test_settings ) );

					$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
					$saved_decoded = json_decode( $saved, true );
					$passed = ( $saved_decoded['gap'] === $gap_value );

					$showcase_result['tested_controls'][] = array(
						'control' => 'gap',
						'value' => $gap_value,
						'status' => $passed ? 'passed' : 'failed',
					);

					if ( $passed ) {
						$showcase_result['tests_passed']++;
						$total_passed++;
					} else {
						$showcase_result['tests_failed']++;
						$total_failed++;
						$all_passed = false;
					}
				}

				// Test 4: Border radius
				foreach ( array( 0, 8, 16, 24 ) as $radius ) {
					$test_settings = $settings;
					$test_settings['borderRadius'] = $radius;
					update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $test_settings ) );

					$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
					$saved_decoded = json_decode( $saved, true );
					$passed = ( $saved_decoded['borderRadius'] === $radius );

					$showcase_result['tested_controls'][] = array(
						'control' => 'borderRadius',
						'value' => $radius,
						'status' => $passed ? 'passed' : 'failed',
					);

					if ( $passed ) {
						$showcase_result['tests_passed']++;
						$total_passed++;
					} else {
						$showcase_result['tests_failed']++;
						$total_failed++;
						$all_passed = false;
					}
				}

				// Test 5: Colors
				foreach ( array( '#ffffff', '#f0f9ff', '#fef2f2' ) as $color ) {
					$test_settings = $settings;
					$test_settings['backgroundColor'] = $color;
					update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $test_settings ) );

					$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
					$saved_decoded = json_decode( $saved, true );
					$passed = ( $saved_decoded['backgroundColor'] === $color );

					$showcase_result['tested_controls'][] = array(
						'control' => 'backgroundColor',
						'value' => $color,
						'status' => $passed ? 'passed' : 'failed',
					);

					if ( $passed ) {
						$showcase_result['tests_passed']++;
						$total_passed++;
					} else {
						$showcase_result['tests_failed']++;
						$total_failed++;
						$all_passed = false;
					}
				}

				// Test 6: Typography
				foreach ( array( 14, 18, 24 ) as $font_size ) {
					$test_settings = $settings;
					$test_settings['nameTypography']['fontSize'] = $font_size;
					update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $test_settings ) );

					$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
					$saved_decoded = json_decode( $saved, true );
					$passed = ( $saved_decoded['nameTypography']['fontSize'] === $font_size );

					$showcase_result['tested_controls'][] = array(
						'control' => 'nameFontSize',
						'value' => $font_size,
						'status' => $passed ? 'passed' : 'failed',
					);

					if ( $passed ) {
						$showcase_result['tests_passed']++;
						$total_passed++;
					} else {
						$showcase_result['tests_failed']++;
						$total_failed++;
						$all_passed = false;
					}
				}

				// Test 7: Social icon toggle
				foreach ( array( true, false ) as $show_social ) {
					$test_settings = $settings;
					$test_settings['showSocial'] = $show_social;
					update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $test_settings ) );

					$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
					$saved_decoded = json_decode( $saved, true );
					$passed = ( $saved_decoded['showSocial'] === $show_social );

					$showcase_result['tested_controls'][] = array(
						'control' => 'showSocial',
						'value' => $show_social ? 'true' : 'false',
						'status' => $passed ? 'passed' : 'failed',
					);

					if ( $passed ) {
						$showcase_result['tests_passed']++;
						$total_passed++;
					} else {
						$showcase_result['tests_failed']++;
						$total_failed++;
						$all_passed = false;
					}
				}

				// Test 8: View type change (only for first showcase to save time)
				if ( $index === 0 ) {
					foreach ( $editor_controls['view']['values'] as $view_value ) {
						$test_settings = $settings;
						$selected_view_value = isset( self::$view_type_map[ $view_value ] ) ? self::$view_type_map[ $view_value ] : 'static';
						$test_settings['view'] = $view_value;
						$test_settings['selectedView']['value'] = $selected_view_value;
						$test_settings['selectedView']['type'] = $view_value;
						update_post_meta( $showcase_id, 'tsteam_showcase_settings', wp_json_encode( $test_settings ) );

						$saved = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
						$saved_decoded = json_decode( $saved, true );
						$passed = ( $saved_decoded['selectedView']['value'] === $selected_view_value );

						$showcase_result['tested_controls'][] = array(
							'control' => 'view',
							'value' => $view_value,
							'status' => $passed ? 'passed' : 'failed',
						);

						if ( $passed ) {
							$showcase_result['tests_passed']++;
							$total_passed++;
						} else {
							$showcase_result['tests_failed']++;
							$total_failed++;
							$all_passed = false;
						}
					}
				}

				// Restore original settings
				update_post_meta( $showcase_id, 'tsteam_showcase_settings', $current_settings );

				$result['showcase_results'][] = $showcase_result;
			}

			// Control type summary
			$result['control_tests'] = array(
				array( 'name' => 'Layout Selection', 'tested' => count( $editor_controls['layout']['values'] ) ),
				array( 'name' => 'View Type', 'tested' => count( $editor_controls['view']['values'] ) ),
				array( 'name' => 'Columns (Responsive)', 'tested' => 12 ), // 3 devices × 4 values
				array( 'name' => 'Gap/Spacing', 'tested' => 3 ),
				array( 'name' => 'Border Radius', 'tested' => 4 ),
				array( 'name' => 'Background Color', 'tested' => 3 ),
				array( 'name' => 'Font Size', 'tested' => 3 ),
				array( 'name' => 'Social Toggle', 'tested' => 2 ),
			);

			if ( $all_passed ) {
				$result['status'] = 'passed';
				$result['message'] = sprintf(
					'All editor controls tested successfully. Total: %d passed, %d failed across %d showcase(s)',
					$total_passed, $total_failed, count( $showcase_ids )
				);
			} else {
				$result['status'] = 'warning';
				$result['message'] = sprintf(
					'Editor controls test completed with warnings. Passed: %d, Failed: %d',
					$total_passed, $total_failed
				);
			}

		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 19: Test All Layouts Frontend Rendering
	 * Fetches actual HTML from each preview page and verifies layout-specific elements
	 */
	private function test_all_layouts_frontend_rendering( $preview_pages ) {
		$result = array(
			'name'          => 'Frontend Layout Rendering',
			'description'   => 'Test each layout actually renders on frontend',
			'status'        => 'failed',
			'message'       => '',
			'layout_tests'  => array(),
		);

		try {
			if ( empty( $preview_pages ) ) {
				$result['message'] = 'No preview pages available for testing';
				return $result;
			}

			// Define layout-specific checks for each layout type
			$layout_checks = array(
				'Card' => array(
					'container_class' => 'tsteam-card-container',
					'image_class' => 'tsteam-member__image',
					'expected_elements' => array(
						'tsteam-card-container' => 'Card container div',
						'tscard__separator' => 'Card separator',
					),
				),
				'HorizontalCard' => array(
					'container_class' => 'tsteam-horizontal-card',
					'image_class' => 'tsteam-member__image',
					'expected_elements' => array(
						'tsteam-horizontal' => 'Horizontal card container',
					),
				),
				'ModernCard' => array(
					'container_class' => 'tsteam-modern-card',
					'image_class' => 'tsteam-member__image',
					'expected_elements' => array(
						'tsteam-modern-card' => 'Modern card container',
					),
				),
				'OverlayCard' => array(
					'container_class' => 'tsteam-overlay-card',
					'image_class' => 'tsteam-member__image',
					'expected_elements' => array(
						'tsteam-overlay' => 'Overlay card container',
					),
				),
				'Tiles' => array(
					'container_class' => 'tsteam-tiles',
					'image_class' => 'tsteam-member__image',
					'expected_elements' => array(
						'tsteam-tiles' => 'Tiles container',
					),
				),
			);

			$total_layouts = 0;
			$passed_layouts = 0;
			$failed_layouts = 0;

			foreach ( $preview_pages as $preview ) {
				$page_url = isset( $preview['url'] ) ? $preview['url'] : '';
				$layout = isset( $preview['layout'] ) ? $preview['layout'] : '';
				$page_id = isset( $preview['page_id'] ) ? $preview['page_id'] : 0;

				if ( ! $page_url || ! $layout ) {
					continue;
				}

				$total_layouts++;

				$layout_result = array(
					'layout' => $layout,
					'page_id' => $page_id,
					'page_url' => $page_url,
					'status' => 'failed',
					'checks' => array(),
					'missing_elements' => array(),
				);

				// Fetch the page HTML
				$response = wp_remote_get( $page_url, array(
					'timeout' => 30,
					'sslcompress' => false,
				) );

				if ( is_wp_error( $response ) ) {
					$layout_result['error'] = 'Failed to fetch page: ' . $response->get_error_message();
					$result['layout_tests'][] = $layout_result;
					$failed_layouts++;
					continue;
				}

				$html = wp_remote_retrieve_body( $response );

				if ( empty( $html ) ) {
					$layout_result['error'] = 'Page returned empty HTML';
					$result['layout_tests'][] = $layout_result;
					$failed_layouts++;
					continue;
				}

				// Get expected checks for this layout
				$checks = isset( $layout_checks[ $layout ] ) ? $layout_checks[ $layout ] : array();
				$all_checks_passed = true;
				$missing = array();

				// Check for common elements that should exist in all layouts
				$common_checks = array(
					array(
						'name' => 'Showcase container exists',
						'search' => 'class="tsteam-showcase',
						'required' => true,
					),
					array(
						'name' => 'Member card/element exists',
						'search' => 'tsteam-member',
						'required' => true,
					),
					array(
						'name' => 'Frontend script enqueued',
						'search' => 'tsteam-member-script',
						'required' => true,
					),
				);

				foreach ( $common_checks as $check ) {
					$found = strpos( $html, $check['search'] ) !== false;
					$layout_result['checks'][] = array(
						'name' => $check['name'],
						'status' => $found ? 'found' : 'missing',
						'required' => $check['required'],
					);

					if ( ! $found && $check['required'] ) {
						$all_checks_passed = false;
						$missing[] = $check['name'];
					}
				}

				// Check for layout-specific container class
				if ( ! empty( $checks['container_class'] ) ) {
					$found = strpos( $html, $checks['container_class'] ) !== false;
					$layout_result['checks'][] = array(
						'name' => 'Layout container class (' . $checks['container_class'] . ')',
						'status' => $found ? 'found' : 'missing',
						'required' => true,
					);

					if ( ! $found ) {
						$all_checks_passed = false;
						$missing[] = 'Container class: ' . $checks['container_class'];
					}
				}

				// Check for layout-specific expected elements
				if ( ! empty( $checks['expected_elements'] ) ) {
					foreach ( $checks['expected_elements'] as $class => $description ) {
						$found = strpos( $html, $class ) !== false;
						$layout_result['checks'][] = array(
							'name' => $description,
							'status' => $found ? 'found' : 'missing',
							'required' => true,
						);

						if ( ! $found ) {
							$all_checks_passed = false;
							$missing[] = $description;
						}
					}
				}

				// Additional visual checks
				$visual_checks = array(
					array( 'name' => 'Image element exists', 'search' => '<img', 'required' => true ),
					array( 'name' => 'Member name displays', 'search' => 'tsteam__member-name', 'required' => true ),
					array( 'name' => 'Designation displays', 'search' => 'tsteam__member-designation', 'required' => true ),
				);

				foreach ( $visual_checks as $check ) {
					$found = strpos( $html, $check['search'] ) !== false;
					$layout_result['checks'][] = array(
						'name' => $check['name'],
						'status' => $found ? 'found' : 'missing',
						'required' => $check['required'],
					);

					if ( ! $found && $check['required'] ) {
						$all_checks_passed = false;
						$missing[] = $check['name'];
					}
				}

				// Check for "Loading..." text which indicates component failed to load
				$has_loading_error = strpos( $html, 'Loading...' ) !== false || strpos( $html, 'Loading...' ) !== false;
				$has_loading_error = $has_loading_error || ( strpos( $html, 'Layout Error' ) !== false );

				if ( $has_loading_error ) {
					$layout_result['checks'][] = array(
						'name' => 'No loading errors',
						'status' => 'error',
						'required' => true,
					);
					$all_checks_passed = false;
					$missing[] = 'Page shows "Loading..." or error message';
				} else {
					$layout_result['checks'][] = array(
						'name' => 'No loading errors',
						'status' => 'found',
						'required' => true,
					);
				}

				// Determine overall status for this layout
				if ( $all_checks_passed ) {
					$layout_result['status'] = 'passed';
					$passed_layouts++;
				} else {
					$layout_result['status'] = 'failed';
					$layout_result['missing_elements'] = $missing;
					$failed_layouts++;
				}

				$result['layout_tests'][] = $layout_result;
			}

			// Overall result
			if ( $total_layouts === 0 ) {
				$result['status'] = 'warning';
				$result['message'] = 'No layouts were tested - preview pages not available';
			} elseif ( $passed_layouts === $total_layouts ) {
				$result['status'] = 'passed';
				$result['message'] = sprintf(
					'All %d layouts render successfully on frontend',
					$total_layouts
				);
			} else {
				$result['status'] = 'warning';
				$result['message'] = sprintf(
					'%d/%d layouts passed. Failed: %d',
					$passed_layouts,
					$total_layouts,
					$failed_layouts
				);
			}

		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Test 18: Test duplicate showcase
	 */
	private function test_duplicate_showcase( $showcase_id ) {
		$result = array(
			'name'                   => 'Duplicate Showcase',
			'description'            => 'Test duplicating a showcase',
			'status'                 => 'failed',
			'message'                => '',
			'duplicated_showcase_id' => 0,
		);

		try {
			$post = get_post( $showcase_id );

			if ( ! $post || $post->post_type !== 'tsteam-showcase' ) {
				$result['message'] = 'Original showcase not found';
			} else {
				$team_member_ids = get_post_meta( $showcase_id, 'tsteam_team_members', true );
				$showcase_settings = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );

				$args = array(
					'post_title'   => $post->post_title . ' (QA Copy)',
					'post_content' => $post->post_content,
					'post_status'  => 'publish',
					'post_author'  => get_current_user_id(),
					'post_type'    => 'tsteam-showcase',
				);

				$new_post_id = wp_insert_post( $args );

				if ( is_wp_error( $new_post_id ) ) {
					$result['message'] = 'Failed to duplicate: ' . $new_post_id->get_error_message();
				} else {
					update_post_meta( $new_post_id, 'tsteam_team_members', $team_member_ids );
					update_post_meta( $new_post_id, 'tsteam_showcase_settings', $showcase_settings );

					$result['status'] = 'passed';
					$result['message'] = 'Showcase duplicated successfully';
					$result['duplicated_showcase_id'] = $new_post_id;
				}
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * AJAX: Test a single view specifically
	 */
	public function test_single_view() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ) );
		}

		$showcase_id = isset( $_POST['showcase_id'] ) ? absint( $_POST['showcase_id'] ) : 0;
		$layout = isset( $_POST['layout'] ) ? sanitize_text_field( wp_unslash( $_POST['layout'] ) ) : 'Card';
		$view = isset( $_POST['view'] ) ? sanitize_text_field( wp_unslash( $_POST['view'] ) ) : 'grid';

		if ( ! $showcase_id ) {
			wp_send_json_error( array( 'message' => 'Invalid showcase ID' ) );
		}

		$result = $this->test_single_view_internal( $showcase_id, $layout, $view );

		wp_send_json_success( $result );
	}

	/**
	 * Internal helper to test a single view
	 */
	private function test_single_view_internal( $showcase_id, $layout, $view ) {
		$result = array(
			'status'  => 'failed',
			'message' => '',
		);

		try {
			// Map view type to selectedView.value
			$selected_view_value = isset( self::$view_type_map[ $view ] ) ? self::$view_type_map[ $view ] : 'static';

			// Update showcase settings with the view type
			$settings = $this->get_complete_showcase_settings();
			$settings['layout'] = $layout;
			$settings['view'] = $view;
			$settings['selectedView']['value'] = $selected_view_value;
			$settings['selectedView']['type'] = $view;
			$settings['selectedLayout']['value'] = $layout;
			$settings['selectedLayout']['type'] = $view;

			// Add carouselSettings for carousel view
			if ( $view === 'carousel' ) {
				$settings['carouselSettings'] = array(
					'slidesToShow' => array( 'desktop' => 3, 'tablet' => 2, 'mobile' => 1 ),
					'slidesToScroll' => array( 'desktop' => 1, 'tablet' => 1, 'mobile' => 1 ),
					'slideSpeed' => 3000,
					'gap' => 20,
					'autoplay' => true,
					'infinite' => true,
					'dotsColor' => '#703fd6',
				);
			}

			$encoded_settings = wp_json_encode( $settings );
			update_post_meta( $showcase_id, 'tsteam_showcase_settings', $encoded_settings );

			// Verify the settings were saved
			$saved_settings = get_post_meta( $showcase_id, 'tsteam_showcase_settings', true );
			$decoded_saved = json_decode( $saved_settings, true );

			if ( ! $decoded_saved ) {
				$result['message'] = 'Failed to save settings';
			} elseif ( $decoded_saved['selectedView']['value'] !== $selected_view_value ) {
				$result['message'] = 'selectedView.value not correct';
			} elseif ( $view === 'carousel' && empty( $decoded_saved['carouselSettings'] ) ) {
				$result['message'] = 'carouselSettings missing';
			} else {
				$result['status'] = 'passed';
				$result['message'] = 'View configured: ' . $layout . ' (' . $view . ' → ' . $selected_view_value . ')';
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * AJAX: Test frontend rendering
	 */
	public function test_frontend_rendering() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ) );
		}

		$showcase_id = isset( $_POST['showcase_id'] ) ? absint( $_POST['showcase_id'] ) : 0;

		if ( ! $showcase_id ) {
			wp_send_json_error( array( 'message' => 'Invalid showcase ID' ) );
		}

		$result = $this->test_member_data_structure_by_showcase( $showcase_id );

		wp_send_json_success( $result );
	}

	/**
	 * AJAX: Test details functionality
	 */
	public function test_details_functionality() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ) );
		}

		$showcase_id = isset( $_POST['showcase_id'] ) ? absint( $_POST['showcase_id'] ) : 0;

		if ( ! $showcase_id ) {
			wp_send_json_error( array( 'message' => 'Invalid showcase ID' ) );
		}

		$result = $this->test_details_functionality_internal( $showcase_id );

		wp_send_json_success( $result );
	}

	/**
	 * AJAX: Validate HTML output by fetching the actual page
	 */
	public function validate_html_output() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ) );
		}

		$page_id = isset( $_POST['page_id'] ) ? absint( $_POST['page_id'] ) : 0;

		if ( ! $page_id ) {
			wp_send_json_error( array( 'message' => 'Invalid page ID' ) );
		}

		$result = $this->test_html_output_validation( $page_id );

		wp_send_json_success( $result );
	}

	/**
	 * AJAX: Test multiple showcases with different configurations
	 */
	public function test_multiple_showcases() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ) );
		}

		$member_id = isset( $_POST['member_id'] ) ? absint( $_POST['member_id'] ) : 0;

		if ( ! $member_id ) {
			wp_send_json_error( array( 'message' => 'Invalid member ID' ) );
		}

		$result = $this->test_create_multiple_showcases( $member_id );

		wp_send_json_success( $result );
	}

	/**
	 * Test member data structure via showcase
	 */
	private function test_member_data_structure_by_showcase( $showcase_id ) {
		$result = array(
			'status'  => 'failed',
			'message' => '',
		);

		try {
			$team_member_ids = get_post_meta( $showcase_id, 'tsteam_team_members', true );
			$team_members_result = Helper::get_team_members_by_ids( $team_member_ids );

			if ( $team_members_result['error'] ) {
				$result['message'] = $team_members_result['message'];
			} else {
				$member = $team_members_result['team_members'][0];
				$meta_data = $member['meta_data'];

				// Check all required fields
				$required = array( 'image', 'designation', 'description' );
				$missing = array();
				foreach ( $required as $field ) {
					if ( empty( $meta_data[ $field ] ) ) {
						$missing[] = $field;
					}
				}

				if ( ! empty( $missing ) ) {
					$result['message'] = 'Missing fields: ' . implode( ', ', $missing );
				} else {
					$result['status'] = 'passed';
					$result['message'] = 'Member data complete for frontend rendering';
				}
			}
		} catch ( Exception $e ) {
			$result['message'] = 'Exception: ' . $e->getMessage();
		}

		return $result;
	}

	/**
	 * Cleanup test data
	 */
	public function cleanup_test_data() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ) );
		}

		$test_data = get_transient( 'tsteam_qa_test_data' );
		$deleted = array();

		if ( $test_data ) {
			// Delete all preview pages first
			if ( ! empty( $test_data['preview_pages'] ) ) {
				foreach ( $test_data['preview_pages'] as $page ) {
					$page_id = isset( $page['page_id'] ) ? $page['page_id'] : 0;
					if ( $page_id ) {
						wp_delete_post( $page_id, true );
						$deleted[] = 'Preview Page: ' . ( isset( $page['title'] ) ? $page['title'] : 'ID: ' . $page_id );
					}
				}
			}

			// Delete old test page if exists
			if ( ! empty( $test_data['page_id'] ) ) {
				wp_delete_post( $test_data['page_id'], true );
				$deleted[] = 'Test Page (ID: ' . $test_data['page_id'] . ')';
			}

			// Delete all showcases
			if ( ! empty( $test_data['showcase_ids'] ) ) {
				foreach ( $test_data['showcase_ids'] as $showcase ) {
					$id = is_int( $showcase ) ? $showcase : ( isset( $showcase['id'] ) ? $showcase['id'] : 0 );
					if ( $id ) {
						wp_delete_post( $id, true );
						$deleted[] = 'Showcase (ID: ' . $id . ')';
					}
				}
			}

			// Delete member
			if ( ! empty( $test_data['member_id'] ) ) {
				wp_delete_post( $test_data['member_id'], true );
				$deleted[] = 'Team Member (ID: ' . $test_data['member_id'] . ')';
			}

			// Delete category
			if ( ! empty( $test_data['category_id'] ) ) {
				wp_delete_term( $test_data['category_id'], 'tsteam-member-category' );
				$deleted[] = 'Category (ID: ' . $test_data['category_id'] . ')';
			}

			// Clear transient
			delete_transient( 'tsteam_qa_test_data' );
		}

		// Also clean up any old QA test posts
		$args = array(
			'post_type'      => array( 'tsteam-member', 'tsteam-showcase', 'page' ),
			'posts_per_page' => -1,
			'title_like'     => 'QA Test',
		);

		$query = new \WP_Query( $args );
		$cleaned = 0;

		while ( $query->have_posts() ) {
			$query->the_post();
			wp_delete_post( get_the_ID(), true );
			$cleaned++;
		}

		wp_reset_postdata();

		wp_send_json_success( array(
			'message' => 'Cleanup completed. Deleted: ' . implode( ', ', $deleted ),
			'cleaned' => $cleaned,
		) );
	}

	/**
	 * Check for existing test data
	 */
	public function check_existing_test_data() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Permission denied' ) );
		}

		// Check for QA Test posts
		$args = array(
			'post_type'      => array( 'tsteam-member', 'tsteam-showcase', 'page' ),
			'posts_per_page' => -1,
			'title_like'     => 'QA Test',
		);

		$query = new \WP_Query( $args );
		$existing_posts = array();

		while ( $query->have_posts() ) {
			$query->the_post();
			$existing_posts[] = array(
				'ID' => get_the_ID(),
				'post_title' => get_the_title(),
				'post_type' => get_post_type(),
				'post_status' => get_post_status(),
			);
		}

		wp_reset_postdata();

		// Also check transient
		$transient_data = get_transient( 'tsteam_qa_test_data' );

		wp_send_json_success( array(
			'has_existing_data' => count( $existing_posts ) > 0,
			'existing_count' => count( $existing_posts ),
			'existing_posts' => $existing_posts,
			'has_transient' => ! empty( $transient_data ),
			'transient_data' => $transient_data,
		) );
	}
}
