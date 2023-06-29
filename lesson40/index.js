// object

const cars = {
    model: "Mustang",
    color: "red",
    years: 2023,

    drive: function(){
        console.log(`you drive the ${this.model}`);
    },

    brake: function(){
        console.log("you step on the brake");
    },
}

const cars2 = {
    model: "Corvette",
    color: "blue",
    years: 2022,

    drive: function(){
        console.log(`you drive the ${this.model}`);
    },

    brake: function(){
        console.log("you step on the brake");
    },
}

// console.log(cars.model);
// console.log(cars.color);
// console.log(cars.years);

// cars.drive();
// cars.brake();

// console.log(cars2.model);
// console.log(cars2.color);
// console.log(cars2.years);

cars2.drive();
cars2.brake();