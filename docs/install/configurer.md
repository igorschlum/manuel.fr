---
sidebar_position: 4
---

Je vous propose de configurer Ollama pour le rendre encore plus performant

# Utiliser une interface utilisateur plus performante

Dans son utilisation basique, on lance l'application Ollama depuis le terminal en tapant

```bash
ollama run lama3
```

Cette commande va lancer l'application Ollama si elle ne tourne pas déjà, charger le modèle lama3 et vous donner la main pour que vous puissiez taper votre "prompt", c'est à dire la question que vous allez poser à Llama3.

Ce que vous ne voyez pas, c'est que l'application Ollama va installer un serveur qui est disponible depuis votre terminal en tapant dans la barre d'URL https://127.0.0.1:11434

Si Ollama fonctionne normalement, vous verrez apparaître "Ollama is running" dans votre navigateur.

En informatique, 127.0.0.1 c'est l'adresse IP locale de votre ordinateur. Sur tous les ordinateurs, en tapant 127.0.0.1, on accède au serveur local de son ordinateur s'il y en a un qui tourne.

:11434, c'est le "port" utilisé par le serveur. Vous pouvez sur une même machine avoir plusieurs serveurs qui tournent sur l'adresse IP 127.0.0.1, mais chacun sur un port. Le port par défaut est le port 80. Si vous ne l'indiquez pas, il est choisi d'office.

Ollama s'est installé par défaut sur le port 11434. On peut taper une commande pour changer de port pour Ollama au cas où un autre serveur tourne sur votre ordinateur sur ce port, mais c'est très peu probable.

Il ya des applications qui vont "discuter" avec Ollama par le biais du serveur et qui vous permettent de choisir une interface agréable pour ce faire.



# Partager Ollama sur votre réseau local

Vous pouvez partager l'application Ollama sur votre réseau local. Cela veut dire que vous pouvez y accéder depuis votre téléphone mobile ou depuis un autre ordinateur de votre réseau. C'est pratique en famille ou en entreprise.

Dans son utilisation basic Ollama n'est utilisable que depuis l'ordinateur sur lequel il tourne et on le lance depuis le terminal.