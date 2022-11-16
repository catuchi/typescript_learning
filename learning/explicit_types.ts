// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = '30'
age = 30;

// isLoggedIn = 'true'
isLoggedIn = false;

// arrays
let ninjas: string[] = [];

ninjas.push("shaun");

// union types
// let mixed: any[] = [];
let mixed: (boolean | string | null)[] = [];

mixed.push(null);
mixed.push(true);
mixed.push("null");
console.log(mixed);

let uid: string | number;
uid = "123";
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};
