<?php

if ( function_exists( 'tsteammember' ) ) {
        tsteammember()->set_basename( true, __FILE__ );
    } else {
        /**
         * DO NOT REMOVE THIS IF, IT IS ESSENTIAL FOR THE
         * `function_exists` CALL ABOVE TO PROPERLY WORK.
         */
        if ( ! function_exists( 'tsteammember' ) ) {
                        function tsteammember() {
                            global $tsteammember;

                            if ( ! isset( $tsteammember ) ) {
                                require_once plugin_dir_path( __FILE__ ) . 'includes/library/wordpress-sdk/start.php';
                                $tsteammember = fs_dynamic_init( array(
                                    'id'                  => '17306',
                                    'slug'                => 'ts-team-member',
                                    'premium_slug'        => 'tsteam-pro',
                                    'type'                => 'plugin',
                                    'public_key'          => 'pk_cb7074e85c7a5734ac990c844add0',
                                    'is_premium'          => false,
                                    'has_premium_version' => true,
                                    'has_addons'          => false,
                                    'has_paid_plans'      => true,
                                    'menu' => array(
                                        'slug'           => 'tsteam-admin',
                                        'first-path'     => 'admin.php?page=tsteam-showcase',
                                    ),
                                ) );
                            }

                            return $tsteammember;
                        }
                        tsteammember();
                        do_action( 'tsteammember_loaded' );
                    }
    }