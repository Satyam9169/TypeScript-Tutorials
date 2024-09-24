let stringArr = ['one', 'hey', 'Dave'];
let guitar = ['Strat', 'Les Paul', 5150];
let mixedDate = ['EVH', 1984, true];

stringArr[0] = 'John';
stringArr.push('hey')
console.log(stringArr)

guitar[0] = 1984;
guitar.unshift('satyam');
console.log(guitar)

//Array
let fruits1: string[] = ['Apple', 'Orange', 'Banana'];
console.log(fruits1)
let fruits2: Array<string> = ['Apple', 'Orange', 'Banana'];
console.log(fruits2)

let fruits3: Array<string>
fruits3 = ['Apple', 'Orange', 'Banana'];
console.log(fruits3);

let ids: Array<number>;
ids = [23, 34, 100, 124, 44];
console.log(ids);

let values1: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
let values2: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];

console.log(values1);
console.log(values2);

let test = [];
let brands: string[] = [];
brands.push('Van Helen');

// Tuple
let myTuple: [string, number, boolean] = ['satyam', 27, true];
let mixed = ['john', 1, false];
myTuple[1] = 42;

//objects
let myObj: object;
myObj = []
console.log(typeof myObj)

myObj = brands;
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true
}

exampleObj.prop1 = 'John'

console.log(exampleObj)

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name?.toUpperCase()}`;
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp))


// enums
enum PrintMedia1 {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia1(mediaName: string): PrintMedia1 | undefined {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia1.Magazine;
    }
    return undefined;
}

let mediaType: PrintMedia1 | undefined = getMedia1('Dainic Jagran');
// console.log(mediaType)