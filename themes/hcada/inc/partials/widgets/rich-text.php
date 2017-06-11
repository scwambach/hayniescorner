<?php
$content = get_sub_field('content');
$section_id = get_sub_field('section_id');
$color = get_sub_field('color');
$alt_box = get_sub_field('alt_box');
?>
<div <?php if ($section_id) { echo 'id="' . $section_id . '"'; } ?> class="inner <?php echo $color; ?>">
  <div class="wrap">
    <div class="content content-box<?php if ($alt_box) { echo ' box-alt'; } ?>">
      <div class="inner">
        <?php echo $content; ?>
      </div>
    </div>
  </div>
</div>
