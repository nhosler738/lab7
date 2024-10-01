
function changeColour() {
    const selectContainer = document.getElementById("day-select-container");
    const selectElement = document.getElementById("day-select");
    const selectValue = selectElement.value;

    switch (selectValue) {
        case "Monday":
            selectContainer.style.backgroundColor = "red";
            break;
        case "Tuesday":
            selectContainer.style.backgroundColor = "green";
            break;
        case "Wednesday":
            selectContainer.style.backgroundColor = "yellow";
            break;
        case "Thursday":
            selectContainer.style.backgroundColor = "blue";
            break;
        case "Friday":
            selectContainer.style.backgroundColor = "purple";
            break;
        case "Saturday":
            selectContainer.style.backgroundColor = "cyan";
            break;
        case "Sunday":
            selectContainer.style.backgroundColor = "beige";
            break;
        default:
            selectContainer.style.backgroundColor = "white";
            break;
    }
}

function checkNumber() {

    const number = document.getElementById("number").value;
    let primeOrEven = isPrime(number);
    let finalString = "";

    if (number % 2 === 0) {
        finalString += "The number entered is an even number ";
    } else {
        finalString += "The number entered is not an even number ";
    }

    if(primeOrEven === true) {
        finalString += "and prime, "
    } else {
        finalString += "and composite, "
    }

    if (number <= 50) {
        finalString += "and is less than or equal to 50";
    } else if (number > 50 && number <= 75) {
        finalString += "and is greater than 50 and is less than or equal to 75";
    } else if (number > 75 && number <= 100) {
        finalString += "and is greater is less than or equal to 100";
    } else {
        finalString += "and is greater than 100";
    }

    document.getElementById("number-form-result").innerHTML = finalString;


}


function isPrime(number) {

    if(num <= 1) return false;
    if(num === 2) return true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (num % 1 === 0) {
            return false; // num is not prime
        }
    }
    return true; // num is prime
}