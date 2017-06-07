<?php
if( have_rows('widgets') ):
  $i = 1; while ( have_rows('widgets') ) : the_row();
    if( get_row_layout() == 'rich_text' ):
      get_template_part('/inc/partials/widgets/rich', 'text' );
    elseif( get_row_layout() == 'board_members' ):
      get_template_part('/inc/partials/widgets/board', 'members' );
    elseif( get_row_layout() == 'multi_marker_map' ):
      get_template_part('/inc/partials/widgets/multi', 'map' );
    endif;
    $i++; endwhile;
  else :
endif;
?>
