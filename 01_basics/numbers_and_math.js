//automatically javascript recognise that its number
const score=400;

//explicitly we declare value as number by that way they got some additional property
let score1=new Number(400);

console.log(score);
console.log(score1);

//by declare using Number object we got some additional feature
console.log(score1.toString());

//for precision we used "fixed"
console.log(score1.toFixed(2));//we fixed precision value upto 2 decimal

//for precision the value start from before decimal
const num=123.3423
console.log(num.toPrecision(3));

//appply commaas to number as per standard
const num1=100000000;
console.log(num1.toLocaleString());

//*****************Maths Library was in built with javascript****************/
//Math object was similiar to Number object which support many function
console.log(Math.abs(-23));
console.log(Math.round(12.82));
console.log(Math.ceil(23.12))
console.log(Math.floor(12.89));
console.log(Math.min(2,3,1,4,78));
console.log(Math.max(1,23,54,67));

//important mathematical function was Math.random()->which generate the number automatically b/w 0 to 1
console.log(Math.round(10*(Math.random())));

//important-formula for generate the number between certain range
const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);