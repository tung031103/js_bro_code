// nested loop = a loop inside of another loop



// for(let i=1;i<=2;i++){
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

let symbol = prompt("Enter a symbol to use");

let rows = prompt("enter # of rows");
let cols = prompt("enter # of cols");

for(let i=1;i<=rows;i++){
    for(let j=1;j<=cols;j++){
        document.getElementById("myRect").innerHTML += symbol;
    }
    document.getElementById("myRect").innerHTML += "<br>";
    
}