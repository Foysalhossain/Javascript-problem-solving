function romanToInt(roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentNumeral = romanNumerals[roman[i]];
        const nextNumeral = romanNumerals[roman[i + 1]];

        if (currentNumeral < nextNumeral) {
            result += nextNumeral - currentNumeral;
            i++; // Skip the next character, as it has already been considered.
        } else {
            result += currentNumeral;
        }
    }

    return result;
}

// Test examples
console.log(romanToInt("IX"));
console.log(romanToInt("XXI"));
console.log(romanToInt("IV"));
console.log(romanToInt("XC"));
console.log(romanToInt("MCMXCIV"));
