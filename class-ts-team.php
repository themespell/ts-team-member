<?php

	/**
	 *
	 * @link              https://themespell.com/
	 * @since             0.0.5
	 * @package           Team Showcase Plugin
	 *
	 * @wordpress-plugin
	 * Plugin Name:       TS Team Member Showcase
	 * Plugin URI:        https://themespell.com/ts-team
	 * Description:       Team Showcase Plugin
	 * Version:           0.0.5
	 * Author:            Themespell
	 * Author URI:        https://themespell.com/
	 * License:           GPL-2.0+
	 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
	 * Text Domain:       ts-team-member
	 * Tested up to:      6.6.2
	 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class TSTeam {

	private function __construct() {
		$this->define_constants();
		$this->load_dependency();
		register_activation_hook( __FILE__, array( $this, 'activate' ) );
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );
		add_action( 'plugins_loaded', array( $this, 'init_plugin' ) );
	}

	public static function init() {
		static $instance = false;

		if ( ! $instance ) {
			$instance = new self();
		}

			return $instance;
	}

	public function define_constants() {
		define( 'TSTEAM_VERSION', '0.0.4' );
		define( 'TSTEAM_PLUGIN_FILE', __FILE__ );
		define( 'TSTEAM_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
		define( 'TSTEAM_ROOT_DIR_PATH', plugin_dir_path( __FILE__ ) );
		define( 'TSTEAM_ROOT_DIR_URL', plugin_dir_url( __FILE__ ) );
		define( 'TSTEAM_INCLUDES_DIR_PATH', TSTEAM_ROOT_DIR_PATH . 'includes/' );
		define( 'TSTEAM_PLUGIN_SLUG', 'ts-team-member' );
	}

	public function on_plugins_loaded() {
		do_action( 'tsteam_loaded' );
	}

	public function init_plugin() {
		$this->load_textdomain();
		$this->dispatch_hooks();
	}

	public function dispatch_hooks() {
		TSTeam\Autoload::init();
		TSTeam\Database::init();
		TSTeam\Admin::init();
		TSTeam\AJAX::init();
		TSTeam\Enqueue::init();
		TSTeam\Frontend::init();
	}

	public function load_textdomain() {
		load_plugin_textdomain(
			'ts-team-member',
			false,
			dirname( plugin_basename( __FILE__ ) ) . '/languages/'
		);
	}

	public function load_dependency() {
		require_once TSTEAM_INCLUDES_DIR_PATH . 'class-autoload.php';
	}

	public function activate() {
	}

	public function deactivate() {
	}
}

function tsteam_start() {
	return TSTeam::init();
}


	tsteam_start();
