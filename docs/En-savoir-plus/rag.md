---
sidebar_position: 5
---

# Rag


- *La **Génération Augmentée de Récupération (RAG)** est une technique utilisée en Intelligence Artificielle pour aider les machines à comprendre et à répondre aux questions en langage naturel, c’est-à-dire le langage que nous utilisons tous les jours.*

- *Imaginez que vous avez une grande bibliothèque remplie de livres. Maintenant, supposez que quelqu’un vous pose une question et que la réponse se trouve quelque part dans l’un de ces livres. Le problème est que vous ne savez pas exactement dans quel livre se trouve la réponse.*

- *C’est là que le RAG entre en jeu. La première étape du RAG est comme un super bibliothécaire qui peut rapidement parcourir tous les livres et trouver les plus pertinents pour la question posée. C’est ce qu’on appelle l’**étape de récupération**.*

- *Une fois que le super bibliothécaire a trouvé les bons livres, la deuxième étape du RAG intervient. Cette étape est comme un écrivain talentueux qui peut lire les informations de ces livres et rédiger une réponse claire et concise à la question. C’est ce qu’on appelle l’**étape de génération**.*

- *En combinant ces deux étapes, le RAG peut répondre à des questions complexes en utilisant une grande quantité d’informations. C’est comme avoir un super bibliothécaire et un écrivain talentueux à votre disposition pour répondre à toutes vos questions.*

Vous trouverez [ici](https://www.cohesity.com/fr/glossary/retrieval-augmented-generation-rag/), une explication plus détaillée.

## Comment faire ?

Tout d'abord, vous devez avoir **installer python3 et pip3** sur votre machine. Si ce n'est pas fait, nous avons fait [une page](https://www.ollama.fr/docs/outils/python) consacrer à ça.

1. **Installation des packages nécessaires** : 

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