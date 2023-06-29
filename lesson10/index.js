// slice() extracts qa sections of a string 
//          and returns its as a new string,
//          without midifying the original string



let fullName = "Snoop Dogg";

let firstName;
let lastName;

// firstName = fullName.slice(0,3)

// lastName = fullName.slice(4); // slice have 2 aguments start index and end index

firstName = fullName.slice(0, fullName.indexOf(" "));

lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName)
console.log(lastName)