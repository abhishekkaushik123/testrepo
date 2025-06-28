let score="333";
//let score=undefined;->type number but value is NaN
//let score=null;->type number but value is 0
// let score="";->type is number but value NaN

console.log(typeof score);
console.log(score);

let scoreInNum=Number(score);

console.log(typeof scoreInNum);
console.log(scoreInNum);


//similiar we convert 1->true and 0/empty->false using boolean
let flag=0;

console.log(Boolean(flag));

//similiar it work for the string
let num=123;

let stringNum=String(num);

console.log(typeof stringNum);
console.log(stringNum);