<?php
namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class AJAX {

	public static function init() {
		$self = new self();
		add_action( 'wp_ajax_tsteam_showcase/get_showcase', array( $self, 'get_showcase' ) );
		add_action( 'wp_ajax_tsteam_showcase/create_showcase', array( $self, 'create_showcase' ) );
		add_action( 'wp_ajax_tsteam_showcase/delete_showcase', array( $self, 'delete_showcase' ) );
	}

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
}
