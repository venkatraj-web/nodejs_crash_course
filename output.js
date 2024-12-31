const x = "x";
const y = "y";

const chalk = require("chalk");

// console.log(x, y);

// %s format a variable as a String
// %d format a variable as a Number
// %i format a variable as a Integer Part Only
// %o format a variable as a Object
// console.log("i am %s! my age is %d", "venkatraj", 27);

// console.log("%o", Number);

// console.clear();

// console.count("venkat");
// console.count("venkat");
// console.count("madhu");
// console.count("venkat");

// const oranges = ["orange", "orange"];
// const apples = ["just one apple"];
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });

// console.countReset("orange");
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });
// apples.forEach((fruit) => {
//   console.count(fruit);
// });

// print the stack trace
// const fn2 = () => console.trace();
// const fn1 = () => fn2();

// fn1();

// calculate time Spent
const sum = () => console.log(chalk.red(`The SUM of 2 and 3 is: ${2 + 3}`));
const multiply = () =>
  console.log(
    chalk.underline.bold(`The Multiplication of 2 and 3 is: ${2 * 3}`)
  );

const measureTime = () => {
  console.time("sum()");
  sum();
  console.timeEnd("sum()");
  console.time("multiply99");
  multiply();
  console.timeEnd("multiply99");
};

measureTime();

const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
  total: 20,
});

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
