---
sidebar_position: 9
title: "Bolt"
---
Bolt.new est un outil assez étonnant. Vous pouvez utiliser l'intelligence artificielle pour construire une application ou un site web gratuitement en utilisant Ollama. Nous allons avancer pas à pas dans cette partie.

Bolt est développé par la société [StackBlitz](https://stackblitz.com). A l'origine, StackBlitz est un outil pour développer directement depuis une page web et donc de pouvoir tester le programme que l'on écrit directement, mais encore faut-il savoir programmer.

StackBlitz a alors développé le site [Bolt.new](https://bolt.new) qui permet de développer une application à partir d'un prompt. Une fois l'application développée, on peut toujours avec des prompts la modifier pour l'améliorer.

Bolt s'appuie sur l'outil d'intelligence artificiel [Claude](https://www.manuel.fr/learn/autres_ia/claude), c'est cette IA qui va générer le programme selon vos prompts.

Le problème, c'est qu'il faut prendre un abonnement qui est payant et qu'à force de faire faire des modifications et de passer du temps à fignoler son application, on peut se retrouver assez rapidement avec une facture de plusieurs centaines d'euros.

Mais Bolt est aussi un projet OpenSource que l'on peut télécharger depuis GitHub. On peut le télécharger, mais on peut aussi le modifier et c'est ce qu'à fait 

Mais un développeur a modifié l'application Bolt 

```bash
npm install -g n8n
```

Pour faire la mise à jour de n8n vous verrez dans la barre de commandes à droite qu'il y a une indication qu'il y a une nouvelle version et depuis quand cette nouvelle version est disponible. Vous pourrez alors installer la mise à jour en tapant la commande suivante :

```bash
npm update -g n8n
```

On peut également installer n8n à partir de Docker, mais visiblement ce n'est pas conseillé quand on est sur un Mac, donc nous n'allons pas expliquer ici comment faire, mais vous trouverez plein de tutos sur le net si vous préférez utiliser Docker.

L'installation par npm m'affiche tout un tas de warning, mais ce sont principalement sur des librairies pour accéder à aws ou à azur et je sais que nous n'allons pas utiliser ces librairies. De plus il faut s'habituer à ces messages qui vous disent que des librairies ne sont pas à jour. Les librairies s'utilisant les unes les autres c'est impossible d'avoir toujours les derniers librairies à jour.

une fois l'installation terminée, il suffit de taper n8n ans le terminal et on a une adresse web qui s'affiche pour accéder à l'interface.

Il est conseillé d'avoir Chrome par défaut comme navigateur, car n8n n'aime pas safari.

Chez moi, le lien s'ouvre sur "http://localhost:5678/"(http://localhost:5678/)

n8n est en anglais

Un premier écran va vous demander de vous enregistrer pour utiliser 8n8.

Dans la barre de menu à droite, on voit qu'il y a une aide en ligne mais comme elle est en anglais, on va essayer d'avancer sur cette page pour expliquer comment fonctionne n8n.

Il y a dans le menu, un choix "Variables", c'est uniquement pour la version payante et donc cela ne va pas nous interesser ici.

Tout en bas à côté de votre nom, il y a ... et ça permet d'accéder aux settings de l'application. Beaucoup de ces settings sont liés à la version commerciale de n8n, donc nous n'allons pas les aborder ici.

On va plutôt s'intéresser dans la fenêtre principale à l'item "Template" qui permet d'aller chercher des temptate d'automatisation tout faits, il y en a plus de 1000.

On va s'intéresser à celui qui s'appelle "Very Quick Start"(https://n8n.io/workflows/1700-very-quick-quickstart/)

On a un bouton pour l'installer directement sur mon serveur local.

Vous voyez alors apparaître à l'écran 3 blocs reliés les uns aux autres. L'exécution du script se lit de gauche à droite. On peut cliquer sur chaque bloc pour comprendre ce qu'il fait.

Le premier bloc en forme de curseur permet d'indiquer que le script va être exécuter quand on clique sur le bouton "Test", mais plus tard vous pourrez déterminer des scripts qui s'exécutent sur un évenement externe. On verra ça plus tard.

Le second bloc en forme de base de données avec un chapeau est une fonction qui va donner les coordonnées de 5 clients bidons qui servent pour la démonstartion et pour la suite de l'exemple. Quand on clique deux fois sur l'icône de la base données, on voit une grande fenêtre s'aficher et cette fenêtre montre à gauche l'input (ici le clic sur le bouton, au milieu les réglages de l'action et à droite le résultat de l'action). Dans ce cas, c'est soit un tableau de données, soit un fichier json contenant les résultats sous la forme d'un json. (mettre un lien ici pour renvoyer sur l'explication du format json)

On peut également afficher le résultat dans un format Schema qui est une autre façon d'afficher l'information.







Tout en bas, il y a votre 
 

1. Quand vous installez Node.js cela installe également npm. Voici les étapes pour l’installation :

2. Téléchargez Node.js : Vous pouvez télécharger Node.js depuis cette page [ici](https://nodejs.org/fr/download).

3. Installez Node.js : Ouvrez le fichier téléchargé et suivez les instructions pour installer Node.js.

4. Vérifiez l’installation : Une fois l’installation terminée, vous pouvez vérifier si Node.js et npm sont correctement installés en ouvrant un terminal et en exécutant les commandes suivantes :

```bash
node -v
```

```bash
npm -v
```

5. Ces commandes afficheront les versions de Node.js et npm respectivement1.

6. Mise à jour de npm : Si vous souhaitez mettre à jour npm à sa dernière version, vous pouvez utiliser la commande suivante dans votre terminal :


7. Cette commande installera la dernière version de npm.

Notez que vous pouvez également utiliser un gestionnaire de versions Node comme nvm pour installer Node.js et npm. 

8. Vous pouvez aussi installer Homebrew qui est un outil pour en installer d'autres sur votre mac

Rendez-vous sur https://brew.sh et suivez les instuctions.

Une fois brew installé, il faut rajouter le chemin d'accès de Brew dans votre système et tapant dans le terminal

```bash
export PATH=/opt/homebrew/bin:$PATH
```
