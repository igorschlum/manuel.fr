---
sidebar_position: 8
title: "Affiner un modèle (FineTUne)"
description: "Description pas à pas de la méthode pour affiner un modèle de données."
---

# Affiner un modèle

## Principe

Pour affiner un modèle de données, il faut installer un outil qui permet de faire cela locallement sur votre Mac.
La première étape consiste à créer la liste des questions et des réponses qui vont servir de modèle.
La deuxième étape consiste à faire tourner l'affinage du modèle
La troisème étape, d'utiliser l'Adapteur avec un modèle.

Vous pouvez regarder [cette vidéo de Matt Wiliams](https://youtu.be/3UQ7GY9hNwk?feature=shared) en anglais qui montre les grands principes du FineTuning.

et ensuite lire [cet article en anglais](https://heidloff.net/article/apple-mlx-fine-tuning/) de Niklas Heidloff

Bien sûr vous pouvez aussi suivre pas à pas ce que j'ai essayé ci-dessous.

## choisir le modèle que l'on va affiner

Nous allons choisir d'affiner [Mistral](https://ollama.com/library/mistral), qui est le LLM openSource français.
Nous commençons par [ouvrir le template]( ) qui est la description de comment les systèmes informatiques doivent poser les questions à Mistral. On voit à la fin me format des questions et des réponses :

```bash
\[INST\] \{\{ if .System \}\}\{\{ .System \}\}

\{\{ end \}\}\{\{ .Prompt \}\}\[/INST\]
\{\{- end \}\} \{\{ .Response \}\}
\{\{- if .Response \}\}\</s\>
\{\{- end \}\}
```

Nous allons dupliquer cela pour créer une liste de questions et réponses que nous allons créer dans un [format JSONL](https://jsonlines.org/on_the_web/).
JSONL est un fichier ou chaque ligne est un JSON et peut être traité les unes après les autres.

Nous allons utiliser 60% des objets pour entrainer le modèle
20% pour valider le modèle
et les 20% restant pour tester le modèle.

## Trier les mails entrant d'une entreprise

Nous allons utiliser comme exemple le fait de trier la boîte mails contacts d'une entreprise pour trier les mails qui arrivent et les renvoyer vers les bons services.

Pour cela, il suffira de faire un script en python qui va lire la boîte mail "contact" de l'entreprise et à chaque fois qu'un message arrive, qui va se servir de l'intelligence artificielle pour déterminer le service de l'entreprise qui sera le plus à même de traiter le mail.

Si l'IA se trompe, ce n'est pas très grave, car il suffira que le service concerné renvoi le mail au bon service. Donc si l'IA se trompe dans quelques % des cas, l'erreur peut être rattrapée par des humains. Je ne me suis pas embêté, j'ai demandé à l'IA de me proposer des phrases qui vont servir pour déterminer le service concerné.


```bash
{"prompt": "[INST] Veuillez classifier l'email suivant : \"Bonjour, je souhaiterais savoir où en est ma candidature pour le poste de développeur. Pourriez-vous me donner un retour ? Merci.\"[/INST]", "completion": "RH"}
{"prompt": "[INST] Veuillez classifier l'email suivant : \"J'ai un problème avec le logiciel que j'ai acheté. Il se bloque à chaque fois que j'essaie de l'ouvrir. Pouvez-vous m'aider ?\"[/INST]", "completion": "Support"}
{"prompt": "[INST] Veuillez classifier l'email suivant : \"Nous serions intéressés par une commande en gros de vos produits. Pourriez-vous nous envoyer vos tarifs ?\"[/INST]", "completion": "Commercial"}
{"prompt": "[INST] Veuillez classifier l'email suivant : \"Nous avons constaté des erreurs dans la dernière facture que vous nous avez envoyée. Pourriez-vous clarifier les frais ?\"[/INST]", "completion": "Finance"}
{"prompt": "[INST] Veuillez classifier l'email suivant : \"Nous avons des offres incroyables pour améliorer le SEO de votre site web. Contactez-nous pour plus d'informations !\"[/INST]", "completion": "SPAM"}
{"prompt": "[INST] Veuillez classifier l'email suivant : \"Je suis intéressé par les détails du programme de fidélité pour les employés. Pouvez-vous m'en dire plus ?\"[/INST]", "completion": "RH"}
{"prompt": "[INST] Veuillez classifier l'email suivant : \"Le colis livré hier présente des quantités incorrectes par rapport à notre commande. Pouvez-vous vérifier cela ?\"[/INST]", "completion": "Support"}
{"prompt": "[INST] Veuillez classifier l'email suivant : \"Gagnez des millions avec notre nouveau programme de marketing d'affiliation ! Inscrivez-vous maintenant !\"[/INST]", "completion": "SPAM"}
```

Ces phrases peuvent ensuite être travaillées ans un GoogleSheet ou dans une base de données locale pour être ensuite enrichies. Il faut aussi que l'on puisse retirer les accents, car l'affinage n'accepte pas les accents et il faut encoder en [utf-8](https://fr.wikipedia.org/wiki/UTF-8)

J'ai donc demandé à l'IA de m'écrire un script pour encoder ce dataset

il faut dans le dossier "data" mettre trois fichiers : "train.jsonl", "test.jsonl" et "valid.jsonl"

### Conseils pour une bonne répartition

Assurez-vous que chaque fichier (train, valid, test) a un bon équilibre des classes (catégories de destinataires ou spam/solicitation). Cela permet au modèle d'apprendre et d'être évalué correctement.
Avant de diviser vos données en train/valid/test, il est recommandé de les mélanger (randomisation) pour s'assurer qu'il n'y a pas de biais dans la répartition. Par exemple, ne mettez pas tous les e-mails récents dans le fichier d'entraînement et les plus anciens dans le fichier de test.
Les ensembles doivent être représentatifs du problème global que vous essayez de résoudre, ce qui signifie qu'ils doivent refléter la diversité des situations et des styles d'écriture que le modèle verra en production.

Chaque exemple (ligne) doit être présent uniquement dans l'un des trois ensembles (train, valid, ou test). Ils sont indépendants les uns des autres, ce qui signifie que le même e-mail ne doit pas apparaître dans plusieurs fichiers. Cela garantit que le modèle est testé sur des données qu'il n'a jamais vues pendant l'entraînement ou la validation, offrant une évaluation plus précise de ses performances.

En s'assurant que les données de validation et de test ne sont pas dans l'ensemble d'entraînement, vous évitez que le modèle « mémorise » les réponses, ce qui pourrait biaiser son évaluation et ne pas refléter sa performance sur de nouvelles données.

Assurez-vous que chaque ensemble contient une proportion représentative d'e-mails de chaque catégorie (par exemple, service client, spam, etc.). Cela aide le modèle à bien apprendre à reconnaître chaque catégorie et à être testé équitablement sur toutes les catégories.

### train.jsonl

Cet ensemble est utilisé pour entraîner le modèle. Le modèle apprend les relations entre les caractéristiques d'entrée (par exemple, le contenu des e-mails) et les étiquettes (par exemple, à quel service l'e-mail doit être adressé, ou s'il s'agit d'un spam).
Ce fichier contient la majorité des données (en général environ 70-80% des données disponibles).
Les données dans ce fichier doivent être représentatives du problème global que vous essayez de résoudre. Cela inclut une diversité suffisante de cas et une couverture adéquate de toutes les classes que vous souhaitez que le modèle apprenne.

```bash
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Bonjour, je souhaiterais savoir où en est ma candidature pour le poste de développeur. Pourriez-vous me donner un retour ? Merci.\"[/INST]", "completion": "RH"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"J'ai un problème avec le logiciel que j'ai acheté. Il se bloque à chaque fois que j'essaie de l'ouvrir. Pouvez-vous m'aider ?\"[/INST]", "completion": "Support"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Nous serions intéressés par une commande en gros de vos produits. Pourriez-vous nous envoyer vos tarifs ?\"[/INST]", "completion": "Commercial"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Nous avons constaté des erreurs dans la dernière facture que vous nous avez envoyée. Pourriez-vous clarifier les frais ?\"[/INST]", "completion": "Finance"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Nous avons des offres incroyables pour améliorer le SEO de votre site web. Contactez-nous pour plus d'informations !\"[/INST]", "completion": "SPAM"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Je suis intéressé par les détails du programme de fidélité pour les employés. Pouvez-vous m'en dire plus ?\"[/INST]", "completion": "RH"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Le colis livré hier présente des quantités incorrectes par rapport à notre commande. Pouvez-vous vérifier cela ?\"[/INST]", "completion": "Support"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Gagnez des millions avec notre nouveau programme de marketing d'affiliation ! Inscrivez-vous maintenant !\"[/INST]", "completion": "SPAM"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Bonjour, est-ce que vous prenez des stagiaires ?\"[/INST]", "completion": "RH"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"A l'attention des ressources humaines, veuillez trouver ci-joint ma candidature pour un poste de\"[/INST]", "completion": "RH"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Veuillez trouver ci-joint votre facture Google Workspace\"[/INST]", "completion": "Finance"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Nous avons un soucis de mise en œuvre de votre solution. Pouvez-vous nous rappeler ?\"[/INST]", "completion": "Support"}
```

### valid.jsonl

Cet ensemble est utilisé pendant l'entraînement pour évaluer les performances du modèle sur des données qu'il n'a pas vues pendant l'entraînement.
Il aide à ajuster les hyperparamètres du modèle et à prévenir le surajustement (overfitting).
Il représente généralement environ 10-15% des données.
Les données dans ce fichier doivent aussi être représentatives et contenir des exemples divers de toutes les classes, tout comme le fichier d'entraînement.

```bash
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Veuillez trouver ci-joint votre facture Sentry \"[/INST]", "completion": "Finance"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Candidature spontanée \"[/INST]", "completion": "RH"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Les commandes client ne s'impriment plus. pouvez vous nous rappeler pour résoudre le problème ?\"[/INST]", "completion": "Support"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Vous avez gagné un bon d'achat de 100€ à valoir sur votre prochaine commande. Cliquez ici pour vous inscrire !\"[/INST]", "completion": "SPAM"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Nous sommes une société intéressée par vos services. Pouvez-vous nous recontacter ?\"[/INST]", "completion": "Commercial"}
```

### test.jsonl

Cet ensemble est utilisé après que le modèle a été entièrement entraîné et ajusté. Il permet d'évaluer la performance finale et généralisée du modèle.
Le modèle ne doit jamais voir ces données pendant l'entraînement ou la validation. Elles servent uniquement à tester comment le modèle se comporterait dans des situations réelles.
Ce fichier contient généralement environ 10-15% des données totales.
Comme les deux autres ensembles, il doit être représentatif de toutes les classes et des divers types d'exemples.

```bash
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Veuillez trouver ci-joint votre facture EDF \"[/INST]", "completion": "Finance"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Suite à notre rendez-vous, je vous confirme mon intéret pour le poste proposé  \"[/INST]", "completion": "RH"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Urgent, nous n'arrivons pas à allumer notre tablette. Pouvez-vous nous rappeler ?\"[/INST]", "completion": "Support"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Derniers jours pour profiter de notre offre spéciale !\"[/INST]", "completion": "SPAM"}
{"prompt": "[INST] rediriger l'email suivant vers le bon service de l'entreprise : \"Pouvez-vous nous envoyer un devis pour équiper notre entreprise ?\"[/INST]", "completion": "Commercial"}
```

## installer MLX-LM sur son Mac

mlx-lm est un outil open Source développé par Apple pour le développement d'[OpenELM](https://www.numerama.com/tech/1732480-apple-publie-openelm-le-modele-de-langage-open-source-que-personne-nattendait.html). Apple a même un [compte sur HuggingFace(https://huggingface.co/collections/apple/openelm-pretrained-models-6619ac6ca12a10bd0d0df89e) pour y publier ses modèles OpenSource, ce qui est très inhabituel pour la marque à la pomme, mais Apple veut montrer qu'il est aussi un acteur majeur de l'IA.

```bash
pip install mlx-lm
```

## installer TensorFlow

Il faut également installer TensorFlow pour que MLX-LM puisse fonctionner.

```bash
pip install tensorflow
```

## installer Flax

Il faut également installer Flax pour que MLX-LM puisse fonctionner.

```bash
pip install flax
```



Pour affiner un modèle, il faut partir du modèle pré-entraîné (Safe tensor files). Plutôt que d'essayer de convertir le modèle GUFF en MLX, on va le télécharger depuis HuggingFace.

## récupérer le modèle Mistral depuis HuggingFace

Si ce n'est pas encore fait, il faut installer le Client HuggingFace.

```bash
pip install -U "huggingface_hub[cli]"
```

Pour vous connecter à Hugging Face via la CLI (ligne de commande), vous devez utiliser un token d'authentification pour vous connecter pour la première fois.

### Générez un token d'accès

Allez sur https://huggingface.co/settings/tokens (vous devrez être connecté à votre compte Hugging Face sur le navigateur web).

Cliquez sur ["Create New token"](https://huggingface.co/settings/tokens/new?tokenType=fineGrained) pour créer un nouveau token. Donnez un nom à ce token et sélectionnez les permissions que vous voulez accorder (le plus souvent, vous pouvez choisir "Read" si vous ne faites que télécharger des modèles et les convertir).

Cliquez ensuite sur le bouton "Create Token".

Un token sous la forme : "hf_KjgRtYhTUhYkXsdfGfvBcYUHGf" est généré. Il commence par hf_ pour indiquer que ce token est généré par Hugging Face.

Gardez bien le token quelque part, car une fois la fenêtre fermée, vous ne pourrez plus le voir et il faudra le supprimer et en générer un autre. Copiez-le dans votre press-papier.

Ensuite, dans votre terminal, tapez la commande suivante pour vous connecter :
``` bash
huggingface-cli login
```
Collez le token que vous avez copié dans le terminal et appuyez sur Entrée.

Vous pouvez vérifier si vous êtes bien connecté en utilisant la commande :

```bash
huggingface-cli whoami
```

Cette commande vous dira à quel compte Hugging Face vous êtes connecté.

Les tokens d'accès sont plus sûrs que l'utilisation directe de noms d'utilisateur et mots de passe, car vous pouvez révoquer un token à tout moment sans modifier votre mot de passe.

## acceptation de la licence

Il faut vous rendre sur la page du modèle, pour en accepter la licence d'utilisation. Sinon vous ne pourrez pas l'utiliser et ça vous affichera une erreur.

https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3

Pour vérifier que la licence a bien été acceptée, vous pouvez voir si vous arrivez à télécharger le modèle :

```bash
huggingface-cli download mistralai/Mistral-7B-Instruct-v0.3
```


## affinage du modèle

Pour affiner le modèle il faut taper la commande suivante :

``` bash
mlx_lm.lora --train \
--model mistralai/Mistral-7B-Instruct-v0.3 \
--data data --batch-size 2
```
La première ligne indique que l'on veut affiner un modèle.
La deuxième donne le nom du modèle que l'on veut affiner.
La troisième indique le dossier contenant les données.
et le batch-size indique le nombre de batchs qu'il faut faire. Plus c'est grand meilleur est le résultat, mais ça prend plus de mémoire et plus de temps.

Une fois que le script a tourné, vous avez un nouveau dossier **adapters** qui contient le modèle entrainé.

## Création du nouveau modèle

il faut créer un fichier ModelFile dans le dossier au dessus des adapters.

```bash
# Modelfile generated for MailRouter
FROM mistral
ADAPTER ./adapters








ollama create magnum-v2-12b
```
Ollama detecte le template Chat et renseigne les paramettres

```bash
$ ollama show --modelfile magnum-v2-12b
# Modelfile generated by "ollama show"
# To build a new Modelfile based on this, replace FROM with:
# FROM magnum-v2-12b:latest

FROM /root/.ollama/models/blobs/sha256-587d03f008224912b27034e98665dfbb8347f9b9eaa01d2e9968bb0299d5a72e
TEMPLATE "{{ if .System }}<|im_start|>system
{{ .System }}<|im_end|>
{{ end }}{{ if .Prompt }}<|im_start|>user
{{ .Prompt }}<|im_end|>
{{ end }}<|im_start|>assistant
{{ .Response }}<|im_end|>
"
PARAMETER stop <|im_start|>
PARAMETER stop <|im_end|>
```

Faites attention que les LLM en fp16 prennent plus de ressources en mémoire pour fonctionner
```bash
$ ollama run magnum-v2-12b
>>> hello
Hello! How can I help you today?

>>> /bye
$ ollama ps
NAME                    ID              SIZE    PROCESSOR       UNTIL   
magnum-v2-12b:latest    0daea775ee7d    25 GB   36%/64% CPU/GPU Forever
```