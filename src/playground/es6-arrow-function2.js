const add = function (a, b) {
    console.log(arguments);
    return a + b
};

const add2 = (a, b) => {
    return a + b
};

console.log(add(55, 1));

const user = {
    name: 'Andrew',
    cities: ['Moscow', 'Philadelphia', 'Dublin'],
    printPlacesLived() {
        return this.cities.map(city => `${this.name} has lived in ${city}`)
    }
};

const multiplier = {
    numbers: [1, 2, 4, 6, 7, 4, 9],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy)
    }

};

console.log(user.printPlacesLived());
console.log(multiplier.multiply());