<?php
$content = get_sub_field('content');
$section_id = get_sub_field('section_id');
?>
<div <?php if ($section_id) { echo 'id="' . $section_id . '"'; } ?> class="inner">
  <div class="wrap">
    <div class="content content-box">
      <div class="inner">
        <?php echo $content; ?>
      </div>
    </div>
  </div>
</div>
