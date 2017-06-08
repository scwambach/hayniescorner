<?php
$urlImage = get_post_thumbnail_id();
$urlImage = wp_get_attachment_image_src($urlImage,'full');
$urlImage = $urlImage[0];
?>
<section class="aspot">
  <div class="scroll-image" style="background-image: url(<?php echo $urlImage; ?>)"></div>
  <nav>
    <div class="wrap">
      <?php wp_nav_menu('home-nav'); ?>
    </div>
  </nav>
</section>
