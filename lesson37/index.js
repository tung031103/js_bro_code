

// nested function

let userName = "bro";

let userInbox = 0;

login();


function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`welcome ${userName}`);
    }
    
    function displayUserInbox(){
        console.log(`you have ${userInbox} new message`);
    }
}


