"use strict";
// let student: string;
// let age: number;
// let likes: (string | number);
const person = {
    name: 'Cj',
    age: 25,
    speak(lang) {
        console.log("Can speak Twi");
    },
    spend(amount) {
        return amount;
    }
};
let me;
let family;
let likes;
likes = { food: 22, girls: 'Mercy' };
console.log(likes);
// Functions
let greet;
const sum = (a, b, c) => {
    return a + b;
};
let ans = sum(9, 5, 33);
console.log(ans);
let user = { name: "Emmanuel", age: 25 };
const logUser = (user) => {
    console.log({ name: user.name, age: user.age });
};
logUser(user);
// Function types and signatures
let logAns;
let getNames;
logAns = (a, b, c) => {
    if (c.toLowerCase() === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
getNames = (name, occupation) => {
    console.log(name, '=>', occupation);
};
let arith = logAns(9, 3, 'Add');
console.log(arith);
let users = getNames("Ceejay", "Software Developer");
console.log(users);
// Class interfaces
class Person {
    constructor(name, age, colour) {
        this.name = name;
        this.age = age;
        this.colour = colour;
    }
    getPerson() {
        return `${this.name} is ${this.age} years old and has ${this.colour} skin`;
    }
}
let p1;
p1 = new Person("Sam", 30, "Black");
console.log(p1);
// Specify exact values using the union operator
let rand;
rand = 9;
const football = {
    name: "football",
    age: 1000,
    isLiked: "Yes"
};
let genericFunc = (user) => {
    let uid = Math.random() * 1000;
    return Object.assign(Object.assign({}, user), { uid });
};
//(genericFunc({}))
// Enums
var movies;
(function (movies) {
    movies[movies["panther"] = 0] = "panther";
    movies[movies["ironman"] = 1] = "ironman";
    movies[movies["joker"] = 2] = "joker";
    movies[movies["superman"] = 3] = "superman";
})(movies || (movies = {}));
;
const newMovie = {
    movie: movies.panther
};
console.log(newMovie);
