
// toLacaleString() = returns a string with a language 
// sensitive representation of this number

// number.toLocaleString(locale, {options});

let myNum = 123456.789;
// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // Hindi
// myNum = myNum.toLocaleString("de-DE"); // German

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
myNum = myNum.toLocaleString("vi", {style: "currency", currency: "VND"});

console.log(myNum);