<?php
add_filter( 'the_title', 'hcada_title' );
function hcada_title( $title ) {
  if ( $title == '' ) {
    return '&rarr;';
  } else {
    return $title;
  }
}

add_filter( 'wp_title', 'hcada_filter_wp_title' );
function hcada_filter_wp_title( $title ) {
  return $title . esc_attr( get_bloginfo( 'name' ) );
}
