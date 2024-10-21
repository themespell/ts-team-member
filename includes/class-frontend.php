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
		add_shortcode( 'tsteam_showcase', array( $self, 'tsteam_showcase_shortcode' ) );
	}

	public function tsteam_scripts() {
		$isPro      = Common::isProActivated();
		$dependency = array( 'jquery' );

		if ( $isPro ) {
			$dependency[] = 'tsteampro-admin-script';
		}

			wp_enqueue_style( 'tsteam-member-main', TSTEAM_ROOT_DIR_URL . 'includes/assets/frontend.css' );
			wp_enqueue_script( 'tsteam-member-script', TSTEAM_ROOT_DIR_URL . 'includes/assets/frontend.js', $dependency, '2.0', true );
			wp_localize_script(
				'tsteam-member-script',
				'tsteam_settings',
				array(
					'ajax_url' => admin_url( 'admin-ajax.php' ),
					'nonce'    => wp_create_nonce( 'tsteam_nonce' ),
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
