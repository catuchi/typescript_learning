var greet;
// greet = 'hello'
greet = function () {
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
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 6, "10");
// specify the return value type of number
var sum = function (a, b) {
    return a + b;
};
var result = sum(1, 2);
// result = "something else";
