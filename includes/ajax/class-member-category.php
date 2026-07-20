<?php
namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class MemberCategory {

	public static function init() {
		$self = new self();

		// Member Category Ajax
		add_action( 'wp_ajax_tsteam/member_category/fetch', array( $self, 'get_member_category' ) );
		add_action( 'wp_ajax_tsteam/member_category/fetch/single', array( $self, 'get_member_category_by_id' ) );
		add_action( 'wp_ajax_tsteam/member_category/create', array( $self, 'create_member_category' ) );
		add_action( 'wp_ajax_tsteam/member_category/update', array( $self, 'update_member_category' ) );
		add_action( 'wp_ajax_tsteam/member_category/duplicate', array( $self, 'duplicate_member_category' ) );
		add_action( 'wp_ajax_tsteam/member_category/delete', array( $self, 'delete_member_category' ) );
	}

	/**
	 * Helper: Check if a term with the given slug exists in the taxonomy.
	 */
	private function slug_exists( $slug, $taxonomy ) {
		$existing = get_term_by( 'slug', $slug, $taxonomy );
		return $existing && ! is_wp_error( $existing );
	}

	/**
	 * Helper: Get enhanced category data (consistent across methods).
	 */
	private function get_enhanced_category( $term_id ) {
		$category = get_term( $term_id, 'tsteam-member-category' );
		if ( is_wp_error( $category ) || ! $category ) {
			return false;
		}

		$team_member_ids = get_term_meta( $term_id, 'team_members', true );
		if ( ! is_array( $team_member_ids ) ) {
			$team_member_ids = array();
		}

		// Convert IDs to names
		$team_members = array();
		foreach ( $team_member_ids as $member_id ) {
			$name = get_the_title( $member_id );
			if ( $name ) {
				$team_members[] = array(
					'id'   => $member_id,
					'name' => $name,
				);
			}
		}

		return array(
			'post_id'       => $category->term_id,
			'name'          => $category->name,
			'slug'          => $category->slug,
			'count'         => count( $team_members ),
			'team_members'  => $team_members,
			'team_member_ids' => $team_member_ids,
		);
	}

	// Member Category Ajax Methods

	public function get_member_category() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$args = array(
			'taxonomy'   => 'tsteam-member-category',
			'hide_empty' => false,
			'orderby'    => 'meta_value_num',
			'meta_key'   => 'category_order',
			'order'      => 'ASC',
		);

		$categories = get_terms( $args );

		// Return an empty array instead of error so the editor UI doesn't break when no categories exist.
		if ( is_wp_error( $categories ) || empty( $categories ) ) {
			wp_send_json_success( array() );
			return;
		}

		$enhanced_categories = array();
		foreach ( $categories as $category ) {
			$enhanced_categories[] = $this->get_enhanced_category( $category->term_id );
		}

		wp_send_json_success( $enhanced_categories );
	}

	public function get_member_category_by_id() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$term_id = isset( $_POST['term_id'] ) ? absint( $_POST['term_id'] ) : 0;

		if ( ! $term_id ) {
			wp_send_json_error( array( 'message' => 'Invalid term ID' ) );
			return;
		}

		$category_data = $this->get_enhanced_category( $term_id );

		if ( ! $category_data ) {
			wp_send_json_error( array( 'message' => 'Category not found' ) );
			return;
		}

		wp_send_json_success( $category_data );
	}

	public function create_member_category() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		// Handle POST data consistently (support both direct and nested 'data')
		$post_data = isset( $_POST['data'] ) ? $_POST['data'] : $_POST;
		$name        = isset( $post_data['name'] ) ? sanitize_text_field( $post_data['name'] ) : '';
		$slug        = isset( $post_data['slug'] ) ? sanitize_title( $post_data['slug'] ) : '';
		$description = isset( $post_data['description'] ) ? sanitize_textarea_field( $post_data['description'] ) : '';
		$color       = isset( $post_data['color'] ) ? sanitize_hex_color( $post_data['color'] ) : '';
		$icon        = isset( $post_data['icon'] ) ? esc_url_raw( $post_data['icon'] ) : '';
		$order       = isset( $post_data['order'] ) ? absint( $post_data['order'] ) : 0;

		if ( empty( $name ) ) {
			wp_send_json_error( array( 'message' => 'Category name is required' ) );
			return;
		}

		// Duplicate slug checker: Ensure slug is unique if provided
		if ( ! empty( $slug ) && $this->slug_exists( $slug, 'tsteam-member-category' ) ) {
			wp_send_json_error( array( 'message' => 'A category with this slug already exists. Please choose a unique slug.' ) );
			return;
		}

		$insert_args = array(
			'description' => $description,
		);

		// Only set slug if provided and unique
		if ( ! empty( $slug ) ) {
			$insert_args['slug'] = $slug;
		}

		$term = wp_insert_term(
			$name,
			'tsteam-member-category',
			$insert_args
		);

		if ( is_wp_error( $term ) ) {
			wp_send_json_error( array( 'message' => $term->get_error_message() ) );
			return;
		}

		$term_id = $term['term_id'];

		// Set meta values
		update_term_meta( $term_id, 'category_color', $color );
		update_term_meta( $term_id, 'category_icon', $icon );
		update_term_meta( $term_id, 'category_order', $order );

		// Save team members
		$team_members = isset( $post_data['team_members'] ) ? array_map( 'absint', (array) $post_data['team_members'] ) : array();
		update_term_meta( $term_id, 'team_members', $team_members );

		// Sync category to each team member
		$this->sync_team_member_categories( $term_id, $team_members );

		// Return enhanced data
		$enhanced_category = $this->get_enhanced_category( $term_id );

		wp_send_json_success(
			array(
				'message' => 'Category created successfully',
				'term_id' => $term_id,
				'data'    => $enhanced_category,
			)
		);
	}

	public function update_member_category() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		// Handle POST data consistently (nested 'data')
		$post_data = isset( $_POST['data'] ) ? $_POST['data'] : $_POST;
		$term_id     = isset( $post_data['post_id'] ) ? absint( $post_data['post_id'] ) : 0;
		$name        = isset( $post_data['name'] ) ? sanitize_text_field( $post_data['name'] ) : '';
		$slug        = isset( $post_data['slug'] ) ? sanitize_title( $post_data['slug'] ) : '';
		$description = isset( $post_data['description'] ) ? sanitize_textarea_field( $post_data['description'] ) : '';
		$color       = isset( $post_data['color'] ) ? sanitize_hex_color( $post_data['color'] ) : '';
		$icon        = isset( $post_data['icon'] ) ? esc_url_raw( $post_data['icon'] ) : '';
		$order       = isset( $post_data['order'] ) ? absint( $post_data['order'] ) : 0;

		if ( ! $term_id ) {
			wp_send_json_error( array( 'message' => 'Invalid term ID' ) );
			return;
		}

		if ( empty( $name ) ) {
			wp_send_json_error( array( 'message' => 'Category name is required' ) );
			return;
		}

		// Check if term exists
		$existing_term = get_term( $term_id, 'tsteam-member-category' );
		if ( is_wp_error( $existing_term ) || ! $existing_term ) {
			wp_send_json_error( array( 'message' => 'Category not found' ) );
			return;
		}

		// Duplicate slug checker: If slug is provided and different from current, ensure it's unique
		$current_slug = $existing_term->slug;
		if ( ! empty( $slug ) && $slug !== $current_slug && $this->slug_exists( $slug, 'tsteam-member-category' ) ) {
			wp_send_json_error( array( 'message' => 'A category with this slug already exists. Please choose a unique slug.' ) );
			return;
		}

		$update_args = array(
			'name'        => $name,
			'description' => $description,
		);

		// Only update slug if provided and valid
		if ( ! empty( $slug ) && $slug !== $current_slug ) {
			$update_args['slug'] = $slug;
		}

		$term = wp_update_term(
			$term_id,
			'tsteam-member-category',
			$update_args
		);

		if ( is_wp_error( $term ) ) {
			wp_send_json_error( array( 'message' => $term->get_error_message() ) );
			return;
		}

		// Update term meta
		update_term_meta( $term_id, 'category_color', $color );
		update_term_meta( $term_id, 'category_icon', $icon );
		update_term_meta( $term_id, 'category_order', $order );

		// Save team members
		$team_members = isset( $post_data['team_members'] ) ? array_map( 'absint', (array) $post_data['team_members'] ) : array();
		update_term_meta( $term_id, 'team_members', $team_members );

		// Sync category to each team member
		$this->sync_team_member_categories( $term_id, $team_members );

		// Return enhanced data
		$enhanced_category = $this->get_enhanced_category( $term_id );

		wp_send_json_success(
			array(
				'message' => 'Category updated successfully',
				'term_id' => $term_id,
				'data'    => $enhanced_category,
			)
		);
	}

	public function duplicate_member_category() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		try {
			// Handle POST data consistently
			$post_data = isset( $_POST['data'] ) ? $_POST['data'] : $_POST;
			$term_id = isset( $post_data['post_id'] ) ? absint( $post_data['post_id'] ) : 0;

			if ( ! $term_id ) {
				wp_send_json_error( array( 'message' => 'Invalid term ID' ) );
				return;
			}

			$original_category = get_term( $term_id, 'tsteam-member-category' );

			if ( is_wp_error( $original_category ) || ! $original_category ) {
				wp_send_json_error( array( 'message' => 'Category not found' ) );
				return;
			}

			// Get original data
			$original_name = $original_category->name;
			$description = $original_category->description;
			$color = get_term_meta( $term_id, 'category_color', true );
			$icon  = get_term_meta( $term_id, 'category_icon', true );
			$order = get_term_meta( $term_id, 'category_order', true ) ?: 0;

			// Generate new name and slug for duplicate
			$new_name = $original_name . ' (Copy)';
			$new_slug_base = sanitize_title( $new_name );

			// Check for existing duplicates and append number if needed (simple uniqueness for name/slug)
			$counter = 1;
			$proposed_slug = $new_slug_base;
			while ( $this->slug_exists( $proposed_slug, 'tsteam-member-category' ) ) {
				$counter++;
				$proposed_slug = $new_slug_base . '-' . $counter;
				$new_name = $original_name . ' (Copy ' . $counter . ')';
			}

			// Create duplicate
			$new_term = wp_insert_term(
				$new_name,
				'tsteam-member-category',
				array(
					'description' => $description,
					'slug'        => $proposed_slug,
				)
			);

			if ( is_wp_error( $new_term ) ) {
				wp_send_json_error( array( 'message' => $new_term->get_error_message() ) );
				return;
			}

			$new_term_id = $new_term['term_id'];

			// Copy meta data
			update_term_meta( $new_term_id, 'category_color', $color );
			update_term_meta( $new_term_id, 'category_icon', $icon );
			update_term_meta( $new_term_id, 'category_order', $order + 1 ); // Increment to place after original

			// Return enhanced data
			$enhanced_category = $this->get_enhanced_category( $new_term_id );

			wp_send_json_success(
				array(
					'message' => 'Category duplicated successfully',
					'term_id' => $new_term_id,
					'data'    => $enhanced_category,
				)
			);
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'message' => 'Exception occurred: ' . $e->getMessage() ) );
		}
	}

	public function delete_member_category() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		// Handle POST data consistently
		$post_data = isset( $_POST['data'] ) ? $_POST['data'] : $_POST;
		$term_id = isset( $post_data['post_id'] ) ? absint( $post_data['post_id'] ) : 0;
		$force_delete = isset( $post_data['force_delete'] ) ? (bool) $post_data['force_delete'] : false; // Optional: permanent delete

		if ( ! $term_id ) {
			wp_send_json_error( array( 'message' => 'Invalid term ID' ) );
			return;
		}

		// Check if term exists
		$existing_term = get_term( $term_id, 'tsteam-member-category' );
		if ( is_wp_error( $existing_term ) || ! $existing_term ) {
			wp_send_json_error( array( 'message' => 'Category not found' ) );
			return;
		}

		// Delete term (first param: move to trash; second: force permanent delete)
		$deleted = wp_delete_term( $term_id, 'tsteam-member-category', $force_delete );

		if ( is_wp_error( $deleted ) ) {
			wp_send_json_error( array( 'message' => $deleted->get_error_message() ) );
			return;
		}

		if ( $deleted ) {
			wp_send_json_success(
				array(
					'message' => 'Category deleted successfully',
					'term_id' => $term_id,
				)
			);
		} else {
			wp_send_json_error( array( 'message' => 'Failed to delete category (may already be deleted or in use)' ) );
		}
	}

	/**
	 * Sync category assignment to team members.
	 * When members are added/removed from a category, update their category field.
	 */
	private function sync_team_member_categories( $category_term_id, $team_member_ids ) {
		$category = get_term( $category_term_id, 'tsteam-member-category' );
		if ( is_wp_error( $category ) || ! $category ) {
			return;
		}

		$category_slug = $category->slug;

		// Get ALL team members to find ones that were removed from this category
		$args = array(
			'post_type' => 'tsteam-member',
			'posts_per_page' => -1,
			'fields' => 'ids',
		);
		$all_member_ids = get_posts( $args );

		// For each member in this category, set their category
		foreach ( $team_member_ids as $member_id ) {
			$member_meta = get_post_meta( $member_id, 'tsteam_member_info', true );
			if ( ! is_array( $member_meta ) ) {
				$member_meta = array();
			}
			$member_meta['category'] = $category_slug;
			update_post_meta( $member_id, 'tsteam_member_info', $member_meta );
		}

		// For members NOT in this category but were previously, clear their category
		foreach ( $all_member_ids as $member_id ) {
			if ( ! in_array( $member_id, $team_member_ids, true ) ) {
				$member_meta = get_post_meta( $member_id, 'tsteam_member_info', true );
				if ( ! is_array( $member_meta ) ) {
					$member_meta = array();
				}
				// Only clear if this was their category
				if ( isset( $member_meta['category'] ) && $member_meta['category'] === $category_slug ) {
					$member_meta['category'] = '';
					update_post_meta( $member_id, 'tsteam_member_info', $member_meta );
				}
			}
		}
	}
}
