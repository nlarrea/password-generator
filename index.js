const charNumber = document.querySelector("#number-chars");
const displayPassword = document.querySelector("#generated-password");
const tooltip = document.querySelector("tool-tip");

const btnRandom = document.querySelector(".random-password");
const btnCopy = document.querySelector(".copy-password");


// set min and max values to the number of chars input
charNumber.addEventListener("change", () => {
    let val = parseInt(charNumber.value);
    let max = charNumber.max;
    let min = charNumber.min;
    
    if(val > max) charNumber.value = max;
    else if(val < min) charNumber.value = min;

    charNumber.value = Math.floor(charNumber.value);
})


btnCopy.addEventListener("click", () => {
    // to copy from mobile phone devices
    displayPassword.select();
    displayPassword.setSelectionRange(0, 99999);
    
    // copy the password to clipboard
    navigator.clipboard.writeText(displayPassword.value);
    tooltip.innerHTML = "Copied!";

    // hold the 'Copied!' message for 2sec, then change it back to 'To copy!'
    setTimeout(() => {
        tooltip.innerHTML = "To copy!";
    }, 2000)
});


btnRandom.addEventListener("click", () => {
    const hasCapital = document.querySelector("#has-uppercase");
    const hasNumbers = document.querySelector("#has-numbers");
    const hasSymbols = document.querySelector("#has-symbols");

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "@#$%^&*/=+?-_";

    let choices = lowerCase;

    if(hasCapital.checked) choices += upperCase;
    if(hasNumbers.checked) choices += numbers;
    if(hasSymbols.checked) choices += symbols;

    let password = "";
    for(let i=0; i < charNumber.value; i++){
        password += choices[Math.floor(Math.random() * choices.length)];
    }

    displayPassword.value = password;
});
