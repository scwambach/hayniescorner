<?php
$main_logo = get_field('main_logo', 'option')['url'];
?>
<header>
  <a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
    <img src="<?php echo $main_logo; ?>" alt="<?php bloginfo('name'); ?>">
  </a>
  <a class="menu-toggle"><span></span></a>
  <nav class="business-nav">
    <span class="close-menu"><i class="fa fa-times close"></i> Close</span>
    <ul>
      <li>
        <a class="top-item">Galleries</a>
        <div class="drop-down">
          <ul>
            <?php
              $args = array(
              'post_type' => 'business',
              'orderby'   => 'title',
              'order'     => 'ASC',
              'posts_per_page' => '500',
              'nopaging'  => 'true',
              'tax_query' =>  array (
                array(
                  'taxonomy' => 'business_type',
                  'terms' => 'gallery',
                  'field' => 'slug',
                  'operator' => 'IN',
                ),
              ),
              );
              $loop = new WP_Query( $args );
              if ( $loop->have_posts() ) :
              $i = 1;
              while ( $loop->have_posts() ) : $loop->the_post();
            ?>
            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
            <?php $i++; endwhile; endif; ?>
          </ul>
        </div>
      </li>
      <li>
        <a class="top-item">Restaurants</a>
        <div class="drop-down">
          <ul>
            <?php
              $args = array(
              'post_type' => 'business',
              'orderby'   => 'title',
              'order'     => 'ASC',
              'posts_per_page' => '500',
              'nopaging'  => 'true',
              'tax_query' =>  array (
                array(
                  'taxonomy' => 'business_type',
                  'terms' => 'restaurant',
                  'field' => 'slug',
                  'operator' => 'IN',
                ),
              ),
              );
              $loop = new WP_Query( $args );
              if ( $loop->have_posts() ) :
              $i = 1;
              while ( $loop->have_posts() ) : $loop->the_post();
            ?>
            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
            <?php $i++; endwhile; endif; ?>
            <?php wp_reset_query(); ?>
          </ul>
        </div>
      </li>
      <li>
        <a class="top-item">Shops</a>
        <div class="drop-down">
          <ul>
            <?php
              $args = array(
              'post_type' => 'business',
              'orderby'   => 'title',
              'order'     => 'ASC',
              'posts_per_page' => '500',
              'nopaging'  => 'true',
              'tax_query' =>  array (
                array(
                  'taxonomy' => 'business_type',
                  'terms' => 'shop',
                  'field' => 'slug',
                  'operator' => 'IN',
                ),
              ),
              );
              $loop = new WP_Query( $args );
              if ( $loop->have_posts() ) :
              $i = 1;
              while ( $loop->have_posts() ) : $loop->the_post();
            ?>
            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
            <?php $i++; endwhile; endif; ?>
            <?php wp_reset_query(); ?>
          </ul>
        </div>
      </li>
      <li>
        <a class="top-item">Services</a>
        <div class="drop-down">
          <ul>
            <?php
              $args = array(
              'post_type' => 'business',
              'orderby'   => 'title',
              'order'     => 'ASC',
              'posts_per_page' => '500',
              'nopaging'  => 'true',
              'tax_query' =>  array (
                array(
                  'taxonomy' => 'business_type',
                  'terms' => 'service',
                  'field' => 'slug',
                  'operator' => 'IN',
                ),
              ),
              );
              $loop = new WP_Query( $args );
              if ( $loop->have_posts() ) :
              $i = 1;
              while ( $loop->have_posts() ) : $loop->the_post();
            ?>
            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
            <?php $i++; endwhile; endif; ?>
            <?php wp_reset_query(); ?>
          </ul>
        </div>
      </li>
    </ul>







  </nav>
</header>
