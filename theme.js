// theme.js - Manage light/dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    const darkModeButton = document.createElement('button');
    darkModeButton.innerText = 'Toggle Dark Mode';
    darkModeButton.onclick = () => {
        const darkModeEnabled = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', darkModeEnabled);
    };

    document.querySelector('header').appendChild(darkModeButton);
});
