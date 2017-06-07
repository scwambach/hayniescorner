<?php
  if(function_exists('acf_add_options_page')){
    acf_add_options_page(array(
      'page_title'  => 'Global Settings',
      'menu_title'  => 'Global Settings',
      'menu_slug'   => 'global-settings',
      'capability'  => 'edit_posts',
      'redirect'    => false
    ));
  }

  // add_filter('acf/settings/show_admin', '__return_false');


  function my_acf_init() {
  	acf_update_setting('google_api_key', 'AIzaSyDIx-az2OyL-h1g3GjQCxG-bGKVyMeHTpE');
  }
  add_action('acf/init', 'my_acf_init');

?>
