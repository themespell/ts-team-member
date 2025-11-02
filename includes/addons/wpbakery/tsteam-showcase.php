<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class TSTeam_WPBakery_Showcase {

    public function __construct() {
        $this->register_widget();
        add_shortcode( 'ts_team_wpbakery', array( $this, 'render_widget' ) );
    }

    private function register_widget() {
        $team_posts = get_posts([
            'post_type' => 'tsteam-showcase',
            'posts_per_page' => -1,
            'orderby' => 'title',
            'order' => 'ASC',
        ]);

        $options = [ esc_html__('Select a Team Showcase', 'ts-team-member') => '' ];
        foreach ( $team_posts as $post ) {
            // translators: %d is the post ID number
            $title = !empty($post->post_title) ? $post->post_title : sprintf(__('#%d (No title)', 'ts-team-member'), $post->ID);
            $options[$title] = $post->ID;
        }

        vc_map([
            'name' => esc_html__( 'TS Team Showcase', 'ts-team-member' ),
            'base' => 'ts_team_wpbakery',
            'description' => esc_html__( 'Display your team showcase', 'ts-team-member' ),
            'category' => esc_html__( 'TS Team', 'ts-team-member' ),
            'icon' => 'icon-wpb-ui-separator-label',
            'show_settings_on_create' => true,
            'params' => [
                [
                    'type' => 'dropdown',
                    'heading' => esc_html__( 'Select Team Showcase', 'ts-team-member' ),
                    'param_name' => 'team_id',
                    'value' => $options,
                    'description' => esc_html__( 'Choose which team showcase to display', 'ts-team-member' ),
                    'admin_label' => true,
                    'save_always' => true,
                ],
            ]
        ]);
    }

    public function render_widget( $atts ) {
        $atts = shortcode_atts([
            'team_id' => '',
        ], $atts, 'ts_team_wpbakery' );

        if ( empty( $atts['team_id'] ) ) {
            return '<div class="tsteam-placeholder">' .
                   esc_html__( 'Please select a team showcase to display', 'ts-team-member' ) .
                   '</div>';
        }

        return do_shortcode( '[tsteam_showcase id="' . esc_attr( $atts['team_id'] ) . '"]' );
    }
}