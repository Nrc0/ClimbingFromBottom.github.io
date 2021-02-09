function showInfos(username, password) {

  if(username.value == "" || password.value == ""){
    if(username.value == ""){
      username.classList.add("invalid");
      username.addEventListener("animationend", function(e){
        setTimeout(function(){ username.classList.remove('invalid') }, 200);
      }); 
    }
    if(password.value == ""){
      password.classList.add('invalid');
      password.addEventListener("animationend", function(e){
        setTimeout(function(){ password.classList.remove('invalid') }, 200);
      }); 
    } 

  } else {

    const content = document.querySelector('div.mainsubdiv')

    while(content.firstChild) content.firstChild.remove();

    let div = document.createElement('div');
    div.innerHTML = "<p style='font-size: 20px;'> Bon comme vous vous en doutiez, c'est une fausse page Facebook qui pourrait très bien être du phishing ajoute à du man in the middle pour connecter l'utilisateur directement et ainsi passer encore plus inaperçu !</p>";
    div.innerHTML += "<img class='phishing-pop' src='https://consoltech.com/wp-content/uploads/2018/12/How-to-stop-Phishing-emails.jpg' width='300px' style='margin: 0 auto; display: block; border-radius: 10px;' </img>" 
    div.innerHTML += "<p style='text-align: center; color: red;'> Nom d'utilisateur renseigné ci-dessus: <strong>" + username.value + "</strong></p>";
    div.innerHTML += "<p style='text-align: center; color: red;'> Mot de passe renseigné ci-dessus: <strong>" + password.value + "</strong></p>";
    div.innerHTML += "<p style='font-size: 20px;'> Le fait d'avoir simplement des '*' quand on écrit le mot de passe, ou que la page soit en 'https://', ca ne garantit en aucun cas la sécurité de la connexion. Pour limiter les risques il y a plusieurs choses qui peuvent être appliqué:</p>";
    div.innerHTML += "<li style='color: green;'> Bien vérifier l'url</li>";
    div.innerHTML += "<li style='color: green;'> L'utilisation d'un gestionnaire de mot de passe</li>";
    div.innerHTML += "<li style='color: green;'> Ne pas utiliser les liens ou boutons présent en ligne ou dans les mails</li>";
    div.innerHTML += "<li style='color: green;'> Privilégier le fait de rentrer l'url a la main ou par un moteur de recherche</li>";

    content.appendChild(div);
    content.style.position = "relative";
    div.style.paddingTop = "50px";
    div.style.paddingBottom = "50px";
  }
}

function connexion() {
  var username = document.getElementById('username');
  var password = document.getElementById('password');

  showInfos(username, password);
}

function inscription() {
  var username = document.getElementById('userCreation');
  var password = document.getElementById('passCreation');

  showInfos(username, password);

}
