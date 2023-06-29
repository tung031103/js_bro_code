
// error

// throw


try {
    let x = prompt("enter a #");
    x = Number(x);
    if(isNaN(x)){
        throw "That wasn't a number";
    }
    if(x =="") throw "That was empty!";

    console.log(`${x} is a number`);
} catch (error) {
    console.log(error);
}
finally{
    console.log("This always executes");
}