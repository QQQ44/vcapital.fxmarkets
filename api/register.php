// register.php
<?php
include 'db-config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo '邮箱格式无效，请检查输入';
        exit;
    }

    if (strlen($password) < 8) {
        echo '密码长度必须至少为8个字符';
        exit;
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $hashed_password);

    if ($stmt->execute() === TRUE) {
        echo "注册成功!";
    } else {
        echo "错误: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
