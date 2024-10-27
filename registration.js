document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const registerButton = document.getElementById('register-button');
    const feedback = document.getElementById('feedback');

    registerButton.addEventListener('click', function() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === "" || password === "") {
            feedback.textContent = "所有字段都是必填项，请确保填写完整。";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "正在提交注册请求...";
            feedback.style.color = "green";

            // 在此处调用服务器的接口，例如 AJAX 调用
            // 我们会在下一步中讨论如何用 PHP 处理这些请求
        }
    });
});
