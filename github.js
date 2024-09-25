// Function to open a URL in a new tab
function openUrlInNewTab(url) {
window.open(url, '_blank').focus();
}

// Event listener for the button click
document.getElementById('github').addEventListener('click', function() {
    const url = 'https://github.com/rogerberkley';
    openUrlInNewTab(url);
});