<?php
$content = get_sub_field('content');
$section_id = get_sub_field('section_id');
?>
<div <?php if ($section_id) { echo 'id="' . $section_id . '"'; } ?> class="inner">
  <div class="wrap">
    <?php echo $content; ?>
  </div>
</div>
