---
sidebar_position: 1
title: "Commandes"
---

# Utiliser Ollama

Dans son utilisation basique, on lance l'application Ollama et dans le menu "modèle" on choisit celui qui nous convient.

## utisation depuis le terminal

Dans son utilisation plus avancée, on peut lancer Ollama depuis l'application "Terminal" en tapant ollama run et en indiquant le nom du modèle à utiliser. Pour cela on utilise la commande run de Ollama qui est la plus importante.

```bash
ollama run gemma3:4b
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
 create      Create a model
 show        Show information for a model
 run         Run a model
 stop        Stop a running model
 pull        Pull a model from a registry
 push        Push a model to a registry
 signin      Sign in to ollama.com
 signout     Sign out from ollama.com
 list        List models
 ps          List running models
 cp          Copy a model
 rm          Remove a model
 launch      Launch an integration with Ollama
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

deepseek-r1:latest                               6995872bfe4c    5.2 GB    47 minutes ago    
qwen2.5vl:72b                                    05ea68274581    48 GB     6 days ago        
devstral:latest                                  c4b2fa0c33d7    14 GB     6 days ago        
gemma3:27b-it-qat                                29eb0b9aeda3    18 GB     6 days ago        
llama3.2-vision:90b-instruct-q8_0                0882d58d0635    95 GB     6 days ago        
llama3.2-vision:11b                              6f2f9757ae97    7.8 GB    7 days ago        
llama4:scout                                     4f01ed6b6e01    67 GB     13 days ago       
gemma3:12b-it-qat                                5d4fa005e7bb    8.9 GB    2 weeks ago       
llama4:17b-scout-16e-instruct-q8_0               35a57d398f89    116 GB    3 weeks ago       
llama4:maverick                                  8e7b2f6c7b57    244 GB    3 weeks ago       
llama4:latest                                    4f01ed6b6e01    67 GB     3 weeks ago       
qwen3:235b                                       8471b4f16b88    142 GB    3 weeks ago       
phi4-reasoning:14b-q8_0                          30b78bf47222    17 GB     4 weeks ago       
agdeqwen:latest                                  faf5c68c1c7c    9.0 GB    2 months ago      
mistral-small:24b                                8039dd90c113    14 GB     3 months ago      
deepseek-r1:70b                                  0c1615a8ca32    42 GB     3 months ago      
guidejson:latest                                 38c5fd1f2172    2.0 GB    4 months ago      
miniguide:latest                                 9a8f8994332d    2.0 GB    4 months ago      
llama3.2:latest                                  a80c4f17acd5    2.0 GB    4 months ago      
llama3.2:3b-instruct-q8_0                        e410b836fe61    3.4 GB    4 months ago      
cognac:latest                                    b249bb0bc76f    2.0 GB    4 months ago      
marioguide:latest                                b5ded031a389    4.7 GB    4 months ago      
phindguide:latest                                94d84f524e0c    4.7 GB    4 months ago      
cognacguide:latest                               b7f4f020594b    4.7 GB    4 months ago      
smallthinker:latest                              945eb1864589    3.6 GB    5 months ago      
falcon3:10b                                      1653ff122acd    6.3 GB    5 months ago      
granite3.1-dense:8b                              86ac4cf0cb84    4.9 GB    5 months ago      
qwen2.5:14b                                      7cdf5a0187d5    9.0 GB    5 months ago      
granite3.1-dense:latest                          86ac4cf0cb84    4.9 GB    5 months ago      
granite3-moe:latest                              d84e1e38ee39    821 MB    5 months ago      
aya:35b                                          bab44e009440    20 GB     5 months ago      
llama3.3:70b-instruct-q8_0                       d5b5e1b84868    74 GB     5 months ago      
llama3.3:latest                                  a6eb4748fd29    42 GB     5 months ago      
athene-v2:latest                                 d14346ed7d55    47 GB     6 months ago      
qwq:latest                                       1211a3265dc8    19 GB     6 months ago      
qwen2.5-coder:32b-instruct-q8_0                  f37bbf27ec01    34 GB     6 months ago      
llama3.2:3b-text-q8_0                            945fcc4a41b8    3.4 GB    6 months ago      
pdlfagent3.1:latest                              54a29dff4c71    4.7 GB    8 months ago      
pdlfagent48:latest                               54a29dff4c71    4.7 GB    8 months ago      
llama3.1:8b                                      42182419e950    4.7 GB    8 months ago      
pdlf-agent:latest                                6b73bd504091    2.0 GB    8 months ago      
yi-coder:9b-base-q8_0                            eea07012d69e    9.4 GB    8 months ago      
qwen2.5:7b                                       845dbda0ea48    4.7 GB    8 months ago      
qwen2.5:72b-instruct-q8_0                        23f2cb48bb9a    77 GB     8 months ago      
reader-lm:1.5b-q8_0                              39ec9eda0492    1.6 GB    8 months ago      
deepseek-v2.5:236b-q5_0                          9de079142600    162 GB    8 months ago      
minicpm-v:latest                                 1862d7d5fee5    5.5 GB    8 months ago      
minicpm-v:8b-2.6-q8_0                            50e40737b5af    9.1 GB    8 months ago      
mailrouter:latest                                8a52e8522943    4.1 GB    9 months ago      
llama3-groq-tool-use:8b                          36211dad2b15    4.7 GB    9 months ago      
mistral-large:123b-instruct-2407-q8_0            20d741bc6d75    130 GB    9 months ago      
CognitiveComputations/dolphin-llama3.1:latest    b29828c83a1d    4.7 GB    9 months ago      
phi3:mini                                        4f2222927938    2.2 GB    9 months ago      
gemma2:2b-instruct-q8_0                          9d27a8c2325c    2.8 GB    9 months ago      
starcoder2:3b                                    f67ae0f64584    1.7 GB    10 months ago     
gemma2:2b                                        8ccf136fdd52    1.6 GB    10 months ago     
tinydolphin:latest                               0f9dd11f824c    636 MB    10 months ago     
llama3.1:70b-instruct-fp16                       0241f75cdd27    141 GB    10 months ago     
llama3.1:8b-instruct-fp16                        9d95e89188d4    16 GB     10 months ago     
llama3.1:latest                                  62757c860e01    4.7 GB    10 months ago     
llama3.1:70b-instruct-q8_0                       613c5de138f9    74 GB     10 months ago     
mistral-nemo:latest                              4b300b8c6a97    7.1 GB    10 months ago     
llama3-groq-tool-use:70b-q8_0                    53f605a586ef    74 GB     10 months ago     
mathstral:7b-v0.1-q8_0                           939f2d6f06c5    7.7 GB    10 months ago     
gemma2:27b-text-q8_0                             0f062e1aad57    28 GB     10 months ago     
test:latest                                      03dac094567b    4.4 GB    11 months ago     
mistrallite:latest                               03dac094567b    4.4 GB    11 months ago     
codegemma:7b                                     0c96700aaada    5.0 GB    11 months ago     
wizard-math:latest                               5ab8dc2115d3    4.1 GB    12 months ago     
falcon2:latest                                   d8c09dbc67c3    6.4 GB    12 months ago     
mixtral:8x22b-instruct-v0.1-q4_0                 6a0910fa6dc1    79 GB     12 months ago     
llava-llama3:latest                              44c161b1f465    5.5 GB    12 months ago     
llama3:latest                                    a6990ed6be41    4.7 GB    13 months ago     
nomic-embed-text:latest                          0a109f422b47    274 MB    14 months ago     
dolphincoder:latest                              1102380927c2    9.1 GB    15 months ago     
gemma:7b                                         430ed3535049    5.2 GB    15 months ago     
gemma:2b                                         b50d6c999e59    1.7 GB    15 months ago     
wizard-math:70b                                  78a12f5c753b    38 GB     15 months ago     
mistral:latest                                   61e88e884507    4.1 GB    15 months ago     
llama2:13b-chat                                  d475bf4c50bc    7.4 GB    15 months ago     
educ:latest                                      41e4e38113ac    38 GB     15 months ago     
education:latest                                 41e4e38113ac    38 GB     15 months ago     
stable-code:latest                               aa5ab8afb862    1.6 GB    16 months ago     
llava:34b                                        3d2d24f46674    20 GB     16 months ago     
megadolphin:120b                                 8fa55398527b    67 GB     16 months ago     
stablelm2:latest                                 ea04e74d6b59    982 MB    16 months ago     
nous-hermes2-mixtral:latest                      599da8dce2c1    26 GB     16 months ago     
sqlcoder:latest                                  77ac14348387    4.1 GB    16 months ago     
mixtral:latest                                   7708c059a8bb    26 GB     17 months ago     
phi:latest                                       c651b7a89d73    1.6 GB    17 months ago     
notux:latest                                     fe14e7d66184    26 GB     17 months ago     
tinyllama:latest                                 2644915ede35    637 MB    17 months ago     
dolphin-mixtral:latest                           cfada4ba31c7    26 GB     17 months ago     
bakllava:latest                                  3dd68bd4447c    4.7 GB    17 months ago     
solar:latest                                     059fdabbe6e6    6.1 GB    17 months ago     
llava:latest                                     e4c3eb471fd8    4.5 GB    17 months ago     
llava:13b                                        99e3bfdf4655    8.0 GB    17 months ago     
llava:7b                                         e4c3eb471fd8    4.5 GB    17 months ago     
    
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
