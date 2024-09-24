// Light/Dark Mode Toggle
const toggleTheme = document.getElementById('theme-toggle');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Optionally save theme preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// On page load, apply saved theme from localStorage
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
