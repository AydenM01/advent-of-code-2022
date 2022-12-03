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
let currCount = 0;

let set0 = new Set();
let set1 = new Set();

allFileContents.split(/\r?\n/).forEach(line =>  {
    if (currCount === 0) {
        for (let i = 0; i < line.length; i++) {
            set0.add(line.charAt(i));
        }
        currCount++;
    }

    else if (currCount === 1) {
        for (let i = 0; i < line.length; i++) {
            set1.add(line.charAt(i));
        }
        currCount++;
    }
    
    else if (currCount === 2) {
        let foundIn0 = false;
        let foundIn1 = false;

        for (let i = 0; i < line.length; i++) {
            
            if (set0.has(line.charAt(i))) {
                foundIn0 = true;
            }

            if (set1.has(line.charAt(i))) {
                foundIn1 = true;
            }

            if (foundIn0 && foundIn1) {
                prioritySum += getPriority(line.charAt(i));
                
                currCount = 0;
                set0.clear();
                set1.clear();
                break;
            }

            foundIn0 = false;
            foundIn1 = false;
        }
    }
});

console.log(prioritySum);
