// Select the menu button and the navigation links
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

// Add a click event listener to the menu button
menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Change the button text based on the state
  menuButton.textContent = navLinks.classList.contains("active")
    ? "Close"
    : "Menu";
});

function viewerTemplate(pic, alt) {
  const template = `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
  </div>`;
  console.log("Viewer Template: ", template); // Debugging
  return template;
}

function viewHandler(event) {
  // Get the clicked element
  const target = event.target;

  // Check if the clicked target is an image
  if (target.tagName === "IMG") {
    // Get the source of the clicked image and split it
    const src = target.src.split("-");
    const fullImageSrc = `${src[0]}-full.jpeg`; // Construct new image filename

    // Debugging: Log the constructed full image source
    console.log("Full Image Source: ", fullImageSrc);

    // Insert the viewerTemplate into the top of the body
    document.body.insertAdjacentHTML(
      "afterbegin",
      viewerTemplate(fullImageSrc, target.alt)
    );

    // Add a listener to the close button
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
  }
}

// Function to close the viewer
function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer) {
    viewer.remove(); // Remove the viewer div from the DOM
  }
}

// Add an event listener to the gallery section
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
