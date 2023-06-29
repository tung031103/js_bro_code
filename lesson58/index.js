// window = interface used to talk to the web browser
//          the DOM is a property of the window

// console.dir(window);

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);
// window.location.href = "https://google.com";
// console.log(window.location.hostname);
// console.log(window.location.pathname);

const myBtn = document.querySelector("#myBtn");

// myBtn.addEventListener("click", () => window.open("https://google.com"));
// myBtn.addEventListener("click", () => window.close());
myBtn.addEventListener("click", () => window.print());
