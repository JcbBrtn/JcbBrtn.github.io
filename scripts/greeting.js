let today = new Date();
let hourNow = today.getHours();
let greeting = "";

//get appropriate greeting statement
if(hourNow>18){
	greeting = 'Good Evening!';
} else if (hourNow > 12) {
	greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good Morning!';
} else {
	greeting = 'Welcome!';
}

//write the greeting
document.write('<h4>' + greeting + '<h4>');