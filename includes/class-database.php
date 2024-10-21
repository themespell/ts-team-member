<?php

namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Database {

	public static function init() {
		$self            = new self();
		$self->rest_base = 'tsteam-showcase';
		add_action( 'init', array( $self, 'tsteam_post_type' ) );
		add_action( 'init', array( $self, 'tsteam_member_post_type' ) );
		add_action( 'rest_api_init', array( $self, 'register_tsteam_meta' ) );
		add_action( 'rest_api_init', array( $self, 'register_tsteam_member_meta' ) );
		add_action( 'rest_api_init', array( $self, 'tsteam_rest_routes' ) );
	}

	public function tsteam_post_type() {
		$args = array(
			'label'               => __( 'TS Team', 'ts-team-member' ),
			'description'         => __( 'Post Type For TS Team', 'ts-team-member' ),
			'supports'            => array( 'title', 'author' ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => false,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
			'show_in_rest'        => true,
		);

		register_post_type( $this->rest_base, $args );
	}

	public function tsteam_member_post_type() {
		$args = array(
			'label'               => __( 'TS Team Member', 'ts-team-member' ),
			'description'         => __( 'Post Type For TS Team member', 'ts-team-member' ),
			'supports'            => array( 'title', 'author' ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => false,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
			'show_in_rest'        => false,
		);

		register_post_type( 'tsteam-member', $args );
	}

	public function register_tsteam_meta() {
		$meeting_meta = array(
			'tsteam_information'  => 'string',
			'tsteam_team_members' => 'array',
		);

		foreach ( $meeting_meta as $meta_key => $meta_value_type ) {
			register_meta(
				'post',
				$meta_key,
				array(
					'object_subtype'    => 'tsteam-showcase',
					'type'              => $meta_value_type,
					'single'            => true,
					'show_in_rest'      => false,
					'sanitize_callback' => array( $this, 'sanitize_team_members_meta' ),
					'auth_callback'     => function () {
						return current_user_can( 'edit_posts' );
					},
				)
			);
		}
	}

	public function sanitize_team_members_meta( $meta_value ) {
		return array_map( 'intval', (array) $meta_value );
	}

	public function register_tsteam_member_meta() {
		$tsteam_member_meta = array(
			'tsteam_member_information' => 'string',
			'tsteam_member_image'       => 'string',
		);

		foreach ( $tsteam_member_meta as $meta_key => $meta_value_type ) {
			register_meta(
				'post',
				$meta_key,
				array(
					'object_subtype' => 'tsteam-member',
					'type'           => $meta_value_type,
					'single'         => true,
					'show_in_rest'   => true,
				)
			);
		}
	}

	public function tsteam_rest_routes() {
		register_rest_route(
			'tsteam-showcase/v1',
			'/' . $this->rest_base,
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_team_data' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	public function get_team_data() {
		$args = array(
			'post_type' => $this->rest_base,
		);

		$meetings = get_posts( $args );

		$enhanced_meetings = array();
		if ( ! empty( $meetings ) ) {
			foreach ( $meetings as $meeting ) {
				$meeting_meta = array(
					'meetingwp_meeting_title' => get_the_title( $meeting->ID ),
					'tsteam_information'      => get_post_meta( $meeting->ID, 'tsteam_information', true ),
				);

				$enhanced_meeting    = $meeting_meta;
				$enhanced_meetings[] = $enhanced_meeting;
			}

			return rest_ensure_response( $enhanced_meetings );
		} else {
			return wp_send_json_error( 'no_meetings_found', 'No meetings found.', array( 'status' => 404 ) );
		}
	}
}
