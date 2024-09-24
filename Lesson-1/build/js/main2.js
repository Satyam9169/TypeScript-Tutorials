"use strict";
// Type Aliases => type aliases are a way to give a name to a specific type, making your code more readable and reusable
// A type alias can represent any valid TypeScript type, including primitive types, union types, and object types.
let firstName = 'Satyam';
let userAge = 25;
console.log(firstName, userAge);
let id = 101;
id = "A123";
console.log(id);
let user = {
    name: 'satyam',
    age: 28,
    isAdmin: true
};
console.log(user);
const add = (x, y) => x + y;
console.log(add(2, 3));
const Add = (a, b) => {
    return a + b;
};
const logMsg = (message) => console.log(message);
console.log('Hello');
console.log(Add(2, 3));
let multiply = (c, d) => c * d;
console.log(multiply(5, 6));
let names = ["satyam", "anuj"];
let number = [1, 2, 3];
console.log(names, number);
let userAdmin = {
    name: "satyam",
    age: 28,
    isAdmin: true,
    role: 'SuperAdmin'
};
console.log(userAdmin);
let readonlyUser = { name: "John", age: 28 };
console.log(readonlyUser);
// readonlyUser.name = "Doe"; // Error: Cannot assign to
// 'name' because it is a read-only property.
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default params value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
const logMsge = (message) => {
    console.log(message);
};
logMsg(addAll(2, 3, 5));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// if value is passed during calling the function 
// bydefault parameter value is not working in typescript with type alias
// 
logMsg(sumAll(undefined, 3));
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsge(total(10, 2, 3));
// custom type guard 
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// user of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    //  return createError('This should never happened')
    return "This should not happened";
};
