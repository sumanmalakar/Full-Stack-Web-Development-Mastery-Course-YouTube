// console.log("Operators")

console.log(".....Arithmetic Opertors.....")

let a = 101;
let b = 20;
console.log("sum = ",a+b);
console.log("sub = ",a-b);
console.log("mul = ",a*b);
console.log("div = ",a/b);
console.log("modulus = ",a%b); // modulus operator %

console.log(".....Assignment Opertors.....")

let x = 10;

let sum = 20;

// sum = sum + x;

// sum += x; // sum = sum + x
// sum -= x
sum *= x // sum = sum * x


console.log("value of x = ",x)
console.log("value of sum = ",sum)

console.log(".....comparison Opertors.....")

let n  = 10; // number
let m = '10' // string

console.log("n and m both are queal or not ",n==m)
console.log("n and m both are queal or not ",n===m)

console.log(".....Ternary Opertors.....");

let age = 25;
// age > 18 => drive
// age < 18 => not able to drive

let result = (age > 18)?("You Can Drive"):("You can not drive");

console.log(result)


console.log("....Template Literal - back tick....");

let Name = "Suman";
let income = 56839230;
let phone = 78920;

// your name is = "suman" and your income = 56839230 and phone = 78920

// console.log("your name is = "+'" '+Name +' "'+"and your income = "+income+" and phone = "+phone)

console.log(`Your name is = "${Name}" and your income = ${income} and phone = ${phone}`)
