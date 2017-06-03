<?php
add_action( 'widgets_init', 'hcada_widgets_init' );
function hcada_widgets_init() {
  register_sidebar( array (
    'name' => __( 'Sidebar Widget Area', 'hcada' ),
    'id' => 'primary-widget-area',
    'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
    'after_widget' => "</li>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
  ) );
}
