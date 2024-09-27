
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let num = getRandomNumber(10, 50);
console.log(num);

function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

function calculateDiameter(radius) {
    return radius * 2;
}

function calculateCurvature(radius) {
    return 1 / radius;
}

let circle = {
    area: calculateCircleArea(6),
    radius: 6,
    diameter: calculateDiameter(6),
    curvature: calculateCurvature(6)
}


console.log(circle);