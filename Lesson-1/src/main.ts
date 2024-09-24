// let username = 'satyam';
// console.log(username)


// let a: number = 2
// let b: number = 6
// let c: number = 2

// console.log(a / b);
// console.log(a * b);

let myName: string = 'satyam';
let age: number;
let isLoading: boolean;
let album: any;

myName = 'agrahari'
age = 27;
isLoading = true;
album = 1984

const sum = (a: number, b: number) => a + b

// | is called union in typescript

let postid: string | number;
let isActive: number | boolean;
let re: RegExp = /\w+/g