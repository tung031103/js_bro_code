
// const element = document.getElementById("myBtn");
// const element = document.body;
// const element = document.getElementById("myText");
const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;


function doSomething(){
    // alert("you did something");
    element.style.backgroundColor = "red";
}

function doSomethingElse(){
    element.style.backgroundColor = "lightgreen";
}