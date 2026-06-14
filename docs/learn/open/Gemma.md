---
sidebar_position: 2
---

# Gemma

Gemma 4 est la nouvelle génération de modèles de langage large (LLM) de Google DeepMind. **Gemma 4** est conçu pour offrir une intelligence conversationnelle avancée et des capacités d'agent de pointe, le tout avec une licence **Apache 2.0**.

Cette version représente un saut qualitatif majeur, destinée aux développeurs, chercheurs et entreprises qui souhaitent intégrer une IA de calibre professionnel, totalement ouverte et déployable localement, sans dépendance à une plateforme unique.

Contrairement aux modèles des générations précédentes, Gemma 4 ne se contente pas de générer du texte ; il est conçu pour **agir**. Il représente le chaînon manquant entre le simple chatbot et l'automatisation de flux de travail complexes, transformant l'IA en un véritable moteur d'automatisation.

## Les Capacités Révolutionnaires de Gemma 4

La puissance de Gemma 4 repose sur trois piliers technologiques majeurs :

### 1. L'Intelligence d'Agent Native (Function Calling)
Gemma 4 est optimisé pour devenir un véritable *agent*. Il est capable de :
*   **Planifier et Interagir:** Il ne répond pas simplement ; il planifie des actions en plusieurs étapes.
*   **Function Calling:** Le modèle supporte nativement l'appel de fonctions, ce qui lui permet d'interagir avec des API externes (réservation de vol, consultation de stock, etc.) et de piloter des outils complexes.
*   **Sortie Structurée:** Il génère des sorties au format JSON structuré, garantissant une intégration parfaite et fiable dans tout flux de travail logiciel.

### 2. La Multimodalité de Pointe
Le modèle traite de manière native et unifiée plusieurs types de données, ce qui étend considérablement son champ d'application :
*   **Texte** (compréhension et génération de haute qualité).
*   **Image** (analyse de graphiques, de schémas, et reconnaissance de contenu visuel).
*   **Vidéo** (analyse de séquences et identification d'événements).
*   **Audio** (surtout sur les versions "Edge" pour la reconnaissance vocale).

### 3. Le Contexte de Mémoire Massive
Gemma 4 offre une fenêtre de contexte allant jusqu'à **128K ou même 256K tokens**. Cela signifie que l'IA peut analyser :
*   Des dépôts de code entiers.
*   Des documents massifs (rapports, manuels) en une seule requête.
*   Des transcriptions très longues, en maintenant une cohérence contextuelle irréprochable.

## Spécifications Techniques et Tailles des Modèles

La famille Gemma 4 est remarquablement adaptée à tous les niveaux de déploiement, du smartphone au supercalculateur, offrant un équilibre parfait entre performance et accessibilité.

| Modèle | Taille (Paramètres) | Multimodalité | Contexte Max | Usage Typique | Exigences VRAM (Min.) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Gemma 4 E2B** | 2 Milliards (B) | Texte + Audio | 128K | Edge Device / Embarqué (Raspberry Pi) | Très Faible |
| **Gemma 4 E4B** | 4 Milliards (B) | Texte + Audio | 128K | Mobile / Mini PC (Meilleur compromis) | Faible (Mac Air) |
| **Gemma 4 26B** | 26 Milliards (MoE) | Texte + Image | 256K | Stations de travail / Serveur Local | 20 Go VRAM (RTX milieu de gamme) |
| **Gemma 4 31B** | 31 Milliards (Dense) | Texte + Image | 256K | Haute Performance / Serveur | 24-32 Go VRAM (RTX haut de gamme) |

***
*Note : Le modèle 31B se positionne comme une bête de performance, s'imposant déjà parmi les meilleurs modèles ouverts des benchmarks de l'industrie.*
***

## Les modèles QAT : Gemma 4 en plus léger

Si tu as déjà essayé de faire tourner un modèle d'IA sur ton Mac ou ton PC et que ça a planté faute de mémoire, les versions **QAT** de Gemma 4 sont faites pour toi. Ce sont des variantes qui **consomment beaucoup moins de mémoire vive (RAM)** tout en restant très performantes.

Concrètement, un modèle classique de 12 milliards de paramètres peut nécessiter environ 24 Go de RAM juste pour ses poids. En version QAT, ce besoin peut descendre autour de 6 à 10 Go selon ton contexte et ton runtime, rendant le modèle utilisable sur des machines bien plus modestes.

La commande pour lancer un modèle QAT avec Ollama est simple :

```bash
ollama run gemma4:12b-it-qat
```

Et pour une machine plus limitée :

```bash
ollama run gemma4:e4b-it-qat
```

Pour choisir le bon modèle selon ta machine :

| Ta Machine | Modèle à tester en premier |
| :--- | :--- |
| Mac avec 8 Go RAM | `e2b-it-qat` ou `e4b-it-qat` |
| Mac avec 16 Go RAM | `e4b-it-qat`, éventuellement `12b-it-qat` |
| Mac avec 32 Go RAM | `12b-it-qat`, possiblement `26b-a4b-it-qat` |
| GPU 24 Go (RTX 3090/4090) | `26b-a4b-it-qat` ou `31b-it-qat` |

### Comprendre QAT en détail

Cette section s'adresse à ceux qui veulent comprendre ce qui se cache derrière ces variantes.

#### Que signifie QAT ?

Un modèle classique est stocké en précision élevée, par exemple en **bfloat16** ou **float16**. Cela signifie que chaque paramètre occupe environ 16 bits, soit 2 octets.

La **quantification** consiste à réduire le nombre de bits utilisés pour stocker les poids :

| Format | Mémoire par poids | Effet |
| :--- | :--- | :--- |
| FP16 / BF16 | 16 bits | Qualité haute, mémoire élevée |
| INT8 | 8 bits | Environ 2× moins lourd |
| Q4 / 4-bit | 4 bits | Environ 4× moins lourd |

**QAT** signifie **Quantization-Aware Training**. L'important, c'est que le modèle a été **entraîné en sachant qu'il serait quantifié**. Il apprend donc à mieux supporter cette compression. C'est généralement meilleur qu'une quantification faite après coup, appelée **PTQ** (*Post-Training Quantization*), où l'on prend un modèle existant et on le compresse sans réentraînement.

En résumé : un modèle QAT offre une **meilleure qualité qu'une quantification improvisée**, tout en consommant nettement moins de mémoire.

#### Comment lire les tags des modèles

Les noms de modèles QAT suivent une logique précise. Prenons l'exemple de `gemma4:12b-it-qat` :

| Élément | Signification |
| :--- | :--- |
| `gemma4` | Famille Gemma 4 |
| `12b` | Environ 12 milliards de paramètres |
| `it` | *Instruction-tuned*, optimisé pour le chat / assistant |
| `qat` | *Quantization-Aware Trained*, optimisé pour une version quantifiée |

Pour `gemma4:26b-a4b-it-qat`, le `a4b` indique un modèle de type **Mixture-of-Experts** (MoE) : il y a environ 26B paramètres au total, mais seulement une partie (environ 3,8B) est activée par token, ce qui le rend plus économe en calcul qu'un modèle dense de même taille.

#### La mémoire en pratique : ce que QAT change (et ce qu'il ne change pas)

QAT réduit la taille des **poids du modèle**, mais la mémoire utilisée pendant l'inférence comprend aussi d'autres éléments :

1. **Les poids du modèle** — C'est là que QAT aide énormément. Les poids en 4-bit sont beaucoup plus petits.
2. **Le KV cache** — C'est la mémoire utilisée pour retenir le contexte pendant la génération. Plus tu utilises un contexte long (32K, 128K, 256K tokens), plus ça consomme. Gemma 4 annonce jusqu'à 256K tokens de contexte, ce qui peut devenir très coûteux en mémoire.
3. **Les buffers d'exécution** — Dépendent du backend, de la taille du batch, du GPU, de Metal/CUDA/Vulkan, etc.

Donc **QAT réduit surtout la taille des poids**, mais ne rend pas magiquement gratuit un très long contexte.

***

## Déploiement Local : Comment ça Marche ?

L'objectif d'open source de Google est de garantir que l'utilisateur final puisse déployer le modèle sur son propre matériel.

*   **Sur Mac (Apple Silicon):** Le modèle fonctionne parfaitement grâce à l'utilisation de la mémoire unifiée. Les versions E2B et E4B sont idéales pour démarrer sur un MacBook Pro ou Air, permettant des usages de chat, résumé ou traduction avancés localement.
*   **Sur PC/Serveur (GPU):** L'accélération maximale est atteinte sur les GPU professionnels (via CUDA pour Nvidia, et ROCm pour AMD). Les modèles 26B/31B nécessitent une VRAM conséquente.
*   **Simplification du déploiement:** Des outils tiers (comme Ollama) simplifient l'installation, permettant de gérer facilement les différentes tailles de modèles et de maximiser l'utilisation de la mémoire sur des architectures variées.

## Et du côté de Gemini ? (Complémentarité)

En complément de Gemma, il est utile de connaître **Gemini**, qui représente la puissance maximale de l'écosystème Google.

*   **🤖 Gemini :** Est idéal lorsque l'on a besoin de la performance absolue et de l'accès à des fonctionnalités propriétaires Google (comme l'analyse de vidéos d'une heure). Il est très puissant pour l'analyse de données massives et les usages commerciaux intégrés à Google Workspace.
*   **⭐ Gemma 4 :** Est le choix privilégié lorsque l'on exige **l'indépendance, la personnalisation et le déploiement local**. Il offre le meilleur compromis entre performance de pointe et ouverture de la licence.

### Conclusion : Quand choisir quoi ?

| Objectif | Recommandation | Raisonnement |
| :--- | :--- | :--- |
| **Déploiement privé/local** | **Gemma 4** | Open-source, libre de dépendances cloud, performance garantie. |
| **Faible consommation (IoT, Raspberry Pi)** | **Gemma 4 E2B ou E4B** | Très léger, conçu pour l'efficacité énergétique. |
| **Performance maximale / Vidéo très longue** | **Gemini** | Accès aux modèles les plus puissants et aux fonctionnalités propriétaires Google. |
