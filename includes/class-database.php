<?php

namespace MeetingWP;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Database {

	public static function init() {
		$self            = new self();
		$self->rest_base = 'meetingwp_meeting';
		add_action( 'init', array( $self, 'meetingwp_meeting_post_type' ) );
		add_action( 'rest_api_init', array( $self, 'register_meetingwp_meeting_meta' ) );
		add_action( 'rest_api_init', array( $self, 'meetingwp_meeting_rest_routes' ) );
	}

	public function meetingwp_meeting_post_type() {
		$args = array(
			'label'               => __( 'Meeting', 'meetingwp' ),
			'description'         => __( 'Post Type For MeetingWP Meetings', 'meetingwp' ),
			'supports'            => array( 'title', 'editor', 'custom-fields', 'author' ),
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

	public function register_meetingwp_meeting_meta() {
		$meeting_meta = array(
			'meetingwp_meeting_type'     => 'string',
			'meetingwp_meeting_response' => 'string',
		);

		foreach ( $meeting_meta as $meta_key => $meta_value_type ) {
			register_meta(
				'post',
				$meta_key,
				array(
					'object_subtype' => 'meetingwp_meeting',
					'type'           => $meta_value_type,
					'single'         => true,
					'show_in_rest'   => true,
				)
			);
		}
	}

	public function meetingwp_meeting_rest_routes() {
		register_rest_route(
			'meetingwp/v1',
			'/' . $this->rest_base,
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_meetings' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	public function get_meetings() {
		$args = array(
			'post_type' => $this->rest_base,
		);

		$meetings = get_posts( $args );

		$enhanced_meetings = array();
		if ( ! empty( $meetings ) ) {
			foreach ( $meetings as $meeting ) {
				$meeting_meta = array(
					'meetingwp_meeting_type'     => get_post_meta( $meeting->ID, 'meetingwp_meeting_type', true ),
					'meetingwp_meeting_title'    => get_the_title( $meeting->ID ),
					'meetingwp_meeting_id'       => get_post_meta( $meeting->ID, 'meetingwp_meeting_id', true ),
					'meetingwp_meeting_link'     => get_post_meta( $meeting->ID, 'meetingwp_meeting_link', true ),
					'meetingwp_meeting_date'     => get_post_meta( $meeting->ID, 'meetingwp_meeting_date', true ),
					'meetingwp_meeting_duration' => get_post_meta( $meeting->ID, 'meetingwp_meeting_duration', true ),
					'meetingwp_meeting_timezone' => get_post_meta( $meeting->ID, 'meetingwp_meeting_timezone', true ),
					'meetingwp_meeting_status'   => get_post_meta( $meeting->ID, 'meetingwp_meeting_status', true ),
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
