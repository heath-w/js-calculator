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
	else if (this.classList.contains( 'decimal' ) ) {
   
    if (value1.indexOf('.') == -1) {
      display.innerHTML = display.innerHTML + keyLabel;
      value1 = value1 + keyLabel;
    }
    else { // There is already a decimal in this number; ignore it.
    }    

  }
	else if ( this.classList.contains( 'operator' ) ) {
		console.log( 'This is a operator: %s', keyLabel );
		operator( keyLabel );
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
		// clear();
	}
	else if ( this.classList.contains( 'calculate' ) ) {
		console.log( 'This is calculate: %s', keyLabel );
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
	console.log( 'Clear' );

	if ( selectedOperator === '' ) {
		value1 = '';
	}
	else {
		value2 = '';
	}
	display.innerHTML = '0';
}

function operator( keyLabel ) {
	console.log( 'Operator' );

	if ( value1 === '' ) {
		value1 = '0';
		selectedOperator = keyLabel;
	}
	else if ( value1 !== '' ) {

		if ( selectedOperator === '' ) {
			selectedOperator = keyLabel;
		}
		else {

		}

	}

	
}

function Sign() {}
function Divide() {}
function Multiply() {}
function Subtract() {}
function Add() {}
function Equal() {}

function Surprise() {
	console.log( 'SURPRISE!' );
	alert( 'WHEEEE!' );
}