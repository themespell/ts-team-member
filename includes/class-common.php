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
		$targeted_screen_02 = 'toplevel_page_tsteam-admin';

		if ( $targeted_screen === $current_screen->base || $targeted_screen_02 === $current_screen->base) {
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


    public static function sanitize_array_data( $data ) {
            if ( ! is_array( $data ) ) {
                return array();
            }

            $sanitized = array();

            foreach ( $data as $key => $value ) {
                 if ( is_array( $value ) ) {
                      $sanitized[ $key ] = self::sanitize_array_data( $value );
                 } else {
                      $sanitized[ $key ] = self::sanitize_single_value( $value );
                 }
            }

            return $sanitized;
    }


    private static function sanitize_single_value( $value ) {
            $value = (string) $value;

            if ( filter_var( $value, FILTER_VALIDATE_URL ) ) {
                return esc_url_raw( $value );
            }

            if ( filter_var( $value, FILTER_VALIDATE_EMAIL ) ) {
                return sanitize_email( $value );
            }


            if ( is_numeric( $value ) && (int) $value == $value ) {
                return absint( $value );
            }


            if ( is_numeric( $value ) ) {
                return floatval( $value );
            }

            return sanitize_text_field( $value );
    }

    public static function sanitize_json_data($data) {
        if (empty($data)) {
            return wp_json_encode(array());
        }

        $data = wp_unslash($data);

        // If it's a JSON string, decode it first
        if (is_string($data)) {
            $decoded = json_decode($data, true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                return wp_json_encode(self::sanitize_array_data($decoded));
            }
            return wp_json_encode(array());
        }

        // If it's already an array
        if (is_array($data)) {
            return wp_json_encode(self::sanitize_array_data($data));
        }

        return wp_json_encode(array());
    }

    private static function is_json_string($string) {
        if (!is_string($string) || empty($string)) {
            return false;
        }

        $string = trim($string);

        // Must start with { or [
        if (!in_array($string[0], ['{', '['])) {
            return false;
        }

        // Try to decode
        json_decode($string);
        return json_last_error() === JSON_ERROR_NONE;
    }
}
