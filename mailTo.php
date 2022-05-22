<?php

    $nameContact = $_POST['name-contact'];
    $emailContact = $_POST['email-contact'];
    $infoContact = $_POST['description-contact'];

    if(!empty($_POST['email'])) die();

    $to = "Austin@austinolijar.com";
    $headers = "New Contact Form Submission";
    $txt = "You have received a new message from ".$nameContact."\nFrom this email ".$emailContact."\nMessage: ".$infoContact;
                            
    $contactFrom = "From: Portfolio Site Contact Form";


    mail($to, "New Contact Form Submission", $txt, $contactFrom);

?>