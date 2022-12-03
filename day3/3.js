const fs = require('fs');

const allFileContents = fs.readFileSync('3-input.txt', 'utf-8');

const getPriority = (char) => {
    let priority = 0;

    if (char === char.toUpperCase()) {
        priority += 26;
    }
    
    priority += char.toLowerCase().charCodeAt(0) - 96;

    return priority;
}

let prioritySum = 0;

allFileContents.split(/\r?\n/).forEach(line =>  {
    const leftSet = new Set();
    let left = line.substring(0, line.length / 2);
    for (let i = 0; i < left.length; i++) {
        leftSet.add(left.charAt(i));
    }

    let right = line.substring(line.length / 2);
    for (let i = 0; i < right.length; i++) {
        if (leftSet.has(right.charAt(i))) {
            prioritySum += getPriority(right.charAt(i));
            break;
        }
    }
});

console.log(prioritySum);
