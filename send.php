<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $org = $_POST['org'];
    $person = $_POST['person'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $type = $_POST['type'];
    $comment = $_POST['comment'];

    $to = "urban.reconstruction.center@gmail.com";
    $subject = "Новая заявка с сайта";

    $message = "
    Организация: $org
    Контактное лицо: $person
    Телефон: $phone
    Адрес: $address
    Тип работ: $type
    Комментарий: $comment
    ";

    $headers = "From: no-reply@urban-reconstruction.su\r\n";

    mail($to, $subject, $message, $headers);

    echo "OK";
}
?>