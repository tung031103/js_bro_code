
const myBtn = document.getElementById("myBtn");
const myAnimation = document.getElementById("myDiv");

myBtn.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let degreres = 0;
    let scaleX = 1;
    let scaleY = 1;

    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);
    /*
    function frame(){
        if(x>=200){
            clearInterval(timerId);
        }
        else{
            x+=1;
            myAnimation.style.left = x +"px";
        }
    }
    */

    /*
    function frame(){
        if(y>=200){
            clearInterval(timerId);
        }
        else{
            y+=1;
            myAnimation.style.top = y +"px";
        }
    }
    */

    /*
    function frame(){
        if(x>=200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            myAnimation.style.left = x +"px";
            myAnimation.style.top = y +"px";
        }
    }
    */

    /*
    function frame(){
        if(degreres >= 360){
            clearInterval(timerId);
        }else{
            degreres += 1;
            myAnimation.style.transform = "rotateX("+degreres+"deg)";
        }
    }
    */

    /*
    function frame(){
        if(degreres >= 360){
            clearInterval(timerId);
        }else{
            degreres += 1;
            myAnimation.style.transform = "rotateY("+degreres+"deg)";
        }
    }
    */

    /*
    function frame(){
        if(degreres >= 360){
            clearInterval(timerId);
        }else{
            degreres += 1;
            myAnimation.style.transform = "rotateZ("+degreres+"deg)";
        }
    }
    */

    /*
    function frame(){
        if(x >= 200 || y>=200){
            clearInterval(timerId);
        }else{
            degreres += 7;
            x+=1;
            y+=1;
            myAnimation.style.left = x +"px";
            myAnimation.style.top = y +"px";
            myAnimation.style.transform = "rotateZ("+degreres+"deg)";
        }
    }
    */

    /*
    function frame(){
        if(scaleX >=2){
            clearInterval(timerId);
        }
        else{
            scaleX += 0.01;
            myAnimation.style.transform = "scale("+scaleX+", "+scaleY+")";
        }
    }
    */

    /*
    function frame(){
        if(scaleY >= 2){
            clearInterval(timerId);
        }
        else{
            scaleY += 0.01;
            myAnimation.style.transform = "scale("+scaleX+", "+scaleY+")";
        }
    }
    */

    /*
    function frame(){
        if(scaleX >=2 || scaleY >= 2){
            clearInterval(timerId);
        }
        else{
            scaleX += 0.01;
            scaleY += 0.01;
            myAnimation.style.transform = "scale("+scaleX+", "+scaleY+")";
        }
    }
    */

    function frame(){
        if(scaleX <= 0.1 || scaleY <= 0.1){
            clearInterval(timerId);
        }
        else{
            scaleX -= 0.01;
            scaleY -= 0.01;
            myAnimation.style.transform = "scale("+scaleX+", "+scaleY+")";
        }
    }

}

