<?php
function insta_feed($atts) {
   extract(shortcode_atts(array(
      'feed' => '',
   ), $atts));
return '<div class="instgram-wrapper"><h3>' . $feed . '</h3><div data-is data-is-api="' . get_stylesheet_directory_uri() . '/inc/js/libs/api/" data-is-source="' . $feed . '" data-is-responsive="%7B%22768%22%3A%7B%22columns%22%3A%222%22%2C%22rows%22%3A%224%22%2C%22gutter%22%3A%220%22%7D%7D" data-is-arrows-control="false"></div></div>';
}
add_shortcode('instagram', 'insta_feed');
