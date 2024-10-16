<?php
namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class TeamMember {

	public static function init() {
		$self = new self();
		// Team Member Ajax
		add_action( 'wp_ajax_tsteam/team_member/fetch', array( $self, 'get_team_members' ) );
		add_action( 'wp_ajax_tsteam/team_member/fetch/single', array($self, 'get_team_member_by_id'));
		add_action( 'wp_ajax_tsteam/team_member/create', array( $self, 'create_team_member' ) );
		add_action( 'wp_ajax_tsteam/team_member/update', array( $self, 'update_team_member' ) );
		add_action( 'wp_ajax_tsteam/team_member/delete', array( $self, 'delete_team_member' ) );
	}

    // Team Member Ajax

	public function get_team_members() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}
	
		$args = array(
			'post_type'      => 'tsteam-member',
		);
	
		$query = new \WP_Query( $args );
	
		if ( ! $query->have_posts() ) {
			wp_send_json_error( array( 'message' => 'No Team Member found' ) );
		}
	
		$members = array();
	
		while ( $query->have_posts() ) {
			$query->the_post();

			$post_id = get_the_ID();
			$member_designation = get_post_meta( $post_id, 'tsteam_member_designation', true );
			$member_image = get_post_meta( $post_id, 'tsteam_member_image', true );
	
			$members[] = array(
				'post_id'   => $post_id,
				'image'       => $member_image,
				'name'     => get_the_title(),
				'designation' => $member_designation,
				'description'   => get_the_content(),
			);
		}
	
		wp_reset_postdata();
	
		wp_send_json_success( $members );
	}

	public function get_team_member_by_id() {
		check_ajax_referer('tsteam_nonce');

		if (!current_user_can('manage_options')) {
			wp_die();
		}

		$team_member_id = isset($_POST['post_id']) ? absint($_POST['post_id']) : 0;


		$args = array(
			'post_type'      => 'tsteam-member',
			'p'              => $team_member_id,
		);

		$query = new \WP_Query($args);

		if (!$query->have_posts()) {
			wp_send_json_error(array('message' => 'Showcase not found'));
			return;
		}

		$query->the_post();

		$member_image = get_post_meta($team_member_id, 'tsteam_member_image', true);
		$member_designation = get_post_meta( $team_member_id, 'tsteam_member_designation', true );

		$showcase = array(
			'post_id'   => $team_member_id,
			'title'     => get_the_title(),
			'content'   => get_the_content(),
			'meta_data' => [
				'image' => $member_image,
				'designation' => $member_designation,
			]
		);

		wp_reset_postdata();
		wp_send_json_success($showcase);
	}

	public function create_team_member() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
				wp_die();
		}

        $member_name    = ( isset( $_POST['member_name'] ) ? sanitize_text_field( wp_unslash($_POST['member_name'] )) : '' );
		$member_designation = ( isset( $_POST['member_designation'] ) ? sanitize_text_field( wp_unslash($_POST['member_designation'] )) : '' );
		$member_image	= isset( $_POST['member_image'] ) ? esc_url_raw( wp_unslash($_POST['member_image'] )) : '';
		$member_description = isset( $_POST['member_description'] ) ? sanitize_text_field( wp_unslash($_POST['member_description'] )) : '';

        $args    = array(
			'post_title'   => $member_name,
			'post_content' => $member_description,
			'post_status'  => 'publish',
			'post_author'  => get_current_user_id(),
			'post_type'    => 'tsteam-member',
			'meta_input'   => array(
            	'tsteam_member_designation' => $member_designation,
				'tsteam_member_image' => $member_image,
        	),
		);
		$is_post = wp_insert_post( $args );
		wp_send_json_success( array( 'post_id' => $is_post ) );
	}

	public function update_team_member() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$post_id = isset( $_POST['post_id'] ) ? absint( $_POST['post_id'] ) : 0;

		if ( ! $post_id ) {
			wp_send_json_error( array( 'message' => 'Invalid ID' ) );
		}

		$member_name    = ( isset( $_POST['member_name'] ) ? sanitize_text_field( wp_unslash($_POST['member_name'] )) : '' );
		$member_designation = ( isset( $_POST['member_designation'] ) ? sanitize_text_field( wp_unslash($_POST['member_designation'] )) : '' );
		$member_image	= isset( $_POST['member_image'] ) ? esc_url_raw( wp_unslash($_POST['member_image'] )) : '';
		$member_description = isset( $_POST['member_description'] ) ? sanitize_text_field( wp_unslash($_POST['member_description'] )) : '';

		$args    = array(
			'ID'           => $post_id,
			'post_title'   => $member_name,
			'post_content' => $member_description,
			'post_status'  => 'publish',
			'post_author'  => get_current_user_id(),
			'post_type'    => 'tsteam-member',
			'meta_input'   => array(
				'tsteam_member_designation' => $member_designation,
				'tsteam_member_image' => $member_image,
			),
		);
		$is_post = wp_update_post( $args );
		wp_send_json_success( array( 'post_id' => $is_post ) );
	}

	public function delete_team_member() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$post_id = isset( $_POST['post_id'] ) ? absint( $_POST['post_id'] ) : 0;

		if ( ! $post_id ) {
			wp_send_json_error( array( 'message' => 'Invalid ID' ) );
		}

		$deleted = wp_delete_post( $post_id, true );

		if ( $deleted ) {
			wp_send_json_success( array( 'message' => 'Team Member deleted successfully', 'post_id' => $post_id ) );
		} else {
			wp_send_json_error( array( 'message' => 'Failed to delete Team Member' ) );
		}
	}
}