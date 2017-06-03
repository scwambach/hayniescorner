<?php if( have_rows('locations') ): ?>
	<div class="acf-map">
		<?php while ( have_rows('locations') ) : the_row();

			$location = get_sub_field('location');

			?>
			<div class="marker" data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>">
				<h4><?php the_sub_field('title'); ?></h4>
				<p class="address"><?php echo $location['address']; ?></p>
				<p><?php the_sub_field('description'); ?></p>
			</div>
	<?php endwhile; ?>
	</div>
<?php endif; ?>
