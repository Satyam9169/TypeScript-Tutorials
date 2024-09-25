"use strict";
// type assertion => TypeScript infers and checks the type
// of a variable using some internal logic mechanism called
// Type Assertion.
let code = 123;
let compolyeeCode = code;
console.log(typeof (compolyeeCode));
// Example: Type Assertion with Object
let employee = {};
employee.name = "john"; // OK
employee.code = 123; // OK
console.log(employee);
// There are two ways to do type assertion in TypeScript:
// 1. Using the angular bracket <> syntax.
let code1 = 123;
let employeeCode = code1;
console.log(employeeCode);
// Using as keyword
let code2 = 222;
let compolyeeCode1 = code2;
console.log(compolyeeCode1);
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
console.log(myVal);
let someValue = "Hello, Typescript";
let strLength = someValue.length;
console.log(strLength);
// for DOM
// let inputElement = document.getElementById("username") as HTMLInputElement;
// inputElement.value = "satyam";
// casting for array
let mixedArray = [1, "two", true];
let numbers = mixedArray.filter(item => typeof item === "number");
console.log(numbers);
