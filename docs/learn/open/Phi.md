---
sidebar_position: 6
---

#Phi-4-reasoning

Microsoft, déjà connu pour sa famille de "petits modèles de langage" (SLM) Phi, a récemment franchi une nouvelle étape avec le lancement de **Phi-4-reasoning**. S'éloignant de la course aux paramètres purs, ces modèles se concentrent sur une capacité spécifique et de plus en plus cruciale : le **raisonnement complexe**. Disponibles via Ollama, ils promettent des performances étonnantes pour leur taille.

**Qu'est-ce qu'un modèle de "Raisonnement" ?**

Contrairement aux LLM classiques qui génèrent souvent une réponse directe, les modèles dits de "raisonnement" sont entraînés spécifiquement pour **décomposer des problèmes complexes en étapes logiques**. Ils utilisent ce que Microsoft appelle une "mise à l'échelle au moment de l'inférence" pour effectuer des décompositions en plusieurs étapes et une sorte de "réflexion interne". Concrètement, cela signifie que le modèle ne se contente pas de donner la réponse, mais **explicite le cheminement logique** qui y mène.

Cette approche les rend particulièrement performants dans des domaines comme les **mathématiques** ou la résolution de **problèmes scientifiques** nécessitant une suite d'opérations logiques.

**Les modèles Phi-4-reasoning disponibles**

Microsoft propose plusieurs variantes, dont deux sont facilement accessibles via Ollama :

1.  **Phi-4-reasoning (`ollama run phi4-reasoning`)**:
    *   **Taille :** 14 milliards de paramètres.
    *   **Entraînement :** Basé sur Phi-4, il a été affiné (fine-tuning supervisé ou SFT) sur des démonstrations de raisonnement soigneusement sélectionnées (notamment issues de o3-mini d'OpenAI). L'accent est mis sur la qualité des données d'entraînement pour maximiser les capacités de raisonnement malgré la taille réduite.
    *   **Caractéristique :** Génère des chaînes de raisonnement détaillées.

2.  **Phi-4-reasoning-plus (`ollama run phi4-reasoning:plus`)**:
    *   **Taille :** 14 milliards de paramètres.
    *   **Entraînement :** Reprend Phi-4-reasoning et ajoute une couche d'apprentissage par renforcement (RL). Cela lui permet d'utiliser davantage de "temps de calcul" (environ 1.5x plus de tokens générés pendant l'inférence) pour affiner sa réponse et atteindre une précision supérieure.
    *   **Caractéristique :** Vise une meilleure justesse finale, potentiellement au prix d'une réponse un peu plus longue ou d'un temps de génération légèrement accru.

Il existe également une version **Phi-4-mini-reasoning** (3.8 milliards de paramètres), optimisée pour les environnements aux ressources limitées (embarqué, mobile, éducation) et fortement axée sur les mathématiques.

**Performances et capacités : Petit mais costaud ?**

L'argument principal de Microsoft est que ces modèles, bien que nettement plus petits que de nombreux concurrents, **rivalisent avec des modèles beaucoup plus grands** sur les tâches de raisonnement spécifiques. Les benchmarks mentionnés (comme AIME 2025 pour les maths, ou des tests de questions scientifiques de niveau doctorat) suggèrent que Phi-4-reasoning et sa version "plus" surpassent des modèles comme o1-mini (OpenAI) ou DeepSeek-R1-Distill-Llama-70B, et se montrent compétitifs face à des géants comme DeepSeek-R1 (671 milliards de paramètres) sur certains tests ciblés.

Le secret résiderait dans la **curation méticuleuse des données** d'entraînement et l'utilisation de **données synthétiques de haute qualité**, prouvant qu'une approche ciblée peut compenser une taille de modèle plus modeste.

**Retour d'expérience personnel et cas d'usage potentiels**

Lors de mes premiers tests avec `phi4-reasoning`, j'ai été **positivement surpris par la qualité de la réponse** sur une tâche de raisonnement. Ce qui frappe le plus, c'est sa tendance à **développer très explicitement chaque étape de sa pensée**. Il ne se précipite pas vers la conclusion, mais prend le temps de poser les prémisses, d'expliquer les étapes intermédiaires et de justifier le résultat.

Cette transparence et cette décomposition détaillée, bien que pouvant rallonger la réponse, sont fascinantes. Au-delà de la simple résolution de problèmes, cette caractéristique pourrait faire de Phi-4-reasoning un **excellent outil pour analyser ou critiquer les raisonnements produits par d'autres IA**. On pourrait imaginer lui soumettre la sortie d'un autre modèle et lui demander d'évaluer la logique, d'identifier les failles ou de proposer un cheminement alternatif. C'est un challenger intéressant dans ce rôle potentiel de "vérificateur logique".

Naturellement, ses capacités le destinent aussi à des tâches nécessitant une **résolution de problèmes étape par étape** (maths, logique, planification simple) ou à des applications **éducatives** où l'explication du raisonnement est aussi importante que la réponse elle-même (surtout pour la version mini).

**Conclusion**

Phi-4-reasoning et ses variantes représentent une évolution notable dans le monde des modèles de langage. En se concentrant sur la **qualité du raisonnement** plutôt que sur la taille brute, et en adoptant une approche très **explicite dans sa génération**, Microsoft propose un outil différent, performant dans sa niche et accessible via Ollama. Sa capacité à détailler sa pensée ouvre des perspectives intéressantes, notamment pour l'analyse et la validation des processus logiques, y compris ceux d'autres IA. C'est un modèle à surveiller de près pour quiconque s'intéresse aux capacités cognitives émergentes des IA.
