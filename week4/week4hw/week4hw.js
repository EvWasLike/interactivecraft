function add(num1, num2){ 
	var r = parseFloat(num1) + parseFloat(num2),
	string = num1 + '+' + num2 + '=' + r;
	
	return string
}

function multiply(num1, num2){ 
	var r = parseFloat(num1) + parseFloat(num2),
	string = num1 + '*' + num2 + '=' + r;
	
	return string
}

function divide(num1, num2){ 
	var r = parseFloat(num1) + parseFloat(num2),
	string = num1 + '/' + num2 + '=' + r;
	
	return string
}

function subtract(num1, num2){ 
	var r = parseFloat(num1) + parseFloat(num2),
	string = num1 + '-' + num2 + '=' + r;
	
	return string
}

function populatehtml(operation) {
	var x = document.getElementById('x').value;
	var y = document.getElementById('y').value;
	var output = operation(x, y);
		document.getElementById('result').innerText += output;

		if (x == null || x == " " || y == null || y == " "){
			alert ("Please enter two numbers into the fields.");
			return false;
		}
}

document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('multiply').onclick = function(){populatehtml(multiply)};
document.getElementById('divide').onclick = function(){populatehtml(divide)};
document.getElementById('subtract').onclick = function(){populatehtml(subtract)};