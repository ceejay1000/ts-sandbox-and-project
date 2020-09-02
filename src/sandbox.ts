// let student: string;
// let age: (number | string);
// let likes: string;

// let friends: string[];
// let collection: (string | number | object)[];

// let skills: object;
// let belt: any;

// let skillset: {
//   name: string,
//   age: number,
//   language: string
// }

// skillset = {
//   name: 'Emmanuel',
//   age: 099,
//   language: "PHP,JS"
// }

// Dynamic types

// interfaces
interface isPerson {
  name: string,
  age: number,
  speak(a: string): void
  spend(a: number): number
}

const person: isPerson = {
  name: 'Cj',
  age: 25,
  speak(lang: string) {
    console.log("Can speak Twi")
  },
  spend(amount: number) {
    return amount;
  }
}

let me: any;
let family: any[];
let likes: {
  food: any,
  girls: any
}

likes = { food: 22, girls: 'Mercy' }
console.log(likes)

// Functions
let greet: Function;

const sum = (a: number, b: number, c?: number | string):number => {
  return a + b;
}

let ans = sum(9, 5, 33);
console.log(ans)

// Type aliases
type numOrStr = number | string;
type nameStr = string;
type userObjType = { name: nameStr, age: numOrStr };
let user = { name: "Emmanuel", age: 25 };

const logUser = (user: { name: nameStr, age: numOrStr }) => {
  console.log({name: user.name, age: user.age})
}

logUser(user)

// Function types and signatures
let logAns: (a: number, b: number, c: string) => number

let getNames: (name: string, occupation: string) => void

logAns = (a: number, b: number, c: string) => {
  if (c.toLowerCase() === "add") {
    return a + b;
  } else {
    return a - b;
  }
}

getNames = (name: string, occupation: string) => {
  console.log(name, '=>', occupation)
}

let arith = logAns(9, 3, 'Add');
console.log(arith);

let users = getNames("Ceejay", "Software Developer");
console.log(users);

// Class interfaces
class Person {
  constructor(public name: string, public age: number, public colour: string) { }
  
  getPerson() {
    return `${this.name} is ${this.age} years old and has ${this.colour} skin`;
  }
}

let p1: Person;

p1 = new Person("Sam", 30, "Black");
console.log(p1);

// Specify exact values using the union operator
let rand: 9 | 8;

rand = 9;

// Generics <T>
interface Games<T> {
  name: string,
  age: number,
  isLiked: T
}

const football: Games<string> = {
  name: "football",
  age: 1000,
  isLiked: "Yes"
}


let genericFunc = <T>(user: object) => {
  let uid = Math.random() * 1000;
  return {
    ...user,
    uid
  }
}

//(genericFunc({}))

// Enums
enum movies { panther, ironman, joker, superman };

interface releases {
  movie: movies
}

const newMovie: releases = {
  movie: movies.panther
}

//console.log(newMovie)

// Tuples
// Tuples are exactly like arrays execpt that they accept a predefined set of elements of 
// a particular datatype. Elements of a tuple can only be replaced by other elements of the same 
// data type
let robots: [string, number, boolean, string];
robots = ['rolex', 901, true, 'bee'];