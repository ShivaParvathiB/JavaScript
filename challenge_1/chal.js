//Problem 1
//1st one
const numbersArray = ['apple', 'orange', 'peach'];
const [a, b, c] = numbersArray;
console.log(a, c);
//2nd one
const person = {
    name: 'abcde',
    age: 10,
    gender: 'm'
};
//const per = { person.name, person.age };
console.log(person.name);
console.log(person.age);

//Problem 2
//1st
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arr = [...array1, ...array2];
console.log(arr);
//2nd 
const basicDetails = {
    name: 'abcde',
    age: 10,
    gender: 'm'
};
const educationDetails = {
    degree: 'xyz',
    college: 'anc',
}
const arr1 = {...basicDetails, ...educationDetails };
console.log(arr1);

//Problem 3
//1st
let numArray = [1, 5, 7, 9];

function largestNumber(numArray) {
    let x = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > x) {
            x = numArray[i];
        }
    }
    return x;
}
console.log(largestNumber(numArray));

//2nd
let numArray1 = [-1, -5, 0, -100];

function largestNumber(numArray1) {
    let x = 0;
    for (let i = 0; i < numArray1.length; i++) {
        if (numArray1[i] > x) {
            x = numArray1[i];
        }
    }
    return x;
}
console.log(largestNumber(numArray1));

//Problem 4
let employeesArray = [100, 500, 700, 400],
    percent = 10;

function updateSalaries(employeesArray, percent) {
    for (let i = 0; i < employeesArray.length; i++) {
        let x = employeesArray[i] * 0.1;
        employeesArray[i] = employeesArray[i] + x;
    }
    return employeesArray;
}
console.log(updateSalaries(employeesArray, percent));