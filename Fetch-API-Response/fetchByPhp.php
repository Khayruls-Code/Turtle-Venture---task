<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fetching data by PHP</title>
</head>

<body>
  <?php
  $url = 'https://gorest.co.in/public/v1/users';
  $curl = curl_init($url);
  $response = curl_exec($curl);
  curl_close($curl);
  echo $response;
  ?>
</body>

</html>