---
sidebar_position: 8
---

# Bert

**Bert**  (Bidirectional Encoder Representations from Transformers) est un modèle de langage développé par Google AI qui permet de transformer des séquences de texte en vecteurs d'apprentissage automatique.

## En pratique

Voyons comment mettre cela en pratique avec Ollama sur Mac, mais avant de commencer nous allons vérifier que certaines librairies javascript qui sont utiles sont bien installées.

### Bun

C'est un utilitaire pour lire des grands fichiers en javacript. Interessant pour faire du [RAG](/docs/En-savoir-plus/Rag) ou du Bert.



npm install -g bun



## Préparer vos données textuelles:

Assurez-vous que vos données textuelles sont propres et bien formatées.
Divisez vos données en deux ensembles : un ensemble d'apprentissage et un ensemble de test.

On va prendre un exemple très simple voici trois phrases que nous voulons donner à l'IA, mais l'idée est de pouvoir mettre des centaines de pages par exemple tous les tomes de **Harry Potter** et on aimerait ensuite pouvoir poser des questions sur dans quel tome apparaît tel personnage pour la première fois ? Quand Harry rencontre Hermione ?"...

"Manuel.fr est un site pour vous aider à comprendre l'IA."
"Manuel.fr est écrit en français."
"Manuel.fr explique comment utiliser l'IA en local avec Ollama."

## Ollama sait directement récupérer ces informations

et il y a le modèle 


Pour entrainer ces données dans un modèle BERT personnalisé, il me semble que l'on peut utiliser [**SBert**](https://www.sbert.net) (en anglais).

### installer SBert

Pour ça il faut se placer dans son dossier de développement et taper la commande suivante si vous êtes sur mac silicon (et que vous avez déjà installé [conda](/docs/outils/conda))

```bash
conda install -c conda-forge sentence-transformers
```

Sinon vous pouvez l'installer avec un pip install (si vous avez déjà installé pip)

```bash
pip install -U sentence-transformers
```

il faut également installer PyTorch si vous ne l'avez pas déjà fait

```bash
conda install pytorch torchvision -c pytorch
```

pour vérifier que PyTorch est bien installé, on peut faire un script en python que l'on lance depuis le dossier développement. On va par exemple appeler ce fichier : pytorch_test.py avec [Visual Code Studio](/docs/Usage/vs%20code) (VSC)

```bash
import torch
x = torch.rand(5, 3)
print(x)
```

En cliquant sur le bouton d'execusion du code, vous devez voir dans le terminal de VSC une réponse de ce type

tensor([[0.2434, 0.7130, 0.1073],
        [0.7120, 0.8808, 0.6208],
        [0.3044, 0.4520, 0.3293],
        [0.9470, 0.1774, 0.7407],
        [0.6307, 0.2741, 0.2470]])


## Fine-tuner le modèle BERT:

Fine-tunez le modèle BERT sur une tâche de question-réponse en utilisant votre ensemble d'apprentissage.
Évaluez les performances du modèle sur l'ensemble de test.


## Utiliser le modèle BERT pour répondre à des questions:

Une fois le modèle BERT finement ajusté, vous pouvez l'utiliser pour répondre à des questions basées sur vos données textuelles.
Pour ce faire, vous devez convertir les questions en un format que le modèle BERT peut comprendre.
Le modèle BERT prédira ensuite la réponse la plus probable à la question.
Points importants à retenir :

L'entraînement d'un modèle BERT personnalisé peut prendre du temps et nécessiter des ressources informatiques importantes.
La qualité de vos données textuelles est un facteur crucial pour la performance du modèle.
Il est important de fine-tuner le modèle BERT sur une tâche spécifique pour obtenir de bons résultats.

