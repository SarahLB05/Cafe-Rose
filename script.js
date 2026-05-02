document.addEventListener("DOMContentLoaded", function() {
    const menu = ["Dreamy Latte", "Rasberry Croissant", "Garden Green Tea", "Rose Cupcake", "Lavender Iced Coffee"];
    const menuItems = document.getElementById("menu-list");
    const button = document.getElementById("show-special");
    const display = document.getElementById("daily-special");
    
    button.addEventListener("click", ()=> {
      const randomItem = menu[Math.floor(Math.random() * menu.length)];
    display.textContent = `Today's Special: ${randomItem}`;
    });
    
    menu.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      menuItems.appendChild(li);

const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("night-mode");
  toggleBtn.textContent = body.classList.contains("night-mode")
    ? "Switch to Day Mode"
    : "Switch to Night Mode";
    });
  });
  
  
