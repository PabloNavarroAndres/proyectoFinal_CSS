// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const preferencesContent = document.getElementById('preferences-content');

    if (hamburgerMenu && preferencesContent) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            preferencesContent.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const links = preferencesContent.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                preferencesContent.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.preferences')) {
                hamburgerMenu.classList.remove('active');
                preferencesContent.classList.remove('active');
            }
        });
    }
});

