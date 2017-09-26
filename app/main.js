var solarPanel = document.getElementById( 'solarPanel' );
var display = document.getElementById( 'display' );
var digits = document.getElementsByClassName( 'numeric' );
var keys = document.getElementsByClassName( 'key' );

var value1, value2, selectedOperator;

// Wait for page to load
document.onreadystatechange = function() {
	
	allClear();

	if ( document.readyState === 'interactive' ) {
		for ( i = 0; i < keys.length; i++ ) {
			keys[ i ].addEventListener( 'click', ButtonLogic );
		}
	}
	
};

function ButtonLogic( e ) {

	var keyLabel = this.innerHTML;
	console.log( 'You clicked me! %s', keyLabel );

	if ( this.classList.contains( 'numeric' ) ) {
		if ( display.innerHTML === '0' ) {
			display.innerHTML = keyLabel;
		}
		else {
			display.innerHTML += keyLabel;
		}
	}
	else if ( this.classList.contains( 'decimal' ) ) {
		console.log( 'This is a decimal: %s', keyLabel );
	}
	else if ( this.classList.contains( 'operator' ) ) {
		console.log( 'This is a operator: %s', keyLabel );
		selectedOperator = keyLabel;
	}
	else if ( this.classList.contains( 'all-clear' ) ) {
		console.log( 'This is all clear: %s', keyLabel );
		allClear();
	}
	else if ( this.classList.contains( 'clear' ) ) {
		console.log( 'This is clear: %s', keyLabel );
		clear();
	}
	else if ( this.classList.contains( 'sign' ) ) {
		console.log( 'This is sign: %s', keyLabel );
		clear();
	}

	
}

function allClear() {
	console.log( 'All clear' );

	value1 = '';
	value2 = '';
	selectedOperator = '';
	display.innerHTML = '0';
}

function clear() {
	if ( selectedOperator === '' ) {
		value1 = '';
	}
	else {
		value2 = '';
	}
}

function Sign( e ) {}
function Divide( e ) {}
function Multiply( e ) {}
function Subtract( e ) {}
function Add( e ) {}
function Decimal( e ) {}
function Equal( e ) {}

function Surprise( e ) {
	console.log( 'SURPRISE!' );
	alert( 'WHEEEE!' );
}