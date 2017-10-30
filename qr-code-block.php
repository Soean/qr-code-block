<?php
/**
 * Plugin Name: QR-Code Block
 * Plugin URI: https://wordpress.org/plugins/qr-code-block/
 * Description: QR-Code Blocks for the Gutenberg Editor.
 * Version: 1.1.0
 * Author: Sören Wrede
 * Text Domain: qr-code-block
 * License: GPL v3
 *
 * @package qr-code-block
 *
 * QR Code Block is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.

 * QR Code Block is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QR Code Block. If not, see <http://www.gnu.org/licenses/>.
 */

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'qr_code_block_editor_assets' );
/**
 * Enqueue Editor JS
 */
function qr_code_block_editor_assets() {
	wp_enqueue_script(
		'qr-code-block',
		plugins_url( '/assets/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . '/assets/block.js' )
	);
}

add_action( 'enqueue_block_assets', 'qr_code_block_assets' );
/**
 * Enqueue JS
 */
function qr_code_block_assets() {
	wp_enqueue_script(
		'qrjs2',
		plugins_url( '/assets/renderQrCode.js', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . '/assets/renderQrCode.js' )
	);
}
