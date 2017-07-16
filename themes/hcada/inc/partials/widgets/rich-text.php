<?php
$content = get_sub_field('content');
$section_id = get_sub_field('section_id');
$color = get_sub_field('color');
$alt_box = get_sub_field('alt_box');
$background_image = get_sub_field('background_image')['url'];
?>
<div class="inner <?php echo $color; if ($background_image) { echo ' bg-image'; } ?>">
  <?php if ($background_image) { ?>
    <div class="floating-background" style="background-image: url(<?php echo $background_image; ?>)"></div>
  <?php } ?>
  <div class="wrap">
    <div class="content content-box<?php if ($alt_box) { echo ' box-alt'; } ?>">
      <div class="inner">
        <?php echo $content; ?>
      </div>
    </div>
  </div>
</div>
