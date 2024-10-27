ctaButton.addEventListener('click', (event) => {
    event.preventDefault();
    ctaButton.innerHTML = 'Processing...'; // 按钮文字更改
    ctaButton.classList.add('cta-button-processing'); // 添加处理状态样式类

    // 模拟短暂的延迟
    setTimeout(() => {
        window.location.href = "/thankyou.html"; // 2秒后跳转到成功页面
    }, 2000);
});
