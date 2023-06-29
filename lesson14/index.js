
// let grade = "A";

// switch(grade){
//     case "A":
//         console.log("you did great!");
//         break;
//     case "B":
//         console.log("you did good!");
//         break;
//     case "C":
//         console.log("you did okay!");
//         break;
//     case "D":
//         console.log("you passed ... barely!");
//         break;
//     case "F":
//         console.log("you failed!");
//         break;
//     default:
//         console.log(grade, " is not a letter grade!");
// }

let grade = 95;

switch(true){
    case grade >= 90:
        console.log("you did great!");
        break;
    case grade >= 80:
        console.log("you did good!");
        break;
    case grade >= 70:
        console.log("you did okay!");
        break;
    case grade >= 60:
        console.log("you passed ... barely!");
        break;
    case grade < 60:
        console.log("you failed!");
        break;
    default:
        console.log(grade, " is not a letter grade!");
}