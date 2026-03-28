---
sidebar_position: 2
---

# Gemma 3

Gemma est le modèle de langage large (LLM) de Google, conçu pour offrir une intelligence conversationnelle avancée accessible gratuitement. Cette version, sortie début mars 2025, est destinée aux chercheurs, aux développeurs et aux entreprises qui cherchent à intégrer une IA performante sans coûts d'accès prohibitifs, **à l'instar de Llama**.

Gemma a été lancé avec l’objectif de rendre l’intelligence artificielle plus ouverte et collaborative. Bien que Google possède déjà d’autres IA, Gemma se distingue par son orientation open‑source, permettant aux utilisateurs de personnaliser et de déployer le modèle selon leurs besoins spécifiques, tout en bénéficiant d’améliorations constantes de la communauté.

Google a mis en avant la capacité de Gemma à traiter des tâches variées avec une flexibilité et une précision remarquables. Les versions de Gemma sont entraînées sur des données récentes et diversifiées, optimisées pour la compréhension du contexte, la génération de texte créatif et la réponse aux questions complexes. Pour assurer une grande accessibilité, Google propose Gemma en plusieurs tailles, adaptées aux différentes capacités de traitement, de l’ordinateur personnel aux infrastructures de serveurs...

## Modèles QAT

Tous les modèles Gemma 3 existent aussi en version **QAT** (*Quantization Aware Trained*).  
- Ces versions sont **légèrement plus lourdes** que la quantisation standard (`q4_K_M`).  
- Elles offrent des résultats **plus proches du FP16** tout en gardant une empreinte mémoire nettement réduite par rapport aux modèles non quantifiés.


## Tailles, capacités et fenêtre de contexte

- **gemma3:270m** — **texte uniquement**, fenêtre de contexte **32K tokens**. Très léger, adapté aux machines modestes et aux usages embarqués (ex. : Raspberry Pi). Fonctionne très bien en **CPU** (sans GPU) : l’inférence est plus lente en CPU, mais la petite taille compense en partie.
- **gemma3:1b** — **texte uniquement**, fenêtre de contexte **32K tokens**. Convient aux ordinateurs sans GPU.
- **gemma3:4b** — **multimodal (texte + image)**, fenêtre de contexte **128K tokens**. Bon compromis qualité/poids. Peut tourner sur un **Mac avec 8 Go de RAM**.
- **gemma3:12b** — **multimodal (texte + image)**, fenêtre de contexte **128K tokens**. En version **QAT**, il tourne juste sur un **Mac avec 16 Go de RAM**.
- **gemma3:27b** — **multimodal (texte + image)**, fenêtre de contexte **128K tokens**. En version **QAT**, il tourne sur un **Mac avec 32 Go de RAM**.


## Utilisation simple avec Ollama

Avec l’interface graphique d’Ollama, vous pouvez lancer et discuter avec ces modèles **sans avoir besoin d’ouvrir un navigateur Internet**. Cela laissera plus de mémoire pour les modèles quantifiés surtout si vous voulez utiliser une taille de contexte plus importante.

## Notes pratiques

- Les petits modèles (270M, 1B) sont parfaitement adaptés pour tourner sur des ordinateurs **sans GPU**.  
  Ils sont un peu plus lents en CPU, mais comme ils sont petits et rapides, cela reste fluide.  
- Le modèle **270M** est particulièrement intéressant pour des usages embarqués (ex. : Raspberry Pi).  
- Les tailles indiquées sont des **tailles de téléchargement** (approx.) ; la RAM requise est supérieure pendant l’inférence.  


## Références utiles

- Fiche Ollama : (https://ollama.com/library/gemma3)  
- Tags disponibles : (https://ollama.com/library/gemma3/tags)  
- Détails techniques Google AI Docs : (https://ai.google.dev/gemma/docs/core)  
- Intégration Ollama (commande `run`, exemples curl) : (https://ai.google.dev/gemma/docs/integrations/ollama)

---

## Et du côté de Gemini ?

En plus de Gemma, Google **propose** le modèle **Gemini**, gratuit dans [l’interface AI Studio](https://aistudio.google.com/) si vous avez un compte Google Workspace. Google [annonce](https://x.com/JeffDean/status/1865081640546156993) en décembre 2024 que le modèle **Gemini‑exp‑1206** obtient le meilleur score dans toutes les catégories. Ce modèle **a** un « context size » de plus de **2 millions de tokens** et peut analyser **jusqu’à une heure de vidéo** [depuis cette page de démarrage](https://aistudio...
 
Dans **Gemini** (AI Studio), vous disposez de prompts types pour les requêtes vidéo les plus courantes :
- **A/V captions** : « Audio/Visual captions » → sous‑titres/légendes générés pour décrire chaque scène de la vidéo chargée.  
- **Paragraph** : court descriptif du déroulé de la vidéo.  
- **Key moments** : récapitulatif des moments clés de la vidéo.  
- **Table** : récapitulatif sous forme de tableau.  
- **Chart** : graphique des moments les plus **intéressants** de la vidéo.
