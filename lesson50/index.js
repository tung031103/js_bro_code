'use strict';

// const nameTag = document.createElement("h1");

// nameTag.innerHTML = "Tung";

// nameTag.textContent = window.prompt("enter your name");

// document.body.append(nameTag);

const myList = document.querySelector("#fruits");

const listItem = document.createElement("li");

listItem.textContent = "mango";

// myList.append(listItem); // add vào cuối danh sách
// myList.prepend(listItem); // add vào đầu danh sách

myList.insertBefore(listItem, myList.getElementsByTagName("li")[0]);
