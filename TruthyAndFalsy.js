console.log("JS Arithmetic And Logical Operators");

console.log("Truthy and Falsy");

let myName;
console.log("myName", myName); //undefined
console.log("typeof myName", typeof myName); //undefined

if (myName) {
  // if (undefined) -> it is falsy value so it will go to false condition
  console.log("Print My Name", myName);
} else {
  console.log("Falsy section for undefined condition");
}

let mySalary = 0;
console.log("mySalary", mySalary); //0
console.log("typeof mySalary", typeof mySalary); //number

if (mySalary) {
  //if (0) -> it is falsy value so it will go to false condition
  console.log("Print My Salary", mySalary);
} else {
  console.log("Falsy section for Number 0");
}
