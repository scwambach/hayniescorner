<?php global $wp_query; if ( $wp_query->max_num_pages > 1 ) { ?>
<div id="nav-below" class="clearfix">
  <div class="previous">
    <?php next_posts_link(sprintf( __( '%s Older Posts', 'blankslate' ), '<img src="' . get_stylesheet_directory_uri() . '/inc/images/o-arrow-l.png" width="43" />' ) ) ?>
  </div>
  <?php
  if (function_exists("pagination")) {
    pagination($additional_loop->max_num_pages);
  } ?>
  <div class="next">
    <?php previous_posts_link(sprintf( __( 'Newer Posts %s', 'blankslate' ), '<img src="' . get_stylesheet_directory_uri() . '/inc/images/o-arrow-r.png" width="43" />' ) ) ?>
  </div>
</nav>
<?php } ?>
