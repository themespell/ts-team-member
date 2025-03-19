<?php
namespace TSTeam;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Gutenberg {

    public static function init() {
        $self = new self();
        add_action('init', array($self, 'register_blocks'));
    }

    /**
     * Register the Team Showcase block.
     */
    public function register_blocks() {
        // Check if block.json exists
        $block_json_path = TSTEAM_ROOT_DIR_PATH . 'blocks/block.json';

        if (file_exists($block_json_path)) {
            // Modern block registration with block.json
            register_block_type(
                $block_json_path,
                array(
                    'render_callback' => array($this, 'render_tsteam_showcase_block'),
                )
            );
        }
    }

    /**
     * Render the Team Showcase block on the server.
     *
     * @param array $attributes The block attributes.
     * @return string The block HTML.
     */
    public function render_tsteam_showcase_block($attributes) {
        $team_id = isset($attributes['teamId']) ? $attributes['teamId'] : '';

        // If no team ID is selected, show an error message
        if (empty($team_id)) {
            return '<div class="tsteam-error">Please select a Team Showcase.</div>';
        }

        // Use output buffering to capture the shortcode output
        ob_start();
        echo do_shortcode('[tsteam_showcase id="' . esc_attr($team_id) . '"]');
        return ob_get_clean();
    }
}