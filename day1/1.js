const fs = require('fs');

const allFileContents = fs.readFileSync('day1/1-input.txt', 'utf-8');

const elves = [];

let currElf = 0;

allFileContents.split(/\r?\n/).forEach(line =>  {
    if (line === "") {
        elves.push(currElf);
        currElf = 0;

    } else {
        currElf += parseInt(line);
    }
});

elves.sort((a,b) => a - b);

console.log("Puzzle 1: " + elves.slice(-1));

const elfSumInitial = 0;
const elfSum = elves.slice(-3).reduce((a, v) => a + v, elfSumInitial);
console.log("Puzzle 2: " + elfSum);