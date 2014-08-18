
<?php

function kht($kht)
{
    $kht = "kht1";

    $username = 'root';
    $password = 'masoudsam';

    $monogo = new MongoClient("mongodb://$username:$password@localhost");

    $db = $monogo->nahd;

    $collection = $db->khotbe;

    $cursor = $collection->find(array($kht => array('$exists' => "true") ) );

    echo "<pre>";
    var_dump($cursor->getNext()[$kht]);
    echo "</pre>";

    return $cursor->getNext()[$kht];

    //foreach ($cursor as $value)
    //{
    //    echo '<pre>' . var_dump($value) . '</pre>';
    //}
}

?>
