
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

let breakingRecords = (scores) => {
    
    let min = scores[0];
    let max = scores[0];
    let Scoredecreased = 0;
    let Scoreincreased = 0;
    let n = scores.length;

    for (let i = 1; i < n; i++) {
        if (scores[i] < min) {
            min = scores[i];
            Scoredecreased++
        }
        if (scores[i] > max) {
            max = scores[i];
            Scoreincreased++;
        }
    }
    console.log(`${Scoreincreased} ${Scoredecreased}`);
}

breakingRecords(scores)

