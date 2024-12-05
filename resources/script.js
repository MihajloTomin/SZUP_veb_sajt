function displayMessage() {
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "JavaScript je uspešno učitan!";
    welcomeMessage.style.color = "blue";
    document.body.appendChild(welcomeMessage);
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightcoral";
}

document.addEventListener("DOMContentLoaded", () => {
    displayMessage();

    const button = document.getElementById("changeColorBtn");
    if (button) {
        button.addEventListener("click", changeBackgroundColor);
    }
});