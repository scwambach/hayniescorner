<?php
  $args = array(
  'post_type' => 'business',
  'orderby'   => 'rand',
  'posts_per_page' => '1',
  'tax_query' =>  array (
    array(
      'taxonomy' => 'business_type',
      'terms' => 'gallery',
      'field' => 'slug',
      'operator' => 'IN',
    ),
  ),
  );
  $loop = new WP_Query( $args );
  if ( $loop->have_posts() ) :
  while ( $loop->have_posts() ) : $loop->the_post();
  $urlImage = get_post_thumbnail_id();
  $urlImage = wp_get_attachment_image_src($urlImage,'full');
  $urlImage = $urlImage[0];
?>
<a class="single-business" href="<?php the_permalink(); ?>" style="background-image: url(<?php echo $urlImage; ?>)">
  <h2><?php the_title(); ?></h2>
</a>
<?php
  endwhile;
  endif;
  wp_reset_query();
?>
<?php
  $args = array(
  'post_type' => 'business',
  'orderby'   => 'rand',
  'posts_per_page' => '1',
  'tax_query' =>  array (
    array(
      'taxonomy' => 'business_type',
      'terms' => 'restaurant',
      'field' => 'slug',
      'operator' => 'IN',
    ),
  ),
  );
  $loop = new WP_Query( $args );
  if ( $loop->have_posts() ) :
  while ( $loop->have_posts() ) : $loop->the_post();
  $urlImage = get_post_thumbnail_id();
  $urlImage = wp_get_attachment_image_src($urlImage,'full');
  $urlImage = $urlImage[0];
?>
<a class="single-business" href="<?php the_permalink(); ?>" style="background-image: url(<?php echo $urlImage; ?>)">
  <h2><?php the_title(); ?></h2>
</a>
<?php
  endwhile;
  endif;
  wp_reset_query();
?>
<?php
  $args = array(
  'post_type' => 'business',
  'orderby'   => 'rand',
  'posts_per_page' => '1',
  'tax_query' =>  array (
    array(
      'taxonomy' => 'business_type',
      'terms' => 'shop',
      'field' => 'slug',
      'operator' => 'IN',
    ),
  ),
  );
  $loop = new WP_Query( $args );
  if ( $loop->have_posts() ) :
  while ( $loop->have_posts() ) : $loop->the_post();
  $urlImage = get_post_thumbnail_id();
  $urlImage = wp_get_attachment_image_src($urlImage,'full');
  $urlImage = $urlImage[0];
?>
<a class="single-business" href="<?php the_permalink(); ?>" style="background-image: url(<?php echo $urlImage; ?>)">
  <h2><?php the_title(); ?></h2>
</a>
<?php
  endwhile;
  endif;
  wp_reset_query();
?>
<?php
  $args = array(
  'post_type' => 'business',
  'orderby'   => 'rand',
  'posts_per_page' => '1',
  'tax_query' =>  array (
    array(
      'taxonomy' => 'business_type',
      'terms' => 'service',
      'field' => 'slug',
      'operator' => 'IN',
    ),
  ),
  );
  $loop = new WP_Query( $args );
  if ( $loop->have_posts() ) :
  while ( $loop->have_posts() ) : $loop->the_post();
  $urlImage = get_post_thumbnail_id();
  $urlImage = wp_get_attachment_image_src($urlImage,'full');
  $urlImage = $urlImage[0];
?>
<a class="single-business" href="<?php the_permalink(); ?>" style="background-image: url(<?php echo $urlImage; ?>)">
  <h2><?php the_title(); ?></h2>
</a>
<?php
  endwhile;
  endif;
  wp_reset_query();
?>
