<?php
$section_id = get_sub_field('section_id');
$color = get_sub_field('color');
?>
<div <?php if ($section_id) { echo 'id="' . $section_id . '"'; } ?> class="inner <?php echo $color; ?>">
  <div class="wrap">
    <?php if( have_rows('icon_items') ): ?>
      <div class="content content-box">
        <?php while ( have_rows('icon_items') ) : the_row();
          $icon = get_sub_field('icon');
          $copy = get_sub_field('copy');
        ?>
        <div class="item">
          <i class="fa fa-<?php echo $icon; ?>"></i>
          <p><?php echo $copy; ?></p>
        </div>
        <?php endwhile; ?>
      </div>
    <?php endif; ?>
  </div>
</div>
