document.getElementById("registerForm").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("请输入有效的电子邮件地址");
        event.preventDefault(); // 阻止表单提交
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}