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

//********************operators*******************/

let value=10;
let negvalue=-value;
console.log(negvalue);

// console.log(21+21)
// console.log(21-21)
// console.log(21*21)
// console.log(21**21)
// console.log(21%21)
// console.log(21/21)

console.log(12+12);
console.log("12"+12)
console.log("12"+12+12); //all are concatinate

console.log(12+13);
console.log(12+"13");
console.log(12+12+"13") //add all number before string then concatinate

//not perform code in massy way
// console.log(+true);->convert to number
// console.log(true+);->generate error

//*************postfix and prefix************/
let a=12;
console.log(++a); //incerese then assign
console.log(--a); //decrease then assign
console.log(a--); //assign then decrease
console.log(a++); //assign then increase


//*********comparision operator*********/
console.log(12>11);
console.log(12<11);
console.log(12!=11);
console.log(12==11);

//problem is come when we compare the two different datatype->because javascript allows us while typescript not allow that
console.log("2">1); //->js auto convert "2"->2

//by comparing different data type unpredictable result was generate
console.log(null>0);
console.log(null==0);
console.log(null>=0); //in that case they convert null->0


// strict checking->=== not only value check they also check datatype
console.log("2"===2);


