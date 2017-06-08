<?php

// Global CSS and JS
function hcada_load_scripts() {
  wp_enqueue_script( 'jquery', get_template_directory_uri() . '/inc/js/libs/jquery.js', null, null, true );
  wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/inc/js/libs/modernizr.js', null, null, true );
  wp_enqueue_script( 'smoothscroll', get_template_directory_uri() . '/inc/js/libs/smoothPageScroll.js', null, null, true );
  wp_enqueue_script( 'base', get_template_directory_uri() . '/inc/js/base.js', null, null, true );
  wp_enqueue_style( 'hcada-style', get_template_directory_uri() . '/inc/css/application.css');
  if ( is_front_page() ) {
    wp_enqueue_script( 'tweenmax', get_template_directory_uri() . '/inc/js/libs/TweenMax.min.js', null, null, true );
    wp_enqueue_script( 'scrollmagic', get_template_directory_uri() . '/inc/js/libs/scrollmagic/ScrollMagic.js', null, null, true );
    wp_enqueue_script( 'animation', get_template_directory_uri() . '/inc/js/libs/scrollmagic/animation.gsap.js', null, null, true );
    wp_enqueue_script( 'indicators', get_template_directory_uri() . '/inc/js/libs/scrollmagic/debug.addIndicators.js', null, null, true );
    wp_enqueue_script( 'scrollto', get_template_directory_uri() . '/inc/js/libs/scrollToPlugin.js', null, null, true );
  }
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
