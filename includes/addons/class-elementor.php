<?php

namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Elementor {

    public static function init() {
        $self = new self();
        add_action('elementor/elements/categories_registered', array($self, 'register_ts_team_category'));
        add_action('elementor/widgets/register', array($self, 'register_ts_team_widget'));
    }

    public function register_ts_team_category($elements_manager) {
        $elements_manager->add_category(
            'ts-team-widgets',
            [
                'title' => esc_html__('TS Team Widgets', 'ts-team-member'),
            ]
        );
    }

    public function register_ts_team_widget($widgets_manager) {
        require_once(__DIR__ . '/elementor/tsteam-showcase.php');
        $widgets_manager->register(new \TSTeam_Showcase());
    }
}