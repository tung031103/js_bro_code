
// closure

document.getElementById("loginBtn").onclick = login();



userInbox = 420.69;

function login(){
    let userName = "Tung";
    let userInbox = 1;
    function alertUser(){
        alert(`${userName} you have ${userInbox} new message`);
        userInbox = 0;
    }
    return alertUser;
}