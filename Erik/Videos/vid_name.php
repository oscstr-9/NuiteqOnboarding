<?php

include ('db.php');


$sql = "select * from videos";
$res = mysqli_query($con,�sql);

echo "<h1> my videos </h1>";

while ($row = mysqli_fetch_assoc($res)) {

    $id = $row['id'];
    $name = $row['name'];

    echo "<h4><a href = 'watch.php?id=$id'>".$name. "<a></h4><br/>";


}





?>