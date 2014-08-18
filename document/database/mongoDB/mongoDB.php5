
<?php

$json_file_path = file_get_contents("e.json");

$json_decode_value = json_decode($json_file_path , true);

$username = 'root';
$password = 'masoudsam';

$monogo = new MongoClient("mongodb://${username}:${password}@localhost");

// select a database
$db = $monogo->nahd;

$collection = $db->khotbe;

//$document = array( "first sample" => 'valu of fist sample' );
//$collection->insert($document);

//$document = array( "a" => "b" );
//$collection->insert($json_decode_value);

$cursor = $collection->find();

foreach ($cursor as $value)
{
    echo '<pre>' . var_dump($value) . '</pre>';
}

//not authorized on nahd to execute command => dasture vojud nadard
?>
