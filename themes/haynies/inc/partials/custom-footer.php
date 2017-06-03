<?php
$copyright = get_field('copyright', 'option');
?>
<footer class="clear">
  <div class="wrap">
    <div class='footer-container clearfix'>
      <?php
        if( have_rows('footer_sections', 'option') ):
        $i = count( get_field('footer_sections', 'option') );
        while( have_rows('footer_sections', 'option') ): the_row();
        $heading = get_sub_field('heading');
        $content = get_sub_field('content');
      ?>
      <div class="section<?php if ($i === 2) { echo " divide halves"; } elseif ($i === 3) { echo " divide thirds"; } elseif ($i === 4) { echo " divide fourths"; } elseif ($i === 5) { echo " divide fifths"; } elseif ($i === 6) { echo " divide sixth"; } ?>">
        <?php if ($heading) { ?>
          <h3><?php echo $heading; ?></h3>
        <?php } ?>
        <?php echo $content; ?>
      </div>
      <?php
        endwhile;
        endif;
      ?>
    </div>
  </div>
  <div class="copyright">
    <div class="wrap">
      <?php echo $copyright; ?>
      <ul>
        <?php
          if( have_rows('social_links', 'option') ):
          while( have_rows('social_links', 'option') ): the_row();
          $link = get_sub_field('social_link');
          $icon = get_sub_field('icon');
        ?>
        <li><a href="<?php echo $link; ?>" target="_blank"><i class="fa <?php echo $icon; ?>"></i></a></li>
        <?php
          endwhile;
          endif;
        ?>
      </ul>
    </div>
  </div>
</footer>
