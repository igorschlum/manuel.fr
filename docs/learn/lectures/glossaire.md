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

## couches

Le nombre de couches fait référence à la profondeur du réseau neuronal, c'est-à-dire le nombre d'étapes de traitement que les données traversent. Chaque couche est composée de blocs de calcul qui analysent et transforment l'entrée pour produire des sorties de plus en plus abstraites et complexes. Un nombre plus élevé de couches permet au modèle d'apprendre des représentations plus sophistiquées et de capturer des dépendances complexes dans les données, mais cela augmente également le coût en termes de calcul et de mémoire. Les modèles avec plus de couches peuvent donc offrir de meilleures performances pour des tâches complexes, mais nécessitent davantage de ressources.

## quantifications

C'est une technique utilisée pour réduire la taille des modèles de langage et diminuer leur consommation de mémoire en réduisant la précision des poids du modèle. Au lieu d'utiliser des nombres en virgule flottante de haute précision (comme les 32 bits), la quantization représente les poids du modèle avec moins de bits (par exemple, 8, 6, 5 ou 4 bits). Cela permet de diminuer l'espace de stockage requis et d'accélérer les calculs, rendant ainsi les modèles plus légers et capables de fonctionner sur des Mac avec une mémoire réduite. Bien que la quantization puisse légèrement affecter la précision du modèle, elle est souvent un compromis efficace entre performance et efficacité.

## GGUF

GGUF (Grok GPT-Unified Format) est un format de fichier conçu pour stocker et partager efficacement des modèles de langage comme GPT (Generative Pre-trained Transformer). Un modèle peut être disponible en plusieurs fichiers GGUF correspondant à différents niveaux de quantization (par exemple, 4 bits, 5 bits, 6 bits, 8 bits), ce qui permet de réduire la taille du modèle et d'adapter ses performances aux contraintes de calcul ou de mémoire. Les fichiers GGUF contiennent des métadonnées qui décrivent les caractéristiques du modèle, comme le type de quantization utilisé. On retrouve souvent ces formats sur des plateformes comme Hugging Face, facilitant le partage et l'utilisation de modèles optimisés pour diverses applications d'intelligence artificielle.


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