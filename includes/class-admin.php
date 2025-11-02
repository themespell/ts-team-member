<?php

namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Admin {

	public static function init() {
		$self = new self();
		add_action( 'admin_menu', array( $self, 'add_admin_menu' ) );
	}

	public function add_admin_menu() {
		$parent = 'tsteam-admin';

		add_menu_page(
			__( 'TS Team', 'ts-team-member' ),
			'TS Team',
			'manage_options',
			$parent,
			array( $this, 'tsteam_callback' ),
			plugin_dir_url( __FILE__ ) . 'library/icon-16x16.png',
			30
		);

		add_submenu_page(
        	$parent,
        	__( 'Dashboard', 'ts-team-member' ),
        	__( 'Dashboard', 'ts-team-member' ),
        	'manage_options',
        	'tsteam-showcase&path=dashboard',
        	array( $this, 'tsteam_callback' ),
        );

		add_submenu_page(
			$parent,
			__( 'Team Showcase', 'ts-team-member' ),
			__( 'Team Showcase', 'ts-team-member' ),
			'manage_options',
			'tsteam-showcase',
			array( $this, 'tsteam_callback' ),
		);
		add_submenu_page(
			$parent,
			__( 'Team Member', 'ts-team-member' ),
			__( 'Team Member', 'ts-team-member' ),
			'manage_options',
			'tsteam-showcase&path=team-member',
			array( $this, 'tsteam_callback' ),
		);
		add_submenu_page(
            $parent,
        	__( 'Member Category', 'ts-team-member' ),
        	__( 'Member Category', 'ts-team-member' ),
        	'manage_options',
        	'tsteam-showcase&path=member-category',
        	array( $this, 'tsteam_callback' ),
        );
		add_submenu_page(
        	$parent,
        	__( 'Tools', 'ts-team-member' ),
        	__( 'Tools', 'ts-team-member' ),
        	'manage_options',
        	'tsteam-showcase&path=tools',
        	array( $this, 'tsteam_callback' ),
        );

		remove_submenu_page($parent, $parent);
	}

	public function tsteam_callback() {
		?>
		<div id="tsteam-admin"></div>
		<?php
	}
}