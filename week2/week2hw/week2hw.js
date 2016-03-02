var x = 47;
var y = 21;

var add = x + y;
var multiply = x * y;
var divide = x / y;
var subtract = x - y;

document.getElementById("add").innerHTML = "If I add " + x + " to "+ y + ", I get " + add + ".";
document.getElementById("multiply").innerHTML = "If I multiply " + x + " by "+ y + ", I get " + multiply + ".";
document.getElementById("divide").innerHTML = "If I divide " + x + " by "+ y + ", I get " + divide + ".";
document.getElementById("subtract").innerHTML = "If I subtract " + y + " from "+ x + ", I get " + subtract + ".";
