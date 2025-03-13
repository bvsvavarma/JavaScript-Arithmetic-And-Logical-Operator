console.log("JS Logical Operators");

let myNumber1 = 10;
let myNumber2 = 20;
console.log(myNumber1 + myNumber2); //30
console.log(typeof myNumber1, typeof myNumber2); // number number

let myNumber3 = 10;
let myNumber4 = "20";
console.log(myNumber3 + myNumber4); //1020 '+' will work as concatination
console.log(typeof myNumber3, typeof myNumber4); // number string
console.log(myNumber3 + Number(myNumber4)); // 30 type casting Number4 to integer

let myNumber5 = "20A";
console.log(myNumber3 + Number(myNumber5)); //NaN

if (isNaN(myNumber5)) {
  console.log("myNumber5 is not a number thus conversion not possible");
} else {
  console.log(myNumber3 + Number(myNumber5));
}

let myNumber6 = "30";
let myNumber7 = 20;
console.log(myNumber6 + myNumber7); //3020
console.log(Number(myNumber6) + myNumber7); //50
console.log(myNumber6 - myNumber7); //10
console.log(myNumber6 * myNumber7); //600
console.log(myNumber6 / myNumber7); //1.5

//Assignment Operator =
let myNumber = 100;
myNumber = 200;

//Comparison Operators == , ===, >=, <=, !=, >, < etc...
let myNum1 = 10;
let myNum2 = 20;
console.log(myNum1 > myNum2); //false
console.log(myNum1 < myNum2); //true

//logical operator (&&, ||, !)
console.log(true && false); //false
console.log(true && true); //true
console.log(false && true); //false
console.log(false && false); //false

console.log(true || false); //true
console.log(true || true); //true
console.log(false || true); //true
console.log(false || false); //false

let myString1 = "Satya";
let myString2 = "Buddharaju";
console.log(myString1 && myString2); // Buddharaju -> && will return last operand
console.log(myString1 || myString2); //Satya -> && will return first operand

let isSalaryCredited = false;
console.log("isSalaryCredited", isSalaryCredited); //false
console.log("isSalaryCredited", !isSalaryCredited); //true

//ternary operator
let age = 21;
let output = age < 18 ? "Not Eligible to Vote" : "Eligible to Vote";
console.log(output); //Eligible to vote

//Equality (==) vs Strict Equality (===)
let MyNumber10 = 3;
let MyNumber11 = 3;
console.log(typeof MyNumber10, typeof MyNumber11); //number number
console.log(MyNumber10 == MyNumber11); //true == only checks for value
console.log(MyNumber10 === MyNumber11); //true === checks for value then data type

MyNumber11 = "3";
console.log(MyNumber10 == MyNumber11); //true == JS automatically type converts and checks value
console.log(MyNumber10 === MyNumber11); //false

console.log("doe" == "Doe"); // false JS is case sensitive language
console.log("doe" === "Doe"); //false

console.log("doe" == "doe"); // true
console.log("doe" === "doe"); //true

//null vs undefined

let myString3 = null;
let myString4;
console.log(typeof myString3); // object
console.log(typeof myString4); // undefined
console.log(myString3 == myString4); //true both string are trying to emptying the value
console.log(myString3 === myString4); //false data types are different
