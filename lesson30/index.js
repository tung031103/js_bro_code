

// rest parameterss
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a,b,c, d));


// function sum(a,b){
//     return a + b;
// }


// function sum(a,b,c){
//     return a + b+ c;
// }

// function sum(a,b,c,d){
//     return a + b+ c+d;
// }
// it will be error and return NaN over 3 function

function sum(...numbers){
    let total = 0;

    for(let number of numbers){
        total += number;
    }
    return total;
}

