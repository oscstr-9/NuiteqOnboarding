<?php

include('db.php');

if (isset($_GET['id'])) { //om get variabel �r satt, f�r anv�ndaren en link...?
    $id = $_GET['id'];

    $sql = "select name from videos where id='$id'";
    $res = mysqli_query($con,$sql);

    $row = mysqli_fetch_assoc($res);

    $name = $row['name'];

    echo "<h1>Du tittar p�:".$name."</h1>";


?>


<video width="615" height="315" controls>
    <source src="videos/" <?php echo $name; ?> type="video/mp4">
</video>

<?php
}
?>