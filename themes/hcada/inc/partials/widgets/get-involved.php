<?php
$inv_heading = get_sub_field('inv_heading');
$inv_copy = get_sub_field('inv_copy');
$copy_2 = get_sub_field('copy_2');
$map_title = get_sub_field('map_title');
?>
<div class="inner equal-height">
  <div class="map-container">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDz5i-Msb4haWYQ6kR3KDXLcjrgM4cOpl0"></script>
    <div class="acf-map">
      <?php
      $args = array(
        'post_type' => 'business',
        'orderby'   => 'title',
        'posts_per_page'  => 900,
        'order'     => 'ASC'
      );
      $loop = new WP_Query( $args );
      if ( $loop->have_posts() ) :
      $i = 1;
      while ( $loop->have_posts() ) : $loop->the_post();
      $location = get_field('location');
      ?>
      <div class="marker" data-index="<?php echo $i; ?>" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
      <?php $i++; endwhile; endif; ?>
    </div>
    <div class="map-key">
      <div class="inner">
        <h3><?php echo $map_title; ?></h3>
        <ul>
          <?php
          $args = array(
            'post_type' => 'business',
            'orderby'   => 'title',
            'posts_per_page'  => 900,
            'order'     => 'ASC'
          );
          $loop = new WP_Query( $args );
          if ( $loop->have_posts() ) :
          $i = 1;
          while ( $loop->have_posts() ) : $loop->the_post();
          $location = get_field('location');
          ?>
            <li><a href="<?php the_permalink(); ?>"><?php echo $i . '. '; the_title(); ?></a></li>
          <?php $i++; endwhile; endif; ?>
        </ul>
      </div>
    </div>
  </div>
  <div class="copy-container">
    <div class="inner">
      <h3><?php echo $inv_heading; ?></h3>
      <?php echo $inv_copy; ?>
    </div>
    <div class="secondary-copy">
      <div class="content content-box">
        <?php echo $copy_2; ?>
      </div>
    </div>
  </div>
</div>
