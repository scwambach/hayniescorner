<?php
$video = get_field('homepage_video_mp4', 'option');
$poster = get_field('homepage_poster', 'option')['sizes']['large'];
$hm_logo = get_field('homepage_logo', 'option')['sizes']['large'];
?>
<div class="centered-logo">
  <img src="<?php echo $hm_logo; ?>" alt="Haynie's Corner Arts District" />
</div>
<div class="video-contain<?php if (!$video) { echo " no-vid"; } ?>" style="background-image: url(<?php echo $poster; ?>)">
  <video preload="auto" autoplay="" loop="" muted="muted" id="myVideo">
    <source src="<?php echo get_template_directory_uri(); ?>/inc/video/<?php echo $video; ?>" type="video/mp4">
  </video>
</div>
