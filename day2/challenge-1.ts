import { getInputValues } from "../utils";

const inputs = getInputValues("./day2/input.txt");

const allowedRed = 12;
const allowedBlue = 14;
const allowedGreen = 13
let total = 0;

inputs.forEach(input => {
    const id = input.split(":")[0].replace(/\D/g,'');
    const subsets = input.split(":")[1].split(";");
    let maxGreen = 0;
    let maxRed = 0;
    let maxBlue = 0;

    subsets.forEach(subset => {
        const colors = subset.split(",");

        colors.forEach(color => {
            const [count, colorName] = color.trim().split(" ");
            const countValue = parseInt(count);

            if (colorName === "green") {
                maxGreen = Math.max(maxGreen, countValue);
            } else if (colorName === "red") {
                maxRed = Math.max(maxRed, countValue);
            } else if (colorName === "blue") {
                maxBlue = Math.max(maxBlue, countValue);
            }
        });
    });

    console.log(id, maxGreen, maxRed, maxBlue);

    if (allowedBlue >= maxBlue && allowedGreen >= maxGreen && allowedRed >= maxRed) {
        total += parseInt(id);
    }
});

console.log(total);