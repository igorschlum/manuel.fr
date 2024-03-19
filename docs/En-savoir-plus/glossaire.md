---
sidebar_position: 1
---

# Glossaire

On explique ici les termes techniques utilisés dans ce site

## GGUF

*signifie GPT-Generated Unified Format. Il s'agit d'un format de fichier pour stocker les modèles de langage de grande taille (LLM) développé par l'équipe de Facebook AI. GGUF a été conçu pour être plus efficace et plus performant que les formats de fichier LLM existants, tels que GGML.*

*Voici les principaux avantages de GGUF :*

*Taille de fichier réduite: Les fichiers GGUF sont généralement 2 à 3 fois plus petits que les fichiers GGML, ce qui facilite leur stockage et leur partage.*
*Chargement plus rapide: Les modèles GGUF se chargent plus rapidement que les modèles GGML, ce qui permet d'améliorer les performances d'inférence.*
*Meilleure compression: GGUF utilise une compression plus efficace que GGML, ce qui permet d'obtenir une meilleure précision des modèles.*
*GGUF est actuellement pris en charge par un certain nombre d'outils d'IA, notamment :**

Llama CPP: Un outil open source pour l'inférence LLM sur CPU.*
*GPT4All: Une interface graphique pour Llama CPP.*
*Hugging Face: Une plateforme de partage de modèles d'IA.*

Un article en anglais explique ici comment faire tourner les fichiers GGUF sur Ollama, je n'ai pas encore eu le temps de tester cela.

https://www.markhneedham.com/blog/2023/10/18/ollama-hugging-face-gguf-models/

et c'est simplement expliqué dans la documentation ici :

https://github.com/jmorganca/ollama#import-from-gguf



## LLM{#LLM}

Large Language Model.

*LLM signifie "Large Language Model" en anglais, et se traduit par "Grand modèle de langage" en français.*

## Unsencored

*Un modèle "uncensored" est une version modifiée d'un modèle classique qui 
utilise des données provenant de sources moins censurées. Cela signifie 
qu'il peut produire des réponses plus nuancées et plus complexes sur des 
sujets sensibles, tels que la politique ou la religion, mais il est
également possible qu'il génère du contenu offensif ou inapproprié. En 
d'autres termes, un modèle "uncensored" est plus puissant mais aussi plus 
risqué à utiliser.*

## QLoRA

*"QLoRA" est une méthode d’ajustement fin qui réduit suffisamment l’utilisation de la mémoire pour ajuster un modèle de 65 milliards de paramètres sur une seule GPU NVIDIA A10G de 24 Go tout en préservant les performances complètes de l’ajustement fin en 16 bits. En d’autres termes, QLoRA permet d’entraîner des modèles de langage de grande taille sur du matériel relativement standard, ce qui rend la technologie plus accessible*