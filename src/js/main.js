document.addEventListener("DOMContentLoaded", () => {
    loadComponents();
});

async function loadComponents() {
    try {
        // We use absolute paths to ensure it works from any page level
        const navRes = await fetch('/src/components/navbar.html');
        const navHtml = await navRes.text();
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = navHtml;
            setActiveNav();
        }

        const footRes = await fetch('/src/components/footer.html');
        const footHtml = await footRes.text();
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = footHtml;
        }

        // Add smooth scrolling for contact link
        const contactLink = document.getElementById('nav-contact');
        if (contactLink) {
            contactLink.addEventListener('click', (e) => {
                const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '';
                // If it's a hash link on the same page
                if (contactLink.getAttribute('href') === '#footer' || isHomePage) {
                    const footer = document.getElementById('footer');
                    if (footer) {
                        e.preventDefault();
                        footer.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }

    } catch (error) {
        console.error('Error loading components:', error);
    }
}

function setActiveNav() {
    const path = window.location.pathname;
    const navHome = document.getElementById('nav-home');
    const navShop = document.getElementById('nav-shop');
    const navPromo = document.getElementById('nav-promo');

    // Remove active class from all
    if(navHome) { navHome.classList.remove('active'); navHome.classList.remove('inter-bold'); navHome.classList.add('inter-regular'); }
    if(navShop) { navShop.classList.remove('active'); navShop.classList.remove('inter-bold'); navShop.classList.add('inter-regular'); }
    if(navPromo) { navPromo.classList.remove('active'); navPromo.classList.remove('inter-bold'); navPromo.classList.add('inter-regular'); }

    if (path.includes('shop') || path.includes('product')) {
        if(navShop) { navShop.classList.add('active'); navShop.classList.remove('inter-regular'); navShop.classList.add('inter-bold'); }
    } else if (path.includes('promo')) {
        if(navPromo) { navPromo.classList.add('active'); navPromo.classList.remove('inter-regular'); navPromo.classList.add('inter-bold'); }
    } else {
        if(navHome) { navHome.classList.add('active'); navHome.classList.remove('inter-regular'); navHome.classList.add('inter-bold'); }
    }
}
