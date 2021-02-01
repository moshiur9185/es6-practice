// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function (num) {
//     return num * 2;
// }


//empty parameter declare function es6
const give10 = () => 10;

//es6 single parameter function declare
const doubleIt = num => num * 2;

//single < parameter declare function es6
const add = (num1, num2) => num1 * num2;

//doMath function declare
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    return result;
}

const result = add(7, 7);

const result2 = give10();

const math = doMath(7, 5);
console.log(math);
console.log(result);
console.log(result2);