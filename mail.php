<?php

if (isset($_POST['submit'])) {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $info = $_POST["description"];

}



    $to = "Austin@austinolijar.com";
    $headers = "New Form submission";
    $txt = "You have received a new message from ".$name.".\n\n".$info;
                            

    mail($to, $txt, $headers);

?>