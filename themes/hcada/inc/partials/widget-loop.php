<?php
if( have_rows('page_sections') ):
    $i = 1;
    while ( have_rows('page_sections') ) : the_row();
    echo '<section id="pg_widg_' . $i . '" class="widget clearfix ' . get_row_layout() . '">';
    if( get_row_layout() == 'rich_text' ):
      get_template_part('/inc/partials/widgets/rich', 'text' );
    endif;
    echo '</section>';
    $i++; endwhile;
  else :
endif;
?>
