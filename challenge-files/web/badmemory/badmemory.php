<!DOCTYPE html>
<html>
<head>
    <title>Mot de passe - Mauvaise mémoire</title>
</head>
<body>
    <?php
        if (isset($_POST['submit'])){
            if($_POST['password'] == "alzheimer"){
                echo"<script language=\"javascript\">";
                echo"alert('Bravo !'+'\\n'+'Flag: alzheimer')";
                echo"</script>";
            }
            else{
                echo"<script language=\"javascript\">";
                echo"alert('Mot de passe incorrect.'+'\\n'+'Essaie encore !')";
                echo"</script>";
            }
        }
    ?>
    <h1>Trouvez le mot de passe !</h1>
    <form name="form" method="post" action="badmemory.php">
        <!-- if password = 'alzheimer' then OK -->
        <p>Mot de passe :
            <input type="password" name="password" autofocus required/>
            <input type="submit" name="submit" value="Login" />
        </p>
    </form>
</body>
</html>

