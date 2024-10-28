<?php

namespace TSTeam;

use TSTeam\Common;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Enqueue {

	public static function init() {
		$self = new self();
		add_action( 'admin_enqueue_scripts', array( $self, 'tsteam_admin_scripts' ) );
	}

	public function tsteam_admin_scripts() {
		$screen_info = Common::get_current_screen_info();
		$isPro       = Common::isProActivated();
		$dependency  = array( 'jquery' );

		if ( $isPro ) {
			$dependency[] = 'tsteampro-admin-script';
		}

		if ( $screen_info ) {
			wp_enqueue_media();
			wp_enqueue_style( 'tsteam-admin-main', TSTEAM_ROOT_DIR_URL . 'includes/assets/admin.css' );
			wp_enqueue_script( 'tsteam-admin-script', TSTEAM_ROOT_DIR_URL . 'includes/assets/admin.js', $dependency, '2.0', true );
			wp_localize_script(
				'tsteam-admin-script',
				'tsteam_settings',
				array(
					'ajax_url'   => admin_url( 'admin-ajax.php' ),
					'admin_url'  => get_admin_url(),
					'nonce'      => wp_create_nonce( 'tsteam_nonce' ),
					'wp_url'     => site_url(),
					'plugin_url' => TSTEAM_ROOT_DIR_PATH
				)
			);
			remove_all_actions( 'admin_notices' );
			remove_all_actions( 'all_admin_notices' );
		}

		add_filter( 'script_loader_tag', array( $this, 'add_module_type_to_script' ), 10, 3 );
	}

	public function add_module_type_to_script( $tag, $handle, $src ) {
		if ( 'tsteam-admin-script' === $handle ) {
			$tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';
		}
		return $tag;
	}
}
