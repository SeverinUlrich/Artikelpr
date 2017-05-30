<?php
  session_start();
  $pdo = new PDO('mysql:host=localhost;dbname=wba2', 'root', '');


  if(isset($_POST['uname']) && isset($_POST['pwd'])){

    $uname = $_POST['uname'];
    $pwd = $_POST['pwd'];

    $statement = $pdo->prepare("SELECT * FROM users");
    $result = $statement->execute(array('name' => $uname));
    $user = $statement->fetch();

    if($uname == $user['name'] && $pwd == $user['password']){
  //  if ($user !== false && password_verify($pwd, $user['password'])) {
      $_SESSION['ID'] = $user['ID'];
      /*echo $user['ID'];*/
      header("Location: ../main.html");
      exit;
    }
    else {
      echo "E-Mail oder Passwort war ungültig<br>";
    }
  }
 ?>
