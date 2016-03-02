var myRides;
var totalFare;

function monthlyFare(){
	myRides = document.getElementById("myRides").value;
	totalFare = myRides * 2.75;
	if (totalFare > 116.50) {
		alert("You're paying too much for daily rides. Buy a monthly, fool.");
	} else {
		alert("You're good. Just make sure you don't spend more than $116.50 per month on MTA rides.")
	}
}