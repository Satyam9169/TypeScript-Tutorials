"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const obj = new Coder('satyam', 'HindiMusic', 28);
console.log(obj.getAge());
console.log(obj.name);
console.log(obj.music);
/* using extend keyword */
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I develop new ${this.lang}`;
    }
}
const Container = new webDev('Window', 'krisiti', 'hamko diwana', 28);
console.log(Container.getLang());
// console.log(Container.age)
