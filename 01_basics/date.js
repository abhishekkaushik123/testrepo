// console.log("abhishek");

let date=new Date();
// console.log(date);

//use some conversions
// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toLocaleString());

//date are object in javascript
// console.log(typeof date);

//also create the custom dates
// let mydate=new Date(2023,0,12);  //months always start from 0 in javascript
let mydate1=new Date("2023-01-12");  
// console.log(mydate.toDateString());
// console.log(mydate1.toDateString());

//record millisecond from the date reference in js
// let timestamp=Date.now();

// console.log(timestamp); generate milliseconds from reference date time to till now
console.log(mydate1.getTime()); 

//convert into second for easy comparision
console.log(Math.floor(Date.now()/1000));

//various date function that help to pull out information from date object
let newdate=new Date();
console.log(newdate.getDate());
console.log(newdate.getMinutes());
console.log(newdate.getHours());
console.log(newdate.getDay());

//we also customise the date object as-
console.log(newdate.toLocaleString('default',{
    weekday:'long' //so Tue->Tuesday
}))