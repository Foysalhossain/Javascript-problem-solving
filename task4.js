function findTwoNumbersWithSum(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        const sum = sortedArray[left] + sortedArray[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

const sortedArray = [1, 3, 6, 8, 11, 15];
const target = 9;
const result = findTwoNumbersWithSum(sortedArray, target);
console.log(result); 
