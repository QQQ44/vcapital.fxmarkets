// Close floating box on button click
document.querySelector('.close-btn').addEventListener('click', function() {
    var floatingBox = document.querySelector('.floating-box');
    floatingBox.style.opacity = '0';
    floatingBox.style.transform = 'translateY(20px)';
    setTimeout(function() {
        floatingBox.style.display = 'none';
    }, 500); // Timeout matches the transition duration
});
