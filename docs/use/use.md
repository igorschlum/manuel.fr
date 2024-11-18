---
sidebar_position: 1
title: "Commandes"
---

Voici les commnandes à utiliser dans le terminal

# Utiliser un modèle Ollama

Dans son utilisation basique, on lance l'application Ollama depuis le terminal en tapant ollama run et en indiquant le nom du modèle à utiliser. Pour cela on utilise la commande run de Ollama qui est la plus importante.

```bash
ollama run lama3.2
```

Mais il existe d'autres commandes qu'il faut apprendre à utiliser au fur et à mesure de votre progression.
La première commande à apprendre est d'accéder à l'aide pour avoir la liste des commandes Ollama, mais cette aide est en anglais.

# Afficher l'aide

```bash
ollama -h
```

<details open>
  <summary>Large language model runner</summary>
Usage:
  ollama [flags]
  ollama [command]

Available Commands:
  serve       Start ollama
  create      Create a model from a Modelfile
  show        Show information for a model
  run         Run a model
  stop        Stop a running model
  pull        Pull a model from a registry
  push        Push a model to a registry
  list        List models
  ps          List running models
  cp          Copy a model
  rm          Remove a model
  help        Help about any command

Flags:
  -h, --help      help for ollama
  -v, --version   Show version information
</details>

# Afficher la liste des modeles

```bash
ollama list
```

La commande list permet de lister tous les LLM qui sont disponibles localement pour être utilisé dans Ollama avec la taille de chacun d'eux et la date à laquelle le modèle a été chargé sur la machine ainsi que le code interne du modele. Par exemple sur mon MacBook voici ce que ça donne :

<details open>
  <summary>Liste des modèles sur mon MacBook</summary>

hf.co/bartowski/Ministral-8B-Instruct-2410-HF-GGUF-TEST:latest    1457ac6ac894    4.9 GB    34 hours ago    
llama3.2:latest                                                   a80c4f17acd5    2.0 GB    7 days ago      
llama3.2-vision:latest                                            38107a0cd119    7.9 GB    9 days ago      
granite3-dense:8b                                                 b5e91128f3ef    4.9 GB    3 weeks ago     
llama3.2:3b-instruct-q8_0                                         e410b836fe61    3.4 GB    7 weeks ago     
llama3.2:3b                                                       a80c4f17acd5    2.0 GB    7 weeks ago     
yi-coder:9b-base-q8_0                                             eea07012d69e    9.4 GB    7 weeks ago     
qwen2.5:14b                                                       7cdf5a0187d5    9.0 GB    7 weeks ago     
llama3.1:latest                                                   42182419e950    4.7 GB    7 weeks ago     
llama3.1:8b-instruct-q8_0                                         b158ded76fa0    8.5 GB    8 weeks ago     
minicpm-v:8b-2.6-q6_K                                             4f12fa84e598    7.3 GB    2 months ago    
ajindal/llama3.1-storm:8b-Q8_0                                    c48020e1de1e    8.5 GB    2 months ago    
phi3.5:latest                                                     3b387c8dd9b7    2.2 GB    2 months ago    
hermes3:8b-llama3.1-q8_0                                          d74dfd47dc15    8.5 GB    2 months ago    
smollm:135m-base-v0.2-fp16                                        1d0f00cec918    270 MB    2 months ago    
qwen2:latest                                                      e0d4e1163c58    4.4 GB    2 months ago    
mixtral:latest                                                    d39eb76ed9c5    26 GB     3 months ago    
phi3:latest                                                       d184c916657e    2.2 GB    3 months ago    
glm4:latest                                                       5b699761eca5    5.5 GB    4 months ago    
deepseek-coder-v2:16b-lite-instruct-q8_0                          44250301ba51    16 GB     4 months ago    
mertbozkir/metamath-mistral-7b:latest                             0d3dbc19df26    7.7 GB    4 months ago    
mistral:latest                                                    2ae6f6dd7a3d    4.1 GB    4 months ago    
falcon2:latest                                                    d8c09dbc67c3    6.4 GB    4 months ago    
llama3:instruct                                                   365c0bd3c000    4.7 GB    4 months ago    
gemma2:27b                                                        371038893ee3    15 GB     4 months ago    
jpacifico/french-alpaca-3b:latest                                 014b768ab174    2.3 GB    5 months ago    
qwen2:72b-instruct-q2_K                                           13986f39f4c5    29 GB     5 months ago    
wizard-math:latest                                                5ab8dc2115d3    4.1 GB    5 months ago    
zephyr:latest                                                     bbe38b81adec    4.1 GB    5 months ago    
deepseek-v2:latest                                                35a3613ab60c    8.9 GB    5 months ago    
granite-code:latest                                               9e9883ba2cd4    2.0 GB    5 months ago    
wizardcoder:latest                                                de9d848c1323    3.8 GB    5 months ago    
tinydolphin:latest                                                0f9dd11f824c    636 MB    5 months ago    
codestral:latest                                                  fcc0019dcee9    12 GB     5 months ago    
gemma:2b                                                          b50d6c999e59    1.7 GB    6 months ago    
command-r:latest                                                  b8cdfff0263c    20 GB     7 months ago    
llava:13b                                                         0d0eb4d7f485    8.0 GB    7 months ago    
stablelm2:latest                                                  1b81980a10e6    982 MB    8 months ago    
nomic-embed-text:latest                                           0a109f422b47    274 MB    8 months ago    
llava:34b-v1.6                                                    3d2d24f46674    20 GB     9 months ago    
</details>

# charger un modèle localement

Si on veut charger un modèle sans l'utiliser ou si on veut charger la nouvelle version d'un modèle, on peut faire un pull

```bash
ollama pull llama3.2
```

C'est arrivé plusieurs fois qu'il y a des problèmes dans le LLM et qu'il faille le recharger, car une nouvelle version a été silencieusement mise à disposition. Silencieusement, car cette mise à jour a été faite sans changer le numéro de version du modèle. Ça arrive parfois quand la mise à jour ne concerne pas le modèle en lui-même, mais les paramètres du modèle.

# Supprimer un modèle

Si vous avez essayé un modèle et que vous voyez qu'il ne correspond pas à vos attentes et donc que vous n'allez pas l'utiliser, vous pouvez le supprimer de votre ordinateur, car chaque modèle pèse souvent pas loin de 10 Go et sur un Mac avec 256 Go de disque dur, chaque modèle peut prendre 4% de l'espace disque du disque dur. Il faut donc faire faire attention à bien nettoyer de temps en temps les modèles qu'on a dans la liste. Ce sont souvent les plus anciens qu'il faut supprimer, car les modèles actifs sont remis à jour régulièrement.

```bash
ollama rm llava:13b
```

# Garder un modèle en mémoire

Quand vous travaillez régulièrement avec un LLM, vous constatez que parfois le LLM répond instantanément et parfois c'est plus long. En effet, la première fois qu'on utilise un LLM il doit être chargé en mémoire à partrir du disque dur et pour des raisons d'efficacité, au bout de 5 minutes, Ollama libère la mémoire vive et décharge ce LLM. La prochaine fois que vous faites un prompt, vous allez constater que Ollama doit recharger le LLM en mémoire avant de répondre.

Plus le modèle en grand, plus ce délais est long.

Vous pouvez ajouter un paramètre en lançant le LLM pour qu'il reste en mémoire jusqu'à une commande pour l'arrêter et le vider, soit jusqu'au moment où vous quittez l'application Ollama et que la mémoire soit purgée de tous les modèles.

```bash
ollama run llama3.2  --keepalive -1s
```

# Arrêter un modèle

Pour arrêter un modèle et qu'il libère la mémoire vous pouvez utiliser la commande STOP.

```bash
ollama stop llama3.2
```

# voir la liste des modèles actifs

Il faut faire attention à ne pas avoir trop de modèles qui tournent en parallèle sans libérer la mémoire. Pour voir la liste des modèles qui sont en train de fonctionner, il faut utiliser la commande list

```bash
ollama ps
```

Dans la liste qui s'affiche on voit jusque quand chaque modèle reste en mémoire.

Maintenant que vous savez comment utiliser Ollama, on va voir qu'il y a des applications qui offrent des interfaces plus sympas que le terminal pour utiliser Ollama.