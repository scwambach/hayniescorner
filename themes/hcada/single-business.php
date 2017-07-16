<?php
$urlImage = get_post_thumbnail_id();
$urlImage = wp_get_attachment_image_src($urlImage,'full');
$urlImage = $urlImage[0];
$lrgImage = get_post_thumbnail_id();
$lrgImage = wp_get_attachment_image_src($lrgImage,'large');
$lrgImage = $lrgImage[0];
$quote = get_field('quote');
$copy_position = get_field('copy_position');
$quote_position = get_field('quote_position');
$image_position = get_field('image_position');
$location = get_field('location')['address'];
$copy_color = get_field('copy_color');
$quote_color = get_field('quote_color');
$owner = get_field('owner');
get_header();
if ( have_posts() ) :
while ( have_posts() ) :
the_post();
?>
<div class="inner-business <?php echo $image_position; ?>" style="background-image: url(<?php echo $urlImage; ?>)">
  <div class="featured-image">
    <img src="<?php echo $lrgImage; ?>" alt="<?php the_title(); ?>">
  </div>
  <div class="main-content">
    <div class="copy-block <?php echo $copy_color; ?> <?php echo $copy_position; ?><?php if (!$quote) { echo ' no-quote'; } ?>">
      <div class="inner">
        <h1>
          <?php the_title(); ?>
          <hr>
        </h1>
        <?php the_content(); ?>
        <hr>
        <a href="https://www.google.com/maps/dir//<?php echo $location; ?>" target="_blank"><strong><?php echo $location; ?></strong></a>
      </div>
    </div>
    <?php if ($quote) { ?>
    <div class="quote-block <?php echo $quote_color; ?> <?php echo $quote_position; ?>">
      <div class="inner">
        <blockquote><span class="lq">&ldquo;</span><?php echo $quote; ?><span class="rq">&rdquo;</span></blockquote>
      </div>
    </div>
    <? } ?>
    <?php if ($owner) { ?>
      <div class="label <?php echo $copy_color; ?>">
        <div class="inner">
          <h2><?php echo $owner; ?></h2>
        </div>
      </div>
    <?php } ?>
  </div>
</div>
<?php
endwhile;
endif;
get_footer(); ?>
