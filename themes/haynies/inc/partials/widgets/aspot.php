<?php
  $aspot = get_field('aspot');
  $title_bar = get_field('title_bar');
  $heading = get_field('heading');
  $subheading = get_field('subheading');
  $urlImage = get_post_thumbnail_id();
  $urlImage = wp_get_attachment_image_src($urlImage,'large');
  $urlImage = $urlImage[0];
  if ($aspot) {
?>
<div class="aspot" style="background-image: url(<?php echo $urlImage; ?>);">
  <h1><?php if ($heading) { echo $heading; } else { echo the_title(); } ?></h1>
  <?php if ($subheading) { echo '<p>' . $subheading . '</p>'; } ?>
</div>
<?php } if ($title_bar) { ?>
<div class="title_bar">
  <div class="wrap">
    <h1><?php the_title(); ?></h1>
  </div>
</div>
<?php }?>
