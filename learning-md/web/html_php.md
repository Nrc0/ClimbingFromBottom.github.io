# Web - HTML/CSS, PHP

## HTML & CSS

**HTML**  
HyperText Markup Language a fait son apparition dès _1991_ lors du lancement du Web. Son rôle est de gérer et organiser le contenu. C'est l'HTML qui permet d'écrire ce qui doit être affiché sur la page (exemple: le texte, les liens, les images…).  

**CSS**  
Cascading Style Sheets, aussi appelées Feuilles de style, permet de gérer l'apparence de la page web (agencement, positionnement, décoration, couleurs, taille du texte…). Ce langage est venu compléter le HTML en _1996_.

**Structure HTML basique**
``html
<!DOCTYPE html>
<html>
<head>
    <!-- Ceci est un commentaire  -->
    <title>Titre onglet</title>
</head>
<body>
    <h1>Titre important dans la page web</h1>
    <p>Ceci est un paragraphe sur la page.</p>
</body>
</html>
``

### Balises & Attributs

Les pages HTML sont remplies de ce qu'on appelle des balises. Celles-ci sont invisibles à l'écran pour vos visiteurs, mais elles permettent à l'ordinateur de comprendre ce qu'il doit afficher.
Les balises se repèrent facilement. Elles sont entourées de « chevrons », c'est-à-dire des "`<`" et "`>`", comme ceci : "`<nom_balise>`". Il existe aussi la possibilité de mettre des attribut dans les balises. On distingue deux types de balises : les balises en paires et les balises orphelines.   

### Balises

**Balise paires**  
Elle se compose de deux balises. Une au début appelé balise ouvrante, et une à la fin appelé balise fermante, qui indique que la balise se termine. Ainsi tout ce qui est contenu entre les balises appartient aux balises.   

Les documents HTML commenceront toujours avec "`<!DOCTYPE html>`" permettant de spécifier le type du document pour les navigateurs. Par la suite dans le document HTML lui-même, il y aura en début de document une balise "`<html>`" et "`</html>`" à la fin. La partie visible du document HTML est contenue entre les balises "`<body>`" et "`</body>`"

**Balises orphelines**  
Les balises orphelines sont des balises qui qui n'ont as besoin d'être "fermé"(ex: "`<br>`" pour un retour chariot).Elles servent aussi le plus souvent à insérer un élément à un endroit précis (ex: une image). Il n'est pas nécessaire de délimiter le début et la fin de l'image, on veut juste dire à l'ordinateur « Insère une image ici ».
```html 
   <img /> <!-- insere une image, en spécifiant le fichier dans l'attribut "src" -->
```

### Attributs

Les attributs sont un peu les options des balises. Ils viennent les compléter pour donner des informations supplémentaires. L'attribut se place après le nom de la balise ouvrante et a le plus souvent une valeur, comme ceci :

```html
    <img src="photo.jpg" />
```  

Dans ce cas de figure, l'attribut "src" permet d'indiquer l'image à afficher. L'ordinateur comprend alors qu'il doit afficher l'image qui est compris dans le fichier "photo.jpg".


### Balises fréquentes

`<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`  
> Ces balises permetttent de définir des titres de différents niveaux : h1 pour les grands titres et h6 pour les titres des sections très spécifiques.  

`<p>`  
> La balise utilisée pour créer des paragraphes. Ces paragraphes sont généralement (automatiquement) séparés par des sauts de ligne.

`<a>`  
> Cette balise est utilisée afin de créer des liens vers des ressources externes : une autre page web, un e-mail, une image, une autre section du document, etc. Les balises `<a>` contiennent le texte qui sera utilisé pour le lien, l'attribut "href" de cet élément est utilisé pour définir l'URL cible : `<a href="url_cible">du texte qui sera lu par l'utilisateur</a>`.

`<img>`  
> On a déjà vu cette balise plus haut, mais petit rappel. Cette balise permet d'intégrer une image dans un document HTML. Voici un exemple d'utilisation : `<img src="url/vers/mon/image.png" alt="Une description de l'image">`

`<div>`  et  `<span>`  
> Ces balises n'ont pas de signification particulière, elles permettent simplement de séparer des sections d'un document. La plupart du temps, ces balises sont utilisées pour la mise en forme (ou la structure).

`<ul>, <ol>` et `<li>`
>Ces balises sont utilisées pour créer des listes. `<ul>` permet de définir une liste non-ordonnée et `<ol>` de définir une liste ordonnée. Pour chacune de ces listes, ce sera la balise  `<li>` qui permettra de définir un élément de la liste. 

>Voici un exemple de liste avec `<ul>` :
```html
<ul>
   <li>Café</li>
   <li>Thé</li>
   <li>Lait</li>
</ul>
```

----------
----------

## PHP

L'**Hypertext Preprocessor** (pour PHP), est un langage de programmation principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également fonctionner comme n'importe quel langage interprété (ex: HTML) de façon locale. PHP est un langage de script utilisé le plus souvent côté serveur : dans cette architecture, le serveur interprète le code PHP des pages web demandées et génère du code et des données pouvant être interprétés et rendus par un Navigateur web.  

Sa syntaxe et sa construction ressemblent à celles des langages Java et Perl, sauf que du code PHP peut facilement être mélangé avec du code HTML au sein d'un fichier PHP.

Lorsqu'un visiteur demande à consulter une page de site web, son navigateur envoie une requête au serveur HTTP correspondant. Si la page est identifiée comme un script PHP, le serveur appelle l'interprète PHP qui va traiter et générer le code final de la page (constitué d'HTML ou de XHTML, mais aussi de CSS et de JavaScript). Ce contenu est renvoyé au serveur HTTP, qui l'envoie finalement au client. Une étape supplémentaire est souvent ajoutée : celle du dialogue entre PHP et la base de données. Généralement, PHP ouvre une connexion au serveur de SGBD voulu, lui transmet des requêtes et en récupère le résultat, avant de fermer la connexion. 

### Structure du PHP

Un script PHP peu être placer n'importe ou dans le document (souvent HTML). Un script commence par la balise `<?php` et finit par `?>`. En PHP les varibles commence par le symbole dollars "$" suivit du nom de la variable, puis le contenu de celle-ci.  

**Syntaxe basique du PHP**
```php
<!DOCTYPE html>
<html>
<body>
    <h1>Premier code PHP</h1>
    <?php
      echo "Hello World";                 // ce texte sera affiché sur le navigateur
      
      $prenomBob = "Bob";                 // assigne du texte dans la varible : "$prenomBob"
      echo "Bienvenue " . $prenomBob;     // affiche le texte & la variable concecutivement
    ?>
</body>
</html>
```

**Fonctions PHP**  
Il existe tout un tas de fonctions pré-définis en PHP, mais si l'utilisateur souhaite en créer une, voici là syntaxe:

```php
<?php
   function writeMsg() {       // crée la fonction
    echo "Hello world!";       // code here...
   }
 
   writeMsg();                 // appelle la fonction
 ?>
```

### Formulaires
Voici un formulaire basique HTML avec deux champs à remplir et un bouton pour valider
```html
<html>
<body>

<form action="welcome.php" method="post">          <!-- methode "post" utilisé -->
    Name: <input type="text" name="name"><br>
    E-mail: <input type="text" name="email"><br>
    <input type="submit">
</form>

</body>
</html>
```

Lorsque l'on appuie sur le bouton "submit", le formulaire va rediriger vers une page PHP: "welcome.php"

```php
<html>
<body>

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html>
```

Si "`John`" est remplie dans le champ "name" et "`john.doe@example.com`" dans "email", alors il sera affiché sur la page "Welcome.php" : 

>`Welcome John`   
>`Your email address is: john.doe@example.com`

### Methode : GET vs POST

Les deux méthodes, GET et POST, créent un tableau. Ce tableau contient des paires "clé / valeur", où les clés sont les "noms" contenus dans le formulaire et les valeurs sont les données d'entrée de l'utilisateur.

**`$_GET`** et **`$_POST`** sont des varaiables dites "superglobals", ce qui signifie qu'elles sont toujours accessibles, quelle que soit leur portée - et on peut y accéder depuis n'importe quelle fonction, classe ou fichier sans rien faire de spécial.

`$_GET` est un tableau de variables envoyé via les paramètres URL.  
`$_POST` est un tableau de variables envoyé au script actuel via la méthode HTTP POST.


#### **GET**
Les informations envoyées avec la méthode GET sont visibles par tous/nimporte qui (toutes variables, valeurs sont affiché dans l'URL). Cette méthode à aussi une limite (en terme de quantité) de données transmissible. La limite est de 2 000 caractères. Cette méthode est à privilégier si aucune donnée sensible n'est transmise via le formulaire.

#### **POST**
Les informations envoyées à partir d'un formulaire avec la méthode POST ne sont visibles par personnes. Tous les noms / valeurs sont intégrés dans le corps de la requête HTTP. Il n'y pas de limites sur la quantité d'informations à envoyer.

**/!\ A noter:**   
La methode GET peut-être dangeureuse si mal utilisé, il est faut impérativement éviter l'envoie d'identifiants/mot de passe ou tout autres informations sensibles !  

Pour verifier si un champ est vide, afin d'afficher les bonnes informations ou non, on utilise la fonction "empty()".  
Exemple, ci-dessous:   

```php
<!-- Sera présent dans le code de la page "Welcome.php" -->
<?php
    if (empty($_POST["name"])) {      // verifie si champ est vide
        echo "Name is required"; }    // si vide alors erreur
    else {                            // sinon
        $name = $_POST["name"];       // affiche le nom
        echo $name; }

    if (empty($_POST["email"])) {     // verifie si champ est vide
        echo "Email is required"; }   // si vide alors erreur
     else {
        $email = $_POST["email"];     // affiche email
        echo $email; }
?>
```

------------------
------------------
### Références
Suivre les liens suivants pour approfondir les sujets abordés:  
En savoir plus sur [les balises HTML](https://developer.mozilla.org/fr/docs/Apprendre/HTML/Balises_HTML)  
Tout savoir sur le [HTML](https://www.w3schools.com/html/default.asp)  
Tout savoir sur le [PHP](https://fr.wikipedia.org/wiki/PHP)  
Tout savoir sur [les formulaire PHP](https://www.w3schools.com/Php/php_forms.asp)
  
