document.addEventListener('click', function(event) {
    const menu = document.getElementById('categoryMenu');
    const menuToggle = document.getElementById('menuToggle');
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('show');
    }
});
