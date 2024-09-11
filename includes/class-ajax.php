<?php
namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class AJAX {

	public static function init() {
		$self = new self();
		// Team Showcase Ajax
		add_action( 'wp_ajax_tsteam/team_showcase/fetch', array( $self, 'get_showcase' ) );
		add_action( 'wp_ajax_tsteam/team_showcase/create', array( $self, 'create_showcase' ) );
		add_action( 'wp_ajax_tsteam/team_showcase/delete', array( $self, 'delete_showcase' ) );

		// Team Member Ajax
		add_action( 'wp_ajax_tsteam/team_member/fetch', array( $self, 'get_team_members' ) );
		add_action( 'wp_ajax_tsteam/team_member/create', array( $self, 'create_team_member' ) );
		add_action( 'wp_ajax_tsteam/team_member/delete', array( $self, 'delete_team_member' ) );
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
				'status'    => get_post_status(),
				'author'    => get_the_author_meta( 'display_name' ),
				'date'      => get_the_date(),
			);
		}
	
		wp_reset_postdata();
	
		wp_send_json_success( $showcases );
	}	

	public function create_showcase() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
				wp_die();
		}

        $showcase_title    = ( isset( $_POST['title'] ) ? sanitize_text_field( $_POST['title'] ) : '' );

        $args    = array(
			'post_title'   => $showcase_title,
			'post_status'  => 'publish',
			'post_author'  => get_current_user_id(),
			'post_type'    => 'tsteam-showcase',
		);
		$is_post = wp_insert_post( $args );
		wp_send_json_success( array( 'post_id' => $is_post ) );
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
	
			$members[] = array(
				'post_id'   => get_the_ID(),
				'title'     => get_the_title(),
				'content'   => get_the_content(),
				'status'    => get_post_status(),
				'author'    => get_the_author_meta( 'display_name' ),
				'date'      => get_the_date(),
			);
		}
	
		wp_reset_postdata();
	
		wp_send_json_success( $members );
	}

	public function create_team_member() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
				wp_die();
		}

        $member_name    = ( isset( $_POST['name'] ) ? sanitize_text_field( $_POST['name'] ) : '' );
		$member_info    = ( isset( $_POST['information'] ) ? sanitize_text_field( $_POST['information'] ) : '' );
		$member_website    = ( isset( $_POST['website'] ) ? sanitize_text_field( $_POST['website'] ) : '' );

        $args    = array(
			'post_title'   => $member_name,
			'post_content' => $member_info,
			'post_status'  => 'publish',
			'post_author'  => get_current_user_id(),
			'post_type'    => 'tsteam-member',
			'meta_input'   => array(
            	'tsteam_member_information' => $member_website,
        	),
		);
		$is_post = wp_insert_post( $args );
		wp_send_json_success( array( 'post_id' => $is_post ) );
	}

	public function delete_team_member() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$post_id = isset( $_POST['post_id'] ) ? intval( $_POST['post_id'] ) : 0;

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
