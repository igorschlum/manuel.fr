---
sidebar_position: 3
---

# Glossaire

On explique ici les termes techniques utilisés dans ce site

## LLM {#LLM}

Large Language Model.

*LLM signifie "Large Language Model" en anglais, et se traduit par "Grand modèle de langage" en français.*

## prompt {#prompt}

Le prompt est l'instruction qui est donnée au LLM pour recevoir la réponse. Plus un prompt est précis, plus la réponse attendu sera adaptée.

## quantifications

La quantification est une technique utilisée pour réduire la taille d'un modèle tout en essayant de conserver autant que possible ses performances.

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

Cette page explique comment importer un modèle GUFF sur Ollama.

## Safetensors

SafeTensors est un autre format spécialisé pour stocker et partager des modèles d'apprentissage automatique, conçu pour répondre à certaines limitations et préoccupations de sécurité associées

On peut transformer des formats Safetensors en GUFF comme indiqué ici :

Thanks for this! In case someone else comes across this, here is how I did this from scratch on a mac, following your directions:

```bash
git clone https://github.com/ggerganov/llama.cpp
```


 - This command is cloning the repository located at "https://github.com/ggerganov/llama.cpp" to the local machine.
```bash
cd llama.cpp/
```

- Navigate to the newly cloned repository located at "llama.cpp".
```bash
make
```
- This command is building the project using the make build system. It will compile the source code and link any necessary libraries to produce an executable binary.

```bash
python3 -m pip install -r requirements.txt
```
 - This command is installing the Python dependencies required for the project, specified in the "requirements.txt" file.

 ```bash
python convert.py --outtype f16 --ctx 4096 models/<INSERT_YOUR_FOLDER_NAME_HERE>
```

- This command is running a Python script named "convert.py" with the arguments --outtype f16 and --ctx 4096, using the model located at models/&lt;INSERT_YOUR_FOLDER_NAME_HERE&gt;, you have to specify a context length, may be a new requirement since you wrote this.

```bash
./quantize models/<INSERT_YOUR_FOLDER_NAME_HERE>/ggml-model-f16.gguf models/<INSERT_YOUR_FOLDER_NAME_HERE>/<INSERT_YOUR_MODEL_NAME_HERE>.
gguf Q6_K
```
 - Quantize the model with one argument, including the path to the model and the output file name.

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

## NLP (Natural Language Processing)

Il s'agit de permettre aux gens de discuter avec les données de l'entreprise en utilisant un langage naturel. L'idée est de de pas avoir à apprendre comment la donnée de l'entreprise est organisée.