// 自动切换滑动横幅
let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.banner-item');
    const bannerSlide = document.getElementById('bannerSlide');
    const totalSlides = slides.length;
    currentSlide = (slideIndex + totalSlides) % totalSlides; // 确保索引在有效范围内
    bannerSlide.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// 自动切换每5秒
setInterval(nextSlide, 5000);

// 关闭浮动框的逻辑
document.querySelector('.close-btn').addEventListener('click', function() {
    var floatingBox = document.querySelector('.floating-box');
    floatingBox.style.opacity = '0';
    floatingBox.style.transform = 'translateY(20px)';
    setTimeout(function() {
        floatingBox.style.display = 'none';
    }, 500); // Timeout matches the transition duration
});
