---
sidebar_position: 1
title: "Biblliothèques"
---

Dans cette partie du site, nous allons voir toutes les familles de LLM que nous allons pouvons installer par type d'usage.

Plutôt que de ranger chaque modèle dans une case, nous allons explorer ensemble les différentes *capacités* que ces IA peuvent déployer.

## 1. La Conversation Intelligente : Le Cœur du Dialogue

C'est la capacité la plus connue : l'art de comprendre et de générer du langage naturel pour une interaction fluide.

*   **Ce que ça permet :** Dialoguer de manière pertinente, répondre à des questions complexes, rédiger toutes sortes de textes (emails, articles, scripts, code), résumer des documents longs, traduire des langues, ou encore vous aider à trouver l'inspiration.
*   **Le secret :** Un entraînement sur des volumes de données textuelles astronomiques pour saisir les nuances du langage humain.
*   **Indispensable pour :** La quasi-totalité des usages impliquant du texte. C'est la fondation sur laquelle de nombreuses autres capacités sont construites.

## 2. L'Embedding et le RAG : Personnaliser la Connaissance du LLM

Cette capacité permet à certains LLM de transformer le texte en représentations numériques (embeddings) pour mieux le comprendre et l'organiser.

*   **Ce que ça permet :** Créer des "embeddings" qui capturent le sens sémantique du texte. On peut ainsi comparer des documents, effectuer des recherches basées sur le sens, et surtout, implémenter le **RAG (Retrieval Augmented Generation)**.
*   **Le RAG, c'est quoi ?** C'est une technique révolutionnaire qui permet à un LLM d'accéder à *vos propres informations* (PDFs, notes, bases de données). Le LLM utilise alors ces documents spécifiques pour formuler des réponses ultra-pertinentes et contextualisées, au lieu de se baser uniquement sur ses connaissances générales.
*   **Indispensable pour :** Développer des chatbots spécialisés avec vos données, des moteurs de recherche sémantique internes, ou simplement pour "informer" un LLM sur des sujets très spécifiques sans avoir à le ré-entraîner entièrement.

## 3. La Vision : Quand les LLM Voient et Comprennent le Monde Visuel

Les LLM ne sont plus aveugles ! La multimodalité est au cœur des modèles récents.

*   **Ce que ça permet :** Analyser et interpréter des images. Vous pouvez soumettre une photo à un modèle comme Llama 4 Maverick et lui demander de la décrire, de répondre à des questions précises sur son contenu, ou d'identifier des objets. [1] Meta indique que Llama 4 a été pré-entraîné avec de grandes quantités de données d'images et de vidéos. [1]
*   **L'évolution :** Cette capacité s'étend. L'article sur Llama 4 mentionne l'intégration native du texte et des "vision tokens" dès le pré-entraînement, et une amélioration de l'encodeur de vision. [1] Bientôt, l'analyse d'autres modalités comme le son en continu sera courante.
*   **Indispensable pour :** L'analyse de contenu visuel, la génération de descriptions automatiques (alt-text), l'assistance aux personnes malvoyantes, la création d'interactions plus riches (par exemple, discuter d'un graphique ou d'un schéma). Llama 4 Scout excelle même dans l'alignement des prompts avec les concepts visuels et peut ancrer ses réponses à des régions spécifiques de l'image. [1]

## 4. L'Utilisation d'Outils (Agents / Functions) : Donner aux LLM les Moyens d'Agir

Les LLM peuvent désormais interagir avec des systèmes externes pour accomplir des tâches.

*   **Ce que ça permet :** Connecter le LLM à des API pour récupérer des informations en temps réel (météo, actualités, prix), interroger des bases de données, exécuter du code, ou même contrôler des applications et des objets connectés. Le LLM apprend à choisir l'outil pertinent et à formuler la bonne requête.
*   **L'impact :** Cela décuple la puissance du LLM, le rendant capable d'aller chercher des données fraîches et d'effectuer des actions concrètes, le transformant en véritable "agent" intelligent.
*   **Indispensable pour :** Créer des assistants virtuels qui peuvent réellement *faire* des choses, automatiser des processus complexes, obtenir des réponses basées sur les informations les plus récentes.

## 5. Le Raisonnement Avancé (Thinking / Chain-of-Thought) : Résoudre Étape par Étape

Face à des problèmes complexes, les meilleurs LLM ne se contentent pas d'une réponse brute ; ils "réfléchissent".

*   **Ce que ça permet :** Décomposer un problème en sous-étapes logiques, expliciter sa "chaîne de pensée" (Chain-of-Thought ou CoT), voire s'auto-évaluer et s'auto-corriger. Les modèles comme Llama 4 Maverick montrent des résultats comparables à DeepSeek v3 sur le raisonnement et le code, malgré une taille de paramètres actifs plus petite. [1]
*   **L'avantage :** Amélioration notable des performances en logique, mathématiques, planification, et génération de code sophistiqué. Cela rend aussi le processus décisionnel du LLM plus transparent et donc plus fiable.
*   **Indispensable pour :** La résolution de problèmes qui demandent une approche méthodique, la génération de code de qualité, la planification de tâches, et toute situation nécessitant un raisonnement en plusieurs étapes. Llama 4 Behemoth, le "professeur" des autres modèles Llama 4, surpasse même GPT-4.5 sur certains benchmarks STEM. [1]

---

Ces "super-pouvoirs" ne sont souvent pas isolés. Les modèles de pointe comme ceux de la famille Llama 4 [1] les combinent nativement pour offrir des expériences utilisateur toujours plus riches, personnalisées et efficaces. L'objectif ici est de vous donner les clés pour comprendre ce potentiel et imaginer tout ce que vous pourrez bientôt accomplir avec Ollama.