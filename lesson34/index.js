
// function expression = function without a naMe



// const greeting = function(){
//     console.log("Hello!");
// }

// greeting();

let count = 0;

// function expression
document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("myLabel").innerHTML = count;
}

// function normal
/*
function increaseCount(){
    count +=1;
    document.getElementById("myLabel").innerHTML = count;
}

function decreaseCount(){
    count -=1;
    document.getElementById("myLabel").innerHTML = count;
}
*/