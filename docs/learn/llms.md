---
sidebar_position: 3
---

# Les LLM : Comprendre pour Mieux Choisir sur Mac

LLM est l'acronyme de Large Language Model (Grand Modèle de Langage). Mais au-delà du jargon, qu'est-ce que cela implique concrètement, surtout quand on veut les utiliser sur nos Macs avec Ollama ?

## Qu'est-ce qu'un LLM ?

Imaginez un documentaliste ultra-érudit doublé d'un écrivain public, possédant une encyclopédie gigantesque et multilingue. Vous pouvez lui poser des questions sur une infinité de sujets, et il vous répondra en se basant sur les connaissances contenues dans son "encyclopédie". Il peut dialoguer, rédiger, résumer, traduire, voire aider à coder.

Techniquement, un LLM est un réseau de neurones entraîné sur d'immenses quantités de données textuelles (et parfois d'autres types, comme des images). Il apprend à "prédire" la suite la plus probable d'un texte, ce qui lui permet de générer des réponses cohérentes et contextuelles. Cette capacité de prédiction, bien qu'artificielle, donne souvent une impression d'intelligence et de compréhension.

## Pourquoi une telle diversité de LLM ?

Il existe une multitude de LLM, chacun avec ses forces, ses faiblesses et ses spécialités. Les raisons sont multiples :

*   **Jeux de données d'entraînement variés :** Chaque LLM est entraîné sur un corpus de textes spécifique, ce qui influence sa base de connaissances et son "style".
*   **Architectures et méthodes d'entraînement différentes :** Les "recettes" pour construire et entraîner ces modèles varient, menant à des performances distinctes.
*   **Objectifs spécifiques :** Certains LLM sont optimisés pour la conversation générale, d'autres pour l'assistance au code (comme CodeLlama), la description d'images (LLaVA), la médecine, le droit, ou la résolution de problèmes mathématiques.

Sur [Ollama.com](https://ollama.com), vous trouverez une centaine de modèles facilement installables. Le site [Hugging Face](https://huggingface.co) en répertorie des centaines de milliers, dont beaucoup peuvent être importés dans Ollama.

## Les Variations d'un Même LLM : Ce Qui Compte Vraiment

Au-delà du nom du modèle, plusieurs facteurs cruciaux déterminent ses capacités et ses exigences, surtout pour un usage local sur Mac.

### 1. Les Versions (Ex: Llama 3 -> Llama 4, Gemma 2 -> Gemma 3)

Les éditeurs publient régulièrement de nouvelles versions majeures de leurs modèles (par exemple, Llama de Meta est passé par les versions 2, 3, et plus récemment Llama 4 ; Gemma de Google a évolué de Gemma, Gemma 2, à **Gemma 3**). Chaque nouvelle version représente souvent des mois, voire plus d'un an, de réentraînement intensif, apportant des améliorations significatives en termes de performance, de connaissances ou de nouvelles capacités (comme la multimodalité native pour Llama 4).

### 2. La Taille du Modèle (Nombre de Paramètres)

C'est un critère fondamental. Exprimé en milliards de paramètres (B), cela indique la "complexité" ou la "richesse" du modèle.

*   **Spectre large :** On trouve des modèles très légers (ex: TinyLlama avec ~1 milliard de paramètres, pesant moins de 1 Go), des modèles de taille intermédiaire (comme **Gemma 3** qui se décline en versions **4B, 12B et 27B**), jusqu'à des géants comme certaines variantes de Llama 4 (ex: Maverick avec 245B de paramètres) ou DeepSeek-V2 (236B de paramètres activés).
*   **Impact direct sur la qualité :** Plus de paramètres signifient généralement une meilleure compréhension des nuances, des réponses plus élaborées et une capacité accrue à gérer des tâches complexes. Un Gemma 3 27B sera plus performant qu'un Gemma 3 4B.
*   **L'inconvénient : la gourmandise en ressources.** Un plus grand nombre de paramètres signifie un fichier de modèle plus volumineux et, surtout, une consommation de mémoire vive (RAM) plus importante.

**Sur Mac, la RAM est REINE :** Pour qu'un LLM fonctionne avec Ollama sur votre Mac, **l'intégralité du modèle (après quantification) doit pouvoir être chargée dans la mémoire vive unifiée de votre machine.**

*   **Des Macs conçus pour l'IA :** Apple positionne clairement ses machines récentes, notamment le **Mac Studio, comme étant optimisées pour les charges de travail d'IA.** Un Mac Studio peut être configuré avec jusqu'à **512 Go de mémoire vive**, ce qui change radicalement la donne pour l'exécution locale de grands modèles.
*   **Exemple concret avec un Mac Studio haut de gamme :** Avec 512 Go de RAM, il devient tout à fait envisageable de faire tourner des modèles très puissants. Une variante de **Llama 4 comme Maverick (245B)**, dont les poids quantifiés en `q8_0` occuperaient environ **245 Go**, nécessiterait une mémoire vive totale estimée autour de 350-450 Go (pour inclure le contexte, les activations, le système d'exploitation et d'autres applications). C'est exigeant, mais potentiellement à portée d'un Mac Studio configuré au maximum.
*   **Les limites existent toujours :** Des modèles encore plus grands, comme certains modèles de recherche expérimentaux ou des architectures MoE complètes comme DeepSeek-V2 (dont la version complète nécessiterait plus de 600 Go de RAM rien que pour les poids non quantifiés), peuvent dépasser même les configurations Mac les plus robustes. Il est donc crucial de toujours choisir une taille de modèle en adéquation avec votre matériel.

### 3. La Quantification : Moins de RAM, Moins de Précision ? Les Choix d'Ollama

La [quantification](/learn/principes/quantisation) réduit la taille d'un modèle en diminuant la précision numérique de ses paramètres. C'est une étape clé pour faire tourner de gros modèles sur des machines avec une RAM limitée.

*   **Les options rationalisées par Ollama :** Récemment, l'équipe Ollama a simplifié les choix de quantification disponibles pour la plupart des modèles. Typiquement, vous trouverez :
    *   **`q4_K_M`**: Une quantification sur 4 bits (souvent la variante "K_M" qui offre un bon équilibre entre taille et préservation de la qualité pour du 4 bits). C'est généralement l'option la plus légère, consommant le moins de RAM. Elle est souvent proposée par défaut pour assurer une accessibilité maximale.
    *   **`q8_0`**: Une quantification sur 8 bits. Elle offre une meilleure fidélité et des performances plus proches du modèle original que le 4 bits, au prix d'une consommation de RAM environ doublée par rapport à une version 4 bits du même modèle.
    *   **`f16` ou `fp16`**: Représente le modèle en demi-précision (16-bit floating point). C'est la version la plus "précise" et la plus lourde parmi les options quantifiées courantes, demandant le plus de RAM. Elle est à privilégier si vous avez beaucoup de mémoire vive et que vous souhaitez la qualité la plus proche possible du modèle original non quantifié.
*   **Le compromis :** Choisir une quantification plus basse (comme `q4_K_M`) permet d'économiser beaucoup de RAM, mais peut introduire une légère perte de nuance ou de précision dans les réponses. Le `q8_0` est un bon compromis si vous avez la RAM. Le `f16` est pour ceux qui veulent le moins de compromis sur la qualité et qui ont la RAM nécessaire.
*   **Adaptation à votre matériel :**
    *   Si votre RAM est limitée, `q4_K_M` sera souvent votre seule option pour les modèles plus volumineux.
    *   Avec une RAM confortable (ex: 32Go, 64Go ou plus), vous pourrez opter pour `q8_0` pour une meilleure qualité, voire `f16` pour les modèles de taille modérée.
    *   Sur un Mac Studio avec beaucoup de RAM (128Go, 192Go, 512Go), vous aurez la flexibilité d'utiliser `q8_0` ou `f16` même pour de très grands modèles, maximisant ainsi la qualité de la réponse.

### 4. La Taille du Contexte : L'Ampleur de la "Mémoire Vive" du LLM

La taille du contexte, exprimée en tokens (morceaux de mots), définit la quantité d'information que le LLM peut "garder en tête" simultanément lors d'une conversation ou du traitement d'un document.

*   **Évolution majeure :** Les premiers modèles comme Llama 2 avaient des contextes limités (ex: 4096 tokens).
*   **Nouveaux horizons :** Aujourd'hui, des modèles OpenSource atteignent des fenêtres de contexte impressionnantes. Certaines variantes de **Llama 4 (comme Maverick ou Scout) peuvent gérer jusqu'à 1 million de tokens (voire 10 millions pour Scout en recherche) !**. Des modèles comme **Gemma 3 27B** proposent également des contextes étendus (par exemple, jusqu'à 256k tokens). Cela permet de traiter des livres entiers, des bases de code volumineuses ou de maintenir des conversations très longues sans perte d'information.
*   **Impact sur la RAM :** Une plus grande fenêtre de contexte activée consomme significativement plus de RAM pendant l'utilisation, en plus de la RAM requise par le modèle lui-même. Ce n'est souvent pas la taille de contexte maximale qui est activée par défaut dans Ollama pour économiser les ressources. Nous verrons comment ajuster cela dans la section sur la personnalisation.

### 5. Le Rôle du Modèle (System Prompt) et l'Affinement (Fine-Tuning)

*   **Rôle :** Vous pouvez influencer le comportement d'un LLM en lui assignant un "rôle" ou une "personnalité" via un "system prompt" (ex: "Tu es un expert en histoire pour enfants de CM2").
*   **Affinement :** Une technique plus avancée pour spécialiser un modèle existant en l'entraînant sur un jeu de données spécifique (questions/réponses ciblées).

## Comment Choisir le Bon LLM pour Vos Besoins sur Mac ?

1.  **Évaluez votre matériel :** Combien de RAM avez-vous ? C'est le facteur déterminant sur Mac.
2.  **Définissez votre usage :** Tâches simples et rapides ? Discussions complexes ? Traitement de longs documents avec un grand contexte ?
3.  **Commencez par tester :** Ollama facilite l'expérimentation.
    *   Pour un usage général et performant, les modèles **Llama de Meta** (Llama 3, Llama 4) et **Gemma de Google** (Gemma 2, Gemma 3) sont d'excellents points de départ. Choisissez une taille de paramètres et une quantification (`q4_K_M`, `q8_0`, `f16`) adaptées à votre RAM.
    *   Si la taille du contexte est primordiale, cherchez les modèles récents spécifiant de grandes fenêtres (et vérifiez les besoins en RAM correspondants).
4.  **Itérez :** Testez différentes tailles, quantifications et, si besoin, explorez des modèles plus spécialisés.

L'écosystème évolue vite. L'important est de comprendre ces variables pour faire des choix éclairés et profiter au mieux de la puissance des LLM localement.

On va maintenant regarder les principaux [LLMs gratuits](/category/llms-gratuits) qui sont à notre disposition.