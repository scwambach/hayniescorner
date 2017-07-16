<nav class="business-nav">
  <span class="close-menu"><i class="fa fa-times close"></i> Close</span>
  <ul>
    <li class="top-item">
      <a>Galleries <i class="fa fa-angle-down"></i></a>
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
    <li class="top-item">
      <a>Food/Drink <i class="fa fa-angle-down"></i></a>
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
                'terms' => 'food-drink',
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
    <li class="top-item">
      <a>Shops <i class="fa fa-angle-down"></i></a>
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
    <li class="top-item">
      <a>Services <i class="fa fa-angle-down"></i></a>
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
