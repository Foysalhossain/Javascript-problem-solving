const input = "hello world";

function reverseStr(inputStr) {
    let reversedString = '';
    for (let i = inputStr.length - 1; i >= 0; i--) {
        reversedString += inputStr.charAt(i);
    }
    return reversedString
}

const reversed = reverseStr(input);
console.log(reversed);