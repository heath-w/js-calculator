var solarPanel = document.getElementById( 'solarPanel' );
var display = document.getElementById( 'display' );
var allClearButton = document.getElementById( 'allClearButton' );
var clearButton = document.getElementById( 'clearButton' );

var signButton = document.getElementById( 'signButton' );
var divideButton = document.getElementById( 'divideButton' );
var multiplyButton = document.getElementById( 'multiplyButton' );
var subtractButton = document.getElementById( 'subtractButton' );
var addButton = document.getElementById( 'addButton' );
var decimalButton = document.getElementById( 'decimalButton' );
var equalButton = document.getElementById( 'equalButton' );

var digits = document.getElementsByClassName( 'numeric' );
var keys = document.getElementsByClassName( 'key' );


// Wait for page to load
document.onreadystatechange = function() {
	if ( document.readyState === 'interactive' ) {

		for ( i = 0; i < keys.length; i++ ) {
			keys[ i ].addEventListener( 'click', ButtonLogic );
		}

		// for ( i = 0; i < digits.length; i++ ) {
		// 	digits[ i ].addEventListener( 'click', ButtonLogic );
		// }

		// solarPanel.addEventListener( 'click', Surprise );
		// signButton.addEventListener( 'click', Sign );
		// divideButton.addEventListener( 'click', Divide );
		// multiplyButton.addEventListener( 'click', Multiply );
		// subtractButton.addEventListener( 'click', Subtract );
		// addButton.addEventListener( 'click', Add );
		// decimalButton.addEventListener( 'click', Decimal );
		// equalButton.addEventListener( 'click', Equal );

	}
};

function ButtonLogic( e ) {
	

	var keyLabel = this.innerHTML;
	console.log( 'You clicked me! %s', keyLabel );




	// var digit = this.innerHTML;
	// var currentDisplay = display.innerHTML;

	// if ( currentDisplay === '0' ) {
	// 	display.innerHTML = digit;
	// }
	// else {
	// 	display.innerHTML = currentDisplay + digit;
	// }

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