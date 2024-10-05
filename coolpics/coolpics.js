// Select the menu button and the navigation links
const menuButton = document.getElementById('menu-button');
const navLinks = document.getElementById('nav-links');

// Add a click event listener to the menu button
menuButton.addEventListener('click', () => {
  // Toggle the 'active' class to show/hide the navigation links
  navLinks.classList.toggle('active');

  // Optionally change the button text based on the state
  if (navLinks.classList.contains('active')) {
    menuButton.textContent = 'Close'; // Change to "Close" when menu is open
  } else {
    menuButton.textContent = 'Menu'; // Change back to "Menu" when closed
  }
});
