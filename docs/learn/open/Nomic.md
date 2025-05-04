---
sidebar_position: 6
---

# Nomic

Sur Ollama, le modèle Nomic le plus utilisé est [nomic-embed-text-v1.5](https://ollama.com/library/nomic-embed-text) aussi visible sur [HuggingFace](https://huggingface.co/nomic-ai/nomic-embed-text-v1.5) qui permet de faire du RAG (sujet que l'on aborde sur ce site)

Mais quand on va sur le [site officiel de Nomic](https://www.nomic.ai). On découvre plusieurs choses intéressantes. On voit que les données qui servent à entrainer les modèles de Nomic sont open source, c'est à dire que c'est un modèle complètement ouvert qui permettrait en théorie d'entrainer le modèle sur sa propre infrastructure technique. Or les autres LLM, même s'ils sont gratuits et libre d'utilisation ne partagent pas les données sur lesquelles le modèle est entrainé.

On peut ainsi naviguer dans les datas avec [cet outil graphique](https://atlas.nomic.ai/map/wikipedia)

La société Nomic a développer le [logiciel gpt4all](https://www.nomic.ai/gpt4all) pour faire tourner les LLM qui vient concurrencer Ollama et qui est supérieur sur un point, c'est qu'on peut lui donner le chemin d'accès d'un dossier et il peut indexer toutes les données de ce dossier. Je lui ai demandé d'indexer le site manuel.fr. Pour cela, gpt4all utilise la technique du [RAG](/learn/principes/rag), mais de façon totalement automatisée et très facilement.

[Cette page](/install/GPT4All) explique comment installer et configurer GPT4All

J'ai été impressionné par le résultat. Voici des questions que j'ai posées à Llama3.2 une fois que j'ai fait un embedded tous les fichiers du site manuel.fr

<details open>
  <summary>Que fait le site manuel.fr
   ?</summary>

Le site manuel.fr est un outil qui explique comment utiliser l'intelligence artificielle (IA) en local avec Ollama, une plateforme d'entraînement de modèles de langage. Le site propose des tutoriels et des ressources pour aider les utilisateurs à comprendre et à utiliser l'IA dans leur environnement personnel.

Plus précisément, le site manuel.fr :

Explique comment installer et configurer Ollama

Propose des exemples d'applications de l'IA en local (par exemple, la reconnaissance vocale ou la traduction automatique)

Fournit des ressources pour aider les utilisateurs à créer leurs propres modèles de langage avec Ollama

Le site manuel.fr est écrit en français et vise principalement une audience française. Il s'agit d'un outil pédagogique qui cherche à rendre l'IA plus accessible aux personnes qui souhaitent explorer ses possibilités dans un environnement local.

3 sources :

- Docusaurus.md
- Nomic.md
- Bert.md
</details>

J'ai essayé plusieurs questions et il répond bien en retrouvant ce qu'il y a sur le site de Manuel.fr
Alors que le site Manuel.fr n'est qu'en français me lance à lui poser des questions en anglais.


<details open> 
  <summary>What is the purpose of Manuel.fr
  ?</summary>

Manuel.fr is a website that aims to help users understand and utilize artificial intelligence (AI) on their Mac devices. The purpose of Manuel.fr can be summarized as follows:

Introduce AI concepts: Manuel.fr provides an introduction to the basics of AI, including its applications, benefits, and limitations.

Guide for beginners: The website is designed to help users who are new to AI or have limited experience with it. It offers a step-by-step guide on how to get started with AI on Mac.

Tutorials and guides: Manuel.fr provides tutorials and guides on various AI-related topics, such as:

Using Ollama (a pre-trained language model) for natural language processing tasks

Creating chatbots and conversational interfaces

Understanding sentiment analysis and text classification

Hands-on exercises: The website offers hands-on exercises to help users practice their skills in AI-related areas, such as:

Indexing documents with Ollama

Using Llama (a language model) for question-answering tasks

Community support: Manuel.fr aims to create a community of AI enthusiasts and professionals who can share knowledge, resources, and experiences.


Resources and tools: The website provides access to various AI-related resources and tools, such as:

Pre-trained models (e.g., Ollama)

Tutorials and guides

Sample projects and code snippets

By providing a comprehensive introduction to AI on Mac, Manuel.fr aims to empower users with the knowledge and skills needed to develop their own AI-powered applications.
</details>

Bien sûr, si je n'indexe pas les pages du site Manuel.fr et que je ne les mets pas à disposition de Llama3.2, il ne sait pas du tout ce que c'est que le site Manuel.fr

<details open> 
 <summary>What is the purpose of Manuel.fr
 ?</summary>

I couldn't find any information about a website or platform called "Manuel.fr". It's possible that 
it's a local or regional website, or maybe it's not well-known.

However, I found that there is a French encyclopedia called "Manuel" (not "Manuel.fr") which was 
published in 1895. The Manuel is an encyclopedia that covers various topics such as history, 
science, literature, and more. It's considered a classic reference work for its time.

If you're looking for information about a specific topic or subject, I can try to help you find 
relevant resources on the internet. Please let me know what you're interested in learning more 
about!
</details>