<?php
    $xml = simplexml_load_string(file_get_contents('https://nationalbank.kz/rss/rates_all.xml'));
    echo json_encode($xml);
?>