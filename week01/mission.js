const select = document.querySelector("#mySelect");
const footerImage = document.getElementById("footerImage"); // Select the img element

select.addEventListener("change", function () {
  changeTheme(select.value);
});

function changeTheme(output) {
  if (output === "dark") {
    document.body.classList.add("dark"); // Add dark class to body
    footerImage.src = "/week01/img/byui-logo-dark.png"; // Change to dark theme image
  } else {
    document.body.classList.remove("dark"); // Remove dark class from body
    footerImage.src = "/week01/img/byui-logo.webp"; // Change back to light theme image
  }
}
