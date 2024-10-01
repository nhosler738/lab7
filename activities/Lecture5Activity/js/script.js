// Calculator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


function calculate(number1, number2, calculation) {

    if (calculation === "Add" || calculation === "add") {
        let addResult = add(number1, number2);
        console.log(addResult);
    } else if (calculation === "Subtract" || calculation === "subtract") {
        let subtractResult = subtract(number1, number2);
        console.log(subtractResult);
    } else if (calculation === "Multiply" || calculation === "multiply") {
        let multiplyResult = multiply(number1, number2);
        console.log(multiplyResult);
    } else {
        let divideResult = divide(number1, number2);
        console.log(divideResult);
    }


}


// Test run
calculate(5, 4, "Add");
calculate(5, 4, "subtract");
calculate(5, 4, "multiply");
calculate(5, 4, "divide");



