<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取表单数据
    $email = $_POST['email'];
    $username = $_POST['username'];

    // 数据库连接和插入代码
    // 请确保您已正确配置数据库连接
    $conn = new mysqli("servername", "username", "password", "database");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO registrations (email, username) VALUES ('$email', '$username')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>