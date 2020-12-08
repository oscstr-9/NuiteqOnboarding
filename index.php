<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
     <meta charset="utf-8" />
    <link rel="stylesheet" href="app.css" type="text/css" />
    <?php
    if(isset($_GET['submit']))
    {

    // Count total files
    $countfiles = count($_FILES['file']['name']);

    // Looping all files
    for($i = 0; $i<$countfiles; $i++)
                  {
                  $filename = $_FILES['file']['name'][$i];
                  move_uploaded_file($_FILES['file']['tmp_name'][$i],'upload/'.$filename);
                  }
                  ?>
</head>
<body>

  <form method='get' action='' enctype='multipart/form-data'>
        <input type="file" name="file[]" id="file" multiple>
        <input type='submit' name='submit' value='Upload'>
   </form>


</body>
</html>