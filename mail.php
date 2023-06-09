<?php

// add file phpmailer

require 'phpMailer/Exception.php';
require 'phpMailer/PHPmailer.php';
require 'phpMailer/SMTP.php';

// letter name

$title = "Хочу заказать картину.";
$body="";
$c = true;

// body letter

foreach ($_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
    $body .= '<tr style="background-color: #f8f8f8;"><td style="padding: 10px; border: #e9e9e9 1px solid;"><b>'.$key.
    '</b></td><td style="padding: 10px; border: #e9e9e9 1px solid;"><b>'.$value.'</b></td></tr>';
  };
};

$body = "<table style='width: 100%;'>$body</table>";

// setting PHPMailer

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth = true;

  // Setting my email
  $mail->Host       = 'smtp.gmail.com'; // SMTP my email server
  $mail->Username   = 'pluzhnikovga@gmail.com'; // login my email
  $mail->Password   = ''; // password on my email
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('pluzhnikovga@gmail.com', 'Заявка с вашего сайта');

  // who get letter
  $mail->addAddress('pluzhnikovga@gmail.com');

  // send letter
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;
  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
};
