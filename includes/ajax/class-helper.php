<?php
namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Helper {

    public static function get_team_members_by_ids($team_member_ids) {
        $team_member_ids = is_array($team_member_ids) ? array_map('intval', $team_member_ids) : array();

        if (empty($team_member_ids)) {
            return array('error' => true, 'message' => 'No team member IDs provided');
        }

        $args = array(
            'post_type'      => 'tsteam-member',
            'post__in'       => $team_member_ids,
            'posts_per_page' => -1,
        );

        $query = new \WP_Query($args);

        if (!$query->have_posts()) {
            return array('error' => true, 'message' => 'No team members found');
        }

        $team_members = array();

        while ($query->have_posts()) {
            $query->the_post();
            $post_id = get_the_ID();
            $team_member_image = get_post_meta($post_id, 'tsteam_member_image', true);

            $team_members[] = array(
                'post_id'   => $post_id,
                'title'     => get_the_title(),
                'content'   => get_the_content(),
                'team_member_image' => $team_member_image
            );
        }

        wp_reset_postdata();

        return array('error' => false, 'team_members' => $team_members);
    }
	
}