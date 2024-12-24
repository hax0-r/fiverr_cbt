const contactForm = document.getElementById("contactForm");
const overlay = document.getElementById("overlay");
const overlayMenu = document.getElementById("overlayMenu");
const overlayPolicy = document.getElementById("overlayPolicy");
const openContactForm = document.getElementsByClassName("openContactForm");
const openMenuForm = document.getElementsByClassName("openMenuForm");
const openPolicy = document.getElementsByClassName("openPolicy");
const menuForm = document.getElementById("menuForm");
const policyForm = document.getElementById("policyForm");
const closeMenu = document.getElementById("closeMenu");

Array.from(openContactForm).forEach(button => {
    button.addEventListener('click', () => {
        overlay.style.display = 'block';
        contactForm.style.display = 'flex';

        setTimeout(() => {
            overlay.style.opacity = '1';
            contactForm.style.opacity = '1';
        }, 50);
    });
});

overlay.addEventListener('click', () => {
    overlay.style.opacity = '0';
    contactForm.style.opacity = '0';

    setTimeout(() => {
        overlay.style.display = 'none';
        contactForm.style.display = 'none';
    }, 500);
});

Array.from(openPolicy).forEach(button => {
    button.addEventListener('click', () => {
        overlayPolicy.style.display = 'block';
        policyForm.style.display = 'flex';

        setTimeout(() => {
            overlayPolicy.style.opacity = '1';
            policyForm.style.opacity = '1';
        }, 50);
    });
});

overlayPolicy.addEventListener('click', () => {
    overlayPolicy.style.opacity = '0';
    policyForm.style.opacity = '0';

    setTimeout(() => {
        overlayPolicy.style.display = 'none';
        policyForm.style.display = 'none';
    }, 500);
});

Array.from(openMenuForm).forEach(button => {
    button.addEventListener('click', () => {
        overlayMenu.style.display = 'block';
        menuForm.style.display = 'flex';

        setTimeout(() => {
            overlayMenu.style.opacity = '1';
            menuForm.style.opacity = '1';
        }, 50);
    });
});

overlayMenu.addEventListener('click', () => {
    overlayMenu.style.opacity = '0';
    menuForm.style.opacity = '0';

    setTimeout(() => {
        overlayMenu.style.display = 'none';
        menuForm.style.display = 'none';
    }, 500);
});
closeMenu.addEventListener('click', () => {
    overlayMenu.style.opacity = '0';
    menuForm.style.opacity = '0';

    setTimeout(() => {
        overlayMenu.style.display = 'none';
        menuForm.style.display = 'none';
    }, 500);
});
