// máy tính cơ bản

// phép tinh
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// nhập đầu vào 2 số
let number1= parseInt(prompt("Nhap number1: "));
let number2= parseInt(prompt("Nhap number2: "));
let result;

// using if...else if... else or switch
switch (operator) {
    case "+": 
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number1 / number2;
        break;
    default:
        break;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${parseFloat(result)}`);
