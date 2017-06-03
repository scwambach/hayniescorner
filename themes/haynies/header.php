<!DOCTYPE html>
<?php
$solid_header = get_field('solid_header');
?>
<html <?php language_attributes(); ?><?php if (is_front_page()) { echo "class='fullpage-video'"; } else { body_class(); } ?>>
<?php get_template_part('/inc/partials/head'); ?>
<body <?php body_class(); ?>>
  <main<?php if ($solid_header || is_archive() || is_single()) { echo " class='solid'"; } ?>>
    <?php get_template_part('/inc/partials/custom', 'header'); ?>
