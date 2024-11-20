// Importing images used for each menu item
import burgerImage from "./images/burger.jpg";
import pastaImage from "./images/pasta.jpg";
import saladImage from "./images/salad.jpg";
import pizzaImage from "./images/pizza.jpg";

/* Generates the content for the Menu Page */
function createMenuPage() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuPageContainer");

  // Define the inner HTML structure for the menu page
  menuDiv.innerHTML = `
    <h2>Our Menu</h2>
    
    <!-- Menu items grid layout -->
    <div class="menu-grid">
      
      <!-- Menu Item 1: Classic Burger -->
      <div class="menu-item">
        <img src="${burgerImage}" alt="Burger">
        <h3>Classic Burger</h3>
        <p>Juicy grilled burger with lettuce, tomato, and cheese.</p>
        <span class="price">$8.99</span>
      </div>
      
      <!-- Menu Item 2: Italian Pasta -->
      <div class="menu-item">
        <img src="${pastaImage}" alt="Pasta">
        <h3>Italian Pasta</h3>
        <p>Fresh pasta with a homemade tomato sauce.</p>
        <span class="price">$12.99</span>
      </div>
      
      <!-- Menu Item 3: Garden Salad -->
      <div class="menu-item">
        <img src="${saladImage}" alt="Salad">
        <h3>Garden Salad</h3>
        <p>Mixed greens, fresh vegetables, and a light dressing.</p>
        <span class="price">$6.99</span>
      </div>
      
      <!-- Menu Item 4: Margherita Pizza -->
      <div class="menu-item">
        <img src="${pizzaImage}" alt="Pizza">
        <h3>Margherita Pizza</h3>
        <p>Wood-fired pizza topped with fresh mozzarella and basil.</p>
        <span class="price">$10.99</span>
      </div>
      
    </div>

    <!-- Closing message and footer with copyright -->
    <p>Enjoy the best food in town!</p>
    <footer>
      <p>&copy; 2024 Delicious Bites - All Rights Reserved</p>
    </footer>
  `;

  return menuDiv;
}

export default createMenuPage;
