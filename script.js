document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('fadeIn');
    });
});
