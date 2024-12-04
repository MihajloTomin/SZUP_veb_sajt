document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "JavaScript je uspešno učitan!";
    welcomeMessage.style.color = "blue";
    document.body.appendChild(welcomeMessage);

// Funkcionalnost za promenu boje pozadine
    const button = document.getElementById("changeColorBtn");
  if(button){
    button.addEventListener("click", () => {
        document.body.style.backgroundColor = "lightcoral";
    });
   }
});