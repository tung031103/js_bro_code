
// setTimeout = invokes a function after a number of miliseconds
//              asynchronous function (doesn't pause execution)
/*
let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}!`);
}

function secondMessage(){
    alert(`This is not a scam!`);
}

function thirdMessage(){
    alert(`DO IT!`);
}

document.getElementById("myBtn").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`thanks for buying!`);
}
*/

// setInterval = invokes a function repeatedly after a number milisecond
//               asynchronous function (doesn't pause executed)

let count = 0;

let max = prompt("Count up to what #?");

max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp(){
    count += 1;
    console.log(count);

    if(count >= max) {
        clearInterval(myTimer);
    }

}
