//use `` to inject variables with string
let myName="Abhishek Kaushik";
let myAge=25;

console.log(`my name is ${myName} and my age is: ${myAge}`);

//their are 2 ways to declare the string
let myAddress="kallarpur"
let myAddress1=new String("Kallarpur")

//Here in the javascript the String is not a array its a object that have key value pair/index 0,1,2,3..behave as index
let mycategory="General";
console.log(mycategory[0]);

//String object have lot of function 
let new_name=myName.concat(" Student of B.Tech");
console.log(new_name);

console.log(myAddress.length)

//convert to lowerCase
console.log(mycategory.toLowerCase());
//convert to uppercase
console.log(mycategory.toUpperCase());

//character at index
console.log(mycategory.charAt(3));
//index of particular character
console.log(mycategory.indexOf('r'));

//pull out substring from 
let newcategory=mycategory.substring(0,4); //start from 0 and end on 4-1(end-1)
console.log(newcategory);

//another function was slice() which obey negative value as reverse string
let newslice=mycategory.slice(-3,7);
console.log(newslice)

//trim->it work on white space character,remove them from start or end of the string
let degree="     B.Tech       ";
console.log(degree.trim())
//similiar it can work in trimstart and trimend

//identified that string contained or not
let url="https://www.google.com"
console.log(url.includes("google"))

//replace substring to a given string
console.log(url.replace("google","facebook"))

//split the string based on part of string/special character used in the string->it breakdown down and convert into array
let str="ab-hi-sh-ek"
console.log(str.split("-"));