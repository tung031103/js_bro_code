// ternary operator = Short for an 'if/ else statement' 
//                    Tankes 3 operator

// 1. a condition with ?
// 2. expression if true :
// 3. expression if False 


// condition ? exprIfTrue : exprIfFalse

// let adult = checkAge(21);

// console.log(adult);

// function checkAge(age){
//     // if(age >= 18){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }

//     // or the way easy 

//     return age >= 18 ? true : false;
// }

checkWinner(false)

function checkWinner(win){
    win ? console.log("you win!"): console.log("you lose")
}