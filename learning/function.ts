let greet: Function;

// greet = 'hello'

greet = () => {
  console.log("hello, world");
};

// const add = (a: number, b: number) => {
//   console.log(a + b);
// };

// with optional parameter
// const add = (a: number, b: number, c?: number | string) => {
//   console.log(a + b);
//   console.log(c);
// };

// with default parameter
// also specifying the return value type of void (which is a complete lack of a return value)
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 6, "10");

// specify the return value type of number
const sum = (a: number, b: number): number => {
  return a + b;
};

let result = sum(1, 2);
// result = "something else";
