<?php
  $paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
  $now = time();
  date_default_timezone_set('America/Chicago');
  $date_1 = date('Ymd', strtotime("now"));
  $date_2 = date('Ymd', strtotime("+48 months"));
  $new_loop = new WP_Query( array(
  'post_type' => 'event',
  'posts_per_page' => 20,
  'paged' => $paged,
  'meta_key'  => 'event_date',
  'meta_compare'    => 'BETWEEN',
  'meta_type'       => 'numeric',
  'meta_value'      => array($date_1, $date_2),
  'orderby'   => 'meta_value',
  'order'     => 'ASC'
  ) );
  if ( $new_loop->have_posts() ) :
  $section_id = get_sub_field('section_id');
  $background_image = get_sub_field('background_image')['url'];
?>



<div class="inner <?php if ($background_image) { echo ' bg-image'; } ?>">
  <?php if ($background_image) { ?>
    <div class="floating-background" style="background-image: url(<?php echo $background_image; ?>)"></div>
  <?php } ?>



  <div class="events-list">


    <?php

      while ( $new_loop->have_posts() ) : $new_loop->the_post();
      $title = get_field('heading');
      $date = get_field('event_date');
      $date_timestamp = strtotime(get_field('event_date'));
      $eventImage = get_post_thumbnail_id();
      $eventImage = wp_get_attachment_image_src($eventImage,'full');
      $eventImage = $eventImage[0];
    ?>
    <div class="event-item">
      <div class="event-image" style="background-image: url(<?php echo $eventImage; ?>)">

      </div>
      <div class="content">
        <h4><?php the_title(); ?></h4>
        <?php the_content(); ?>
      </div>
    </div>





    <?php
      endwhile;
      else:
    ?>

  </div>




</div>








<?php endif; wp_reset_query(); ?>
