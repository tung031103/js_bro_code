// forEach
// let students = ["lương", "dương", "nhân", "tùng"];

// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(ele, index, array){
//     array[index] = ele[0].toUpperCase() + ele.substring(1); // Viết hoa chữ đầu
// }

function print(ele){
    console.log(ele);
}


// map

// let numbers = [1,2,3,4,5];


// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// // squares.forEach(print);
// cubes.forEach(print);

// function square(ele){
//     return Math.pow(ele,2);
// }

// function cube(ele){
//     return Math.pow(ele,3);
// }

// function print(ele){
//     console.log(ele);
// }


// filter
// let ages = [18, 16, 21, 17, 19, 90];

// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(ele){
//     return ele >= 18; 
// }

// reduce

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`the total is: $${total}`);

function checkOut(total, ele){
    return total + ele;
}
