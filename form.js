// form.js - Basic form handling
document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Handle the form submission (e.g., send to server or display a message)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for your message!'); // Display confirmation
    event.target.reset(); // Reset form fields
});
