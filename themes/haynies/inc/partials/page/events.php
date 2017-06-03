<?php
  $now = time();
  $posts = get_posts(array(
  	'post_type'			=> 'event',
    'meta_key'  => 'event_date',
    'orderby'   => 'meta_value',
    'order'     => 'ASC'
  ));
  if ( have_posts() ) :
  while ( have_posts() ) : the_post();
  $urlImage = get_post_thumbnail_id();
  $urlImage = wp_get_attachment_image_src($urlImage,'large');
  $urlImage = $urlImage[0];
  $facebook = get_field('facebook_event_page');
  $place = get_field('name_of_place');
  $location = get_field('location');
  $date = get_field('event_date');
  $fee = get_field('entry_fee');
  $price = get_field('price');
  $date_timestamp = strtotime($date);
  if ($now < $date_timestamp ) {
?>
<div class="single-post">
  <?php if ($urlImage): ?>
  <div class="featured-image" style="background-image: url(<?php echo $urlImage; ?>)"></div>
  <?php endif; ?>
  <div class="content<?php if (!$urlImage) { echo " no-pad"; } ?>">
    <h3><?php the_title(); ?></h3>
    <ul class="meta">
      <li class="date"><strong>When:</strong> <?php echo $date; ?></li>
      <li class="location">
        <strong>Location: </strong>
        <?php if ($place) { echo "<span>" . $place . "</span>"; } ?>
        <?php if ($location) { ?>
          <a href="https://www.google.com/maps/place/<?php echo $location['address']; ?>" target="_blank" ><i class="fa fa-map-marker" aria-hidden="true"></i> <?php echo $location['address']; ?></a>
        <?php } ?>
      </li>
      <?php if ($fee) { ?>
        <li class="fee"><?php echo "<strong>Addmission:</strong> " . $price; ?></li>
      <?php } ?>
      <?php if ($facebook) { ?>
      <li><a href="<?php echo $facebook; ?>" class="facebook" target="_blank">Share this on Facebook</a></li>
      <?php } ?>
    </ul>
    <?php the_content(); ?>
  </div>
</div>
<?php } else { continue; } endwhile; endif; ?>
