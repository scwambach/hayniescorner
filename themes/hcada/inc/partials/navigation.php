<nav>
  <?php
  $defaults = array(
  'theme_location'  => 'main-menu',
  'menu'            => 'main-menu',
  'container'       => 'div',
  'container_class' => '',
  'container_id'    => '',
  'menu_class'      => 'top-nav',
  'menu_id'         => 'top-main-menu',
  'echo'            => true,
  'fallback_cb'     => 'wp_page_menu',
  'before'          => '',
  'after'           => '',
  'link_before'     => '',
  'link_after'      => '',
  'items_wrap'      => '<ul id="%1$s" class="%2$s sm sm-simple">%3$s<div class="clear"></div></ul>',
  'depth'           => 0,
  'walker'          => ''
  );
  wp_nav_menu( $defaults );
  ?>
</nav>
