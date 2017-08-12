<?php
$main_logo = get_field('main_logo', 'option')['url'];
?>
<header class="scroll-item">
  <a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
    <img src="<?php echo $main_logo; ?>" alt="<?php bloginfo('name'); ?>">
  </a>
  <a class="menu-toggle scroll-item"><span>Discover</span> <i class="fa fa-angle-right"></i></a>
</header>
<?php get_template_part('/inc/partials/navigation'); ?>
