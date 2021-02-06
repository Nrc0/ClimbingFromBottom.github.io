---
title: "Command Linux Ubuntu - basics"  
date: 2021-02-02  
draft: false  

---  

# Linux - les commandes de bases

## A connaitre pas coeur
### man
La commande 'man' correspond à 'manuel' et permet de comprendre le fonctionnement de la commande suivant 'man'.   
Structure : ```man <command>``` affiche les informations pour l'utilisation de la <command>  
Exemple : ```man man``` 
=> appuyer sur la touche 'espace' pour naviguer et lire le contenue du manuel
=> appuyer sur la touche 'q' pour quitter le manuel

Pour plus d'information sur l'utilisation de la commande 'man', cliquez [sur ce lien](http://doc.ubuntu-fr.org/man).

### ls
La commande 'ls' correspond à 'list' et permet de lister le contenu d'un repertoire.   
Structure : ```ls <option>``` 
<options>:
-l &nbsp;&nbsp;&nbsp;=> montre le contenu detaillé du repertoire (permission acces, nom proprietaire, etc...) 
-a &nbsp;&nbsp;&nbsp;=> montre le contenu & les fichiers cachés du repertoire (ex: '.bashrc')

### cd
La commande 'cd' correspond à 'change directory' et permet de se promener dans les repertoires.   
Structure : ```cd <option>``` 
Exemple : ```cd /nom_repertoire```

```cd```&nbsp;&nbsp;&nbsp;=> retourne au repertoire '/home/user'
```cd ..```&nbsp;&nbsp;&nbsp;=> retourne au repertoire parent (precedent)
```cd /usr/bin``` &nbsp;&nbsp;&nbsp;=> se deplace dans le repertoire '/usr/bin'

### pwd
La commande 'pwd' correspond à 'print working directory' et permet d'afficher le nom du repertoire dans lequel on ce situe   

### find 
La commande 'find' correspond à 'find' et permet de chercher des fichiers (commande recursive : demarre dans le repertoire d'execution jusqu'a tous les sous-repertoire)
<options>:
-name &nbsp;&nbsp;&nbsp;=> Recherche un fichier par son nom
-iname &nbsp;&nbsp;&nbsp;=> Même chose que ```-name``` mais insensible aux majuscules
-type &nbsp;&nbsp;&nbsp;=> Recher un fichier par son typer

Exemple:   
```find nom_fichier*``` => Effectue une recherche contenant 'nom_fichier' peut importe l'extension dû dit fichier.
```find -name *tribu_de_dana*.mp3``` => Recherche un fichier contenant 'tribu_de_dana' et qui à pour extension 'mp3' 

### grep
La commande 'grep' correspond à 'global regular expression print' et permet de rechercher une chaine de caracteres dans des fichiers (généralement utilisé avec d'autres commandes)   
<options>:
-i &nbsp;&nbsp;&nbsp;=> insensible aux majuscules
-c &nbsp;&nbsp;&nbsp;=> retourene le nombre de ligne au lieu de la ligne en elle meme
-n &nbsp;&nbsp;&nbsp;=> retourne les lignes préfixés par leur numero
-r &nbsp;&nbsp;&nbsp;=> recherche recursivement dans tous les sous-repertoires
-v toto &nbsp;&nbsp;&nbsp;=> recherche les lignes qui ne contiennent pas le mot 'toto'

Exemple: ```grep -n mon_texte_ici mon_fichier``` => retourne les lignes ainsi que leurs num où 'mon_texte_ici' apparait dans 'mon_fichier'


### cp
La commande 'cp' correspond à 'copy' et permet de copier des fichiers ou repertoires.   
Structure : ```cp <option> <source> <destination>``` 
<options>:
-a &nbsp;&nbsp;&nbsp;=> copie et garde les droits, dates, etc...
-r &nbsp;&nbsp;&nbsp;=> copie un repertoire et son contenu (y compris les sous-repertoires) 
-v &nbsp;&nbsp;&nbsp;=> verbose : permet de suivre les copies réalisés en temps réel

Exemple : 
```cp nom_fichier rep_destination/``` => copie 'nom_fichier' dans 'rep_destination' 
```cp -r source_rep/ dest_rep/``` => copie 'source_rep' & eventuels sous-repertoires dans 'dest_rep' (crée 'dest_rep' s'il existe pas) 
```cp nom_fichier rep_destination/``` => copie 'nom_fichier' dans 'rep_destination' 


### mkdir
La commande 'mkdir' correspond à 'make directory' et permet de créer un repertoire vide.   
Structure : ```mkdir <option> <nom_repertoire>```    
<options>:
-p &nbsp;&nbsp;&nbsp;=>  Crée les répertoires parents s'ils n'existent pas)   
   
Exemple:
```mkdir photos_marriage``` => crée le repertoire
```mkdir photos/alice_bob/2004``` => crée le repertoire '2004', et s'ils n'existent pas, les repertoires 'alice_bob' et 'photos'

### rm
La commande 'rm' correspond à 'remove' et permet d'effacer des fichiers (ou repertoire si utilisé avec <options>).   
Structure : ```rm <option> <nom_fichier>```    
<options>:
-i &nbsp;&nbsp;&nbsp;=> demande une confirmation avant de supprimer
-f &nbsp;&nbsp;&nbsp;=> ne demande pas de confirmation
-r &nbsp;&nbsp;&nbsp;=> efface recursivement (y compris les sous-dossiers)

Exemple :
```rm nom_fichier ``` => efface du repertoire courant 'nom_fichier'
```rm -rf /photos``` => efface le repertoire 'photos' ainsi que tous les sous-repertoires sans demander de confirmation

**/!\ COMMANDE A NE PAS REALISER** : ```rm -rf /*``` => efface TOUT

### more
La commande 'more' correspond à 'more' et permet d'afficher un fichier page par page   
Structure : ```more <option> <nom_fichier>```    
<options>:
-s &nbsp;&nbsp;&nbsp;=> Regroupe les lignes vides consécutives en une seule
-f &nbsp;&nbsp;&nbsp;=> Ne coupe pas les lignes longues

Exemple:
```more -sf monfichier``` => affiche monfichier page par page & concatene les lignes vident sans couper les longues lignes

### cat
La commande 'cat' correspond à 'concatenate' et permet d'afficher le contenu d'un fichier    
Structure : ```cat <option> <nom_fichier>```    
<options>:
-n &nbsp;&nbsp;&nbsp;=> affiche le numero des lignes
-v &nbsp;&nbsp;&nbsp;=> affiche les caracteres de controles

Exemple:
```cat -n nomfichier ``` => affiche 'nomfichier' en numerotant les lignes (à partir de 1)

Créer un ficher txt contenant qq lignes sans utiliser d'editeur:
```bash
cat > monfichier
blabla texte a inclure dans monfichier
```
(Ctrl + D pour terminer)
