<?php
add_action( 'after_setup_theme', 'hcada_setup' );
function hcada_setup() {
  load_theme_textdomain( 'hcada', get_template_directory() . '/languages' );
  add_theme_support( 'title-tag' );
  add_theme_support( 'automatic-feed-links' );
  add_theme_support( 'post-thumbnails' );
  global $content_width;
  if ( ! isset( $content_width ) ) $content_width = 640;
  register_nav_menus(array( 'main-menu' => __( 'Main Menu', 'hcada' ) ));
}
