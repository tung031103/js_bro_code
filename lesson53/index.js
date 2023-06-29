
const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");


// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreen);

// function changeRed(){
//     innerDiv.style.backgroundColor = "red";
// }

// function changeGreen(){
//     innerDiv.style.backgroundColor = "lightgreen";
// }

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true); // nếu bằng true nó sẽ select outerDiv trước 


function changeBlue(){
    alert(`you selected ${this.id}`);
    this.style.backgroundColor = "lightblue";
}

