<?php
$urlImage = get_post_thumbnail_id();
$urlImage = wp_get_attachment_image_src($urlImage,'full');
$urlImage = $urlImage[0];
$quote = get_field('quote');
$copy_position = get_field('copy_position');
$quote_position = get_field('quote_position');
get_header();
if ( have_posts() ) :
while ( have_posts() ) :
the_post();
?>
<div class="inner-business" style="background-image: url(<?php echo $urlImage; ?>)">
  <div class="copy-block <?php echo $copy_position; ?>">
    <div class="inner">
      <?php the_content(); ?>
    </div>
  </div>
  <?php if ($quote) { ?>
  <div class="quote-block <?php echo $quote_position; ?>">
    <div class="inner">
      <blockquote><?php echo $quote; ?></blockquote>
    </div>
  </div>
  <? } ?>
</div>
<div class="label">
  <div class="inner">
    <h1><?php the_title(); ?></h1>
  </div>
</div>
<?php
endwhile;
endif;
get_footer(); ?>
