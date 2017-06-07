<?php

// Global CSS and JS
function hcada_load_scripts() {
  wp_enqueue_script( 'jquery', 'http://code.jquery.com/jquery-latest.min.js' );
  wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/inc/js/libs/modernizr.js', null, null, true );
  wp_enqueue_script( 'base', get_template_directory_uri() . '/inc/js/base.js', null, null, true );
  wp_enqueue_style( 'hcada-style', get_template_directory_uri() . '/inc/css/application.css');
}
add_action( 'wp_enqueue_scripts', 'hcada_load_scripts' );

// Adimn Styles
function my_enqueue($hook) {
  wp_enqueue_style( 'theme-style', get_template_directory_uri() . '/inc/css/theme.css');
}
add_action('admin_enqueue_scripts', 'my_enqueue');
function login_enqueue($hook) {
  wp_enqueue_style( 'login-style', get_template_directory_uri() . '/inc/css/theme.css');
}
add_action('login_enqueue_scripts', 'login_enqueue');
