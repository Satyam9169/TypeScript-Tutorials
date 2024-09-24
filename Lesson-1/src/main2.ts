// Type Aliases => type aliases are a way to give a name to a specific type, making your code more readable and reusable
// A type alias can represent any valid TypeScript type, including primitive types, union types, and object types.

// Privimitive Types
type Name = string;
type Age = number;

let firstName: Name = 'Satyam';
let userAge: Age = 25;
console.log(firstName, userAge)

// Union Types:
type StringOrNumber = string | number;
let id: StringOrNumber = 101;
id = "A123";
console.log(id)

// Object Types
type User = {
    name: string,
    age: number,
    isAdmin: boolean;
}

let user: User = {
    name: 'satyam',
    age: 28,
    isAdmin: true
}
console.log(user);

//Function Types
type addFunction = (a: number, b: number) => number;
const add: addFunction = (x, y) => x + y;
console.log(add(2, 3))

const Add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (message: any): void => console.log(message)
console.log('Hello');
console.log(Add(2, 3));


type mathFunction = (a: number, b: number) => number;
let multiply: mathFunction = (c, d) => c * d;

console.log(multiply(5, 6))
















//Array Types:
type StringArray = string[];
type NumberArray = Array<number>;

let names: StringArray = ["satyam", "anuj"];
let number: NumberArray = [1, 2, 3];
console.log(names, number)

//Intersection Types:

type Admin = {
    role: string;
}

type UserAdmin = User & Admin;

let userAdmin: UserAdmin = {
    name: "satyam",
    age: 28,
    isAdmin: true,
    role: 'SuperAdmin'
}
console.log(userAdmin)

//Optional and Readonly Properties:
//You can also use optional (?) and readonly in type aliases.

type ReadOnlyUser = {
    readonly name: string;
    age?: number;
};

let readonlyUser: ReadOnlyUser = { name: "John", age: 28 };
console.log(readonlyUser)
// readonlyUser.name = "Doe"; // Error: Cannot assign to
// 'name' because it is a read-only property.


// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

// default params value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}

const logMsge = (message: any): void => {
    console.log(message)
}

logMsg(addAll(2, 3, 5))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
// if value is passed during calling the function 
// bydefault parameter value is not working in typescript with type alias
// 
logMsg(sumAll(undefined, 3))

// rest parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}
logMsge(total(10, 2, 3))

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false;
}

// user of never type
const numberOrString = (value: number | string): string =>{
 if(typeof value === 'string') return 'string';
 if(isNumber(value)) return 'number';
//  return createError('This should never happened')
return "This should not happened"
}