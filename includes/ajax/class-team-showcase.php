<?php
namespace TSTeam;
use TSTeam\Helper;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class TeamShowcase {

	public static function init() {
		$self = new self();
		// Team Showcase Ajax
		add_action( 'wp_ajax_tsteam/team_showcase/fetch', array( $self, 'get_showcase' ) );
        add_action( 'wp_ajax_tsteam/team_showcase/fetch/single', array($self, 'get_showcase_by_id'));
		add_action( 'wp_ajax_tsteam/team_showcase/create', array( $self, 'create_showcase' ) );
		add_action( 'wp_ajax_tsteam/team_showcase/delete', array( $self, 'delete_showcase' ) );
	}

	// Team Showcase Ajax

	public function get_showcase() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}
	
		$args = array(
			'post_type'      => 'tsteam-showcase',
		);
	
		$query = new \WP_Query( $args );
	
		if ( ! $query->have_posts() ) {
			wp_send_json_error( array( 'message' => 'No showcases found' ) );
		}
	
		$showcases = array();
	
		while ( $query->have_posts() ) {
			$query->the_post();
	
			$showcases[] = array(
				'post_id'   => get_the_ID(),
				'title'     => get_the_title(),
				'content'   => get_the_content(),
				'shortcode' => '[tsteam_showcase id="' . get_the_ID() . '"]',
			);
		}
	
		wp_reset_postdata();
	
		wp_send_json_success( $showcases );
	}

	public function get_showcase_by_id() {
		check_ajax_referer('tsteam_nonce');
	
		if (!current_user_can('manage_options')) {
			wp_die();
		}

		$post_id = isset($_POST['post_id']) ? (int) $_POST['post_id'] : 0;
	
		$args = array(
			'post_type'      => 'tsteam-showcase',
			'p'              => $post_id,
		);
	
		$query = new \WP_Query($args);
	
		if (!$query->have_posts()) {
			wp_send_json_error(array('message' => 'Showcase not found'));
			return;
		}
	
		$query->the_post();
		$post_id = get_the_ID();
	
		// Get the team member IDs stored as meta data
		$team_member_ids = get_post_meta($post_id, 'tsteam_team_members', true);
	
		if (!empty($team_member_ids) && is_array($team_member_ids)) {
			// Use the static helper function to get the team members by IDs
			$team_members_result = Helper::get_team_members_by_ids($team_member_ids);
	
			if ($team_members_result['error']) {
				wp_send_json_error(array('message' => $team_members_result['message']));
				return;
			}
	
			$team_members = $team_members_result['team_members'];
		} else {
			$team_members = [];
		}
	
		$showcase = array(
			'post_id'   => $post_id,
			'title'     => get_the_title($post_id),
			'content'   => get_the_content(),
			'meta_data' => [
				'team_members' => $team_members
			]
		);
	
		wp_reset_postdata();
		wp_send_json_success($showcase);
	}	

	// public function get_showcase_by_id() {
	// 	check_ajax_referer('tsteam_nonce');

	// 	if (!current_user_can('manage_options')) {
	// 		wp_die();
	// 	}

	// 	$post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;


	// 	$args = array(
	// 		'post_type'      => 'tsteam-showcase',
	// 		'p'              => $post_id,
	// 	);

	// 	$query = new \WP_Query($args);

	// 	if (!$query->have_posts()) {
	// 		wp_send_json_error(array('message' => 'Showcase not found'));
	// 		return;
	// 	}

	// 	$query->the_post();
	// 	$post_id = get_the_ID();

	// 	$team_members = get_post_meta($post_id, 'tsteam_team_members', true);

	// 	$showcase = array(
	// 		'post_id'   => $post_id,
	// 		'title'     => get_the_title(),
	// 		'content'   => get_the_content(),
	// 		'meta_data' => [
	// 			'team_members' => $team_members
	// 		]
	// 	);

	// 	wp_reset_postdata();
	// 	wp_send_json_success($showcase);
	// }

	public function create_showcase() {
		// Verify the nonce
		check_ajax_referer('tsteam_nonce');
		
		// Check user capabilities
		if (!current_user_can('manage_options')) {
			wp_die();
		}

		$showcase_title = isset($_POST['title']) ? sanitize_text_field($_POST['title']) : '';
		$team_members = isset($_POST['team_members']) ? array_map('intval', (array) $_POST['team_members']) : array();

		$args = array(
			'post_title'   => $showcase_title,
			'post_status'  => 'publish',
			'post_author'  => get_current_user_id(),
			'post_type'    => 'tsteam-showcase',
		);

		$is_post = wp_insert_post($args);
	
		if (is_wp_error($is_post)) {
			wp_send_json_error(array('message' => 'Failed to create showcase'));
			return;
		}

		update_post_meta($is_post, 'tsteam_team_members', $team_members);
		wp_send_json_success(array('post_id' => $is_post));
	}

	public function delete_showcase() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$post_id = isset( $_POST['post_id'] ) ? intval( $_POST['post_id'] ) : 0;

		if ( ! $post_id ) {
			wp_send_json_error( array( 'message' => 'Invalid showcase ID' ) );
		}

		$deleted = wp_delete_post( $post_id, true );

		if ( $deleted ) {
			wp_send_json_success( array( 'message' => 'Showcase deleted successfully', 'post_id' => $post_id ) );
		} else {
			wp_send_json_error( array( 'message' => 'Failed to delete showcase' ) );
		}
	}
}