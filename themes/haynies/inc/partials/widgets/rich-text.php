<?php
$two_columns = get_sub_field('two_columns');
$the_content = get_sub_field('content');
$col_1 = get_sub_field('column_one');
$col_2 = get_sub_field('column_two');
?>
<div class="page-content">
  <div class="wrap">
    <?php if ($two_columns) { ?>
    <div class="clearfix">
      <div class="divide halves">
        <?php  echo $col_1; ?>
      </div>
      <div class="divide halves">
        <?php  echo $col_2; ?>
      </div>
    </div>
    <?php } else { ?>
    <?php echo $the_content; ?>
    <?php } ?>
  </div>
</div>
