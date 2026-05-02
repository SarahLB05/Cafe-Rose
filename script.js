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
    });
  });
  
  const toggleButton = document.getElementById("toggle-mode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");


  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Switch to Light Mode";
  } else {
    toggleButton.textContent = "Switch to Night Mode";
  }
});
