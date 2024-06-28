---
sidebar_position: 5
---

# Importer un modèle GUFF depuis Hunging Face

## choisir son modèle

aller sur Hugging Face et rechercher les modèles qui vous intéressent. Par exemple nous allons importer le modèle Croissant LLM trouvé sur le [site de central suppélec](https://www.centralesupelec.fr/fr/croissant-llm-une-percee-en-ia-generative-realisee-par-le-laboratoire-mics)

vous pouvez aller sur [Hugging Face](https://www.manuel.fr/docs/Comprendre/Autres%20IA/Hugging%20Face), faire des recherches et choisir un modèle parmis les centaines de milliers de Modèles disponibles.

## pré-requis

Avant d'importer un LLM au [format GUFF](https://www.manuel.fr/docs/Comprendre/glossaire#gguf), il faut installer certaines librairie par le terminal.

Normalement, vous avez déjà installer HomeBrew .

Puis il faut installer si vous ne l'avez pas déjà: git lfs (Large file storage), cette extension vous aidera a gérer les fichiers lourds comme les GUFF .

Sur le terminal, entrer la commande:
git lfs install

Après cela il faut copier le répertoire qui contient le fichier GUFF que vous souhaitez importer:

git clone https://huggingface.co/<username>/<model-name>

il suffit just de remplacer les username & model-name avec ceux de votre fichier GUFF , par exemple avec le modèle Croissant LLM ca donnerait :

git clone https://huggingface.co/croissantllm/CroissantLLMBase-GGUF

## Créer le Modelfile

Après avoir choisi votre modèle et importrer les librairies nécessaire il faut maintenant créer votre fichier modèle.
Celui-ci va specifié a Ollama comment interpreter et utiliser le modèle.

soit vous créer un fichier sur le terminal avec la commande:
nano Modelfile

ou vous pouvez créer votre fichier sur un editeur de code comme Visual Studio Code

dans les deux cas, il faudra y entrer ce script la :

# Modelfile

FROM "/path/to/downloaded/GGUF/file.gguf"
PARAMETER stop "<|im_start|>"
TEMPLATE """
<|im_start|>system
...
"""

Ajuster le contenu du FROM pour qu'il correspond a la location du téléchargements de votre fichier GUFF. Pas besoin de modifier le reste du script.

## creer le modèle

Puis il va maintenant falloir "créer" le modèle avec la commande:

ollama create ><model-name -f Modelfile

Remplacer model-name par le nom que vous souhaitez donner a votre modèle.

## utiliser le modèle

Avezc le Modelfile prêt, vous pouvez lancer et utiliser votre model avec la commande:

ollama run <model-name>:latest

cette commande lancera le modele et vous permettera d'intéragir avec en utilisant l'interface d'Ollama.

## exporter le modèle sur le site Ollama.com
