// Declaring a JavaScrip date

// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);

/* 
The getDay() method is used to get the day of the week for the specified date according to local time, 
where 0 represents Sunday. The value returned by getDay() is an integer corresponding to the day of the week: 
0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

The getHours() method is used to get the hour for a given date, according to local time. 
The value returned by getHours() is an integer between 0 and 23.

The getMinutes() method is used to get the minutes in the specified date according to local time. 
The value returned by getMinutes() is an integer between 0 and 59.

The getSeconds() method is used to get the seconds in the specified date according to local time. 
The value returned by getSeconds() is an integer between 0 and 59. */

const today = new Date();
const day = today.getDay();
const dayList = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
console.log(`Today is : ${dayList[5]}.`);