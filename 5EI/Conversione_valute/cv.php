
<?php

header("Content-Type: application/xml");

$url = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";

$xml = file_get_contents($url);

if ($xml === false) {
    http_response_code(502);
    exit;
}

echo $xml;

?>
