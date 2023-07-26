function findMostFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }

    const frequency = {};

    arr.forEach((element) => {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    });

    let mostFrequentElement;
    let highestFrequency = 0;

    for (const element in frequency) {
        if (frequency[element] > highestFrequency) {
            mostFrequentElement = element;
            highestFrequency = frequency[element];
        }
    }

    return mostFrequentElement;
}

// Example Input
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

const result = findMostFrequentElement(inputArray);
console.log(result); 
