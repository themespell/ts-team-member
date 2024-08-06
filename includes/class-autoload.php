<?php
namespace TSTeam;

class Autoload {

	public static function autoload() {
		$directories = array(
			TSTEAM_INCLUDES_DIR_PATH,
			// MEETINGWP_INCLUDES_DIR_PATH . 'channel/',
		);

		foreach ( $directories as $directory ) {
			$files = glob( $directory . '*.php' );

			foreach ( $files as $file ) {
				if ( file_exists( $file ) ) {
					require_once $file;
				}
			}
		}
	}

	public static function init() {
		spl_autoload_register( array( __CLASS__, 'autoload' ) );
	}
}

Autoload::init();
