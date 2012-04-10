<?php

/**
 * LordWEB
 *
 * @package		LordWEB
 * @author		Vladica Savic
 * @copyright           Copyright (c) 2011, LordWEB.
 * @link		http://vladicasavic.iz.rs/
 * @since		Version 1.0
 * @filesource
 */
/*
  | -------------------------------------------------------------------
  | Main Handler
  | -------------------------------------------------------------------
  | Main PHP script for handling all AJAX request
  |
 */
 //error_reporting(E_ALL);
require 'jsonwrapper.php';
include_once (dirname(dirname(__FILE__)).'/CONFIG.php');

//Initial response is NULL
$response = null;

//Initialize appropriate action and return as HTML response
if (isset($_POST["action"])) {
    $action = $_POST["action"];

    switch ($action) {
        case "Initialize": {
                $mainData = array();
				
                $mainData["Start_Date"] = $start_date;

                $response = $mainData;
            }
            break;
        case "SignUp": {
                if (isset($_POST["email"]) && !empty($_POST["email"])) {
                    $subscriberEmail = $_POST["email"];
					include_once (dirname(dirname(__FILE__)).'/php/classes/class__mail.php');

                    $messageText = 'You have new subscriber for your site.<br /><br />This is the subscribed email address<br />====================================<br />' . $subscriberEmail;

                    $response = (SendEmail($messageText, $signUpNotificationSubject, $signUpEmail, $email)) ? "Message Sent" : "Sending Message Failed";
                } else {
                    $response = "Sending Message Failed";
                }
            }
            break;
        case "SendMessage": {
                if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["subject"]) && isset($_POST["message"])
                        && !empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["subject"]) && !empty($_POST["message"])) {
                    include("classes/class__mail.php");
                    
                    $response = (SendEmail($_POST["message"], $_POST["subject"]." - Sender Name: ".$_POST["name"], $_POST["email"], $email)) ? "Message Sent" : "Sending Message Failed";
                } else {
                    $response = "Sending Message Failed";
                }
            }
            break;
        default: {
                $response = "Invalid action is set! Action is: " . $action;
            }
    }
}

if (isset($response) && !empty($response) && !is_null($response)) {
    echo '{"ResponseData":' . json_encode($response) . '}';
}
?>
