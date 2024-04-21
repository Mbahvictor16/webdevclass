document.cookie = "name=myname; expires=Tue, 16 Apr 2024 13:48:00 UTC";


const d = new Date()

console.log(d.getDate()); // Today's date

console.log(d.getDay()); // Day of the week

console.log(d.getFullYear()); // Returns Full year

console.log(d.getHours()); // Returns Hour in 24 hours format

console.log(d.getMilliseconds()); //Returns milliseconds NB: 1000ms = 1s

console.log(d.getMinutes()); // Returns current minutes

console.log(d.getMonth()); // Returns current month

console.log(d.getSeconds()); // Returns current seconds

console.log(d.getTime()); // Returns time in milliseconds from 1 Jan, 1970

console.log(Date.now()); // Returns time in milliseconds from 1 Jan, 1970

console.log(d.getTimezoneOffset());

console.log(d.getUTCDate());

console.log(d.getUTCDay());

console.log(d.getUTCHours());

console.log()

// setInterval(() => {
//     console.log(d.getSeconds());
// }, 1000);

// setTimeout(() => {
//     console.log(d.getSeconds());
// }, 10000);


