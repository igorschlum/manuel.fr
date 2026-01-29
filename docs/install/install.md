---
sidebar_position: 1
title: "Ollama"
---

# Prérequis

Il est recommandé d’avoir un **Mac Apple Silicon (M1 à M5)**.  
Cela peut également fonctionner sur un **Mac Intel**, à condition d’avoir **macOS 11 Big Sur minimum**.

Si vous êtes sous **Windows**, vous pouvez suivre directement les instructions du site officiel d’Ollama pour l’installation.

Il est aussi préférable d’avoir **quelques notions d’anglais**.  
Nous traduirons cependant au fur et à mesure les termes importants que nous croiserons, comme par exemple [LLM](/learn/lectures/glossaire#LLM).

N’hésitez pas à m’écrire si une étape n’est pas claire : tout est pensé pour être **le plus accessible possible**.

C’est parti.

---

# Installation

Je vous conseille d’installer **la dernière version d’Ollama**.

👉 Voici le lien de téléchargement :  
**[https://ollama.com/download/Ollama.dmg](https://ollama.com/download/Ollama.dmg)**

Une fois le fichier téléchargé, ouvrez **`Ollama.dmg`** depuis votre dossier *Téléchargements*.

Faites ensuite glisser l’icône de l’application **Ollama** dans votre dossier **Applications**.

<img class="screenshot" alt="Copier vers Applications" src="/img/copyollama.jpeg" />

*(Si vous êtes sous Windows, reportez-vous aux instructions officielles sur le site d’Ollama.)*

---

## Premier lancement

Lancez l’application **Ollama** depuis le dossier *Applications*.

<img class="screenshot" alt="Avertissement de sécurité" src="/img/warning.png" />

Un message de sécurité apparaît : macOS vous informe que l’application provient d’Internet et non de l’App Store.  
Vous pouvez confirmer sans problème.

Si Ollama n’a pas été déplacé dans le dossier *Applications*, un message en anglais vous proposera de le faire automatiquement.

<img class="screenshot" alt="Move to Applications" src="/img/move.png" />

Cliquez sur **« Move to Applications »**.

Et si votre fichier était sur le bureau, macOS va aussi vous demander d'autoriser Ollama à accéder aux fichiers sur le bureau pour qu'il puisse se déplacer lui-même dans le dossier Applications.

<img class="screenshot" alt="Autoriser l'accès au bureau" src="/img/autoriser.png" />

---

## Autorisation de l’interface en ligne de commande (CLI)

Un dialogue apparaît ensuite pour vous demander d’autoriser l’installation de l’**interface en ligne de commande** :

<img class="screenshot" alt="Autoriser CLI" src="/img/cli.png" />

Il faut accepter.  
Cette interface permet à Ollama de fonctionner **en arrière-plan**, même lorsque la fenêtre principale n’est pas ouverte.

<img class="screenshot" alt="background" src="/img/background.png" />

macOS vous indique également qu’Ollama a ajouté des éléments pouvant s’exécuter en arrière-plan.  
C’est normal : Ollama agit comme un **serveur local**, accessible par d’autres applications.

---

## Première utilisation

La fenêtre principale d’Ollama s’affiche.

<img class="screenshot" alt="ollama" src="/img/ollama.png" />

L’interface n’est pas encore traduite en français, mais elle reste volontairement simple.

Vous pouvez écrire un **prompt** (une demande) qui sera interprété par le **modèle actif**.

Par défaut, Ollama utilise le modèle **`gemma3:4b`**.

En ouvrant le menu des modèles :
- les premiers sont des modèles **cloud** (les requêtes sont envoyées aux serveurs d’Ollama),
- les suivants sont des modèles **locaux**, à télécharger et exécuter directement sur votre ordinateur.

👉 Je vous conseille de rester sur :
- **`gemma3:4b`** si votre machine est suffisamment puissante,
- ou **`gemma3:1b`** si vous avez moins de mémoire.

### Que signifie `4b` ou `1b` ?

- `4b` signifie **4 milliards de paramètres**  
  → environ **3,1 Go** sur le disque et en mémoire vive.
- `1b` est environ **4 fois plus léger**.

Une fois le modèle téléchargé, vous pouvez commencer une discussion.

---

## Exemple de premier prompt

Par exemple :

```text
Je suis étudiant en philosophie, j'ai 34 ans et je vis à Montréal.
En quoi l'intelligence artificielle peut-elle m'être utile ?
```


Vous pouvez bien sûr personnaliser la question.
C’est une bonne manière de commencer à appréhender l’intelligence artificielle.

Voici un exemple de réponse possible (les réponses varient à chaque fois, même avec la même question) :

```En tant qu'étudiant en philosophie et cinéma, l'intelligence artificielle (IA) peut t'être un outil incroyablement puissant et pertinent. Voici comment, décomposé par les aspects de tes études...
```

Les modèles sont stockés dans le dossier :

/Users/votrenom/.ollama/models/manifests/registry.ollama.ai/library

Le point (.) devant le dossier .ollama signifie qu’il s’agit d’un dossier caché.


⸻
Pour proposer une amélioration ou une correction, rendez-vous sur le [github de cette page](https://github.com/igorschlum/manuel.fr) puis dans `docs/install.md` et cliquer sur le petit stylet ✏️.
