document.addEventListener('DOMContentLoaded', function() {
    const otpButton = document.getElementById('send-otp-button');
    const phoneInput = document.getElementById('phone');

    otpButton.addEventListener('click', function(event) {
        event.preventDefault();
        const phone = phoneInput.value.trim();

        // 检查手机号码格式
        if (!validatePhoneNumber(phone)) {
            alert("请输入有效的手机号码！");
            phoneInput.focus();
            return;
        }

        otpButton.disabled = true; // 禁用按钮，防止重复发送
        otpButton.textContent = "发送中...";

        // 发送 OTP 请求
        fetch('send_otp.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `phone=${encodeURIComponent(phone)}`,
        })
        .then(response => response.json())
        .then(data => {
            otpButton.disabled = false;
            otpButton.textContent = "发送 OTP";
            if (data.status === "success") {
                alert("OTP 已发送到您的手机！");
            } else {
                alert(data.message || "OTP 发送失败，请稍后再试。");
            }
        })
        .catch(error => {
            otpButton.disabled = false;
            otpButton.textContent = "发送 OTP";
            alert("网络错误，请稍后再试！");
        });
    });

    // 验证手机号码的格式
    function validatePhoneNumber(phone) {
        const phonePattern = /^\d{10,15}$/; // 只允许10到15位数字的手机号码
        return phonePattern.test(phone);
    }
});
