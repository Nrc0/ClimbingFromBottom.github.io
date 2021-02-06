---
title: "Files"
date: 2020-03-22T13:58:15Z
draft: false
---

## Identification

L'identification se fait premièrement par la lecture de l'extension du fichier qui se trouve juste derrière le nom du fichier (Attention sous windows, par défaut les extensions de fichier sont caché), on peut trouver par exemple ".png" ou ".jpg" pour une image. Cette identification permet à l'OS d'executer l'outil par défaut relié et configuré pour cette extension.

La signature d'un fichier, une séquence unique de bits présent dans l'entête d'un fichier. Sur windows par exemple, cette signature est présente dans les 20 premiers bits d'un fichier. Chaque type de fichier à une signature différente. Par exemple une image PNG aura comme signature "89 50 4E 47 0D 0A 1A 0A" en hexadecimal. Lors de l'éxecution du fichier, l'outil en question va lire cette signature afin d'éxecuter correctement le fichier.

Mais attention ces informations peuvent être très facilement éronées, nous verrons par la suite comment.


## Manipulation de signature

Prenez un fichier quelconque et analysons le. Ici pour l'exemple je vais prendre une image PNG.

![alt text](files/image-file.png "Une image")

Nous pouvons voir que le nom de l'image est suivi de l'extension ".png". Celle-ci permet à l'OS de savoir quel outil par défaut éxecutera cette image.
