function add(){ 
	var x = document.getElementById("x").value
	var y = document.getElementById("y").value
	var add = x + y;
	alert("The sum is " + add + ".");
	//var multiply = x * y;
	//var divide = x / y;
	//var subtract = x - y;
}

function multiply(){ 
	var x = document.getElementById("x").value
	var y = document.getElementById("y").value
	var multiply = x * y;
	alert("The product is " + multiply + ".");
}

function divide(){ 
	var x = document.getElementById("x").value
	var y = document.getElementById("y").value
	var divide = x / y;
	alert("The result is " + divide + ".");
}

function subtract(){ 
	var x = document.getElementById("x").value
	var y = document.getElementById("y").value
	var subtract = x - y;
	alert("The difference is " + subtract + ".");
}

// document.getElementById("add").innerHTML = "If I add " + x + " to "+ y + ", I get " + add + ".";
// document.getElementById("multiply").innerHTML = "If I multiply " + x + " by "+ y + ", I get " + multiply + ".";
// document.getElementById("divide").innerHTML = "If I divide " + x + " by "+ y + ", I get " + divide + ".";
// document.getElementById("subtract").innerHTML = "If I subtract " + y + " from "+ x + ", I get " + subtract + ".";
