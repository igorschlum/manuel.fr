---
sidebar_position: 1
title: "Commandes"
---

# Utiliser Ollama

Dans son utilisation basique, on lance l'application Ollama et dans le menu "modèle" on choisit celui qui nous convient.

## utilisation depuis le terminal

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

La commande list permet de lister tous les LLM qui sont disponibles localement pour être utilisés dans Ollama avec la taille de chacun d'eux et la date à laquelle le modèle a été chargé sur la machine ainsi que le code interne du modèle. Par exemple sur mon MacBook voici ce que ça donne :

<details open>
  <summary>Liste des modèles sur mon MacBook</summary>

gemma4:latest                                                     c6eb396dbd59    9.6 GB    6 days ago
gemma4:e4b                                                        c6eb396dbd59    9.6 GB    2 weeks ago
qwen3.5:27b                                                       7653528ba5cb    17 GB     6 weeks ago
qwen3.5:cloud                                                     a7bf6f7891c3    -         7 weeks ago
glm-5:cloud                                                       c313cd065935    -         7 weeks ago
x/z-image-turbo:latest                                            1053737ea587    12 GB     2 months ago
x/flux2-klein:9b                                                  5fd79ad76b03    11 GB     2 months ago
lfm2.5-thinking:latest                                            95bd9d45385f    731 MB    2 months ago
glm-4.7:cloud                                                     023608864819    -         3 months ago
gemini-3-pro-preview:latest                                       91a1db042ba1    -         4 months ago
minimax-m2:cloud                                                  698ab6d56142    -         5 months ago
kimi-k2-thinking:cloud                                            9752ffb77f53    -         5 months ago
glm-4.6:cloud                                                     05277b76269f    -         6 months ago
qwen3-vl:235b-cloud                                               7fc468f95411    -         6 months ago
kimi-k2:1t-cloud                                                  20dc43ca06d7    -         6 months ago
granite4:latest                                                   4235724a127c    2.1 GB    6 months ago
gpt-oss:120b-cloud                                                569662207105    -         6 months ago
snowflake-arctic-embed2:latest                                    5de93a84837d    1.2 GB    6 months ago
qwen3-embedding:4b                                                df5bd2e3c74c    2.5 GB    6 months ago

</details>

# charger un modèle localement

Si on veut charger un modèle sans l'utiliser ou si on veut charger la nouvelle version d'un modèle, on peut faire un pull

```bash
ollama pull llama3.2
```

C'est arrivé plusieurs fois qu'il y a des problèmes dans le LLM et qu'il faille le recharger, car une nouvelle version a été silencieusement mise à disposition. Silencieusement, car cette mise à jour a été faite sans changer le numéro de version du modèle. Ça arrive parfois quand la mise à jour ne concerne pas le modèle en lui-même, mais les paramètres du modèle.

Tips : Quand Ollama charge un modèle, il a tendance à prendre beaucoup de bande passante et ça peut gêner d'autres utilisateurs du réseau.

Pour limiter la vitesse à laquelle il charge les llm on peut taper : 

```bash
trickle -s -d 50mb ollama pull xxxxx
```


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


# Augmenter la mémoire GPU

Ollama loge les LLM dans la mémoire allouée aux GPU. Sur Mac, macOS limite cette mémoire à 66 % de la RAM totale. Si vous voulez aller au-delà :

Sur un Mac 32 Go, on peut pousser la GPU jusqu'à 28 Go :
```bash
sudo sysctl iogpu.wired_limit_mb=28672
```
Sur un Mac 192 Go, on peut pousser la GPU jusqu'à 180 Go :
```bash
sudo sysctl iogpu.wired_limit_mb=184320
```
Pour remettre la valeur standard :
```bash
sudo sysctl iogpu.wired_limit_mb=0
```

---

Maintenant que vous savez comment utiliser Ollama, on va voir qu'il y a des applications qui offrent des interfaces plus sympas que le terminal pour utiliser Ollama.
