import { getInputValues } from "../utils";

const inputs = getInputValues("./day1/input.txt");

const test = 'ninefourone1 53sevenvvqm kscpjfdxp895foureightckjjl1 72fivebt9ndgq 28gtbkszmrtmnineoneightmx four66jqrbtqcsxjtqjvfjhl1 four8pzznjbhxlhtz6bhtzdxjlg1 rgxjrsldrfmzq25szhbldzqhrhbjpkbjlsevenseven slkjvk4threesevenznjqmmfive 61ppgrkmkfhteightone 1threesix67px'

let total = 0;

const valuesAsDigits = {
    'oneight' : 18,
    'twone' : 21,
    'threeight' : 38,
    'fiveight' : 58,
    'sevenine' : 79,
    'eightwo' : 82,
    'one': 1,
    'two': 2,
    'three': 3,
    'four' : 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9,
};

inputs.forEach(line => {
    let lineAsDigits;

    for (const [key, value] of Object.entries(valuesAsDigits)) {
        line = line.replaceAll(key, value.toString());
        lineAsDigits = line.replace(/\D/g,'');
    }

    const firstDigit = lineAsDigits?.slice(0, 1);
    const lastDigit = lineAsDigits?.slice(-1);

    total += +`${firstDigit}${lastDigit}`;
});

console.log(total);