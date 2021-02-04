<!DOCTYPE html>
<html>
<head>
    <title>Mot de passe - Ninja !</title>
</head>
<body>
    <?php
        if (isset($_POST['submit'])){
            if($_POST['password'] == "vrouuum"){
                echo"Bravo ! Flag: 'vrouuum'";
            }
            else{
                echo"Mot de passe incorrect. Essaie encore !";
            }
        }
    ?>
    <h1>Essayez de vous connecter !</h1>
    <form hidden name="form" method="post" action="ninja.php">
        <p>Mot de passe :
            <input type="password" name="password" value="vrouuum"/>
            <input type="submit" name="submit" value="Login"/>
        </p>
    </form>
</body>
</html>
