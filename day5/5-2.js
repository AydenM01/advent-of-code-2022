const fs = require('fs');

let count = 0;
const stacks = Array.from({length: 9}, () => []);

fs.readFileSync('day5/5-input.txt', 'utf-8').split(/\r?\n/).forEach(line => {
    if (count++ < 8) {        
        let start = 1;
        for (let i = 0; i < 9; i++) {
            if (line.charAt(start) !== ' ') {
                stacks[i].unshift(line.charAt(start));
            }
            start += 4;
        }        
    }

    if (count >= 11) {
        const [num, from, to] = line.split(" ").filter((e) => {return parseInt(e)}).map((e) => parseInt(e));
        stacks[from-1].splice(-num, num).map((c) => stacks[to-1].push(c));
    }
});

console.log(stacks.map((stack) => stack[stack.length - 1]).join(""));
