---
sidebar_position: 6
---
Node et npm sont des outils de programmation qui permettent d'installer et de faire tourner des applications.

Leur installation est facile et nous en auront besoin pour installer des outils OpenSource comme Bert ou n8n.

1. Quand vous installez Node.js cela installe également npm. Voici les étapes pour l’installation :

2. Téléchargez Node.js : Vous pouvez télécharger Node.js en cliquant [ici](https://nodejs.org/dist/v20.11.0/node-v20.11.0.pkg).

3. Installez Node.js : Ouvrez le fichier téléchargé et suivez les instructions pour installer Node.js.

4. Vérifiez l’installation : Une fois l’installation terminée, vous pouvez vérifier si Node.js et npm sont correctement installés en ouvrant un terminal et en exécutant les commandes suivantes :

```bash
node -v
```

```bash
npm -v
```

5. Ces commandes afficheront les versions de Node.js et npm respectivement1.

6. Mise à jour de npm : Si vous souhaitez mettre à jour npm à sa dernière version, vous pouvez télécharger à nouveau l'installeur de Node en cliquant [ici](https://nodejs.org/dist/v20.11.0/node-v20.11.0.pkg) et relancer tout simplement l'installeur

Vous pouvez également utiliser la commande suivante dans votre terminal :

```bash
npm install -g npm@latest
```

7. Cette commande installera la dernière version de npm.

Notez que vous pouvez également utiliser un gestionnaire de versions Node comme nvm pour installer Node.js et npm. Cela vous permet de basculer facilement entre différentes versions de Node.js et npm.

8. Vous pourriez aussi installer Homebrew qui est un outil pour en installer d'autres sur votre mac, mais il est déconseillé de mélanger les outils de gestion de paquets. Nous partons donc du principe que c'est npm que nous allons utiliser.
