const square = function (x) {
    return x * x
};

console.log(square(8));

const squareArrow = x => x * x;

console.log(squareArrow(8));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Andrew Mead'));