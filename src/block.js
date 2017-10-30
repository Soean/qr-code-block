import Icon from './components/Icon';
import EditQrCode from './components/EditQrCode';

const { __ } = wp.i18n;
const { PanelBody } = wp.components;

const {
	registerBlockType,
	InspectorControls,
	BlockDescription,
	BlockAlignmentToolbar,
	BlockControls,
	ColorPalette,
	Editable,
	source: {
		children,
	},
} = wp.blocks;

registerBlockType( 'soerenwrede/qr-code-block', {

	title: __( 'QR Code' ),

	category: 'common',

	icon: <Icon />,

	keywords: [ __( 'Barcode' ) ],

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
		bgcolor: {
			type: 'string',
			default: '#ffffff',
		},
		margin: {
			type: 'integer',
			default: 1,
		},
		ecclevel: {
			type: 'string',
			default: 'L',
		},
		caption: {
			type: 'array',
			source: children( 'figcaption' ),
		},
		align: {
			type: 'string',
			default: 'center',
		},
	},

	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( 'left' === align || 'right' === align || 'wide' === align || 'full' === align ) {
			return { 'data-align': align };
		}
	},

	edit: props => {
		const { attributes, focus, setFocus, setAttributes, className } = props;
		const { align, size, data, margin, color, bgcolor, ecclevel, caption } = attributes;

		const updateAlignment = ( nextAlign ) => setAttributes( { align: nextAlign } );

		const controls = focus && [
			<BlockControls key="blockcontrols">
				<BlockAlignmentToolbar
					value={ align }
					onChange={ updateAlignment }
				/>
			</BlockControls>,
			<InspectorControls key="inspector">

				<BlockDescription>
					<p>{ __( 'QR Code.' ) }</p>
				</BlockDescription>

				<InspectorControls.TextareaControl
					label={ __( 'Data' ) }
					value={ data }
					onChange={ newData => setAttributes( { data: newData } ) }
					help={ __( 'Insert your data.' ) }
				/>

				<InspectorControls.RangeControl
					label={ __( 'Size' ) }
					value={ size || 200 }
					min={ 10 }
					max={ 600 }
					step={ 10 }
					onChange={ newSize => setAttributes( { size: newSize } ) }
					allowReset
					help={ __( 'Height and width in px.' ) }
				/>

				<PanelBody initialOpen={ false } title={ __( 'Colors' ) }>
					<h4>Code</h4>
					<ColorPalette
						value={ color }
						onChange={ colorValue => setAttributes( { color: colorValue } ) }
					/>
					<h4>Background</h4>
					<ColorPalette
						value={ bgcolor }
						onChange={ colorValue => setAttributes( { bgcolor: colorValue } ) }
					/>
				</PanelBody>

				<PanelBody initialOpen={ false } title={ __( 'Margin' ) }>
					<InspectorControls.RangeControl
						min={ 1 }
						value={ margin }
						onChange={ newMargin => setAttributes( { margin: newMargin } ) }
						max={ 10 }
						allowReset
					/>
				</PanelBody>

				<PanelBody initialOpen={ false } title={ __( 'Error correction' ) }>
					<InspectorControls.RadioControl
						label={ 'ECC Level' }
						selected={ ecclevel }
						options={ [ {
							value: 'L',
							label: '7%',
						}, {
							value: 'M',
							label: '15%',
						}, {
							value: 'Q',
							label: '25%',
						}, {
							value: 'H',
							label: '30%',
						} ] }
						onChange={ newValue => setAttributes( { ecclevel: newValue } ) }
					/>
				</PanelBody>

			</InspectorControls>,
		];

		const focusCaption = () => setFocus( { editable: 'caption' } );

		const style = {
			margin: '0 auto',
		};

		return [
			controls,
			<figure key="audio" className={ className }>
				<EditQrCode attributes={ attributes } className={ className } key="block" />
				{ ( ( caption && caption.length ) || !! focus ) && (
					<Editable
						style={ style }
						tagName="figcaption"
						placeholder={ __( 'Write caption…' ) }
						value={ caption }
						focus={ focus && focus.editable === 'caption' ? focus : undefined }
						onFocus={ focusCaption }
						onChange={ ( value ) => setAttributes( { caption: value } ) }
						inlineToolbar
					/>
				) }
			</figure>,
		];
	},
	save: props => {
		const { attributes } = props;
		const { align, caption, size, data, margin, color, bgcolor, ecclevel } = attributes;

		return (
			<figure className={ align ? `align${ align }` : null }>
				<div
					style={ { width: size, margin: '0 auto' } }
					className={ 'qr-code' }
					data-text={ data }
					data-margin={ margin }
					data-color={ color }
					data-bgcolor={ bgcolor }
					data-ecclevel={ ecclevel }
				></div>
				{ caption && caption.length > 0 && <figcaption>{ caption }</figcaption> }
			</figure>
		);
	},
} );
