<?php
namespace TSTeam;

use TSTeam\Helper;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Migration {

	public static function init() {
		$self = new self();
		// WPS Team Migration Ajax
		add_action( 'wp_ajax_tsteam/wps_team_members/migrate', array( $self, 'migrate_wps_team_members' ) );

		// WP Team Migration Ajax
        add_action( 'wp_ajax_tsteam/wp_team/migrate', array( $self, 'migrate_sptp_members_to_tsteam' ) );

        // Team by Radius Theme
        add_action( 'wp_ajax_tsteam/radius_team/migrate', array( $self, 'migrate_team_to_tsteam' ) );
	}

    public function migrate_wps_team_members() {
        // Verify the nonce for security
        check_ajax_referer( 'tsteam_nonce' );
        if ( ! current_user_can( 'manage_options' ) ) {
              wp_die();
        }

        // Get all posts of type 'wps-team-members'
        $args = array(
            'post_type' => 'wps-team-members',
            'posts_per_page' => -1, // Get all posts
        );

        $team_members = get_posts($args);

        if (empty($team_members)) {
            wp_send_json_error('No Team Members Found to Migrate.');
        }

        $migrated_count = 0;

        // Define the meta keys to migrate
        $meta_keys = array(
            '_designation',
            '_email',
            '_mobile',
            '_telephone',
            '_experience',
            '_website',
            '_company',
            '_ribbon',
            '_link_1',
            '_link_2',
            '_color',
            '_education',
            '_social_links',
            '_skills',
        );

        foreach ($team_members as $team_member) {
            // Create a new post of type 'tsteam-member'
            $new_post = array(
                'post_title'   => $team_member->post_title,
                'post_content' => $team_member->post_content,
                'post_status'  => $team_member->post_status,
                'post_type'    => 'tsteam-member',
            );

            // Insert the new post
            $new_post_id = wp_insert_post($new_post);

            if ($new_post_id) {
                $featured_image_id = get_post_thumbnail_id($team_member->ID);
                if ($featured_image_id) {
                    set_post_thumbnail($new_post_id, $featured_image_id);
                    $featured_image_url = wp_get_attachment_url($featured_image_id);
                }

                $tsteam_member_info = array();

                foreach ($meta_keys as $meta_key) {
                    $meta_value = get_post_meta($team_member->ID, $meta_key, true);
                    if ($meta_value) {
                        $clean_key = ltrim($meta_key, '_');
                        $tsteam_member_info[$clean_key] = $meta_value;
                    }
                }

                if (!empty($featured_image_url)) {
                    $tsteam_member_info['image'] = $featured_image_url;
                }

                if (!empty($tsteam_member_info)) {
                    update_post_meta($new_post_id, 'tsteam_member_info', $tsteam_member_info);
                }

                $migrated_count++;
            }
        }

        wp_send_json_success("Successfully Migrated $migrated_count Team Members.");
    }

    public function migrate_sptp_members_to_tsteam() {
        check_ajax_referer( 'tsteam_nonce' );
                if ( ! current_user_can( 'manage_options' ) ) {
                      wp_die();
                }

        $args = array(
            'post_type' => 'sptp_member',
            'posts_per_page' => -1, // Get all posts
        );

        $sptp_members = get_posts($args);

        if (empty($sptp_members)) {
            wp_send_json_error('No sptp members found to migrate.');
        }

        $migrated_count = 0;

        // Define the meta keys to migrate and their corresponding tsteam_member_info keys
        $meta_keys_mapping = array(
            'sptp_job_title' => 'designation',
            'sptp_email' => 'email',
            'sptp_mobile' => 'mobile',
            'sptp_phone' => 'telephone',
            'sptp_experience' => 'experience',
            'sptp_website' => 'website',
            'sptp_location' => 'company',
            'sptp_job_degree' => 'education',
            'sptp_member_social' => 'social_links',
            'sptp_skills' => 'skills',
        );

        foreach ($sptp_members as $sptp_member) {
            $new_post = array(
                'post_title'   => $sptp_member->post_title,
                'post_content' => $sptp_member->post_content,
                'post_status'  => $sptp_member->post_status,
                'post_type'    => 'tsteam-member',
            );

            $new_post_id = wp_insert_post($new_post);

            if ($new_post_id) {
                $featured_image_id = get_post_thumbnail_id($sptp_member->ID);
                if ($featured_image_id) {
                    set_post_thumbnail($new_post_id, $featured_image_id);
                    $featured_image_url = wp_get_attachment_url($featured_image_id);
                }

                $tsteam_member_info = array();

                foreach ($meta_keys_mapping as $sptp_key => $tsteam_key) {
                    $meta_value = get_post_meta($sptp_member->ID, $sptp_key, true);
                    if ($meta_value) {
                        // Handle special cases (e.g., social links)
                        if ($sptp_key === 'sptp_member_social' && is_array($meta_value)) {
                            $meta_value = array_map(function ($social_link) {
                                return array(
                                    'network' => $social_link['social_group'], // Adjust based on your data structure
                                    'url' => $social_link['social_link'],
                                );
                            }, $meta_value);
                        }

                        // Save the meta data
                        $tsteam_member_info[$tsteam_key] = $meta_value;
                    }
                }

                // Add the featured image URL to the tsteam_member_info array
                if (!empty($featured_image_url)) {
                    $tsteam_member_info['image'] = $featured_image_url;
                }

                // Save the tsteam_member_info meta
                if (!empty($tsteam_member_info)) {
                    update_post_meta($new_post_id, 'tsteam_member_info', $tsteam_member_info);
                }

                // Optionally, delete the old post
                // wp_delete_post($sptp_member->ID, true);

                $migrated_count++;
            }
        }

        // Send a success response
        wp_send_json_success("Successfully migrated $migrated_count sptp members to tsteam-member.");
    }

    public function migrate_team_to_tsteam() {
        // Verify the nonce for security
        check_ajax_referer('tsteam_nonce', '_ajax_nonce');

        // Get all posts of type 'team'
        $args = array(
            'post_type' => 'team',
            'posts_per_page' => -1, // Get all posts
        );

        $team_members = get_posts($args);

        if (empty($team_members)) {
            wp_send_json_error('No team members found to migrate.');
        }

        $migrated_count = 0;

        // Define the meta keys to migrate and their corresponding tsteam_member_info keys
        $meta_keys_mapping = array(
            'short_bio' => 'description', // Map short_bio to description
            'experience_year' => 'experience',
            'email' => 'email',
            'telephone' => 'telephone',
            'mobile' => 'mobile',
            'web_url' => 'website',
            'location' => 'company',
            'social' => 'social_links', // Map social links
        );

        foreach ($team_members as $team_member) {
            // Create a new post of type 'tsteam-member'
            $new_post = array(
                'post_title'   => $team_member->post_title,
                'post_content' => $team_member->post_content,
                'post_status'  => $team_member->post_status,
                'post_type'    => 'tsteam-member',
            );

            // Insert the new post
            $new_post_id = wp_insert_post($new_post);

            if ($new_post_id) {
                // Migrate the featured image (post thumbnail)
                $featured_image_id = get_post_thumbnail_id($team_member->ID);
                if ($featured_image_id) {
                    // Set the featured image for the new post
                    set_post_thumbnail($new_post_id, $featured_image_id);

                    // Get the featured image URL
                    $featured_image_url = wp_get_attachment_url($featured_image_id);
                }

                // Migrate individual meta keys into the tsteam_member_info array
                $tsteam_member_info = array();

                foreach ($meta_keys_mapping as $team_key => $tsteam_key) {
                    $meta_value = get_post_meta($team_member->ID, $team_key, true);

                    if ($meta_value) {
                        // Handle special cases (e.g., social links)
                        if ($team_key === 'social' && is_array($meta_value)) {
                            $meta_value = array_map(function ($social_link) {
                                return array(
                                    'network' => $social_link['network'], // Adjust based on your data structure
                                    'url' => $social_link['url'],
                                );
                            }, $meta_value);
                        }

                        // Save the meta data
                        $tsteam_member_info[$tsteam_key] = $meta_value;
                    }
                }

                // Add the featured image URL to the tsteam_member_info array
                if (!empty($featured_image_url)) {
                    $tsteam_member_info['image'] = $featured_image_url;
                }

                // Save the tsteam_member_info meta
                if (!empty($tsteam_member_info)) {
                    update_post_meta($new_post_id, 'tsteam_member_info', $tsteam_member_info);
                }

                // Optionally, delete the old post
                // wp_delete_post($team_member->ID, true);

                $migrated_count++;
            }
        }

        // Send a success response
        wp_send_json_success("Successfully migrated $migrated_count team members to tsteam-member.");
    }

}
