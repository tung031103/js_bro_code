
let grades = [100, 50, 90, 60 ,70];

// grades = grades.sort(descendingSort);
grades = grades.sort(ascendingSort);

grades.forEach(print);

function descendingSort(x, y){
    return y - x;
}


function ascendingSort(x, y){
    return x - y;
}
function print(ele){
    console.log(ele);
}