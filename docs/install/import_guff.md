---
sidebar_position: 6
title: "Import GUFF"
description: "Description pas à pas de l'import d'un modèle GUFF dans Ollama depuis Hunging Face"
---

# Importer un modèle GUFF depuis Hunging Face

## introduction

Sur le site Ollama.com, il y a de nombreux modèles qui peuvent être téléchargés et installer facilement avec une ligne de commande.
Par exemple, on peut depuis le terminal taper "Ollama run llama3" et charger en mémoire vive le modèle Llama3 depuis votre disque dur et si le modèle n'est pas encore présent sur votre stockage local, il sera préalablement chargé depuis le site d'Ollama.com.

Il y a une centaine de modèles prêt à l'emploi sur le site [Ollama.com](https://ollama.com/library)

Vous pouvez aussi dans le cadre de l'utilisation que vous voulez faire de l'IA Générative, utiliser d'autres modèles qui ne sont pas encore disponible sur le site Ollama, par exemple des modèles qui sont sur le site [Hugging Face](https://www.manuel.fr/docs/learn/autres_ia/Hugging%20Face) qui en héberge plusieurs centaines de milliers.


## choisir son modèle

Commencez par aller sur Hugging Face et recherchez un modèle qui vous intéressent. Par exemple nous allons importer le modèle Croissant LLM trouvé sur le [site de central suppélec](https://www.centralesupelec.fr/fr/croissant-llm-une-percee-en-ia-generative-realisee-par-le-laboratoire-mics)

vous pouvez aller sur [Hugging Face](https://www.manuel.fr/docs/comprendre/Autres%20IA/Hugging%20Face), faire des recherches et choisir un modèle parmis les centaines de milliers de Modèles disponibles.

## pré-requis

Avant d'importer un LLM au [format GUFF](https://www.manuel.fr/docs/comprendre/lectures/glossaire#gguf), il va falloir le télécharger depuis le site d'HuggingFace, mais parfois les modèles sont composés de plusieurs fichiers et il y a un script qui permet de faire cette importation facilement sur votre Mac.

Pour faire tourner ce script, il faut l'installer sur votre Mac et pour l'installer on va utiliser HomeBrew qui est un utilitaire très connu pour installer des librairies et les mettre à jour.

Normalement, vous avez déjà installer HomeBrew .

Puis il faut installer si vous ne l'avez pas déjà: git lfs (Large file storage), cette extension vous aidera a gérer les fichiers lourds comme les GUFF .

Sur le terminal, entrer la commande:

```bash
git lfs install
```

Après cela il faut copier le répertoire qui contient le fichier GUFF que vous souhaitez importer:

```bash
git clone https://huggingface.co/<username>/<model-name>
```

il suffit just de remplacer les username & model-name avec ceux de votre fichier GUFF , par exemple avec le modèle Croissant LLM ca donnerait :

git clone https://huggingface.co/croissantllm/CroissantLLMBase-GGUF

## Créer le Modelfile

Après avoir choisi votre modèle et importrer les librairies nécessaire il faut maintenant créer votre fichier modèle.
Celui-ci va specifié a Ollama comment interpreter et utiliser le modèle.

soit vous créer un fichier sur le terminal avec la commande:
nano Modelfile

ou vous pouvez créer votre fichier sur un editeur de code comme Visual Studio Code

dans les deux cas, il faudra y entrer ce script la :

```bash
# Modelfile

FROM "/path/to/downloaded/GGUF/file.gguf"
PARAMETER stop "<|im_start|>"
TEMPLATE """
<|im_start|>system
...
"""
```

Ajuster le contenu du FROM pour qu'il correspond a la location du téléchargements de votre fichier GUFF. Pas besoin de modifier le reste du script.

## creer le modèle

Puis il va maintenant falloir "créer" le modèle avec la commande:

```bash
ollama create ><model-name -f Modelfile
```


Remplacer model-name par le nom que vous souhaitez donner a votre modèle.

## utiliser le modèle

Avezc le Modelfile prêt, vous pouvez lancer et utiliser votre model avec la commande:

```bash
ollama run <model-name>:latest
```

cette commande lancera le modele et vous permettera d'intéragir avec en utilisant l'interface d'Ollama.

Il y a [ces instructions](https://github.com/jmorganca/ollama#import-from-gguf) en anglais et sur le site d'Ollama

et [cet article de blog](https://www.markhneedham.com/blog/2023/10/18/ollama-hugging-face-gguf-models/) également en anglais qui est plus détaillé.

## exporter le modèle sur le site Ollama.com

Maitenant que nous avons réussi à générer un modèle au format d'Ollama, nous pouvons aussi l'exporter sur le site d'Ollama.com pour le mettre à disposition de la communauté.