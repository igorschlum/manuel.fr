---
sidebar_position: 2
---

# Les LLM

LLM est l'acronyme de Large Language Model.

## Qu'est-ce qu'un LLM ?

Par analogie, on peut comparer un LLM à un documentaliste - écrivain public avec une encyclopédie. On peut lui poser des questions, et en fonction de ce qui est écrit dans son dictionnaire, il va vous répondre et vous pouvez entamer une discussion avec lui et il vous répond. Le LLM peut être multi-langue, c'est à dire qu'on peut lui poser des questions en français, en anglais ou dans d'autres langues et il répond plus ou moins bien dans la langue demandée en fonction de ce qui est écrit dans son encyclopédie.

D'un point de vue technique, un LLM est une somme de connaissance entrainée qui sait deviner les caractères à afficher selon les questions que vous lui posez. C'est très étonnant car donne l'impression qu'i y a une intelligence, mais elle n'est qu'artificielle.

## pourquoi plusieurs LLM ?

Il y a plusieurs LLM comme il y a plusieurs encyclopédie. Chaque éditeur de LLM essai de faire le meilleur selon ses critères. certains répondent plus rapidement aux questions, d'autres maîtrisent mieux le français et mes données qui les composent varient aussi d'un LLM à l'autre.

Ils sont également entrainés de façon différentes, donc même si deux LLM partaient de la même base de connaissance, la façon dont ils sont entrainés les rendra différents.

Cela permet à certains LLM d'être spécialisés dans l'assistance à la programmation, dans le droit ou dans la résolution de problèmes mathématiques.

## combien en existe-t-il ?

sur le site [Ollama.com](https://ollama.com), il existe plus d'une centaine de LLM. Il y a ceux qui sont officiellement affichés sur le site et ceux qui sont mis à disposition par des utilisateurs d'Ollama et qu'on ne retrouve qu'en faisant une recherche. Tout ceux-là s'installent très facilement.

sur le site [Hugging face](https://huggingface.com), il en existe des centaines de milliers, mais qui sont dans des formats pas directement exploitables par Ollama, il faut les importer au paravents comme expliqué ici et là.

## combien de variations de chaque LLM ?

En plus d'être très nombreux, chaque LLM est disponible en plusieurs variations. La première consiste dans le corpus utilisé. Par exemple le modèle Llama3.2 exite dans une version 3B qui prend 3 Go en mémoire vive et la version 3.1 existe dans une version 70B qui utilise 70 Go de mémoire vive et donc qui nécessite un ordinateur avec plus de mémoire pour le faire tourner. La version 70B est moins rapide, mais plus précise dans ses réponses. Llama3.1 est aussi disponible dans une version 240B qui nécessite 240 Go pour le faire tourner ce qui n'est pas possible sur un seul mac à date, il faut donc plusieurs Mac en cluster pour faire tourner ce modèle.

Si on privilégie la qualité des réponses, il est préférables d'utiliser un LLM plus puissant, s'il s'agit de réaliser des tâches plus simples comme de la complétion automatique à la saisie, la version 3B sera préférée car elle est beaucoup plus rapide. En effet, cette version est capatble de générer près de 40 tockens par seconde sur un Mac M1, ce qui est suffisant.

Les modèles varient aussi aussi en fonction de la Quantization comme expliqué [ici](https://www.manuel.fr/docs/learn/Principes/Quantisastion), le prinicpe est d'attribuer plus de précision à un LLM pour qu'il donne des réponses plus précises, mais c'est plus lent.

Il est encore possible de faire varier des LLM en changeant la taille de leur taille de contexte, par exemple, si vous voulez résumer un livre entier, il faut que le LLM puisse stocker le livre pour entre le résumer. Aujourd'hui les meilleurs modèles peuvent avoir jusqu'à 128K de taille de contexte, mais il faut pour cela cloner le modèle pour lui dire d'utiliser un espace de mémoire plus important.

Vous pouvez aussi modifier un LLM en lui demander de changer son attitude, lui dire qu'il est un professeur d'histoire pour des enfants de CM2 ou qu'il vous apprend une langue ou qu'il critique chacune de choses que vous lui indiquez. En changeant son attitude vous changer complètement sa façon de réagir à vos demandes.

Une autre façon de modifier un modèle et de l'affiner. C'est une opération un peu plus complexe, mais qui peut s'avérer très intéressante, vous allez pouvoir lui transmettre une biliothèque d'informations sous la forme de questions réponses et celles-ci affiner sa façon de répondre. Cette méthode est expliquée ici.

Il y a encore d'autres variations que vous pouvez appliquer à un modèle, comme changer la diversité de ses réponses, voulez-vous qu'il réponde toujours de la même façon à la même question ou voulez-vous qu'il varient ses réponses ? Si vous construisez un chatbox pour un support technique, c'est mieux qu'il réponde de la même façon aux mêmes questions.

## Comment choisir le LLM qui convient à chaque besoin ?

C'est bien le problème et comme de nouveaux LLM sortent régulièrement, il faut commencer par faire des tests manuellement et c'est pour cela qu'Ollama est très pratique, car il permet de charger et de configurer des LLM localement, rapidement et sans coût particulier.

On peut dire quand même que pour l'instant les modèles de type LLama fournis par la société Meta sont les plus performants et la sortie de Llama3.2 vient conforter encore cette position de leader dans les modèles généralistes.