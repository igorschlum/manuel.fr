---
sidebar_position: 4
---

Je vous propose de configurer Ollama pour le rendre encore plus performant

# Utiliser une interface utilisateur plus performante

Dans son utilisation basique, on lance l'application Ollama depuis le terminal en tapant

```bash
ollama run lama3.2
```

Cette commande va lancer l'application Ollama si elle ne tourne pas déjà, charger le modèle lama3.1 et vous donner la main pour que vous puissiez taper votre "prompt", c'est à dire la question que vous allez poser à Ollama.

Ce que vous ne voyez pas, c'est que l'application Ollama va installer un serveur qui est disponible depuis votre terminal en tapant dans la barre d'URL http://127.0.0.1:11434

Si Ollama fonctionne normalement, vous verrez apparaître "Ollama is running" dans votre navigateur.

En informatique, 127.0.0.1 c'est l'adresse IP locale de votre ordinateur. Sur tous les ordinateurs, en tapant 127.0.0.1, on accède au serveur local de son ordinateur s'il y en a un qui tourne.

:11434, c'est le "port" utilisé par le serveur. Vous pouvez sur une même machine avoir plusieurs serveurs qui tournent sur l'adresse IP 127.0.0.1, mais chacun sur un port. Le port par défaut est le port 80. Si vous ne l'indiquez pas, il est choisi d'office.

Ollama s'est installé par défaut sur le port 11434. On peut taper une commande pour changer de port pour Ollama au cas où un autre serveur tourne sur votre ordinateur sur ce port, mais c'est très peu probable.

Il ya des applications qui vont "discuter" avec Ollama par le biais du serveur et qui vous permettent de choisir une interface agréable pour ce faire.

Je vous conseille pour cela l'application Msty que l'on peut télécharger et installer ici. Cette application est intéressa

# garder un LLM en mémoire

Si vous utilisez un Mac avec beaucoup de mémoire, vous allez choisir de travailler avec un LLM puissant pour avoir la meilleur qualité de réponse. Or les LLM puissants sont souvent les stockés dans des fichiers volumineux. Plus le LLM est pertinent, plus il est lent à répondre et long à charger. Comme par défaut Ollama libère la mémoire des LLMs toutes les 5 minutes si le LLM n'est pas utilisé, on se retrouve rapidement à ce que le LLM se recharge régulièrement ce qui ralenti encore plus le travail avec l'IA.

pour l'instant, c'est un peu compliqué de conserver un LLM en mémoire.

Il faut ouvrir le terminal et indiquer ici le nom de votre modèle. Personnellement j'utilise le modèle llama3.1:70b-instruct-q8_0 qui occupe 74 Go de mémoire.

```bash
curl http://localhost:11434/api/generate -d '{"model": "llama3.1:70b-instruct-q8_0", "keep_alive": -1}'
```

# Augmenter la mémoire disponible pour le GPU

Quand vous utilisez un LLM avec Ollama, l'application essaie de loger le LLM dans la mémoire alouée aux GPU. MacOS alloue automatiquement de la mémoire vive disponible pour les GPU, mais dans la limite de 66% de la mémoire totale.

les GPU, sont des processeurs simple qui savent exécuter beaucoup de tâches en parallèle. Ils ont été créés principalement pour accélérer l'affichage des sur les écrans et sont le plus souvent dans des cartes graphiques.

Si vous avez un Mac et que vous voulez attribuer plus de RAM aux GPU. Vous pouvez le faire avec la commande :


sur un Mac 32 Go de RAM, on peut pousser la GPU jusqu'à 28 Go de RAM
```bash
sudo sysctl iogpu.wired_limit_mb=28672
```
sur un Mac 192 Go de RAM, on peut pousser la GPU jusqu'à 180 Go de RAM
```bash
sudo sysctl iogpu.wired_limit_mb=184320
```
Pour remettre la valeur standard il faut taper dans le terminal
```bash
sudo sysctl iogpu.wired_limit_mb=0
```

# Partager Ollama sur votre réseau local

Vous pouvez partager l'application Ollama sur votre réseau local. Cela veut dire que vous pouvez y accéder depuis votre téléphone mobile ou depuis un autre ordinateur de votre réseau. C'est pratique en famille ou en entreprise.

Dans son utilisation basic Ollama n'est utilisable que depuis l'ordinateur sur lequel il tourne et on le lance depuis le terminal.