import "./styles.css";

// Importing functions that generate content for each page
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}

function loadPage(pageFunction) {
  clearContent();
  const content = document.getElementById('content');
  content.appendChild(pageFunction());
}

// Event listeners for navigation buttons to load respective pages
document.getElementById('home').addEventListener('click', () => loadPage(createHomePage));
document.getElementById('menu').addEventListener('click', () => loadPage(createMenuPage));
document.getElementById('contact').addEventListener('click', () => loadPage(createContactPage));

// Initial page load
loadPage(createHomePage);
