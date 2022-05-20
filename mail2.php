<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];

//$mail->SMTPDebug = 3;                              

$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';  																						
$mail->SMTPAuth = true;                               
$mail->Username = 'greenbeantobacco@mail.ru'; 
$mail->Password = 'V5RQdh03BiM1NtbvnW3j'; 
$mail->SMTPSecure = 'ssl';                          
$mail->Port = 465; 

$mail->setFrom('greenbeantobacco@mail.ru'); 
$mail->addAddress('info@greenbeantobacco.com'); 

$mail->isHTML(true);                                 

$mail->Subject = 'Заявка с формы "Закажите обратный звонок"';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo '<h3 style="font-family: sans-serif; padding: 20px" >Error! Try it later...</h3>';
} else {
    header('location: thank-you.html');
}
?>