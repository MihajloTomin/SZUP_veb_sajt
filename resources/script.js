document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "JavaScript je uspešno učitan!";
    welcomeMessage.style.color = "blue";
    document.body.appendChild(welcomeMessage);
});