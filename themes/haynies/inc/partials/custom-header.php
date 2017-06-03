<?php
$main_logo = get_field('main_logo', 'option');
$trans_logo = get_field('transparent_logo', 'option');
$solid_header = get_field('solid_header');
?>
<header class="clearfix top<?php if ($solid_header || is_archive() || is_single()) { echo " solid"; } ?>">
  <div class="navigation wrap">
    <div class="clearfix">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="main-logo"><img src="<?php echo $main_logo['sizes']['large']; ?>" alt="<?php bloginfo('name'); ?>" class="main" /><img src="<?php echo $trans_logo['sizes']['large']; ?>" alt="<?php bloginfo('name'); ?>" class="trans-logo" /></a>
      <i class="fa fa-bars" aria-hidden="true" class="visible-mobile" id="menu-toggle"></i>
      <?php get_template_part('/inc/partials/navigation') ?>
    </div>
  </div>
</header>
