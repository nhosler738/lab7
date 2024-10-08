



document.addEventListener("DOMContentLoaded", function (event) {
    const firstname = document.getElementById("fname").value;
    const lastname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;


    const namePattern = /^[A-Za-z\s'-]+$/; // only letters a-z or A-Z
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/; // basic email pattern with 2-6 characters

    // check names
    if(!namePattern.test(firstname) || !namePattern.test(lastname)) {
        alert("Please enter letters for the first name and last name");
        event.preventDefault(); // prevents form submission
    }

    // check email
    if(!emailPattern.test(email)) {
        alert("Please enter valid email address with a domain of 2 to 6 characters");
        event.preventDefault();
    }


    // display form contents
    displayFormContents(firstname, lastname, email, gender, country);


});

function displayFormContents(firstname, lastname, email, gender, country) {
    let resultBox = document.getElementById("result");

    resultBox.innerHTML = `
                <h3>Form Contents:</h3>
                <p><strong>First Name:</strong> ${firstname}</p>
                <p><strong>Last Name:</strong> ${lastname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Country:</strong> ${country}</p>
            `;


}

