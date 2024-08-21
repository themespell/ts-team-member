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
		$current_screen  = get_current_screen();
		$cpt_screen = 'tsteam-showcase';
		$isPro = Common::isProActivated();
		$dependency = array('jquery');

		if ($isPro){
			$dependency[] = 'tsteampro-admin-script';
		}

		if ( $cpt_screen === $current_screen->post_type ) {
			wp_enqueue_media();
			wp_enqueue_style('tsteam-admin-main', TSTEAM_ROOT_DIR_URL . 'includes/assets/admin.css');
			wp_enqueue_script('tsteam-admin-script', TSTEAM_ROOT_DIR_URL . 'includes/assets/admin.js', $dependency, '2.0', true);
			wp_localize_script(
				'tsteam-admin-script',
				'tsteam_settings',
				array(
					'ajax_url' => admin_url('admin-ajax.php'),
					'admin_url' => get_admin_url(),
					'nonce' => wp_create_nonce('tsteam_nonce'),
					'wp_url' => site_url(),
				)
			);
		}
	}
}