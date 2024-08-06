<?php
namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class AJAX {

	public static function init() {
		$self = new self();
		add_action( 'wp_ajax_tsteam_showcase/create_showcase', array( $self, 'create_showcase' ) );
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
}
