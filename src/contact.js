/* Generates the content for the Contact Page */
function createContactPage() {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contactPageContainer');

  // Define the inner HTML structure for the contact page
  contactDiv.innerHTML = `
    <h1>Contact Us</h1>
    
    <!-- Contact Information Section -->
    <div class="contact-info">
      <h3>Get in Touch</h3>
      <p><strong>Address:</strong> 123 Foodie Street, Taste Town, FL</p>
      <p><strong>Phone:</strong> (123) 456-7890</p>
      <p><strong>Email:</strong> contact@restaurant.com</p>
      
      <!-- Embedded Google Map showing restaurant location -->
      <div class="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509372!2d144.95373631568038!3d-37.81720974202145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1fbdc0d%3A0xe93df0e5535b10e7!2sRestaurant!5e0!3m2!1sen!2sus!4v1600338011234!5m2!1sen!2sus" 
          width="100%" 
          height="250" 
          frameborder="0" 
          style="border:0;" 
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0">
        </iframe>
      </div>
    </div>

    <!-- Footer Section with Copyright -->
    <footer>
      <p>&copy; 2024 Restaurant Name. All rights reserved.</p>
    </footer>
  `;

  return contactDiv;
}

export default createContactPage;
