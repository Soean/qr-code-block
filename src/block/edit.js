const { Component, Fragment } = wp.element;
const { InspectorControls, RichText } = wp.editor;
const { ColorPalette, PanelBody, RadioControl, RangeControl, TextareaControl } = wp.components;
const { __ } = wp.i18n;

import QRCode from 'qrcode';

class QRCodeEdit extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			svg: '',
		};
	}

	generateQRCode() {
		const { setAttributes } = this.props;
		const { size, data, margin, color, bgcolor, errorCorrectionLevel, svg } = this.props.attributes;

		QRCode.toString( data || ' ', {
			errorCorrectionLevel,
			width: size,
			margin,
			color: {
				dark: color,
				light: bgcolor,
			},
		}, ( err, string ) => {
			if ( err ) {
				throw err;
			}
			if ( string !== svg ) {
				setAttributes( { svg: string } );
			}
		} );

	}

	componentDidMount() {
		this.generateQRCode();
	}

	componentDidUpdate( prevProps ) {
		this.generateQRCode();
	}

	render() {
		const { attributes, className, isSelected, setAttributes } = this.props;
		const { align, size, data, margin, color, bgcolor, errorCorrectionLevel, caption, svg } = attributes;

		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<TextareaControl
						label={ __( 'Data' ) }
						value={ data }
						onChange={ newData => setAttributes( { data: newData } ) }
						help={ __( 'Insert your data.' ) }
					/>
					<RangeControl
						label={ __( 'Size' ) }
						value={ size || 200 }
						min={ 10 }
						max={ 600 }
						step={ 10 }
						onChange={ newSize => setAttributes( { size: newSize } ) }
						help={ __( 'Height and width in px.' ) }
					/>
				</PanelBody>

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
					<RangeControl
						min={ 0 }
						value={ margin }
						onChange={ newMargin => setAttributes( { margin: newMargin } ) }
						max={ 10 }
						allowReset
					/>
				</PanelBody>

				<PanelBody initialOpen={ false } title={ __( 'Error correction' ) }>
					<RadioControl
						label={ 'ECC Level' }
						selected={ errorCorrectionLevel }
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
						onChange={ newValue => setAttributes( { errorCorrectionLevel: newValue } ) }
					/>
				</PanelBody>
			</InspectorControls>
		);

		return (
			<Fragment>
				{ inspectorControls }
				<div
					dangerouslySetInnerHTML={ { __html: svg } }
				/>
				{ ( ! RichText.isEmpty( caption ) || isSelected ) && (
					<RichText
						tagName="figcaption"
						placeholder={ __( 'Write caption…' ) }
						value={ caption }
						onChange={ ( value ) => setAttributes( { caption: value } ) }
						inlineToolbar
					/>
				) }
			</Fragment>
		);
	}
}

export default QRCodeEdit;
