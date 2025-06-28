//all the primitive dataType were assinged to stack that create copy
//all the nonPrimitive datatype were assinged to heap that pass the reference

let myname="abhishek";
let myname1=myname;

console.log(myname);
console.log(myname1);

//so change in one does not affect the other
myname="kaushik";

console.log(myname);
console.log(myname1);


//non primitive
let obj={
    gmail:"abhishek0011@gmail.com",
    address:"kallarpur"
}

let obj1=obj;

console.log(obj);
console.log(obj1);

//here pass the reference only so change in one affect the other
obj.gmail="abhishekkaushik2321@gmail.com"
console.log(obj);
console.log(obj1);