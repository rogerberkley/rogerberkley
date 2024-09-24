// Basic form validation or other form handling logic can go here
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        // Example validation: Check if all required fields are filled
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
