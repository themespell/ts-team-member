<?php

namespace TSTeam;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Taxonomy {

	public static function init() {
		$self = new self();
		add_action( 'init', array( $self, 'register_member_category' ) );
		add_action( 'rest_api_init', array( $self, 'register_taxonomy_meta' ) );
		add_action( 'rest_api_init', array( $self, 'register_taxonomy_rest_routes' ) );
	}

	/**
	 * Register Member Category Taxonomy
	 */
	public function register_member_category() {
		$labels = array(
			'name'              => __( 'Member Categories', 'ts-team-member' ),
			'singular_name'     => __( 'Member Category', 'ts-team-member' ),
			'search_items'      => __( 'Search Categories', 'ts-team-member' ),
			'all_items'         => __( 'All Categories', 'ts-team-member' ),
			'parent_item'       => __( 'Parent Category', 'ts-team-member' ),
			'parent_item_colon' => __( 'Parent Category:', 'ts-team-member' ),
			'edit_item'         => __( 'Edit Category', 'ts-team-member' ),
			'update_item'       => __( 'Update Category', 'ts-team-member' ),
			'add_new_item'      => __( 'Add New Category', 'ts-team-member' ),
			'new_item_name'     => __( 'New Category Name', 'ts-team-member' ),
			'menu_name'         => __( 'Categories', 'ts-team-member' ),
		);

		$args = array(
			'labels'            => $labels,
			'hierarchical'      => true,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => true,
			'show_tagcloud'     => true,
			'show_in_rest'      => true,
			'rest_base'         => 'tsteam-member-categories',
			'rewrite'           => array(
				'slug'       => 'team-category',
				'with_front' => false,
			),
		);

		register_taxonomy( 'tsteam-member-category', array( 'tsteam-member' ), $args );
	}

	/**
	 * Register taxonomy meta fields
	 */
	public function register_taxonomy_meta() {
		// Register meta for category taxonomy
		register_term_meta(
			'tsteam-member-category',
			'category_color',
			array(
				'type'         => 'string',
				'single'       => true,
				'show_in_rest' => true,
				'description'  => __( 'Category color for display', 'ts-team-member' ),
			)
		);

		register_term_meta(
			'tsteam-member-category',
			'category_icon',
			array(
				'type'         => 'string',
				'single'       => true,
				'show_in_rest' => true,
				'description'  => __( 'Category icon URL', 'ts-team-member' ),
			)
		);

		register_term_meta(
			'tsteam-member-category',
			'category_order',
			array(
				'type'         => 'integer',
				'single'       => true,
				'show_in_rest' => true,
				'description'  => __( 'Display order of category', 'ts-team-member' ),
			)
		);
	}

	/**
	 * Register REST API routes for taxonomies
	 */
	public function register_taxonomy_rest_routes() {
		// Get all categories with member count
		register_rest_route(
			'tsteam-showcase/v1',
			'/categories',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_categories' ),
				'permission_callback' => '__return_true',
			)
		);

		// Get members by category
		register_rest_route(
			'tsteam-showcase/v1',
			'/categories/(?P<id>\d+)/members',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_members_by_category' ),
				'permission_callback' => '__return_true',
				'args'                => array(
					'id' => array(
						'validate_callback' => function( $param ) {
							return is_numeric( $param );
						},
					),
				),
			)
		);

		// Get all tags
		register_rest_route(
			'tsteam-showcase/v1',
			'/tags',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_tags' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * Get all categories with enhanced data
	 */
	public function get_categories( $request ) {
		$args = array(
			'taxonomy'   => 'tsteam-member-category',
			'hide_empty' => false,
			'orderby'    => 'meta_value_num',
			'meta_key'   => 'category_order',
			'order'      => 'ASC',
		);

		$categories = get_terms( $args );

		if ( is_wp_error( $categories ) ) {
			return wp_send_json_error( 'no_categories_found', 'No categories found.', array( 'status' => 404 ) );
		}

		$enhanced_categories = array();
		foreach ( $categories as $category ) {
			$enhanced_categories[] = array(
				'term_id'     => $category->term_id,
				'name'        => $category->name,
				'slug'        => $category->slug,
				'description' => $category->description,
				'count'       => $category->count,
				'color'       => get_term_meta( $category->term_id, 'category_color', true ),
				'icon'        => get_term_meta( $category->term_id, 'category_icon', true ),
				'order'       => get_term_meta( $category->term_id, 'category_order', true ),
			);
		}

		return rest_ensure_response( $enhanced_categories );
	}

	/**
	 * Get members by category ID
	 */
	public function get_members_by_category( $request ) {
		$category_id = $request->get_param( 'id' );

		$args = array(
			'post_type'      => 'tsteam-member',
			'posts_per_page' => -1,
			'tax_query'      => array(
				array(
					'taxonomy' => 'tsteam-member-category',
					'field'    => 'term_id',
					'terms'    => $category_id,
				),
			),
		);

		$members = get_posts( $args );

		if ( empty( $members ) ) {
			return wp_send_json_error( 'no_members_found', 'No members found in this category.', array( 'status' => 404 ) );
		}

		$enhanced_members = array();
		foreach ( $members as $member ) {
			$enhanced_members[] = array(
				'post_id' => $member->ID,
				'title'   => get_the_title( $member->ID ),
				'meta'    => array(
					'information' => get_post_meta( $member->ID, 'tsteam_member_information', true ),
					'image'       => get_post_meta( $member->ID, 'tsteam_member_image', true ),
				),
			);
		}

		return rest_ensure_response( $enhanced_members );
	}
}