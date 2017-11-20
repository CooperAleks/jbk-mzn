<?
	// $to = 'support@onuki.com';
	$to = 'yevgen@coderiver.com.ua';

	$subject = 'Onuki';

	$message = 'Name: '.$_POST['userName'].' <br>'
					 . 'Email: '.$_POST['userEmail'].' <br>'
					 . 'Order number '.$_POST['userOrderNum'].' <br>'
					 . 'Order date '.$_POST['userOrderDate'].' <br>'
					 . 'Message '.$_POST['userComment'].' <br>';

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


	mail($to, $subject, $message, $headers);
?>
