<?php
$favicon = get_field('favicon', 'option');
$ogdesc = get_field('page_description');
$urlImage = get_post_thumbnail_id();
$urlImage = wp_get_attachment_image_src($urlImage,'large');
$urlImage = $urlImage[0];
?>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
  <meta name="viewport" content="width=device-width" />
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?php the_title(); ?>">
  <meta property="og:description" content="<?php bloginfo( 'description' ); ?>">
  <meta property="og:url" content="<?php the_permalink(); ?>">
  <meta property="og:site_name" content="<?php bloginfo('name'); ?>">
  <?php if ($urlImage) { ?>
  <meta property="og:image" content="<?php echo $urlImage; ?>">
  <?php } else { ?>
  <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/screenshot.png">
  <?php } ?>
  <meta property="og:locale" content="en_US">
  <title><?php wp_title( ' | ', true, 'right' ); ?></title>
  <link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />
  <link rel="icon" type="image/png" href="<?php echo $favicon['sizes']['thumbnail']; ?>">
  <?php wp_head(); ?>
</head>
