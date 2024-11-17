---
sidebar_position: 3
---

# Les LLM

LLM est l'acronyme de Large Language Model.

## Qu'est-ce qu'un LLM ?

Par analogie, on peut comparer un LLM à un documentaliste - écrivain public avec une encyclopédie. On peut lui poser des questions, et en fonction de ce qui est écrit dans son dictionnaire, il va vous répondre et vous pouvez entamer une discussion avec lui. Le LLM peut être multi-langue, c'est à dire qu'on peut lui poser des questions en français, en anglais ou dans d'autres langues et il répond plus ou moins bien dans la langue demandée en fonction de ce qui est écrit dans son encyclopédie.

D'un point de vue technique, un LLM est une somme de connaissance entrainée qui sait deviner les caractères à afficher selon les questions que vous lui posez. C'est très étonnant car donne l'impression qu'i y a une intelligence, mais elle n'est qu'artificielle.

## pourquoi plusieurs LLM ?

Il y a plusieurs LLM comme il y a plusieurs encyclopédies. Chaque éditeur de LLM essai de faire le meilleur selon ses critères. certains répondent plus rapidement aux questions, d'autres maîtrisent mieux le français.

Ils sont entrainés de façon différentes, donc même si deux LLM partaient de la même base de connaissance, la façon dont ils sont entrainés les rendra différents et bien sûr, ils sont entrainés sur des jeux de données différents. Chacun entraîne son champion pour qu'il soit le meilleur dans sa catégorie.

Cela permet à certains LLM d'être spécialisés dans l'assistance à la programmation, la description d'images, la médecine,le droit ou dans la résolution de problèmes mathématiques.

## combien en existe-t-il ?

sur le site [Ollama.com](https://ollama.com), il existe plus d'une centaine de LLM. Il y a ceux qui sont officiellement affichés sur le site et ceux qui sont mis à disposition par des utilisateurs d'Ollama et qu'on ne retrouve qu'en faisant une recherche. Tout ceux-là s'installent très facilement.

sur le site [Hugging face](https://huggingface.com), il en existe des centaines de milliers qui sont le plus souvent dans un format que l'on peut importer facilement dans Ollama.

## combien de variations de chaque LLM ?

### Les version majeurs

En plus d'être très nombreux, chaque LLM est disponible en plusieurs variations. La première dans sont numéro de version. Par exemple, le LLM LLama est sorti en openSource en version 2, puis en version 3, puis en version 3.1 et maintenant en version 3.2.

Il en est de même pour le modèle Gemma de Google qui est sorti en version 1 puis en version 2.

Quand un éditeur sort une nouvelle version  de son LLM cela a nécessité de réentrainer complètement le modèle, c'est un gros travail en temps machine et c'est pourquoi les versions sont souvent espacées de 6 mois à plus d'un an.

### La taille du modèle

Prenons par exemple le LLM Gemma2 de Google. Il est disponible en version 2b, 9b et 27b. Le nombre représente le nombre de paramètres dans le modèle. Donc 9b signifie que le modèle contient 9 milliards de paramètres.

Les paramètres sont comme des "connections" internes dans le cerveau d'une IA. Plus il y a de paramètres, plus le modèle peut apprendre de détails et produire des réponses complexes. Un modèle de 27B aura donc bien plus de capacité qu'un modèle de 2B, mais ce surplus de puissance vient avec des avantages et des inconvénients.

Les versions plus petites, comme le modèle 3B, nécessitent moins de puissance de calcul et produisent des réponses plus rapides, bien adaptées aux tâches simples comme la complétion automatique de texte. Par exemple, le modèle 3B peut générer environ 40 tokens par seconde sur un Mac M1, ce qui le rend très efficace pour des applications légères.

En revanche, les versions plus grandes offrent une meilleure qualité de réponse, mais elles demandent davantage de ressources et sont plus lentes. Il est souvent judicieux de commencer par tester un modèle plus puissant lors des premiers essais pour voir si le LLM répond bien aux besoins. Une fois les capacités validées, on peut ensuite passer à des modèles plus petits pour optimiser la vitesse et l'efficacité.

### La quantisation

Les modèles varient aussi aussi en fonction de la Quantization comme expliqué [ici](https://www.manuel.fr/learn/Principes/Quantisastion), le prinicpe est d'attribuer moins de précision à un LLM pour qu'il donne des réponses plus rapide, mais c'est moins précis.

La quantization est une technique qui permet de réduire la taille des modèles d’IA en économisant de la mémoire. Cela consiste à diminuer le nombre de bits utilisés pour représenter chaque paramètre du modèle : par exemple, passer de 16 bits à 8 bits ou même à 4 bits. En diminuant le nombre de bits, chaque paramètre utilise moins de mémoire. Par exemple, passer de 16 à 8 bits divise presque par deux la quantité de mémoire nécessaire.

La quantization a un coût. En diminuant la précision des nombres qui représentent les paramètres du modèle, on perd en finesse de calcul, ce qui peut générer des réponses moins nuancées, des erreurs de compréhension et des incohérences.

Ollama est fait pour faire tourner des LLM sur des ordinateur personnels à choisi de proposer une quantization par défaut de 4 bites, ce qui me semble personnellement trop modeste, mais nous verrons cela plus tard.

### La taille du contexte

Il est encore possible de faire varier des LLM en changeant la taille de leur taille de contexte, par exemple, si vous voulez résumer un livre entier, il faut que le LLM puisse stocker le livre pour entre le résumer. Aujourd'hui les meilleurs modèles peuvent avoir jusqu'à 128K de taille de contexte, mais il faut pour cela cloner le modèle pour lui dire d'utiliser un espace de mémoire plus important.

Les premiers modèles comme Llama2 avaientt une taille de contexte de 4096 tokens, ce qui fait qu'il oubliait au fur et à mesure le début de la conversation et on pouvait tourner en rond. Il me semble que c'est Gemma2 qui a proposé une taille de context de 128K tokens, suivi ensuite par les autres LLM OpenSource. Toutefois cette taille est la taille maximum qu'un LLM peut avoir, mais il faut que le paramètre soit modifié dans le modèle pour lui faire travailler avec un contexte plus grand. Comme ça prend plus de mémoire, ce n'est pas proposé par défaut par Ollama.

Nous verrons tout cela dans la personnalisation des LLM.

### Le rôle du modèle

Vous pouvez aussi modifier un LLM en lui demander de changer son attitude, lui dire qu'il est un professeur d'histoire pour des enfants de CM2 ou qu'il vous apprend une langue ou qu'il critique chacune de choses que vous lui indiquez. En changeant son attitude vous changer complètement sa façon de réagir à vos demandes.

Une autre façon de modifier un modèle et de l'affiner. C'est une opération un peu plus complexe, mais qui peut s'avérer très intéressante, vous allez pouvoir lui transmettre une biliothèque d'informations sous la forme de questions réponses et celles-ci affiner sa façon de répondre. Cette méthode est expliquée ici.

Il y a encore d'autres variations que vous pouvez appliquer à un modèle, comme changer la diversité de ses réponses, voulez-vous qu'il réponde toujours de la même façon à la même question ou voulez-vous qu'il varient ses réponses ? Si vous construisez un chatbox pour un support technique, c'est mieux qu'il réponde de la même façon aux mêmes questions.

## Comment choisir le LLM qui convient à chaque besoin ?

C'est bien le problème et comme de nouveaux LLM sortent régulièrement, il faut commencer par faire des tests manuellement et c'est pour cela qu'Ollama est très pratique, car il permet de charger et de configurer des LLM localement, rapidement et sans coût particulier.

On peut dire quand même que pour l'instant les modèles de type LLama fournis par la société Meta sont les plus performants et la sortie de Llama3.2 vient conforter encore cette position de leader dans les modèles généralistes.

On va maintenant regarder les principaux [LLMs gratuits](/category/llms-gratuits) qui sont à notre disposition.
