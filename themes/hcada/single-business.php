<?php
$urlImage = get_post_thumbnail_id();
$urlImage = wp_get_attachment_image_src($urlImage,'full');
$urlImage = $urlImage[0];
$quote = get_field('quote');
$copy_position = get_field('copy_position');
$quote_position = get_field('quote_position');
$image_position = get_field('image_position');
get_header();
if ( have_posts() ) :
while ( have_posts() ) :
the_post();
?>
<div class="inner-business <?php echo $image_position; ?>" style="background-image: url(<?php echo $urlImage; ?>)">
  <div class="featured-image <?php echo $image_position; ?>" style="background-image: url(<?php echo $urlImage; ?>)"></div>
  <div class="label">
    <div class="inner">
      <h1><?php the_title(); ?></h1>
    </div>
  </div>
  <div class="copy-block <?php echo $copy_position; ?>">
    <div class="inner">
      <?php the_content(); ?>
    </div>
  </div>
  <?php if ($quote) { ?>
  <div class="quote-block <?php echo $quote_position; ?>">
    <div class="inner">
      <blockquote><span class="lq">&ldquo;</span><?php echo $quote; ?><span class="rq">&rdquo;</span></blockquote>
    </div>
  </div>
  <? } ?>
</div>
<?php
endwhile;
endif;
get_footer(); ?>
