# Wireshark

Wireshark est un outil très utilisé en réseau, il permet de surveiller les paquets de données échangés sur un réseau.

![Logo Wireshark](https://www.wireshark.org/assets/theme-2015/images/wireshark_logo.png)

C'est un logiciel multi-plateforme utilisable sous Linux, Windows et Mac. Capable de lire des données sur les réseaux Ethernet, Wifi (IEEE 802.11), PPP, Loopback, FTTH et tout autres réseau utilisant les protocoles IP et il utilise pcap pour capturer les paquets.

![Interface Wireshark](learning-md/network/wireshark-interface.png)

### Code couleur

Comme vous pouvez le voir sur le figure précédente, Wireshark utilise un code couleur:

|Couleur     |Signification|
|------------|-------------|
|Mauve clair |traffic TCP  |
|Gris        |paquet TCP avec un drapeau SYN ou FIN|
|Rouge       |paquet TCP avec un drapeau RTS|
|Noire       |paquet TCP avec un problème(souvent un numéro de séquence désordonné)|
|Vert clair  |trafic HTTP  |
|Bleu clair  |trafic DNS ou UDP|


### Interface

L'interface se divise en trois parties. La première partie, qui correspond aux paquets reçus:

![Interface Wireshark](learning-md/network/wireshark-paquets.png)

On voit sur cette partie qu'on a déjà plusieurs informations d'affichées. On a l'adresse ip source et destination, le protocole que le paquet utilise, la longueur de sa donnée et une petite information supplémentaire de celui-ci.

Pour plus de détail sur un paquet, en le selectionant dans la première partie on a tout un tas d'informations supplémentaire dans cette deuxième partie:

![Interface Wireshark](learning-md/network/wireshark-detail.png)

Enfin dans la dernière partie on a l'affichage de la donné du paquet selectionné précédement:

![Interface Wireshark](learning-md/network/wireshark-hexa.png)

La documentation complète de l'outil est disponible [ici](https://www.wireshark.org/docs/)
