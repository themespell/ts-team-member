<?php

namespace TSTeam;

use TSTeam\Common;
use TSTeam\Strings;

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
		$isEditor = Common::is_showcase_editor_screen();
		$isPro       = Common::isProActivated();
		$dependency  = array( 'jquery', 'wp-i18n' );

		if ( $isEditor && $isPro ) {
			$dependency[] = 'tsteampro-admin-script';
		}

		if ( $screen_info ) {
            wp_enqueue_media();

			$root_path = defined( 'TSTEAM_ROOT_DIR_PATH' ) ? TSTEAM_ROOT_DIR_PATH : plugin_dir_path( dirname( __FILE__ ) );
			$admin_css_path = $root_path . 'includes/assets/admin/admin.min.css';
			$admin_js_path  = $root_path . 'includes/assets/admin/admin.js';
			$admin_css_ver  = file_exists( $admin_css_path ) ? filemtime( $admin_css_path ) : null;
			$admin_js_ver   = file_exists( $admin_js_path ) ? filemtime( $admin_js_path ) : '2.3.5';

			wp_enqueue_style( 'tsteam-admin-main', TSTEAM_ROOT_DIR_URL . 'includes/assets/admin/admin.min.css', array(), $admin_css_ver );
			// Dev/testing: load non-minified bundle so fixes are applied immediately
			wp_enqueue_script( 'tsteam-admin-script', TSTEAM_ROOT_DIR_URL . 'includes/assets/admin/admin.js', $dependency, $admin_js_ver, true );
			wp_set_script_translations('tsteam-admin-script', 'ts-team-member', plugin_dir_path(__FILE__)  . 'languages');

			wp_localize_script(
				'tsteam-admin-script',
				'tsteam_settings',
				array(
					'ajax_url'   => admin_url( 'admin-ajax.php' ),
					'admin_url'  => get_admin_url(),
					'nonce'      => wp_create_nonce( 'tsteam_nonce' ),
					'wp_url'     => site_url(),
					'assets_path'=> TSTEAM_ROOT_DIR_URL . 'includes/library/',
					'is_pro'     => $isPro,
				)
			);

			wp_localize_script(
                'tsteam-admin-script',
                'tsteam_i18n',
                 Strings::get_translated_strings()
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
