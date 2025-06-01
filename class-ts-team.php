<?php

	/**
	 *
	 * @link              https://themespell.com/
	 * @since             1.0.6
	 * @package           Team Member & Showcase Plugin For WordPress
	 *
	 * @wordpress-plugin
	 * Plugin Name:       TS Team Member Showcase
	 * Plugin URI:        https://themespell.com/ts-team-member/
	 * Description:       Best Team Members, Team Showcase, Team Member Slider Plugin for WordPress
	 * Version:           1.0.6
	 * Author:            Themespell
	 * Author URI:        https://themespell.com/
	 * License:           GPL-2.0+
	 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
	 * Text Domain:       ts-team-member
	 * Tested up to:      6.8.1
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
		add_action( 'admin_init', array( $this, 'check_activation_redirect' ) );
	}

	public static function init() {
		static $instance = false;

		if ( ! $instance ) {
			$instance = new self();
		}

			return $instance;
	}

	public function define_constants() {
		define( 'TSTEAM_VERSION', '1.0.6' );
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
		$this->init_freemius();
		$this->dispatch_hooks();
	}

	public function dispatch_hooks() {
		TSTeam\Autoload::init();
		TSTeam\Database::init();
		TSTeam\Admin::init();
		TSTeam\AJAX::init();
		TSTeam\Enqueue::init();
		TSTeam\Frontend::init();
		TSTeam\Addons::init();
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
	    set_transient( 'tsteam_plugin_activated', true, 30 );
	}

	public function deactivate() {
	    delete_transient( 'tsteam_plugin_activated' );
	}

    public function check_activation_redirect() {
            if ( get_transient( 'tsteam_plugin_activated' ) ) {
                delete_transient( 'tsteam_plugin_activated' );
                wp_redirect( admin_url( 'admin.php?page=tsteam-admin' ) );
                exit;
            }
    }

    public function init_freemius() {
            if ( ! function_exists( 'tsteammember' ) ) {
                function tsteammember() {
                    global $tsteammember;

                    if ( ! isset( $tsteammember ) ) {
                        require_once TSTEAM_INCLUDES_DIR_PATH . 'library/vendor/freemius/wordpress-sdk/start.php';
                        $tsteammember = fs_dynamic_init( array(
                            'id'                  => '17306',
                            'slug'                => 'ts-team-member',
                            'premium_slug'        => 'tsteam-pro',
                            'type'                => 'plugin',
                            'public_key'          => 'pk_cb7074e85c7a5734ac990c844add0',
                            'is_premium'          => false,
                            'has_premium_version' => true,
                            'has_addons'          => false,
                            'has_paid_plans'      => true,
                            'menu' => array(
                                'slug'           => 'tsteam-admin',
                                'first-path'     => 'admin.php?page=tsteam-showcase',
                            ),
                        ) );
                    }

                    return $tsteammember;
                }
                tsteammember();
                do_action( 'tsteammember_loaded' );
            }
    }
}

function tsteam_start() {
	return TSTeam::init();
}


	tsteam_start();
