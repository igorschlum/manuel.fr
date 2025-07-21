---
sidebar_position: 3
---

# Qwen

Qwen est un modèle de langage large (LLM) développé par Alibaba, spécifiquement conçu pour répondre aux besoins des utilisateurs en Asie et dans d’autres régions nécessitant des capacités avancées en langues asiatiques et dans un contexte multiculturel. Ce modèle comprend et traite le mandarin, ainsi que de nombreux dialectes et langues asiatiques comme le cantonais, le japonais et le coréen, tout en étant optimisé pour l'anglais et d'autres langues occidentales. Qwen prend en charge plus de 29 langues (dans ses versions initiales), y compris le chinois, l'anglais, le français, l'espagnol, le portugais, l'allemand, l'italien, le russe, le vietnamien, le thaï et l'arabe.

Destiné aux applications commerciales, Qwen s'intègre dans des secteurs tels que le commerce en ligne, l’éducation et le service client, en offrant des fonctionnalités multilingues pour une gestion de contenu et des interactions clients adaptées à des nuances culturelles et linguistiques spécifiques. Grâce à ses capacités multimodales avancées (présentes dans certaines versions), Qwen peut analyser aussi bien les images que les textes, enrichissant ainsi l'expérience des utilisateurs dans des contextes e-commerce ou de service client.

## Qwen Coder (basé sur Qwen 2.5 et versions antérieures)

Qwen propose également des modèles spécialisés comme **Qwen2.5 Coder Instruct**, disponibles en plusieurs tailles (de 0.5b à 32b). Ces modèles se distinguent dans les tâches de génération et de réparation de code. La version 32 milliards de paramètres annonçait surpasser les performances d'autres modèles open-source sur des benchmarks comme EvalPlus, LiveCodeBench et BigCodeBench, et rivaliser avec des modèles propriétaires comme GPT-4o. En réparation de code, Qwen2.5 Coder 32B visait un score élevé sur le benchmark Aider.

Ces modèles Coder excellaient dans plus de 40 langages de programmation et montraient de bons résultats pour des langages moins courants. L'alignement sur les préférences humaines était également un point fort, évalué via une méthode interne appelée Code Arena.

## L'arrivée de Qwen3 : Nouveaux Modèles et Capacités Étendues

Avec **Qwen3**, Alibaba a lancé une nouvelle génération de sa série de LLM, introduisant une gamme complète de modèles, allant de versions "denses" classiques à des architectures **Mixture-of-Experts (MoE)** plus efficaces.

**Points Clés de Qwen3 :**

*   **Modèles Variés :** La série inclut des modèles de différentes tailles et architectures. Le modèle phare, **Qwen3-235B-A22B**, est un MoE avec 235 milliards de paramètres au total et 22 milliards actifs lors de l'inférence. Il vise à concurrencer les meilleurs modèles du marché (DeepSeek-R1, o1, o3-mini, Grok-3, Gemini-2.5-Pro) sur le code, les maths et les capacités générales.
*   **Efficacité Remarquable :** Des modèles plus petits montrent également des gains d'efficacité impressionnants. Par exemple, le **Qwen3-30B-A3B** (MoE avec 3 milliards de paramètres actifs) surpasserait Qwen-32B (probablement Qwen 1.5 ou 2) malgré moins de paramètres actifs. Un modèle "minuscule" comme **Qwen3-4B** rivaliserait même avec Qwen2.5-72B-Instruct sur certaines tâches.
*   **Mode "Pensée" vs "Non-Pensée" :** Une caractéristique unique de Qwen3 est sa capacité à **basculer de manière transparente entre un "mode pensée"** (optimisé pour le raisonnement logique complexe, les maths, le code) **et un "mode non-pensée"** (plus rapide et efficace pour le dialogue général) au sein du même modèle. Cela permet d'adapter la performance au type de tâche demandée.
*   **Raisonnement Amélioré :** Les capacités de raisonnement (maths, code, logique de sens commun) ont été significativement améliorées par rapport aux générations précédentes (QwQ en mode pensée, Qwen2.5 Instruct en mode non-pensée).
*   **Meilleur Alignement Humain :** Qwen3 excelle davantage dans l'écriture créative, le jeu de rôle, les dialogues multi-tours et le suivi d'instructions, offrant une expérience conversationnelle plus naturelle.
*   **Capacités d'Agent :** L'intégration avec des outils externes ("agent capabilities") a été renforcée, fonctionnant dans les deux modes (pensée/non-pensée) et visant les meilleures performances open-source pour les tâches complexes basées sur des agents.
*   **Support Multilingue Étendu :** Qwen3 prend désormais en charge **plus de 100 langues et dialectes**, avec de fortes capacités en suivi d'instructions multilingues et en traduction.

**Accessibilité et Tests Personnels :**

Ce qui est particulièrement intéressant avec le modèle phare **Qwen3-235B**, c'est qu'il tourne sur un Mac équipé de **192 Go de Ram**, rendant un modèle de cette envergure accessible en local. C'est le modèle le plus important adapté à ce Mac haut de gamme.