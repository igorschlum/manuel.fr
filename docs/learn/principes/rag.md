---
sidebar_position: 5
---

# Rag


- *C’est une méthode utilisée pour améliorer les résultats des grands modèles de langage, en les enrichissants avec par exemple les données de votre entreprise ou de vos travaux de recherche personnels*

- *Pour cela, il faut nourrir le modèle choisi en lui ingurgitant les données qui doivent être prises en compte dans ses réponses.*

Voici une méthode pas à pas pour le faire avec Ollama, sachant que cette méthode est encore réservée aux développeurs.

- Ces modèles peuvent parfois devenir incomplets ou générer des réponses incorrectes car ils sont limités aux données d’entraînement utilisées pour créer le modèle.

- Le modèle RAG obtient les faits les plus à jour et fiables.

- Vous pouvez voir d’où le modèle a obtenu ses informations, ce qui donne plus de crédibilité à ce qu’il génère.

Vous trouverez [ici](https://www.youtube.com/watch?v=T-D1OfcDW1M), une explication plus détaillée.

## Comment faire dans la méthode avec Chromadb?

Tout d'abord, vous devez avoir **installer python3 et pip3** sur votre machine. Si ce n'est pas fait, nous avons fait [une page](/install/python) consacrer à ça.

1. **Installation des packages nécessaires** pour faire du RAG avec chormadb

```bash
pip3 install ollama
pip3 install langchain beautifulsoup4 chromadb gradio
```

Ces commandes installent les packages Python nécessaires pour exécuter le code. `ollama` est un package pour interagir avec le modèle de langage Mistral, `langchain` est un package pour le traitement du texte, `beautifulsoup4` est utilisé pour le web scraping, `chromadb` est une base de données pour stocker les vecteurs, et `gradio` est utilisé pour créer une interface utilisateur.

2. **Ollama RAG** :

```python
import ollama

stream = ollama.chat(
    model='mistral',
    messages=[{'role': 'user', 'content': 'Why is the sky blue?'}],
    stream=True,
)

for chunk in stream:
  print(chunk['message']['content'], end='', flush=True)
```
Ici, on utilise le modèle de langage Mistral pour répondre à la question "Pourquoi le ciel est-il bleu ?". Les réponses sont reçues en continu (stream) et imprimées à l'écran.

3. **RAG** :

```python
import ollama
import bs4
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
...
```
Cette partie du code crée un système de récupération d'information basé sur le modèle de langage Mistral. Il charge des documents à partir d'une URL, les divise en morceaux, crée des vecteurs à partir de ces morceaux, puis utilise ces vecteurs pour récupérer des documents pertinents en réponse à une question. Ensuite, il utilise à nouveau le modèle de langage Mistral pour générer une réponse basée sur les documents récupérés.

4. **UI** :

```python
import gradio as gr
import bs4
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import WebBaseLoader
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import OllamaEmbeddings
import ollama
...
```
Cette partie du code crée une interface utilisateur avec Gradio. L'utilisateur peut entrer une URL et une question, et le système RAG récupère des documents pertinents à partir de l'URL, génère une réponse à la question, et affiche la réponse dans l'interface utilisateur.

## Comment faire avec la méthode avec LanceDB

Cette [vidéo](https://www.youtube.com/watch?v=HcqGiCu2Bjs) en anglais explique comment faire du RAG locallement sur votre Mac avec LanceDB et Ollama.

1. **Installation des packages nécessaires** pour faire du RAG avec chormadb

Il faut avoir installé Python, pip3 et iphyton sur votre Mac comme vue [ici](/).

```bash

pip3 install ollama
pip3 install lancedb
```
