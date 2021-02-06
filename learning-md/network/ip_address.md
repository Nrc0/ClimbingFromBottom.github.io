# Adresses IP

### Description
Une Adresse IP (Internet Protocol) est un numéro d'identification qui est attribué de façon permanente ou provisoire à chaque périphérique relié à un réseau informatique qui utilise l'Internet Protocol. Cette adresse est assignée soit individuellement par l'administrateur du réseau local dans le sous-réseau correspondant, soit automatiquement via le protocole DHCP[1]. Si l'ordinateur dispose de plusieurs interfaces, chacune dispose d'une adresse IP spécifique. Une interface peut également disposer de plusieurs adresses IP.

------------------
### Fonctions et utilisations
Une Adresse IP remplit deux fonctions principales. Il permet d'identifier l'hôte, ou plus précisément son interface réseau. Et fournit l'emplacement de l'hôte dans le réseau, et donc la capacité d'établir un chemin vers cet hôte. Chaque paquet transmis par le protocole IP, contient l'adresse IP de l'émetteur ainsi que l'adresse IP du destinataire.   
L’adresse IP est composée de 4 octets allant de 0 à 255 séparés par des points. Chaque adresse IP appartient à une classe qui correspond à une plage d’adresses IP   

**/!\ A noter:**  
Certaines adresse IP sont reservés et ne sont pas utilisables pour adresser des ordinateurs individuels, voir: Broadcast[2].


### Les Classes
Au total, il existe 5 types de classes: A, B, C, D et E. Elle servent à adapter l’adressage selon la taille du réseau. Cette notion de classe est desormais obsolète du fait de la pénurie d'adresses du début des années 2010. 

**/!\ A noter:**  
Dans la pratique, au début des années 2010, de nombreux matériels et logiciels se sont basés sur ce système de classe, y compris les algorithmes de routage des protocoles dit 'classless' (cf. Cisco CCNA Exploration - Protocoles et concepts de routage). Il est donc important de les connaitres.


Classe| Masque réseau  | Plage d'adresses réseau             
----- |     ---------- |        ------------------          
A     | 255.0.0.0      | 0.0.0.0      ~      126.255.255.255
B     | 255.255.0.0    | 128.0.0.0    ~      191.255.255.255
C     | 255.255.255.0  | 192.0.0.0    ~      223.255.255.255
D     | 240.0.0.0      | 224.0.0.0    ~      239.255.255.255
E     | NA             | 240.0.0.0    ~      255.255.255.255

-----------------

### Adresse IP et nom de domaine

Le plus souvent, pour se connecter à un serveur informatique, l'utilisateur ne donne pas l'adresse IP du serveur, mais le nom de domaine de celui ci (par exemple: www.wikipedia.org). Ce nom de domaine est ensuite résolu en adresse IP par l'ordinateur de l'utilisateur en faisant appel au système de noms de domaine (ou DNS[4]). Ce n'est qu'une fois l'adresse obtenue qu'il est possible d'initier une connexion.

-------------------

### Adresses de diffusion 

* L'adresse `255.255.255.255` est une adresse de diffusion (broadcast), limitée au même sous-réseau que la liaison locale utilisée, d'un hôte à tous les hôtes de ce sous-réseau ; elle sert notamment à découvrir les routeurs connectés adressés dans tout sous-réseau auquel l'hôte source est connecté.   
* La première adresse d'un sous-réseau spécifie le réseau lui-même, elle sert pour des messages non nécessairement destinés aux seuls routeur mais qui ne doivent normalement pas être reroutés vers Internet.   
* La dernière adresse est une adresse de diffusion (broadcast) pour des messages normalement destinés aux seuls les routeurs d'une liaison spécifique, permettant les échanges entre tous les hôtes de ce sous-réseau et les réseaux extérieurs (dont l'Internet global). Cette adresse n'est habituellement pas reroutée vers Internet, sauf en cas d'utilisation de protocoles particuliers.   




------------------
### IP Versions

Aujourd'hui, deux versions du protocole Internet sont couramment utilisées sur Internet, l'**IPv4** pour protocole Internet version 4 et l'**IPv6** pour protocole Internet version 6.   

L'épuisement des adresses IPv4 a conduit au développement d'une nouvelle version d'IP, l'IPv6. Le manque d'adresse IPv4 est dans un premier temps contourné grâce à l'utilisation de techniques de traduction d'adresses comme le NAT[3]. Le nombre d'adresses IPv4 publiques est officiellement arrivé à saturation le 3 février 2011. Les adresses IP sont généralement écrites et affichées dans des notations lisibles par l'homme.   

#### IPv4
Les adresses IPv4 sont généralement représentées en notation **décimale**, composée de quatre nombres décimaux, chacun allant de 0 à 255, séparés par des points. Les adresses IPv4 sont codées sur 32 bits, ce qui limite à 4,3 x 10^+9 adresses possibles. Prenons l'adresse IPv4 suivante: `172.16.254.1`. Dans cette exemple, chaque partie séparé par un point, représente un groupe de 8 bits (un octet) de l'adresse. Dans certains cas d'écriture technique, les adresses IPv4 peuvent être présentées dans diverses représentations hexadécimales, octales ou binaires.   

**Adresse IPv4 : notation décimale -> binaire**
decimale (1 octet)|172 | 16 | 254 | 1
--------|----|----|-----|----
binaire (8 bits) | 10101100 | 00010000 | 11111110 | 00000001
On observe que la somme des 4 octets (4 * 8 = 32) que compose l'adresse IPv4 est de 32 bits. 

#### IPv6
Lors de la création de l'IPv4 à l'IPv6, la taille de l'adresse est passé de 32 à 128 bits. Permettant d'atteindre ainsi 3.4×10^+38 d'adresses  possibles, jugé suffisant pour l'avenir. Les 128 bits d'une adresse IPv6 sont représentés en 8 groupes de 16 bits chacun. Chaque groupe est écrit en quatre chiffres **hexadécimaux** et les groupes sont séparés par des deux-points ":"  
Prenons l'IPv6 suivante: `2001: 0db8: 0000: 0000: 0000: ff00: 0042: 8329`

Pour plus de commodité et de clarté, la représentation d'une adresse IPv6 peut être raccourcie avec les règles suivantes.
* Un ou plusieurs zéros à la tête de n'importe quel groupe de chiffres hexadécimaux sont supprimés, ce qui est généralement fait pour tous les zéros de tête. 
>Par exemple, le groupe 0042 est converti en 42.

* Les sections consécutives de zéros sont remplacées par deux deux-points "::". Cela ne peut être utilisé qu'une seule fois dans une adresse, car une utilisation multiple rendrait l'adresse indéterminée. La RFC 5952 requiert qu'un double-point ne soit pas utilisé pour indiquer une seule section omise de zéros. En appliquant ses règles, l'adresse IPv6 devient:

```
Adresse IPV6 initiale:
> 2001: 0db8: 0000: 0000: 0000: ff00: 0042: 8329

Après avoir supprimé tous les zéros non significatifs de chaque groupe:
> 2001:db8:0:0:0:ff00:42:8329
 
Après avoir omis les sections consécutives de zéros:
> 2001:db8::ff00:42:8329
```
L'adresse de "bouclage" (loopback, en anglais) `0000: 0000: 0000: 0000: 0000: 0000: 0000: 0001` est abrégée en `::1` en utilisant les deux règles.




------------------
### Glossaire  
**[1]: DHCP**  
Dynamic Host Configuration Protocol (DHCP) est un protocole réseau dont le rôle est d’assurer la configuration automatique des paramètres IP d’une station ou d'une machine, notamment en lui attribuant automatiquement une adresse IP et un masque de sous-réseau.

**[2]: Broadcast**  
Dans un réseaue informatique, Broadcast fait référence à la transmission d'un paquet qui sera reçu par chaque appareil simultanément sur le réseau.

**[3]: NAT**  
En réseau informatique, on dit qu'un routeur fait du network address translation (NAT) (« traduction d'adresse réseau », lorsqu'il fait correspondre des adresses IP à d'autres adresses IP. Un cas courant est de permettre à des machines disposant d'adresses privées qui font partie d'un intranet et ne sont ni uniques ni routables à l'échelle d'Internet, de communiquer avec le reste d'Internet en utilisant vers l'extérieur des adresses externes publiques, uniques et routables.

**[4]: DNS**  
Le Domain Name System, généralement abrégé DNS, qu'on peut traduire en « système de noms de domaine », est le service informatique distribué utilisé pour traduire les noms de domaine Internet en adresse IP ou autres enregistrements.

------------------
### Références
Suivre les liens suivants pour approfondir les sujets abordés:  
En savoir plus sur [l'Adresse IP](https://fr.wikipedia.org/wiki/Adresse_IP)  
En savoir plus sur [le NAT](https://fr.wikipedia.org/wiki/Network_address_translation)  
En savoir plus sur [la représentaion des IPv6](https://en.wikipedia.org/wiki/IPv6_address#Representation)  
En savoir plus sur [le DNS](https://fr.wikipedia.org/wiki/Domain_Name_System)
