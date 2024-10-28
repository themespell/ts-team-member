<?php
namespace TSTeam;

use TSTeam\Helper;
use TSTeam\Common;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class TeamShowcase {

	public static function init() {
		$self = new self();
		// Team Showcase Ajax
		add_action( 'wp_ajax_tsteam/team_showcase/fetch', array( $self, 'get_showcase' ) );

		add_action( 'wp_ajax_tsteam/team_showcase/fetch/single', array( $self, 'get_showcase_by_id' ) );
		add_action( 'wp_ajax_nopriv_tsteam/team_showcase/fetch/single', array( $self, 'get_showcase_by_id' ) );
		
		add_action( 'wp_ajax_tsteam/team_showcase/create', array( $self, 'create_showcase' ) );
		add_action( 'wp_ajax_tsteam/team_showcase/update', array( $self, 'update_showcase' ) );
		add_action( 'wp_ajax_tsteam/team_showcase/update/settings', array( $self, 'update_showcase_settings' ) );
		add_action( 'wp_ajax_tsteam/team_showcase/delete', array( $self, 'delete_showcase' ) );
	}

	// Team Showcase Ajax

	public function get_showcase() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$args = array(
			'post_type' => 'tsteam-showcase',
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
				'shortcode' => '[tsteam_showcase id="' . get_the_ID() . '"]',
			);
		}

		wp_reset_postdata();

		wp_send_json_success( $showcases );
	}

	public function get_showcase_by_id() {
		check_ajax_referer( 'tsteam_nonce' );

		$post_id = isset( $_POST['post_id'] ) ? (int) $_POST['post_id'] : 0;

		$args = array(
			'post_type' => 'tsteam-showcase',
			'p'         => $post_id,
		);

		$query = new \WP_Query( $args );

		if ( ! $query->have_posts() ) {
			wp_send_json_error( array( 'message' => 'Showcase not found' ) );
			return;
		}

		$query->the_post();
		$post_id = get_the_ID();

		// Get the team member IDs stored as meta data
		$team_member_ids   = get_post_meta( $post_id, 'tsteam_team_members', true );
		$showcase_settings = get_post_meta( $post_id, 'tsteam_showcase_settings', true );

		if ( ! empty( $team_member_ids ) && is_array( $team_member_ids ) ) {
			$team_members_result = Helper::get_team_members_by_ids( $team_member_ids );

			if ( $team_members_result['error'] ) {
				wp_send_json_error( array( 'message' => $team_members_result['message'] ) );
				return;
			}

			$team_members = $team_members_result['team_members'];
		} else {
			$team_members = array();
		}

		$showcase = array(
			'post_id'   => $post_id,
			'title'     => get_the_title( $post_id ),
			'content'   => get_the_content(),
			'meta_data' => array(
				'team_members'      => $team_members,
				'showcase_settings' => ! empty( $showcase_settings ) ? $showcase_settings : Common::get_default_showcase_settings(),
			),
		);

		wp_reset_postdata();
		wp_send_json_success( $showcase );
	}

	public function create_showcase() {
		check_ajax_referer( 'tsteam_nonce' );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$showcase_title    = isset( $_POST['title'] ) ? sanitize_text_field( wp_unslash( $_POST['title'] ) ) : '';
		$team_members      = isset( $_POST['team_members'] ) ? array_map( 'intval', (array) $_POST['team_members'] ) : array();
		$showcase_settings = isset( $_POST['data'] ) ? wp_json_encode( wp_unslash( $_POST['data'] ), true ) : array();

		$args = array(
			'post_title'  => $showcase_title,
			'post_status' => 'publish',
			'post_author' => get_current_user_id(),
			'post_type'   => 'tsteam-showcase',
		);

		$is_post = wp_insert_post( $args );

		if ( is_wp_error( $is_post ) ) {
			wp_send_json_error( array( 'message' => 'Failed to create showcase' ) );
			return;
		}

		update_post_meta( $is_post, 'tsteam_team_members', $team_members );
		update_post_meta( $is_post, 'tsteam_showcase_settings', $showcase_settings );
		wp_send_json_success( array( 'post_id' => $is_post ) );
	}

	public function update_showcase() {
		check_ajax_referer( 'tsteam_nonce' );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$post_id = isset( $_POST['data']['post_id'] ) ? absint( $_POST['data']['post_id'] ) : 0;

		if ( ! $post_id ) {
			wp_send_json_error( array( 'message' => 'Invalid ID' ) );
		}

		$showcase_title = ( isset( $_POST['data']['title'] ) ? sanitize_text_field( wp_unslash( $_POST['data']['title'] ) ) : '' );
		$team_members   = isset( $_POST['data']['team_members'] ) ? array_map( 'intval', (array) $_POST['data']['team_members'] ) : array();

		$args    = array(
			'ID'         => $post_id,
			'post_type'  => 'tsteam-showcase',
			'post_title' => $showcase_title,
			'meta_input' => array(
				'tsteam_team_members' => $team_members,
			),
		);
		$is_post = wp_update_post( $args );
		wp_send_json_success( array( 'post_id' => $is_post ) );
	}

	public function update_showcase_settings() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$post_id           = isset( $_POST['post_id'] ) ? absint( $_POST['post_id'] ) : 0;
		$showcase_settings = isset( $_POST['data'] ) ? wp_json_encode( wp_unslash( $_POST['data'] ), true ) : array();

		$args = array(
			'ID'        => $post_id,
			'post_type' => 'tsteam-showcase',
		);

		$is_post = wp_update_post( $args, true );

		// Check for errors in the update
		if ( is_wp_error( $is_post ) ) {
			wp_send_json_error( array( 'message' => 'Failed to update showcase' ) );
			return;
		}

		update_post_meta( $post_id, 'tsteam_showcase_settings', $showcase_settings );
		wp_send_json_success( array( 'post_id' => $post_id ) );
	}

	public function delete_showcase() {
		check_ajax_referer( 'tsteam_nonce' );
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die();
		}

		$post_id = isset( $_POST['post_id'] ) ? absint( $_POST['post_id'] ) : 0;

		if ( ! $post_id ) {
			wp_send_json_error( array( 'message' => 'Invalid showcase ID' ) );
		}

		$deleted = wp_delete_post( $post_id, true );

		if ( $deleted ) {
			wp_send_json_success(
				array(
					'message' => 'Showcase deleted successfully',
					'post_id' => $post_id,
				)
			);
		} else {
			wp_send_json_error( array( 'message' => 'Failed to delete showcase' ) );
		}
	}
}
