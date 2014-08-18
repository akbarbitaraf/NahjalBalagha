
<?php

function kht($kht)
{
    $kht = 1;

    $host = "localhost";
    $user = "root";
    $password = "masoudsam";
    $dname = "nahd";
    $port = "3307";
    $mysql = mysqli_connect($host , $user , $password , $dname , $port);

    if(mysqli_connect_errno())
    {
        echo "error ocured in database";
        echo mysqli_connect_errno();
    }

    if(mysqli_connect_error() == 1)
    {
        echo "error ocured in database";
        echo mysqli_connect_error();
    }

    $das = "select * from khotbe where id = $kht";
    $kht = mysqli_query($mysql , $das);

    $nah = mysqli_fetch_row($kht);

    var_dump($nah);

    return $nah;

    mysqli_close($mysql);
}

?>