<div class="title_bar">
  <div class="wrap">
    <h1>
      <?php if ( is_day() ) : ?>
          <?php printf( __( 'Daily Archives: <span>%s</span>', 'twentyten' ), get_the_date() ); ?>
      <?php elseif ( is_month() ) : ?>
          <?php printf( __( 'Monthly Archives: <span>%s</span>', 'twentyten' ), get_the_date( _x( 'F Y', 'monthly archives date format', 'twentyten' ) ) ); ?>
      <?php elseif ( is_year() ) : ?>
          <?php printf( __( 'Yearly Archives: <span>%s</span>', 'twentyten' ), get_the_date( _x( 'Y', 'yearly archives date format', 'twentyten' ) ) ); ?>
      <?php elseif ( is_post_type_archive( 'event' ) ) : ?>
        <?php _e( 'Events', 'twentyten' ); ?>
      <?php else : ?>
        <?php _e( 'Blog Archives', 'twentyten' ); ?>
      <?php endif; ?>
    </h1>
  </div>
</div>
