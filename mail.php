<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST['name'];
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $message = $_POST['message'];

  if (empty($name) || empty($email) || empty($message)) {
    echo "All fields are required!";
    exit;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email address";
    exit;
  }

  $to = "alexandr.litvin@tuhh.de"; // Replace this line with your email!!!
  $subject = "New Message";
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send the message. Try again";
  }
} else {
  echo "Invalid request method.";
}
