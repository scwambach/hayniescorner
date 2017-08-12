<?php
$urlImage = get_post_thumbnail_id();
$urlImage = wp_get_attachment_image_src($urlImage,'full');
$urlImage = $urlImage[0];
get_header(); ?>
<?php
  if ( have_posts() ) :
  while ( have_posts() ) :
  the_post();
  the_content();
  endwhile;
  endif;
?>
<?php get_footer(); ?>
