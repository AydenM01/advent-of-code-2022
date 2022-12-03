const fs = require('fs');

const allFileContents = fs.readFileSync('2-input.txt', 'utf-8');

let score = 0;

allFileContents.split(/\r?\n/).forEach(line =>  {
    let round = line.split(" ");

    if (round[1] == "X") {
        score += 1;
    } else if (round[1] == "Y") {
        score += 2;
    } else if (round[1] == "Z") {
        score += 3;
    }

    if (round[0].charCodeAt(0) == round[1].charCodeAt(0) - 23) {
        score += 3;
    }
    else if (round[0] == "A" && round[1] == "Y") {
        score += 6;
    } else if (round[0] == "B" && round[1] == "Z") {
        score += 6;
    } else if (round[0] == "C" && round[1] == "X") {
        score += 6;
    }

});


console.log("Puzzle 1: " + score);

let score2 = 0;

allFileContents.split(/\r?\n/).forEach(line =>  {
    let round = line.split(" ");

    if (round[1] == "X") {
        score2 += 0;

        if (round[0] == "A") {
            score2 += 3;
        } else if (round[0] == "B") {
            score2 += 1;
        } else if (round[0] == "C") {
            score2 += 2;
        }

    } else if (round[1] == "Y") {
        score2 += 3;

        if (round[0] == "A") {
            score2 += 1;
        } else if (round[0] == "B") {
            score2 += 2;
        } else if (round[0] == "C") {
            score2 += 3;
        }

    } else if (round[1] == "Z") {
        score2 += 6;

        if (round[0] == "A") {
            score2 += 2;
        } else if (round[0] == "B") {
            score2 += 3;
        } else if (round[0] == "C") {
            score2 += 1;
        }
    }
});

console.log("Puzzle 2: " + score2);