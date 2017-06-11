<?php
   /*
   Plugin Name: Post Types
   Author: Scott Wambach
   */
?>
<?php
  function business_posttype() {
    $labels = array(
      'name'               => 'Business',
      'singular_name'      => 'Business',
      'menu_name'          => 'Businesses',
      'name_admin_bar'     => 'Business',
      'add_new'            => 'Add New',
      'add_new_item'       => 'Add New Business',
      'new_item'           => 'New Business',
      'edit_item'          => 'Edit Business',
      'view_item'          => 'View Business',
      'all_items'          => 'All Business',
      'search_items'       => 'Search Business',
      'parent_item_colon'  => 'Parent Businesses:',
      'not_found'          => 'No Businesses found.',
      'not_found_in_trash' => 'No Businesses found in Trash.',
    );
    $args = array(
      'labels'             => $labels,
      'public'             => true,
      'publicly_queryable' => true,
      'show_ui'            => true,
      'show_in_menu'       => true,
      'show_in_nav_menus'  => true,
      'menu_icon'          => 'dashicons-store',
      'query_var'          => true,
      'rewrite'            => array( 'slug' => 'businesses', 'with_front' => true),
      'capability_type'    => 'post',
      'has_archive'        => false,
      'hierarchical'       => false,
      'menu_position'      => 5,
      'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail'),
    );
    register_post_type( 'business', $args );
  }
  add_action( 'init', 'business_posttype' );


  add_action( 'init', 'business_type_taxonomies', 0 );
  function business_type_taxonomies() {
    $labels = array(
      'name'              => _x( 'Business Type', 'taxonomy general name' ),
      'singular_name'     => _x( 'Business Type', 'taxonomy singular name' ),
      'search_items'      => __( 'Search Types' ),
      'all_items'         => __( 'All Types' ),
      'parent_item'       => __( 'Parent Business Type' ),
      'parent_item_colon' => __( 'Parent Business Type:' ),
      'edit_item'         => __( 'Edit Business Type' ),
      'update_item'       => __( 'Update Business Type' ),
      'add_new_item'      => __( 'Add New Business Type' ),
      'new_item_name'     => __( 'New Business Type Name' ),
      'menu_name'         => __( 'Types' ),
    );
    $args = array(
      'hierarchical'      => true,
      'labels'            => $labels,
      'show_ui'           => true,
      'show_admin_column' => true,
      'query_var'         => true,
    );
    register_taxonomy( 'business_type', array( 'business' ), $args );
  }



  function event_posttype() {
    $labels = array(
      'name'               => 'Event',
      'singular_name'      => 'Event',
      'menu_name'          => 'Events',
      'name_admin_bar'     => 'Event',
      'add_new'            => 'Add New',
      'add_new_item'       => 'Add New Event',
      'new_item'           => 'New Event',
      'edit_item'          => 'Edit Event',
      'view_item'          => 'View Event',
      'all_items'          => 'All Event',
      'search_items'       => 'Search Event',
      'parent_item_colon'  => 'Parent Events:',
      'not_found'          => 'No Events found.',
      'not_found_in_trash' => 'No Events found in Trash.',
    );
    $args = array(
      'labels'             => $labels,
      'public'             => true,
      'publicly_queryable' => true,
      'show_ui'            => true,
      'show_in_menu'       => true,
      'menu_icon'          => 'dashicons-tickets',
      'query_var'          => true,
      'rewrite'            => array( 'slug' => 'events', 'with_front' => false),
      'capability_type'    => 'post',
      'has_archive'        => true,
      'hierarchical'       => false,
      'menu_position'      => 5,
      'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail'),
    );
    register_post_type( 'event', $args );
  }
  add_action( 'init', 'event_posttype' );


  function board_posttype() {
    $labels = array(
      'name'               => 'Board Member',
      'singular_name'      => 'Board Member',
      'menu_name'          => 'Board Members',
      'name_admin_bar'     => 'Board Member',
      'add_new'            => 'Add New',
      'add_new_item'       => 'Add New Board Member',
      'new_item'           => 'New Board Member',
      'edit_item'          => 'Edit Board Member',
      'view_item'          => 'View Board Member',
      'all_items'          => 'All Board Member',
      'search_items'       => 'Search Board Member',
      'parent_item_colon'  => 'Parent Board Members:',
      'not_found'          => 'No Board Members found.',
      'not_found_in_trash' => 'No Board Members found in Trash.',
    );
    $args = array(
      'labels'             => $labels,
      'public'             => true,
      'publicly_queryable' => true,
      'show_ui'            => true,
      'show_in_menu'       => true,
      'menu_icon'          => 'dashicons-admin-users',
      'query_var'          => true,
      'rewrite'            => array( 'slug' => 'board', 'with_front' => false),
      'capability_type'    => 'post',
      'has_archive'        => false,
      'hierarchical'       => false,
      'menu_position'      => 5,
      'supports'           => array( 'title', 'editor', 'excerpt', 'thumbnail'),
    );
    register_post_type( 'board', $args );
  }
  add_action( 'init', 'board_posttype' );
