//Problem 1
//type-1
function findFreq(str, char) {
    const b = str.match(/m/gi);
    return b;
}
console.log(findFreq("My favorite Fruit is mango"));
//type-2
function findFreq1(str, char) {
    const b = str.match(/i/gi);
    return b;
}
console.log(findFreq1("My favorite Fruit is mango"));

//Problem 2
//type-1
function areAllEqual(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1])
            return true;
        else
            return false;
    }

}
console.log(areAllEqual(['test', 'test', 'test']));
//type-2

function areSame(arr) {
    let next = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != next) {
            return false;
        }
    }
    return true;
}
console.log(areSame([1, 1, 1, 2]));


//Problem 3
//type-1
function subArray(arr, n) {
    const newarray = arr.splice(-n);
    return newarray;
}
console.log(subArray([1, 2, 3, 4, 5], 2));
//type-2
function subArray(arr, n) {
    const newarray = arr.splice(-n);
    return newarray;
}
console.log(subArray([1, 2, 3], 6));