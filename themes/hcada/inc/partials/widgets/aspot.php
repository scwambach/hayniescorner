<?php
$urlImage = get_post_thumbnail_id();
$urlImage = wp_get_attachment_image_src($urlImage,'full');
$urlImage = $urlImage[0];
?>
<section class="aspot scroll-item">
  <div class="scroll-image" style="background-image: url(<?php echo $urlImage; ?>)"></div>
</section>
<nav class="aspot-nav scroll-item">
  <div class="wrap">
    <a class="page-menu-toggle">MENU <i class="fa fa-plus" aria-hidden="true"></i></a>
    <?php wp_nav_menu('home-nav'); ?>
  </div>
</nav>
