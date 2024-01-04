/*
2. Given the array below:
myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
the array above has serveral dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022'] . 
You only need to produce the same array as expected result, no need to consider other 
possibility.
 */

let myArr = ['12-24-2014',
'09-2022-23', 
'12-30-2021', 
'08-02-2021', 
'07-15-2018', 
'2019-12-14', 
'2022-14-12']

/* -The function iterates through each date in the array and checks
does it include "-" character or not.
- If the first part of date has a length of 4 it means the date has a format
year-month-day. We also check the second part of date. If its equal to 2, it meanks
the format might be month-day-year. So we making a new format as a day-month-year
and finally push the new date into a new array */

function fixDate(array) {
  let new_arr = [];
  for (let date of array) {
    if (date.includes('-')) {
      let parts = date.split('-');
      if (parts[0].length === 4) {
        // date is in the format "yyyy-mm-dd"
        let new_date = parts[2] + '-' + parts[1] + '-' + parts[0];
        new_arr.push(new_date);
      } else if (parts[1].length === 2) {
        // date is in the format "mm-dd-yyyy"
        let new_date = parts[1] + '-' + parts[0] + '-' + parts[2];
        new_arr.push(new_date);
      } else {
        // date is in an unexpected format
        console.log('Date format not recognized: ' + date);
      }
    } else {
      // date does not contain '-' character
      console.log('Invalid date format: ' + date);
    }
  }
  return new_arr;
}

let newArr = fixDate(myArr)
console.log(newArr)
