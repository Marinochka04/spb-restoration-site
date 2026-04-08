<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $org = $_POST['org'];
    $person = $_POST['person'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $type = $_POST['type'];
    $comment = $_POST['comment'];

    $to = "marina-potapova04@mail.ru";
    $subject = "Новая заявка с сайта";

    $message = "
    Организация: $org
    Контактное лицо: $person
    Телефон: $phone
    Адрес: $address
    Тип работ: $type
    Комментарий: $comment
    ";

    $headers = "From: no-reply@" . $_SERVER['HTTP_HOST'] . "\r\n";

    mail($to, $subject, $message, $headers);

    echo "OK";
}
?>