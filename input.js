const readline = require("readline");
const prompt = require("prompt-sync")();

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("What is Your Name? ", (name) => {
  console.log(`hi, ${name} you are hero right!!`);
  r1.close();
});

// const name = prompt("What is your name? ");

// console.log(`hi, ${name} you are hero right!!`);
