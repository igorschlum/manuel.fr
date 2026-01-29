---
sidebar_position: 6
---
n8n est un outil qui vous permet de créer des agents intelligents qui vont utiliser l'IA en local sur votre Mac.

n8n existe en version gratuite, mais n'est pas openSource, il ne prend pas beaucoup de mémoire sur votre mac et s'installe facilement.

Pour installer n8n, il faut d'abord avoir installé  Node et npm (voir cette page)

Ensuite après avoir ouvert le Terminal, vous pouvez 

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
