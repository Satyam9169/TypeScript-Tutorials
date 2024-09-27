class Coder {
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I am ${this.age}`;
    }
}

const obj = new Coder('satyam', 'HindiMusic', 28);
console.log(obj.getAge())
console.log(obj.name)
console.log(obj.music)

/* using extend keyword */

class webDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I develop new ${this.lang}`
    }
}

const Container = new webDev('Window', 'krisiti', 'hamko diwana', 28);
console.log(Container.getLang())
// console.log(Container.age)


