<?php
/**
 * File documentation for Common classes.
 *
 * This class is responsible for loading common methods for TSTeam.
 *
 * @package TSTeam
 */

namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Common
 *
 * This class handles common methods.
 */
class Common {

	public static function isProActivated() {
		include_once ABSPATH . 'wp-admin/includes/plugin.php';
		$plugin_file = 'tsteam-pro/class-tsteam-pro.php';
		return is_plugin_active( $plugin_file );
	}

	public static function get_current_screen_info() {
		$current_screen  = get_current_screen();
		$targeted_screen = 'ts-team_page_tsteam-showcase';

		if ( $targeted_screen === $current_screen->base ) {
			return true;
		}
		return false;
	}

	public static function get_default_showcase_settings() {
		$showcase_settings = array(
			'layout' => 'Card',
			'view'   => 'grid',
		);

		return wp_json_encode( $showcase_settings );
	}
}
