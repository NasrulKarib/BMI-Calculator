const heightInp = document.querySelector(".height .input");
const weightInp = document.querySelector(".weight .input");
const submitBtn = document.querySelector(".button");
const outputContainer = document.querySelector(".output"); 
const output = document.querySelector(".output p");
const comment = document.querySelector(".comment p"); 
const commentContainer = document.querySelector(".comment"); 

function calculateBMI() {
    var height = parseFloat(heightInp.value);
    var weight = parseFloat(weightInp.value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight");
        return;
    }

    height = height / 100;
    var bmi = (weight / (height * height)).toFixed(2);
    output.innerHTML = bmi;
    output.style.fontSize = "20px";
    outputContainer.style.background = ""; 
    comment.style.fontSize = "20px";
    if (bmi < 18.5) {
        outputContainer.style.background = "linear-gradient(to right, #ff9f1c, #ffbf69)"; // Light blue
        comment.innerHTML = "You are underweight. Please EAT!";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        outputContainer.style.background = "linear-gradient(to right, #38b000, #70e000)"; // Green
        comment.innerHTML = "You are Healthy. Keep it up!";
    } else if (bmi >= 25 && bmi <= 29.9) {
        outputContainer.style.background = "linear-gradient(to right,rgb(212, 59, 59),rgb(230, 65, 65))"; // Orange
        comment.innerHTML = "You are overweight. Do exercising.";
    } else {
        outputContainer.style.background = "linear-gradient(to right, #d90429, #ef233c)"; // Red
        comment.innerHTML = "You are obese. Do you wanna DIE?";
    }

    commentContainer.style.display = "block";
}

submitBtn.addEventListener("click", calculateBMI);
