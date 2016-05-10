
alert("Hello World");

console.log( "Hello World");

var firstName = "Ka";

console.log( firstName );

var lastName = "Ogun";

console.log( lastName );

//Concatenate

console.log (firstName + " " + lastName)

//Sending values to HTML


var age = 30;

console.log (age);

var x=10;
var y= 4;

console.log ("Adding x + y:");
console.log ( x + y );

console.log ("Dividing x + y:");
console.log ( x / y );
console.log ( x % y );

var weekDays = new Array ();
weekDays[0] = "sunday";
weekDays[1] = "monday";
weekDays[2] = "tuesday";
weekDays[3] = "wednesday";
weekDays[4] = "thursday";
weekDays[5] = "friday";
weekDays[6] = "saturday";

console.log (weekDays);
console.log (weekDays[4]);

document.getElementById("display").innerHTML ="Hello World";


//loop
console.log ("This is a For Loop");
for (var i = 0; i < weekDays.length ; i++) {
	console.log (weekDays[i]);
}
console.log ("This is a While Loop");
var counter = 0;
while (counter < 4) {

	console.log (weekDays [counter]);
	counter++;
}

//conditions

var num1 =25;

	if( num1 <20) {

console.log("Number less 10")

} 

	else {
	console.log("Number greater 10")
}