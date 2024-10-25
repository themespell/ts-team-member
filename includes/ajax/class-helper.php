<?php
namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Helper {

	public static function get_team_members_by_ids( $team_member_ids ) {
		$team_member_ids = is_array( $team_member_ids ) ? array_map( 'intval', $team_member_ids ) : array();

		if ( empty( $team_member_ids ) ) {
			return array(
				'error'   => true,
				'message' => 'No team member IDs provided',
			);
		}

		$args = array(
			'post_type'      => 'tsteam-member',
			'post__in'       => $team_member_ids,
			'posts_per_page' => -1,
			'orderby'        => 'ID',
			'order'          => 'ASC',
		);

		$query = new \WP_Query( $args );

		if ( ! $query->have_posts() ) {
			return array(
				'error'   => true,
				'message' => 'No team members found',
			);
		}

		$team_members = array();

		while ( $query->have_posts() ) {
			$query->the_post();
			$post_id           = get_the_ID();

			$member_meta        = get_post_meta( $post_id, 'tsteam_member_info', true );

			$team_members[] = array(
				'post_id'           => $post_id,
				'title'             => get_the_title(),
				'content'           => get_the_content(),
				'meta_data' => $member_meta,
			);
		}

		wp_reset_postdata();

		return array(
			'error'        => false,
			'team_members' => $team_members,
		);
	}

	public static function team_member_fields() {
		return array(
			'name'        => isset( $_POST['member_name'] ) ? sanitize_text_field( wp_unslash( $_POST['member_name'] ) ) : '',
			'description' => isset( $_POST['member_description'] ) ? sanitize_text_field( wp_unslash( $_POST['member_description'] ) ) : '',
			'designation' => isset( $_POST['member_designation'] ) ? sanitize_text_field( wp_unslash( $_POST['member_designation'] ) ) : '',
			'image'       => isset( $_POST['member_image'] ) ? esc_url_raw( wp_unslash( $_POST['member_image'] ) ) : '',
			'email'       => isset( $_POST['member_email'] ) ? sanitize_email( wp_unslash( $_POST['member_email'] ) ) : '',
			'phone'       => isset( $_POST['member_phone'] ) ? sanitize_text_field( wp_unslash( $_POST['member_phone'] ) ) : '',
		);
	}
	
}
