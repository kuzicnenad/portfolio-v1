

<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$toEmail = "nenad.kuzic@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";

mail($toEmail, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";

?>