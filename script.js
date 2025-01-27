// Function to validate US phone numbers
function validatePhoneNumber(phone) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s.]?\d{3}[-\s.]?\d{4}$/;
    return regex.test(phone);
}

document.getElementById("check-btn").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value;
    const resultsDiv = document.getElementById("results-div");

    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    if (validatePhoneNumber(userInput)) {
        resultsDiv.innerHTML = `Valid US number: ${userInput}`;
        resultsDiv.style.color = "green";
    } else {
        resultsDiv.innerHTML = `Invalid US number: ${userInput}`;
        resultsDiv.style.color = "red";
    }
});

document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("results-div").innerHTML = "";
    document.getElementById("user-input").value = "";
});
