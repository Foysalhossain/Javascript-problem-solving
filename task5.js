function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Check if the second number is not zero to avoid division by zero
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Cannot divide by zero';
            }
        default:
            return 'Invalid operator';
    }
}
console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '-'));
console.log(calculate(10, 5, '*'));
console.log(calculate(10, 5, '/'));
console.log(calculate(10, 0, '/'));
console.log(calculate(10, 5, '%'));   