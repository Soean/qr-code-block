/**
 * BLOCK: qr-code-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'soerenwrede/qr-code-block', {
	title: __( 'QR Code' ),

	icon: 'shield',

	description: __( 'QR Code.' ),

	category: 'common',

	keywords: [
		__( 'Barcode' ),
	],

	supports: {
		html: false,
	},

	attributes: {
		data: {
			type: 'string',
			default: 'WordPress',
		},
		size: {
			type: 'integer',
			default: 200,
		},
		color: {
			type: 'string',
			default: '#000000',
		},
		bgColor: {
			type: 'string',
			default: '#ffffff',
		},
		margin: {
			type: 'integer',
			default: 1,
		},
		errorCorrectionLevel: {
			type: 'string',
			default: 'L',
		},
		caption: {
			type: 'array',
			source: 'children',
			selector: 'figcaption',
		},
		align: {
			type: 'string',
			default: 'center',
		},
		svg: {
			type: 'string',
			default: '',
		},
	},

	save: function( props ) {
		const { align, caption, svg } = props.attributes;
		return (
			<figure className={ align ? `align${ align }` : null }>
				<div
					dangerouslySetInnerHTML={ { __html: svg } }
				/>
				{ caption && caption.length > 0 && <figcaption>{ caption }</figcaption> }
			</figure>
		);
	},

	edit,
} );
