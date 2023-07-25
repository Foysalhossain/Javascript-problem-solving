function sumOfPositiveNumbers(numArray) {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += numArray[i]
        }
    }
    return sum;
}

// example input
const inputArray = [2, -5, 10, -3, 7]

console.log(sumOfPositiveNumbers(inputArray));