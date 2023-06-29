
// gives us the ability to check more than 1 condition concurently
// && AND (BOTH condition must be true)
// || OR (Either condition can be true)

let temp = 15;
let sunny = true;

if(temp > 0 || temp < 30 && sunny ){
    console.log("the weather is good!");
}
else{
    console.log("the weather is bad!");
}