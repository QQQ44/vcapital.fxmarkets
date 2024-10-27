document.addEventListener('DOMContentLoaded', function () {
    // 定义20种常用语言的选项
    const languageOptions = [
        { code: 'en', name: 'English' },
        { code: 'zh', name: '中文' },
        { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'ja', name: '日本語' },
        { code: 'ko', name: '한국어' },
        { code: 'ru', name: 'Русский' },
        { code: 'ar', name: 'العربية' },
        { code: 'pt', name: 'Português' },
        { code: 'it', name: 'Italiano' },
        { code: 'hi', name: 'हिन्दी' },
        { code: 'bn', name: 'বাংলা' },
        { code: 'vi', name: 'Tiếng Việt' },
        { code: 'id', name: 'Bahasa Indonesia' },
        { code: 'tr', name: 'Türkçe' },
        { code: 'th', name: 'ไทย' },
        { code: 'pl', name: 'Polski' },
        { code: 'nl', name: 'Nederlands' },
        { code: 'sv', name: 'Svenska' }
    ];

    // 获取语言切换器 select 元素
    const languageSelect = document.getElementById('language');

    // 动态生成语言选项
    languageOptions.forEach(language => {
        const option = document.createElement('option');
        option.value = language.code;
        option.textContent = language.name;
        languageSelect.appendChild(option);
    });

    // 语言切换逻辑
    const translations = {
        en: {
            heading: "Welcome to Global V Capital",
            paragraph: "Empower your trading with the best tools."
        },
        zh: {
            heading: "欢迎来到 V Capital",
            paragraph: "用最好的工具赋能您的交易。"
        },
        es: {
            heading: "Bienvenido a Global V Capital",
            paragraph: "Impulsa tu trading con las mejores herramientas."
        },
        fr: {
            heading: "Bienvenue à Global V Capital",
            paragraph: "Améliorez votre trading avec les meilleurs outils."
        },
        de: {
            heading: "Willkommen bei Global V Capital",
            paragraph: "Stärken Sie Ihr Trading mit den besten Tools."
        },
        // 继续为其他语言添加翻译...
    };

    // 语言切换函数
    function changeLanguage() {
        const selectedLanguage = languageSelect.value;
        if (translations[selectedLanguage]) {
            document.getElementById("heading").textContent = translations[selectedLanguage].heading;
            document.getElementById("paragraph").textContent = translations[selectedLanguage].paragraph;
        }
    }

    // 为语言切换 select 添加事件监听
    languageSelect.addEventListener('change', changeLanguage);
});
