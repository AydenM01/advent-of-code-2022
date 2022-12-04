const fs = require('fs');

const allFileContents = fs.readFileSync('day4/4-input.txt', 'utf-8');

let sum = 0;
allFileContents.split(/\r?\n/).forEach(line =>  {
    const pair = line.split(",");
    const left = pair[0].split("-");
    const right = pair[1].split("-");
    
    const leftL = parseInt(left[0]);
    const leftR = parseInt(left[1]);
    const rightL = parseInt(right[0]);
    const rightR = parseInt(right[1]);
    
    if (leftL <= rightL && leftR >= rightL) {
        sum++;
    } else if (rightL <= leftL && rightR >= leftL) {
        sum++;
    }
});

console.log(sum);