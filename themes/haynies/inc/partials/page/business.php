<?php
$urlImage = get_post_thumbnail_id();
$urlImage = wp_get_attachment_image_src($urlImage,'large');
$urlImage = $urlImage[0];
$desc = get_field('description');
$ins = get_field('instagram');
?>
<div class="title_bar">
  <div class="wrap">
    <h1><?php the_title(); ?></h1>
  </div>
</div>
<div class="page-content">
  <div class="wrap clearfix">
    <div class="featured-image">
      <img src="<?php echo $urlImage; ?>" alt="<?php the_title(); ?>" />
    </div>
    <div class="content">
      <?php echo $desc;
      if( have_rows('extra_sections') ):
      $i = 1; while ( have_rows('extra_sections') ) : the_row();
      if( get_row_layout() == 'hours' ):
      $title = get_sub_field('title');
      echo "<h3>" . $title . "</h3>";
      if( have_rows('hours_list') ): $count = 0; ?>
      <ul>
        <?php while( have_rows('hours_list') ): the_row();
        $item = get_sub_field('list_item');?>
        <li><?php echo $item; ?></li>
        <?php $count++; endwhile; ?>
      </ul>
      <?php endif;
      elseif( get_row_layout() == 'external_links' ):
      $title = get_sub_field('title');
      echo "<h3>" . $title . "</h3>";
      if( have_rows('links') ): $count = 0; ?>
      <ul>
        <?php while( have_rows('links') ): the_row();
        $link = get_sub_field('link');
        $copy = get_sub_field('link_copy');
        ?>
        <li><a href="<?php echo $link; ?>" target="_blank"><?php echo $copy; ?></a></li>
        <?php $count++; endwhile; ?>
      </ul>
      <?php endif; ?>
      <?php elseif( get_row_layout() == 'image_gallery' ):
      $images = get_sub_field('images');
      if( $images ): ?>
      <div class="gallery-wrapper">
        <h3>Image Gallery</h3>
        <ul class="image-gallery clearfix">
          <?php foreach( $images as $image ): ?>
          <li><a href="<?php echo $image['sizes']['large']; ?>" data-lightbox="photos"><img src="<?php echo $image['sizes']['thumbnail']; ?>" /></a></li>
          <?php endforeach; ?>
        </ul>
      </div>
      <?php endif;
      endif;
      $i++; endwhile;
      else :
      endif;
      ?>
      <?php if ($ins) { ?>
      <div class="gallery-wrapper">
        <h3><?php echo $ins; ?></h3>
        <div data-is data-is-api="<?php echo get_stylesheet_directory_uri(); ?>/inc/js/libs/api/" data-is-source="<?php echo $ins; ?>" data-is-responsive="%7B%22768%22%3A%7B%22columns%22%3A%222%22%2C%22rows%22%3A%224%22%2C%22gutter%22%3A%220%22%7D%7D" data-is-arrows-control="false"></div>
      </div>
      <?php } ?>
    </div>
  </div>
</div>
