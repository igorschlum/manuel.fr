---
sidebar_position: 2
---
# GPT4All

L'application GPT4All est une application open source proposée par la société Nomic. L'intérêt de GPTAAll est d'offrir une interface graphique assez facile à utiliser pour faire du RAG.

## Installation

Pour installer l'application, vous pouvez suivre les instructions ci-dessous :

1. Télécharger l'archive du dépôt GitHub [ici](https://github.com/nomic-ai/gpt4all) ou depuis [le site de Nomic](https://www.nomic.ai/gpt4all).

2. Extraire l'archive dans le dossier de votre choix.
3. Lancer l'application en exécutant le fichier `gpt4all` (Linux) ou `gpt4all.exe` (Windows).

## Traduction en français

L'application n'est pas encore en français, mais ça me démange de faire la traduction. [Les langues disponibles sont ici](https://github.com/nomic-ai/gpt4all/tree/main/gpt4all-chat/translations).

## Installation de modèles

Il faut cliquer sur l'icône "Models" pour accéder aux différents modèles disponibles. Vous avez aussi une zone de recherche qui vous permet de charger des modèles depuis Hugging-Face directement dans les dossiers de l'application GPT4All.

Attention, quand vous téléchargez un modèle pour GPT4All, il ne se mélange pas aux modèles déjà téléchargés dans le dossier d'Ollama. Ce qui fait que si vous avez besoin d'un modèle pour les deux applications, il faut le télécharger deux fois.

Si vous voulez télécharger un modèle type LLama3.3, vous devez utiliser un VPN car avec cette loi européenne sur l'Euro IA acte, HuggingFace n'autorise pas le téléchargement de ces modèles depuis des IP françaises.

## Chatbot

Vous pouvez ensuite cliquer sur l'icône Chats pour rédiger vos prompts, en rajouter, en supprimer, etc.

## RAG

Vous pouvez ensuite cliquer sur l'icône "LocalDocs" ajouter des dossiers locaux de votre ordinateurs qui vont être pris en compte dans vos prompts. L'application GPT4All assurant automatiquement la transcription de vos documents dans un RAG local.

Lors d'un chat, vous n'avez plus qu'à cocher le ou les dossiers locaux que vous voulez pour qu'ils soient pris en compte dans vos prompts.

En allant dans les réglages, vous pouvez étendre la liste des extensions de fichiers qui peuvent être pris en compte pour faire du RAG. Par défaut les fichiers word (.docx) les fichiers textes (.txt), les fichiers MarkDown (.md) et je vous conseille de rajouter les fichiers csv (.csv) et json (.json).

L'avantage est que la reconstruction du RAG se fait automatiquement. Dès qu'un fichier est modifié, le RAG se reconstruit.

## Autres réglages

Dans le bouton réglages, il y a pas mal de paramètres avancés que vous pouvez modifier pour tester les usages que vous voulez faire de l'application.

## conclusions

Je trouve que GPT4All est une application très pratique pour débuter ou pour évaluer la possibilité de faire un Chatbot à partir de la document que vous mettez normalement à disposition de vos utilisateurs. Vous pouvez tester ce que pourrait être un Chatbot client en quelques minutes.




