---
sidebar_position: 8
---
# Entrainement

## Nomic-embed-text

Nomic-embed-text est un modèle d'encodage de texte qui a été conçu pour comprendre et traiter de grands volumes de texte. Il est particulièrement performant pour encoder des informations sémantiques sur des phrases ou des documents dans des vecteurs de faible dimension, ce qui est utile pour des applications telles que la recherche sémantique ou la génération de texte assistée par la récupération d'informations.

https://blog.nomic.ai/posts/nomic-embed-text-v1.

Les points clés de nomic-embed-text :

C'est un modèle open source dont le code d'entraînement et les poids du modèle sont disponibles sous licence Apache-2.0. Cela signifie que n'importe qui peut examiner, utiliser et modifier le modèle. Nous pouvons nous attendre à ce qu'il serve de point de départ au développement de nombreux LLM spécialisés fait par des PME ou des groupes de travail.

•  Longueur de Contexte Étendue : Il supporte une longueur de contexte étendue de 8192 tokens qui peuvent être traités en une seule fois, ce qui lui permet de traiter de grands blocs de texte, surpassant ainsi les performances de certains modèles concurrents pour des tâches avec de courts et de longs contextes.

•  Apprentissage Contrastif : Le modèle est entraîné en utilisant l'apprentissage contrastif, une technique qui apprend à différencier des paires de textes liées, comme des questions-réponses ou des résumés d'articles, ce qui améliore sa capacité à comprendre le sens des textes

•  Flexibilité : Nomic-embed-text offre une flexibilité dans la taille des embeddings, permettant aux développeurs de choisir un compromis entre la taille de l'embedding et une légère réduction de la performance

Ces caractéristiques font de nomic-embed-text un outil puissant pour les développeurs et les chercheurs qui souhaitent intégrer des capacités de compréhension du langage naturel dans leurs applications.

Il est [disponible pour Ollama](https://ollama.com/library/nomic-embed-text), mais ne peux pas être utilisé tel quel pour lui poser des questions.

:::warning
ollama run Nomic-embed-text

% embedding models do not support chat
:::
Il est très utile pour enrichir un modèle avec du RAG.

Si vous voulez vous plonger un peu plus dans le détail de ce model, il y a ce long article en anglais posté par la société qui l'a conçu.

https://blog.nomic.ai/posts/nomic-embed-text-v1

Sur cette page, vous trouverez ce qu'ils appellent l'atlas des données. 

Comme tous est opensource, on peut facilement rêver que cela ouvre la voie à beaucoup d'application, car on va pouvoir à la fois retirer du contenu inutile des modèles et rajouter du contenu pertinant pour chaque usage.
Ça devrait ouvrir la porte à de nombreux usages qui vont pouvoir être installés sur des téléphones portables et des ordinateurs personnels.

![Atlas des données](/img/atlas.webp "Atlas de nomic-embed-text")


