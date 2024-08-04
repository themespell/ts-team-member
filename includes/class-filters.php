<?php
/**
 * File documentation for Filter class.
 *
 * This file contains the Filter class definition.
 * This class is responsible for loading common filters for WordPress.
 *
 * @package MeetingWP
 */

namespace MeetingWP;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Channel
 *
 * This class handles channels.
 */
class Filters {

	/**
	 * Initializes the class.
	 */
	public static function init() {
		$self = new self();
		add_filter( 'upload_mimes', array( $self, 'allow_json_upload' ), 10, 1 );
	}

	/**
	 * Loads channels.
	 */
	public function allow_json_upload( $file_types ) {
		$file_types = array(
			'json' => 'application/json',
		);

		return $file_types;
	}
}
