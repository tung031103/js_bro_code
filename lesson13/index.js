
document.getElementById("myBtn").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    if(myCheckBox.checked){
        console.log("You are subcribe!");
    }
    else{
        console.log("You are Not subcribe!")
    } 

    if(visaBtn.checked){
        console.log("You are paying with a Visa!");
    }
    else if(mastercardBtn.checked){
        console.log("You are paying with a Mastercard!");
    }
    else if(paypalBtn.checked){
        console.log("You are paying with PayPal!");
    }
    else{
        console.log("you must select a payment type!");
    }
}