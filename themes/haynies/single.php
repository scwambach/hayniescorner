<?php get_header(); ?>
<section id="content" role="main">
  <?php if (is_singular('business')) {
    get_template_part('/inc/partials/page/business');
  } else {
    get_template_part('/inc/partials/page/single', 'post');
  } ?>
</section>
<?php get_footer(); ?>
