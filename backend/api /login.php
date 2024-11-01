<?php
session_start();
if (isset($_SESSION['username'])) {
    header("Location: dashboard.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>用户登录</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h2>登录</h2>
    <?php
    if (isset($_GET['error'])) {
        echo '<p style="color:red;">' . htmlspecialchars($_GET['error']) . '</p>';
    }
    ?>
    <form action="login.php" method="post">
        <label for="username">用户名：</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">密码：</label>
        <input type="password" id="password" name="password" required><br><br>
        <button type="submit" name="login">登录</button>
    </form>
</body>
</html>
