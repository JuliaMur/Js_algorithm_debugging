/*3. Counter function
Write a counter funtion to print out in console the time difference between 2 given date
Expected result in the console: 11 days - 13 hours - 38 minutes - 20 seconds
*/

const dateFrom = new Date(500000)
const dateTo = new Date(1000000000)
const counter = (from, to) => {
    const diffInMs = to - from  // Get the difference in milliseconds

    const sec = Math.floor(diffInMs / 1000) // Convert to seconds
    const min = Math.floor(sec / 60) // Convert to minutes
    const hours = Math.floor(min / 60) //Convert to hours
    const days = Math.floor(hours / 24) //Convert to days

    /* Here we return values in format 
    ${days} days: This inserts the value of the days variable into the string,
    ${hours % 24} hours: This inserts the value of hours modulo 24 into the string,
    ${min % 60} minutes: This inserts the value of minutes modulo 60 into the string,
    ${sec % 60} seconds: This inserts the value of seconds modulo 60 into the string
    .*/
    
    return `${days} days, ${hours % 24} hours, ${min % 60} minutes, ${sec % 60} seconds`

}
const timer = counter(dateFrom, dateTo)
console.log(timer)
