// function = define code once, and use it many times.
// to perform some code, call the function name.

startProgram();

function startProgram(){
    let username = "Tung";
    let age = 20;

    happyBirthday(username, age);
}




// function happyBirthday(username, age) {
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to dear ", username);
//     console.log("Happy birthday to you!");
//     console.log("You are", age," years old!");
// }
// or 
// its the same result above
function happyBirthday(a, b) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday to dear ", a);
    console.log("Happy birthday to you!");
    console.log("You are", b," years old!");
}