var solarPanel = document.getElementById( 'solarPanel' );
var display = document.getElementById( 'display' );
var digits = document.getElementsByClassName( 'numeric' );
var keys = document.getElementsByClassName( 'key' );

var value1, value2, selectedOperator;

// Wait for page to load
document.onreadystatechange = function() {
	
	if ( document.readyState === 'interactive' ) {
		allClear();

		for ( i = 0; i < keys.length; i++ ) {
			keys[ i ].addEventListener( 'click', ButtonLogic );
		}

		solarPanel.addEventListener( 'click', Surprise );
	}
	
};

function ButtonLogic( e ) {
	var keyLabel = this.innerHTML;
	console.log( 'You clicked me! %s', keyLabel );

	if ( this.classList.contains( 'numeric' ) ) {
		console.log( 'This is a numeric: %s', keyLabel );
		numeric( keyLabel );
	}
	else if (this.classList.contains( 'decimal' ) ) {
		console.log( 'This is a decimal: %s', keyLabel );
   	decimal( keyLabel );
  }
	else if ( this.classList.contains( 'operator' ) ) {
		console.log( 'This is a operator: %s', keyLabel );
		operator( keyLabel );
	}	
	else if ( this.classList.contains( 'sign' ) ) {
		console.log( 'This is sign: %s', keyLabel );

	}
	else if ( this.classList.contains( 'calculate' ) ) {
		console.log( 'This is calculate: %s', keyLabel );
		calculate( keyLabel );
	}
	else if ( this.classList.contains( 'all-clear' ) ) {
		console.log( 'This is all clear: %s', keyLabel );
		allClear();
	}
	else if ( this.classList.contains( 'clear' ) ) {
		console.log( 'This is clear: %s', keyLabel );
		clear();
	}	
}

function numeric( keyLabel ) {
	if ( selectedOperator === '' ) {
		value1 = properAppend( value1, keyLabel );
		display.innerHTML = value1;
	}
	else {
		value2 = properAppend( value2, keyLabel );
		display.innerHTML = value2;
	}


	// if ( display.innerHTML === '0' ) {
	// 	display.innerHTML = keyLabel;
	// }
	// else {
	// 	display.innerHTML += keyLabel;
	// }

	// if ( selectedOperator === '' ) {
	// 	value1 = value1 + keyLabel;
	// }
	// else {
	// 	value2 = value2 + keyLabel;
	// }
}

function properAppend( main, added ) {
	if ( main === '0' ) {
		return added;
	}
	else {
		return main + added;
	}
}

function decimal( keyLabel ) {
	if ( selectedOperator === '' ) {
		if ( value1.indexOf( '.' ) === -1 ) {
			if ( value1 === '' ) {
				value1 = 0 + keyLabel;
			}
			else {
				value1 += keyLabel;
			}

	    // value1 += keyLabel;
	    // if ( value1 === '.' ) {
	    // 	value1 = '0' + value1;
	    // }

	    display.innerHTML = value1;
	  }
	}
	else {
		if ( value2.indexOf( '.' ) === -1 ) {
			if ( value2 === '' ) {
				value2 = 0 + keyLabel;
			}
			else {
				value2 += keyLabel;
			}	    

	    // value2 += keyLabel;
	    // if ( value2 === '.' ) {
	    // 	value2 = '0' + value2;
	    // }

	    display.innerHTML = value2;
	  }	
	}



	


}

function operator( keyLabel ) {
	console.log( 'Operator' );

	if ( value1 === '' ) {
		value1 = '0';
		selectedOperator = keyLabel;
	}
	else {
		if ( selectedOperator === '' ) {
			selectedOperator = keyLabel;
		}
		else {
			if ( value2 === '' ) {
				selectedOperator = keyLabel;
			}
			else {				
				calculate( keyLabel );
				selectedOperator = keyLabel;	
			}
		}		
	}
}

function sign( keyLabel ) {
	console.log( 'Sign' );
}

function calculate( keyLabel ) {
	console.log( 'Calculate' );

	var result = '0';

	switch( selectedOperator ) {
		case '+':
			result = add();
			break;
		case '-':
			result = subtract();
			break;
		case '*':
			result = multiply();
			break;
		case '/':
			result = divide();
			break;			
		default:
			console.log( 'Calculate found default. There was an issue with the operation selected.' );				
	}

	// store results of calculation in value1
	value1 = result.toString();

	// update display with results of calulation
	display.innerHTML = value1;
	
	// clear value2
	value2 = '';

	// store keyLabel in selectedOperator
	selectedOperator = keyLabel;

	// return result;
}

function add() {
	return parseFloat( value1 ) + parseFloat( value2 );
}

function subtract() {
	return parseFloat( value1 ) - parseFloat( value2 );
}

function multiply() {
	return parseFloat( value1 ) * parseFloat( value2 );
}

function divide() {
	return parseFloat( value1 ) / parseFloat( value2 );
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

function Surprise( e ) {
	console.log( 'SURPRISE!' );
	alert( 'WHEEEE!' );
}