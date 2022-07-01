<?php
    if (isset($_POST['submit']))
    {
        $mailTo = "ibentley981203@gmail.com";
        $name = $_POST['firstName'] . " " . $_POST['lastName'];
        $mailFrom = $_POST['email'];
        $subject = "Contact Through Your Website";
        $message = "Name: " . $name . "\nEmail: " . $mailFrom . "\n\n" . $_POST['message'];
        $headers = "From: " . $mailFrom;
        mail($mailTo, $subject, $message, $headers);

        $confirmMailTo = $mailFrom;
        $confirmMailFrom = $mailTo;
        $confirmSubject = "AUTOMATED CONFIRMATION: Do Not Reply";
        $confirmMessage = "Dear " . $name . ",\nThank you for contacting me. Your message has been sent. I will get back to you shortly.";
        $confirmHeaders = "From: " . $confirmMailFrom;
        mail($confirmMailTo, $confirmSubject, $confirmMessage, $confirmHeaders);
    }
?>