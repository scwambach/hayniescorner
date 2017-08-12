<?php
function my_acf_google_map_api( $api ){

	$api['key'] = 'AIzaSyDz5i-Msb4haWYQ6kR3KDXLcjrgM4cOpl0';

	return $api;

}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');
