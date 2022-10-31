<?php
/**
 * Plugin Name:       LivingPixel - Progress Bar Block
 * Description:       A block for the WordPress Gutenberg Editor to show an animated progress bar.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            livingpixel.ch
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       livingpixel-progress-bar-block
 *
 * @package           livingpixel-progressbar-block
 */

function livingpixel_progress_bar_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'livingpixel_progress_bar_block_block_init' );
