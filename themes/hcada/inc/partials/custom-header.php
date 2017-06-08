<?php
$main_logo = get_field('main_logo', 'option')['url'];
?>
<header>
  <a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
    <img src="<?php echo $main_logo; ?>" alt="<?php bloginfo('name'); ?>">
  </a>
  <img class="ribbon" src="<?php echo get_template_directory_uri(); ?>/inc/images/ribbon.svg">
  <a class="menu-toggle"><span></span></a>
</header>
