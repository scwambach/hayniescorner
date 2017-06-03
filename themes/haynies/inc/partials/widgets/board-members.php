<div class="wrap">
  <?php if( have_rows('members') ): ?>
  <h3>Meet the Board</h3>
  <ul class="member-list clearfix">
    <?php while( have_rows('members') ): the_row();
    $image = get_sub_field('image')['sizes']['large'];
    $name = get_sub_field('name');
    $title = get_sub_field('title');
    ?>
    <li>
      <div class="headshot" style="background-image: url(<?php echo $image; ?>)"></div>
      <p><?php echo $name; ?><?php if ($title) { ?><br><span><?php echo $title; ?></span><?php } ?></p>
      <?php if( have_rows('affliations') ): ?>
        <ul class="affliations">
        <?php while( have_rows('affliations') ): the_row();
          $aff = get_sub_field('affliation');
          $url = get_sub_field('url');
        ?>
        <li><a href="<?php echo $url; ?>" target="_blank"><?php echo $aff; ?></a></li>
        <?php endwhile; ?>
      </ul>
      <?php endif;
      if( have_rows('social_links') ): ?>
      <ul class="social-links">
        <?php while( have_rows('social_links') ): the_row();
          $icon = get_sub_field('icon');
          $url = get_sub_field('link');
        ?>
        <li><a href="<?php echo $url; ?>" <?php if ($icon != 'fa-envelope-o') { ?>target="_blank"<?php } ?>><i class="fa <?php echo $icon; ?>"></i></a></li>
        <?php endwhile; ?>
      </ul>
      <?php endif; ?>
    </li>
    <?php endwhile; ?>
  </ul>
  <?php endif; ?>
</div>
