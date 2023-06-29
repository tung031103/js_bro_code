
// return statement

let area;
let width;
let height;

width = prompt("enter width");
height = prompt("enter height");

area = getArea(width, height);

console.log("The area is: ", area);

function getArea(width, height){
    let result = width * height;
    return result;
}