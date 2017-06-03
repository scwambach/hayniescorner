<?php get_header(); if (!is_front_page()) { ?>
  <section id="content" class="clearfix" role="main">
    <?php get_template_part('/inc/partials/widgets/aspot'); ?>
    <?php get_template_part('/inc/partials/widget', 'loop'); ?>
  </section>
<?php } else {
get_template_part('/inc/partials/page/homepage');
} get_footer(); ?>
