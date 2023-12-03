import { getInputValues } from "../utils";

const values = getInputValues("./day1/input.txt");
let total = 0;

values.forEach(value => {
    const calibrationValue = value.replace(/[^0-9]/g, '');
    const firstDigit = calibrationValue.slice(0, 1);
    const lastDigit = calibrationValue.slice(-1);

    total += +`${firstDigit}${lastDigit}`;
});

console.log(total);