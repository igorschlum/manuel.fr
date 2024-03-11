---
sidebar_position: 4
---

# Enrichir un modèle

Pour enrichir un modèle, nous allons utiliser le RAG (voir la page dans En savoir plus)

On va commencer par [installer conda](/docs/outils/conda)

Ensuite, placez-vous dans un dossier sur votre ordinateur dans lequel on va travailler le plus simple est de l'installer où vous voulez, et d'ouvrir le Terminal, de taper *cd* et de faire glisser le nom du dossier vide à côté de cd et d'appuyer sur la touche return. Vous devriez être dans votre dossier de travail.

Il faut ensuite mettre à jour conda avec la commande suivante :

```bash
conda install conda=24.1.2
```
L'installeur vous prévient qu'il va installer un certain nombre de paquets sur votre ordinateur. Vous pouvez confirmer l'installation.

Nous allons installer langchain qui est une librairie utile pour faire de l'intelligence artificielle.

```bash
conda install langchain -c conda-forge
```


Vous pouvez maintenant installer un environnement pour Ollama, remplacez pourollama par le nom qui vous convient.

```bash
conda create -n pourollama python=3.11.5
```
L'installeur vous prévient qu'il va installer un certain nombre de paquets sur votre ordinateur. Vous pouvez confirmer l'installation.

Il me dit à la fin que pour activer l'environnement ollama qu'on vient de créer il faut taper.

```bash
conda activate pourollama
```

Il faut également installer les librairies python pour ollama

Pour cela, il faut taper :

```bash
pip install ollama
```

Il faut ensuite installer les librairies python dont nous allons avoir besoin pour faire du RAG

Pour cela, il faut taper :

```bash
pip install langchain beautifulsoup4 chromadb gradio tiktoken
```

Une fois tous ces outils installés, cette [vidéo](https://www.youtube.com/watch?v=jENqvjpkwmw) en anglais de [Mervin Praison](https://www.youtube.com/@MervinPraison) montre comment faire du RAG avec Ollama. Je vous conseille ses vidéos qui sont toujours bien faites et explicatives.

Il suffit de copier le [code source ici](https://mer.vin/2024/02/ollama-embedding/), de le coller dans un document Visual Code Studio, je l'ai appeler NomicTest.py et de l'executer en tapant cette commande

```Bash
python NomicTest.py
```

On obtient le résultat suivant

```
Before RAG

 I'm sorry for any confusion, but the term "Ollama" is not widely known or recognized outside of specific contexts. It may be a typo or an obscure term with a particular meaning in a specific field, such as linguistics, anthropology, or folklore. If you could please provide more context or information about where you encountered this term, I would be happy to try and help you with any questions you might have.

If you meant to ask about a different term, please let me know and I'll do my best to provide accurate and helpful information.

########
After RAG

Number of requested results 4 is greater than number of elements in index 3, updating n_results = 3
 Ollama is an open-source, local and private large language model that aims to provide a more cost-effective and privacy-focused alternative to cloud-based models like those offered by OpenAI. It allows users to run and train their own models on their own hardware while maintaining control over their data. Ollama's compatibility with the OpenAI Chat Completions API makes it possible to use existing tooling built for OpenAI with local models via Ollama. For more information, please refer to the blog post at <https://ollama.com/blog/openai-compatibility>.
```


J'ai fais quelques essais en modifiant le script et les résultats sont bons et ouvrent des portes à des LLM open source et alimentés par les données de l'entreprise.

Le projet utilise l'Embedding d'Ollama avec le LLM Open Source [Nomic Embed](https://blog.nomic.ai/posts/nomic-embed-text-v1) qui ouvre à mon avis la porte à beaucoup d'innovations.