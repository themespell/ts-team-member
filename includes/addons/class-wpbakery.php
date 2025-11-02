<?php

namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class WPBakery {

    public static function init() {
        if ( ! defined( 'WPB_VC_VERSION' ) ) {
            return;
        }

        $self = new self();
        add_action( 'vc_before_init', array( $self, 'register_ts_team_widget' ) );
        add_action( 'admin_enqueue_scripts', array( $self, 'enqueue_editor_scripts' ) );
    }

    public function register_ts_team_widget() {
        require_once( __DIR__ . '/wpbakery/tsteam-showcase.php' );
        new \TSTeam_WPBakery_Showcase();
    }

    public function enqueue_editor_scripts( $hook ) {
        if ( ! in_array( $hook, [ 'post.php', 'post-new.php' ] ) ) {
            return;
        }

        global $post;
        if ( ! $post ) {
            return;
        }

        if ( ! vc_is_inline() && function_exists( 'vc_is_page_editable' ) && ! vc_is_page_editable() ) {
            return;
        }
    }
}