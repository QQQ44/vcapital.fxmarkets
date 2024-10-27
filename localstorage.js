function changeLanguage() {
    const selectedLanguage = document.getElementById("language").value;
    localStorage.setItem('selectedLanguage', selectedLanguage);
    applyLanguage(selectedLanguage);
}

function applyLanguage(language) {
    document.getElementById("heading").textContent = translations[language].heading;
    document.getElementById("paragraph").textContent = translations[language].paragraph;
}

document.addEventListener('DOMContentLoaded', () => {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    applyLanguage(storedLanguage);
});
