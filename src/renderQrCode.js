require( 'qrjs2' );

document.addEventListener( 'DOMContentLoaded', function() {
	document.querySelectorAll( '.wp-block-soerenwrede-qr-code-block div' ).forEach( function( qrCode ) {
		const data = qrCode.getAttribute( 'data-text' );
		const margin = qrCode.getAttribute( 'data-margin' );
		const textcolor = qrCode.getAttribute( 'data-color' );
		const fillcolor = qrCode.getAttribute( 'data-bgcolor' );
		const ecclevel = qrCode.getAttribute( 'data-ecclevel' );

		if ( ! data ) {
			return;
		}

		const svg = QRCode.generateSVG( data, {
			fillcolor,
			textcolor,
			margin,
			ecclevel,
		} );

		qrCode.innerHTML = '';
		qrCode.appendChild( svg );
	} );
} );
