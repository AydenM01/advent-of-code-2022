const fs = require('fs');

const isOverlapped = ([left, right]) => {
    return (left[0] <= right[0] && left[1] >= right[0]) || (right[0] <= left[0] && right[1] >= left[0]);
}

let sum = 0;
fs.readFileSync('day4/4-input.txt', 'utf-8').split(/\r?\n/).forEach(line =>  {
    if (isOverlapped(line.split(",").map(range => range.split("-").map(extrema => parseInt(extrema))))) sum++;
});

console.log(sum);
