// nova.js
document.addEventListener('DOMContentLoaded', function() {
    // 简单示例，点击按钮后改变文本内容
    const buttons = document.querySelectorAll('.action-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked: ' + button.textContent);
        });
    });
});
