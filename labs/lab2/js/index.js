









function calculateCircleArea() {
    const radius = 6;
    const pi = Math.PI;

    const circleArea = pi * Math.pow(radius, 2);
    console.log(circleArea);

}

function calculate(number1, number2) {
    const add = number1 + number2;
    const multiply = number1 * number2;
    const subtract = number1 - number2;
    const divide = number1 / number2;

    console.log("Addition ",add);
    console.log("Multiplication ", multiply);
    console.log("Subtraction ", subtract);
    console.log("Division ", divide);


}


function calculateRectArea() {
    const length = 20;
    const width = 15;
    const area = length * width;
    console.log(area);
}


calculateCircleArea();
calculate(5,5);
calculateRectArea();


/*
A const variable is only accessible in the block it is defined in. If you declare a const variable inside
a function, loop, or any curly braces, it will not be accessible outside that block


The let and const keywords were added to javascript with the ECMAScript 2015 specification.
 */
