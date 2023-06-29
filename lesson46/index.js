
// promise

/*
const promise = new Promise((resolve, reject) =>{
    let fileLoaded = false;
    if(fileLoaded){
        resolve("file loaded");
    }
    else{
        reject("file not loaded");
    }
});


promise.then(value => console.log(value))
        .catch(error => console.log(error));

*/

/*
const wait = time => new Promise( resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("thank for waiting!"));
*/

// async = make a function return a Promise
// await = make a function wait for a Promise

// async
/*
async function fileLoaded(){
    let fileLoaded = true;
    if(fileLoaded){
        return Promise.resolve( "file loaded");
    }
    else{
        return Promise.reject( "file not loaded");
    }
}

fileLoaded().then(value => console.log(value))
        .catch(error => console.log(error));
*/

// await
async function fileLoaded(){

    const promise = new Promise((resolve, reject) => {    
        let fileLoaded = false;
        if(fileLoaded){
            resolve ("file loaded");
        }
        else{
            reject("file not loaded");
        }
    })

    try {
        document.getElementById("myH1").innerHTML = await promise;
    } catch (error) {
        document.getElementById("myH1").innerHTML = error;
    }
}

fileLoaded();
