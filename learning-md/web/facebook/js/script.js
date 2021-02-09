function connexion() {
  var username = document.getElementById('username');
  var password = document.getElementById('password');

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
    div.innerHTML = "<img class='phishing-pop' src='https://consoltech.com/wp-content/uploads/2018/12/How-to-stop-Phishing-emails.jpg' width='300px' style='border-radius: 10px;' </img>" 
    div.innerHTML += "<p>Bon comme vous vous en doutiez c'est une fausse page facebook qui pourrait tres bien etre du phishing ajouté a du man in the middle pour connecter l'utilisateur directement et ainsi passer encore plus inapercu !</p>";
    div.innerHTML += "<p style='color: red;'>Nom d'utilisateur renseigné ci-dessus: <strong>" + username.value + "</strong></p>";
    div.innerHTML += "<p style='color: red;'>Mot de passe renseigné ci-dessus: <strong>" + password.value + "</strong></p>";
    content.appendChild(div);
    content.style.textAlign = "center";
    div.style.marginTop = "50px";
  }
}

function inscription() {

}
