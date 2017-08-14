var moment = require('moment');
const chalk = require ('chalk');
 var now = moment().format("LLLL");
 var days = moment().format("DDDD");
 var seconds = moment().format("ss")
 var hours = moment().format("HH");
var totalseconds = (seconds + (hours*3600));
var month = moment().format("MM");
var mday = moment().format("DD");
var year = moment().format("YYYY");
 console.log("It is " + chalk.blue(now));
 console.log("It is the "+ chalk.keyword('pink')(days +"th")+ " day of the year.");
 console.log("it is "+ chalk.rgb(135, 206, 250)(totalseconds)+" seconds into the day.");


if(month>=3&&month<=11){
	if(month==3&&mday<12){
		console.log("It "+chalk.red("is not") +" during daylight savings time");
	}
	else if(month==11&&mday>5){
		console.log("It "+ chalk.red("is not")+ " during daylight savings time");
	}
	else{
		console.log("It "+ chalk.green("is") + " during daylight savings time");
	}

}else{
	console.log("It "+chalk.red("is not") +"during daylight savings time");
}
if(year%4==0){
	console.log("It" + chalk.green("is") + "a leap year");
}else{
	console.log("It " + chalk.red("is not") + " a leap year");
}