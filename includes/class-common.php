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
        include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
        $plugin_file = 'tsteam-pro/class-tsteam-pro.php';
        return is_plugin_active($plugin_file);
    }

}
