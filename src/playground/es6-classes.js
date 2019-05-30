class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, I'm ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += `I'm visiting from ${this.homeLocation}.`
        }
        return greeting
    }

}

const traveler = new Traveler('Mike', 23, 'Mayami');
console.log(traveler.getGreeting());




const me = new Person('Andrew Mead', 26);
const other = new Person();
const student = new Student('Kia Rio', 5, 'Computer Science');
console.log(student.getDescription());

console.log(me.getDescription());
console.log(other.getDescription());

