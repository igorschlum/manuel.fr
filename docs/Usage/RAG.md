---
sidebar_position: 4
---

# Enrichir un modèle

Pour enrichir un modèle, nous allons utiliser le RAG (voir la page dans En savoir plus)

On va commencer par installer conda (allez voir dans les outils, c'est expliqué)

Ensuite, placez-vous dans un dossier sur votre ordinateur dans lequel on va travailler le plus simple est de l'installer où vous voulez, et d'ouvrir le Terminal, de taper *cd* et de faire glisser le nom du dossier vide à côté de cd et d'appuyer sur la touche return. Vous devriez être dans votre dossier de travail.

Vous pouvez maintenant tapper

```bash
conda create -n ollama python=3.11
```

L'installeur vous prévient qu'il va installer un certain nombre de paquets sur votre ordinateur. Vous pouvez confirmer l'installation.

Il me dit à la fin que pour activer l'environnement ollama qu'on vient de créer il faut taper.

```bash
conda activate ollama
```

Il faut également installer les librairies python pour ollama

Pour cela, il faut taper :

```bash
pip install ollama
```

Il faut ensuite installer les librairies python dont nous allons avoir besoin pour faire du RAG

Pour cela, il faut taper :

```bash
pip install langchain beautifulsoup4 chromadb gradio
```
