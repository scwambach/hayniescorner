<?php
if( have_rows('page_sections') ):
    $i = 1;
    while ( have_rows('page_sections') ) : the_row();
    $widget = str_replace("_","-", get_row_layout());
    $section_id = get_sub_field('section_id');
    echo '<section id="' . $section_id . '" class="widget clearfix ' . $widget . '">';
    get_template_part('/inc/partials/widgets/' . $widget );
    echo '</section>';
    $i++; endwhile;
  else :
endif;
?>
