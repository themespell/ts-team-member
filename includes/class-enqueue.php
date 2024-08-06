<?php

namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Enqueue {

	public static function init() {
		$self = new self();
		// add_action( 'admin_menu', array( $self, 'add_admin_menu' ) );
		add_action( 'admin_enqueue_scripts', array( $self, 'tsteam_admin_scripts' ) );
	}

	public function add_admin_menu() {
		$parent = 'meetingwp-options';

		add_menu_page(
			__( 'Meeting WP', 'meetingwp' ),
			'Meeting WP',
			'do_not_allow',
			$parent,
			array( $this, 'meetingwp_callback' ),
			plugin_dir_url( __FILE__ ) . 'assets/icon-16x16.png',
			30
		);
		add_submenu_page(
			$parent,
			__( 'Meetings', 'meetingwp' ),
			__( 'Meetings', 'meetingwp' ),
			'manage_options',
			'meetingwp-meeting',
			array( $this, 'meetingwp_callback' ),
		);
		add_submenu_page(
			$parent,
			__( 'Settings', 'meetingwp' ),
			__( 'Settings', 'meetingwp' ),
			'manage_options',
			'meetingwp-settings',
			array( $this, 'meetingwp_callback' ),
		);
	}

	public function meetingwp_callback() {
		?>
		<div id="meetingwp-admin"></div>
		<?php
	}

	public function tsteam_admin_scripts() {
		$current_screen  = get_current_screen();
		$cpt_screen = 'tsteam-showcase';

		if ( $cpt_screen === $current_screen->post_type ) {
			wp_enqueue_media();
			wp_enqueue_style('tsteam-admin-main', TSTEAM_ROOT_DIR_URL . 'includes/assets/admin.css');
			wp_enqueue_script('tsteam-admin-script', TSTEAM_ROOT_DIR_URL . 'includes/assets/admin.js', array('jquery'), '2.0', true);
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