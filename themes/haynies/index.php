<?php get_header(); ?>
<section id="content" role="main">
  <?php get_template_part('/inc/partials/widgets/dynamic', 'titlebar'); ?>
  <div class="page-content<?php if ( is_post_type_archive( 'event' ) ) { echo " events"; } ?>">
    <div class="wrap">
      <?php if (is_post_type_archive( 'event' )):
        get_template_part('/inc/partials/page/events');
      endif; ?>
    </div>
  </div>
  <?php get_template_part('/inc/partials/post', 'nav'); ?>
</section>
<?php get_footer(); ?>
