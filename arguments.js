// console.log(process.argv.slice(2)[0]);

// process.argv.forEach((val, ind) => {
//   console.log(`${ind}:${val}`);
// });

const minimist = require("minimist");

const newArg = minimist(process.argv);
console.log(newArg);
console.log(newArg.name);

console.log(parseInt(process.env.a) + parseInt(process.env.b));
