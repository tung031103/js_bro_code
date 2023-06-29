// class
/*
class Player{
    score = 0;

    pause(){
        console.log("You paused the game");
    }

    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();


player1.score += 2; 
console.log(player1.score);
console.log(player2.score);


player1.pause();
player1.exit();
*/

// constructor
/*
class Student{
    
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}


const student1 = new Student("Hoàng Đình Tùng", 19, 3.2);
const student2 = new Student("Trịnh Đức Lương", 19, 3.5);
const student3 = new Student("Trịnh Quang Dương", 19, 3.8);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();


console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);

student2.study();


console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);

student3.study();
*/

// static
/*
class Car{

    static numberOfCar = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCar += 1;
    }

    static startRace(){
        console.log("3...2...1..Go!");
    }
}


const car1 = new Car("Mustang");
const car2 = new Car("chevorlet");
const car3 = new Car("BMW");
const car4 = new Car("Lambo");

// console.log(Car.numberOfCar);

Car.startRace();
*/

//inheritance
/*
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is runing`);
    }
}

class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swiming`);
    }
}

class Hawk extends Animal{
    name = "hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();


console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
*/


// supper keyword
/*
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}

class Rabbit extends Animal{
    
    constructor(name, age, runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    
    constructor(name, age, swinSpeed){
        super(name,age);
        this.swinSpeed = swinSpeed;
    }
}

class Hawk extends Animal{
    
    constructor(name, age, flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Rabbit", 2, 60);
const fish = new Fish("Fish", 4, 80);
const hawk = new Hawk("Hawk", 10, 100);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
*/

// get = binds an object property to a function when that property is accessed

// set = binds an object property to a function when that property is assigned a value

/*
class Car{
    constructor(power){
        this._gas = 50;
        this._power = power;
    }

    get power(){
        return `${this._power}hp`;
    }

    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100})%`;
    }

    set gas(value){
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}


let car = new Car(400);

car.gas = -100;

console.log(car.power);
console.log(car.gas);
*/

// pass arguments in function
/*
class Car {
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}


const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

changeColor(car1, "green")

displayInfo(car1);

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color){
    car.color = color;
}
*/


// array of objects
/*
class Car {
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

const cars = [car1,car2,car3];

// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();

startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}
*/

