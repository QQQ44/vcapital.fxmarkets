// common.js - 通用的 JavaScript 文件，用于所有页面

document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动链接
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetURL = this.href;

            // 模拟页面内容切换而不是整个页面刷新
            fetch(targetURL)
                .then(response => response.text())
                .then(html => {
                    // 将新页面内容插入到页面主体中，而不是刷新整个页面
                    document.body.innerHTML = html;
                    window.history.pushState({}, '', targetURL); // 更新 URL
                })
                .catch(err => console.error('页面加载出错: ', err));
        });
    });

    // 语言切换逻辑
    const languageSwitcher = document.getElementById('language');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', function() {
            const selectedLanguage = this.value;
            changeLanguage(selectedLanguage);
        });
    }

    function changeLanguage(language) {
        const translations = {
            en: {
                heading: "Welcome to Global V Capital",
                paragraph: "Empower your trading with the best tools."
            },
            zh: {
                heading: "欢迎来到 V Capital",
                paragraph: "用最好的工具赋能您的交易。"
            },
            // 更多语言可在此处添加
        };

        if (translations[language]) {
            document.getElementById("heading").textContent = translations[language].heading;
            document.getElementById("paragraph").textContent = translations[language].paragraph;
        }
    }

    // 自动滑动横幅
    let currentSlide = 0;
    function showSlide(slideIndex) {
        const slides = document.querySelectorAll('.banner-item');
        if (slides.length > 0) {
            const bannerSlide = document.getElementById('bannerSlide');
            currentSlide = (slideIndex + slides.length) % slides.length; // 确保索引在有效范围内
            bannerSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 5000); // 每5秒自动切换横幅

    // 关闭浮动框逻辑
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            var floatingBox = document.querySelector('.floating-box');
            floatingBox.style.opacity = '0';
            floatingBox.style.transform = 'translateY(20px)';
            setTimeout(function() {
                floatingBox.style.display = 'none';
            }, 500); // Timeout matches the transition duration
        });
    }

    // CTA 按钮处理
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (event) => {
            event.preventDefault();
            ctaButton.innerHTML = 'Processing...'; // 按钮文字更改
            ctaButton.classList.add('cta-button-processing'); // 添加处理状态样式类

            // 模拟短暂的延迟
            setTimeout(() => {
                window.location.href = "/thankyou.html"; // 2秒后跳转到成功页面
            }, 2000);
        });
    }

    // 菜单切换
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const menu = document.getElementById('categoryMenu');
            if (menu) {
                menu.classList.toggle('show'); // 切换显示状态
            }
        });
    }

    // 语言菜单的显示和隐藏
    const languageBtn = document.getElementById('languageBtn');
    if (languageBtn) {
        languageBtn.addEventListener('click', function() {
            const langMenu = document.getElementById('langMenu');
            if (langMenu) {
                langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    }
});
