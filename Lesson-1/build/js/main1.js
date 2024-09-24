"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitar = ['Strat', 'Les Paul', 5150];
let mixedDate = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
console.log(stringArr);
guitar[0] = 1984;
guitar.unshift('satyam');
console.log(guitar);
//Array
let fruits1 = ['Apple', 'Orange', 'Banana'];
console.log(fruits1);
let fruits2 = ['Apple', 'Orange', 'Banana'];
console.log(fruits2);
let fruits3;
fruits3 = ['Apple', 'Orange', 'Banana'];
console.log(fruits3);
let ids;
ids = [23, 34, 100, 124, 44];
console.log(ids);
let values1 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
let values2 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log(values1);
console.log(values2);
let test = [];
let brands = [];
brands.push('Van Helen');
// Tuple => Tuple can contain two values of different data types.
let myTuple = ['satyam', 27, true];
let mixed = ['john', 1, false];
myTuple[1] = 42;
//objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = brands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
exampleObj.prop1 = 'John';
console.log(exampleObj);
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// enums
var PrintMedia1;
(function (PrintMedia1) {
    PrintMedia1[PrintMedia1["Newspaper"] = 1] = "Newspaper";
    PrintMedia1[PrintMedia1["Newsletter"] = 2] = "Newsletter";
    PrintMedia1[PrintMedia1["Magazine"] = 3] = "Magazine";
    PrintMedia1[PrintMedia1["Book"] = 4] = "Book";
})(PrintMedia1 || (PrintMedia1 = {}));
function getMedia1(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia1.Magazine;
    }
    return undefined;
}
let mediaType = getMedia1('Dainic Jagran');
// console.log(mediaType)
