document.addEventListener('DOMContentLoaded', function () {
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

document.addEventListener("DOMContentLoaded", function() {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");

    if (navbarPlaceholder) {
        fetch("src/components/navbar.html")
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;
                let currentUrl = window.location.pathname;

                if (currentUrl.endsWith("/")) {
                    currentUrl += "index.html";
                }

                const navLinks = document.querySelectorAll('.nav-link');
                navLinks.forEach(link => {

                    if (link.href.includes(currentUrl)) {
                        link.classList.add('active-link');
                        link.classList.remove('text-dark');
                    }
                });
            })
            .catch(error => console.error("Error loading navbar:", error));
    }
});

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. NAVBAR INJECTION ---
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (navbarPlaceholder) {
        fetch("src/components/navbar.html")
    }

    // --- 2. FOOTER INJECTION ---
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        fetch("src/components/footer.html")
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error("Error loading footer:", error));
    }
});