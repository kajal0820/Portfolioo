document.addEventListener('DOMContentLoaded', function() {
    // Get the scroll arrow element
    const scrollArrow = document.querySelector('.scroll-down-arrow');
    // Get the target section (Projects)
    const projectsSection = document.getElementById('projects');

    if (scrollArrow && projectsSection) {
        // Add a click event listener to the arrow
        scrollArrow.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the default anchor link jump

            // Scroll smoothly to the projects section
            projectsSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});