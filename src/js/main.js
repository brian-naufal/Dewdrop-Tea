// Your custom JavaScript. Use this file to add interactivity.
document.addEventListener('DOMContentLoaded', function () {
  // Example: simple console log to confirm the file loads
  console.log('Custom JS loaded');
});

document.addEventListener("DOMContentLoaded", function() {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");

    if (navbarPlaceholder) {
        fetch("src/components/navbar.html")
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;
            })
            .catch(error => console.error("Error loading navbar:", error));
    }
});