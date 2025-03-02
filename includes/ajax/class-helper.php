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

	public static function team_member_fields($actiontype) {
		$post_data = ($actiontype === 'update') ? $_POST['data'] : $_POST;
	
		return array(
			'name'         => isset( $post_data['member_name'] ) ? sanitize_text_field( wp_unslash( $post_data['member_name'] ) ) : '',
			'description'  => isset( $post_data['member_description'] ) ? sanitize_text_field( wp_unslash( $post_data['member_description'] ) ) : '',
			'designation'  => isset( $post_data['member_designation'] ) ? sanitize_text_field( wp_unslash( $post_data['member_designation'] ) ) : '',
			'image'        => isset( $post_data['member_image'] ) ? esc_url_raw( wp_unslash( $post_data['member_image'] ) ) : '',
			'email'        => isset( $post_data['member_email'] ) ? sanitize_email( wp_unslash( $post_data['member_email'] ) ) : '',
			'phone'        => isset( $post_data['member_phone'] ) ? sanitize_text_field( wp_unslash( $post_data['member_phone'] ) ) : '',
			'telephone'    => isset( $post_data['member_telephone'] ) ? sanitize_text_field( wp_unslash( $post_data['member_telephone'] ) ) : '',
			'experience'   => isset( $post_data['member_experience'] ) ? sanitize_text_field( wp_unslash( $post_data['member_experience'] ) ) : '',
			'company'      => isset( $post_data['member_company'] ) ? sanitize_text_field( wp_unslash( $post_data['member_company'] ) ) : '',
			'location'     => isset( $post_data['member_location'] ) ? sanitize_text_field( wp_unslash( $post_data['member_location'] ) ) : '',
			'information'  => isset( $post_data['member_information'] ) ? $post_data['member_information'] : '',
			'website'      => isset( $post_data['member_website'] ) ? sanitize_text_field( wp_unslash( $post_data['member_website'] ) ) : '',
			'resume'       => isset( $post_data['member_resume'] ) ? sanitize_text_field( wp_unslash( $post_data['member_resume'] ) ) : '',
			'hireLink'     => isset( $post_data['member_hire'] ) ? sanitize_text_field( wp_unslash( $post_data['member_hire'] ) ) : '',
			'donationLink' => isset( $post_data['member_donation'] ) ? sanitize_text_field( wp_unslash( $post_data['member_donation'] ) ) : '',
			'socialLinks'  => isset( $post_data['member_social'] ) ? wp_json_encode( wp_unslash( $post_data['member_social'] ), true ) : array(),
			'skills'       => isset( $post_data['member_skills'] ) ? wp_json_encode( wp_unslash( $post_data['member_skills'] ), true ) : array()
		);
	}	
	
}
