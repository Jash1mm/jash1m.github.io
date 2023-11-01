const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Calculate based on button clicked
const calculate = (btnVal) => {
    if (btnVal === "=" && btnVal !== "") {
        // If output has '%' it replaces with '/100' before evaluating
        output = eval(output.replace("%", "/100"));
    } else if (btnVal === "AC") {
        output = "";
    } else if (btnVal === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnVal)) return;
        output += btnVal;
    } display.value = output;
}

// Call calculate() on click 
buttons.forEach((button) => { 
    //Button click listener calls calculate()  with dataset value as argument
    button.addEventListener("click", (e) =>  calculate(e.target.dataset.value));
});