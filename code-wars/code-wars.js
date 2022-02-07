// Given a string of space separated numbers
// Return the highest and lowest number.

function highAndLow(numbers) {
    let number = numbers.split(" ");
    console.log(`${Math.max(...number)} ${Math.min(...number)}`);
    return `${Math.max(...number)} ${Math.min(...number)}`;
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");

