// variable (Biến): var, let, const

// hộp thoại của trình duyệt alert or prompt

var name = prompt("nhập tên của bạn: ");
let age = prompt("nhập tuổi của bạn: ");
const id = prompt("nhập id của bạn: ");

// 

document.getElementById("p1").innerHTML = "hello " + name ;
document.getElementById("p2").innerHTML = "you are " + age+ " years old";
document.getElementById("p3").innerHTML = "your id is "+ id;