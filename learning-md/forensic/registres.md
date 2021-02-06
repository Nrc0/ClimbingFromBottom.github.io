---
title: "Registre"
date: 2020-02-26T13:58:15Z
draft: false
---

La base de registre est un élément fondamental du système. C'est une gigantesque base de données qui peut atteindre plusieurs dizaines de méga. Afin de faciliter la gestion de cette base, celle ci est organisée en 5 clés principales, elles mêmes divisées en sous clés.

## Les 5 clés et leurs fonctions

### HKEY_CLASS_ROOT :

Cette clé gère les extensions des fichiers ainsi que les liaisons avec les logiciels et serveurs ActiveX. Toutes les extensions des fichiers et leur programme correspondant sont gérés ici. Lorsque vous cliquez sur un document ayant une extension .xls par exemple, Windows saura qu'il devra charger Excel pour ouvrir le fichier.

Certains menus contextuels sont également gérés ici, de même que les composants communs de Windows et les Dll et Exe Active X, les contrôles complémentaires, etc. Si les inscriptions de ces composants sont modifiés, vous pouvez au pire en plus pouvoir vous servir du programme qui en a besoin.

/CLSID : Gestion des identificateurs de classe des objets COM

/Extension : Cette clé gère les extensions de fichiers. Certaines extensions ne figurent cependant pas dans cette clé, il faut alors regarder du côté du type de fichier

/Applications : Cette clé gère certains menus contextuels.

/Directory : Clé gérant les menus contextuels du bouton démarrer.

/Drive : Gestion des menus contextuels des lecteurs.

/Folder : Icône et menus contextuels des dossiers

### HKEY_CURRENT_USER :

Cette clé contient toutes les informations de l'utilisateur connecté (celui qui utilise le PC) : paramètres des dossiers et couleurs d'écran et du panneau de configuration. C'est une sous clé de HKEY_USERS

/AppEvents : Cette clé contient les événements systèmes et leurs sons correspondants (allez jeter un oeil dans le panneau de configuration > sons et périphériques audio > sons)

/EventLabels : Ce sont les événements système.

/ControlPanel : Cette branche gère tous les paramètres du panneau de configuration.

/keyboard/layout : Configuration du clavier.

/Printers : Ce sont les paramètres d'impression et de l'assistant d'ajout d'imprimante.

/Software : Ce sont les paramètres de certains composants des programmes ou du système d'exploitation

### HKEY_LOCAL_MACHINE :

C'est la clé principale du registre avec HKEY_CLASS_ROOT : elle contient les paramètres de l'ordinateur et des logiciels.

Ces paramètres peuvent se changer lors de la modification d'un paramètre dans Windows ou un programme.

/Software/Classes : Cette clé est une copie intégrale de la clé HKEY_CLASSES_ROOT.

/Hardware : Cette clé contient toutes les informations sur le processeur, la taille de la mémoire et la gestion Plug and play de Windows. Les données sont initialisées à chaque démarrage, une modification des valeurs est donc inutile (non, vous n'aurez jamais un Pentium 4 à 10 Ghz !)

/Software : Cette clé contient les informations sur les applications et les composants systèmes de windows.

/System : Cette clé contient les paramètres de Windows nécessaires à chaque démarrage, ainsi que des paramètres nécessaires à certains programmes.

/CurrentControlSet : Paramètres du système et des services (voir l'article consacré aux services)

/Control/ComputerName : C'est le nom de votre ordinateur (visible dans le réseau)

### HKEY_USERS :

Cette clé contient tous les profils utilisateurs et leurs paramètres. Lors de la création d'un nouveau profil, le modèle de départ est la clé par défaut.

### HKEY_CURRENT_CONFIG :

Cette clé contient des informations sur le profil matériel utilisé au démarrage de l'ordinateur. Cette clé travaille avec le Plug and play de Windows.

Les différents types de données :

Les clés stockent des données. Ces données peuvent être de différents types :

REG_BINARY : Ce sont des données binaires contenant des bits (0 ou 1). Ce type de donnée s'applique surtout aux composants matériels.

REG_DWORD : Ce type de donnée comprend des données constituées de quartets (4 octets) et est surtout utilisé pour les pilotes de périphériques et les services apparentés.

REG_EXPAND_SZ : Ce sont des chaînes de longueur variable. Elles contiennent une variable que le système remplace : %windir% est la variable qui contient le nom de dossier contenant windows.

REG_MULTI_DZ : Ce sont des chaînes multiples qui contiennent des successions ou des listes de variables.

REG_SZ : C'est une chaîne texte de longueur fixe.

REG_FULL_RESOURCE_DESCRIPTOR : Ce type de données qui ne s'applique qu'à Windows XP contient des tableaux imbriqués stockant une liste de ressources correspondant à un matériel ou à un pilote.
