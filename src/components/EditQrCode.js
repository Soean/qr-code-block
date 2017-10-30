const { withInstanceId } = wp.components;

function renderQrCode( attributes, id ) {
	const { data, margin, color, bgcolor, ecclevel } = attributes;

	const svg = QRCode.generateSVG( data, {
		fillcolor: bgcolor,
		textcolor: color,
		margin: Number( margin ),
		ecclevel,
	} );

	const element = document.getElementById( id );
	if ( element ) {
		element.innerHTML = '';
		element.appendChild( svg );
	}
}

function QrCode( { instanceId, attributes } ) {
	const id = 'qr-code-' + instanceId;
	const { size } = attributes;

	setTimeout( () => {
		renderQrCode( attributes, id );
	}, 0 );
	return (
		<div style={ { width: size, margin: '0 auto' } } id={ id }></div>
	);
}

export default withInstanceId( QrCode );
