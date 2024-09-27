// type assertion => TypeScript infers and checks the type
// of a variable using some internal logic mechanism called
// Type Assertion.

let code: any = 123;
let compolyeeCode = <number>code;
console.log(typeof (compolyeeCode))

// let employee = {};
// employee.name = "john"; //Compiler Error: Property 'name' does not exist on type '{}'
// employee.code = 123;//Compiler Error: Property 'code' does not exist on type '{}'

interface Employee {
    name: string,
    code: number
}

// Example: Type Assertion with Object
let employee = <Employee>{};
employee.name = "john"; // OK
employee.code = 123; // OK
console.log(employee)

// There are two ways to do type assertion in TypeScript:

// 1. Using the angular bracket <> syntax.
let code1: any = 123;
let employeeCode = <number>code1;
console.log(employeeCode)

// Using as keyword
let code2: any = 222;
let compolyeeCode1 = code2 as number;
console.log(compolyeeCode1)

type one = string;
type two = string | number;
type three = 'hello';

// convert to more or less specific
let a: one = 'hello';
let b = a as two; // less specific
let c = a as three // more specific

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

let myVal: string = addOrConcat(2, 2, 'concat') as string;
console.log(myVal)



let someValue: any = "Hello, Typescript";
let strLength: number = (<string>someValue).length;
console.log(strLength)


// for DOM
// let inputElement = document.getElementById("username") as HTMLInputElement;
// inputElement.value = "satyam";


// casting for array
let mixedArray: any[] = [1, "two", true];
let numbers: number[] = <number[]>mixedArray.filter(item => typeof item === "number");
console.log(numbers)
