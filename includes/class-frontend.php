<?php

namespace TSTeam;

use TSTeam\Common;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Frontend {

	public static function init() {
		$self = new self();
		add_action( 'wp_enqueue_scripts', array( $self, 'tsteam_scripts' ) );
		add_action('elementor/editor/before_enqueue_scripts', array($self, 'tsteam_scripts'));
		add_action( 'enqueue_block_editor_assets', array( $self, 'tsteam_scripts' ) );
		add_shortcode( 'tsteam_showcase', array( $self, 'tsteam_showcase_shortcode' ) );
	}

	public function tsteam_scripts() {
		$isPro      = Common::isProActivated();
		$dependency = array( 'jquery' );

		if ( $isPro ) {
			$dependency[] = 'tsteampro-admin-script';
		}

			$root_path = defined( 'TSTEAM_ROOT_DIR_PATH' ) ? TSTEAM_ROOT_DIR_PATH : plugin_dir_path( dirname( __FILE__ ) );
			$front_css_path = $root_path . 'includes/assets/frontend/frontend.min.css';
			$front_js_path  = $root_path . 'includes/assets/frontend/frontend.min.js';
			$front_css_ver  = file_exists( $front_css_path ) ? filemtime( $front_css_path ) : null;
			$front_js_ver   = file_exists( $front_js_path ) ? filemtime( $front_js_path ) : '2.3.4';

			wp_enqueue_style( 'tsteam-member-main', TSTEAM_ROOT_DIR_URL . 'includes/assets/frontend/frontend.min.css', array(), $front_css_ver );
			wp_enqueue_script( 'tsteam-member-script', TSTEAM_ROOT_DIR_URL . 'includes/assets/frontend/frontend.min.js', $dependency, $front_js_ver, true );
			wp_localize_script(
				'tsteam-member-script',
				'tsteam_settings',
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'nonce'    => wp_create_nonce( 'tsteam_nonce' ),
					'is_pro'     => $isPro,
					'devmode'     => false,
				)
			);

		add_filter( 'script_loader_tag', array( $this, 'add_module_type_to_script' ), 10, 3 );
	}

	public function add_module_type_to_script( $tag, $handle, $src ) {
		if ( 'tsteam-member-script' === $handle ) {
			$tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';
		}
		return $tag;
	}

	public function tsteam_showcase_shortcode( $atts ) {
		$atts = shortcode_atts(
			array(
				'id' => '',
			),
			$atts,
			'tsteam_showcase'
		);

		if ( empty( $atts['id'] ) ) {
			return 'Showcase ID Not Available';
		}
		return '<div class="tsteam-showcase" data-id="' . esc_attr( $atts['id'] ) . '"></div>';
	}
}
