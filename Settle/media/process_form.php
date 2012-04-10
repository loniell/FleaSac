<?php

if($_POST['email'] && $_POST['name'] && $_POST['message']){
	
	$to = "no-reply@thesettle.com"; // your email address

	$message =  "You have a new message from <b>" . $_POST['name']
	            . "</b><br> <b>E-mail:</b> " . $_POST['email']
	            . "<br> <b>Reason of contact:</b> " . $_POST['reason']
	            . "<br> <b>Subject:</b> " . $_POST['title']
	            . "<br> <br> <b>Message:</b> " . $_POST['message'];
               
// To send HTML mail, the Content-type header must be set
$headers  = "MIME-Version: 1.0 \r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1 \r\n";

// Additional headers
$headers .= "To: $to \r\n";
$headers .= "From: ".$_POST['name']." <".$_POST['email']."> \r\n";
$headers .= "Cc: \r\n";
$headers .= "Bcc: \r\n";

// Mail it
$mail = mail($to, $_POST['title'], $message, $headers);

    if($mail){
		  echo 'ok';
	}
	else{
	    echo "error";	
	}
}

else { echo "Error !!!"; }


?>