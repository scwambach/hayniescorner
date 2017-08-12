<?php
function button_one($atts) {
   extract(shortcode_atts(array(
      'url' => '',
      'copy' => '',
   ), $atts));
return "<a href='" . $url . "' title='" . $copy . "' target='_blank' class='btn btn-default red'>" . $copy . "</a>";
}
add_shortcode('button', 'button_one');
