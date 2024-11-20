// Import the restaurant image used on the homepage
import restaurantImage from "./images/restaurant_image.png";

/*Generates the content for the Home Page */
function createHomePage() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("homePageContainer");

  // Define the inner HTML structure of the home page
  homeDiv.innerHTML = `
    <div class="hero-content">
      <h2>Welcome to Delicious Bites</h2>
      <img src="${restaurantImage}" alt="Restaurant Image" width="500px" height="300px"/>
      <p>Experience the best dining experience with delicious food and a cozy atmosphere.</p> 
    </div>
    
    <div class="about-us">
      <h2>About Us</h2>
      <p>We are dedicated to providing you with the finest dining experience. Our restaurant serves a variety of cuisines crafted from the freshest ingredients.</p>
    </div>
    
    <footer>
      <p>&copy; 2024 Delicious Bites - All Rights Reserved</p>
    </footer>
  `;

  return homeDiv;
}

export default createHomePage;
