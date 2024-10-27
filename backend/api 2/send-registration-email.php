<form action="php/send-registration-email.php" method="post">
    <label for="username">用户名:</label>
    <input type="text" id="username" name="username" required>

    <label for="email">邮箱:</label>
    <input type="email" id="email" name="email" required>

    <label for="phone">电话号码:</label>
    <input type="text" id="phone" name="phone" required>

    <label for="referral_code">推荐码:</label>
    <input type="text" id="referral_code" name="referral_code">

    <label for="country">国家:</label>
    <input type="text" id="country" name="country" required>

    <button type="submit">提交</button>
</form>
