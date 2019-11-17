<?php

header('Content-type: application/json'); // Declare header to be of content type JSON.

$errors = '';

//ini_set('display_errors', 1);

if (empty($errors)) {
  // Take URL encoding and its values and store it into a variable.
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);

  // Email content.
  $from_name = $request->name;
  $from_email = $request->email;
  $subject = $request->subject;
  $message = $request->message;

  $to_email = 'kontakt@hingucker-auto-detailing.de';

  $contact =
    "<p><strong>Name:</strong> $from_name</p>" .
    "<p><strong>E-Mail:</strong> $from_email</p>" .
    "<p><strong>Thema:</strong> $subject</p>" .
    "<p><strong>Nachricht:</strong> $message</p>";

  $website = 'HinguckerAutoDetailing';
  $email_subject = "$website: Neue Nachricht von $from_name";

  $email_body = "<html><body>";
  $email_body .= "$contact";
  $email_body .= "</body></html>";

  // Allow using HTML in sending mail.
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
  $headers .= "From: $from_email\n";
  $headers .= "Reply-To: $from_email";

  mail($to_email, $email_subject, $email_body, $headers); // Send mail.

  // Send a successful response.
  $response_array['status'] = 'success';
  $response_array['from'] = $from_email;
  echo json_decode($response_array);
  echo json_decode($from_email);
  header($response_array);
  return $from_email;
} else {
  // Send an error response.
  $response_array['status'] = 'error';
  echo json_decode($response_array);
  header('Location: /error.html');
}
