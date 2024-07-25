---
sidebar_position: 1
title: "Comprendre"
---

Manuel.fr veux vous faire découvrir, comprendre et utiliser **l'intelligence artificielle** sur Mac avec [Ollama](https://ollama.ai).


# Introduction

A la sortie du premier Macintosh, tout le monde était impressionné par [MacWrite](https://fr.wikipedia.org/wiki/MacWrite), le traitement de texte qui permettait de faire de la mise en page tellement facilement et par [MacPaint](https://fr.wikipedia.org/wiki/MacPaint) l'outil pour dessiner.

On pouvait voir l'ordinateur personnel comme une super machine à écrire et une feuille de dessin où l'on pouvait retravailler facilement ses documents.

Imaginez que vous êtes dans une bibliothèque municipale et que vous pouvez poser n'importe quelle question au documentaliste qui va regarder dans ses livres et ses encyclopédies pour vous concocter une réponse sur mesure.


# L'IA générative


Ce qui nous intéresse sur manuel.fr, est ce qu'on appelle l'IA générative, c'est à dire qu'à partir d'un [Prompt](/docs/learn/lectures/glossaire#prompt), (terme utilisé en anglais pour désigner l'instruction que l'on demander à l'IA) l'IA va vous répondre par un texte.

Exemple :

<details open>
  <summary>pourquoi le ciel est bleu ?</summary>


* La couleur du ciel est un phénomène complexe qui a fasciné les scientifiques et les philosophes depuis l'Antiquité. La réponse est liée à la physique de la lumière, à la composition de l'atmosphère et aux propriétés des molécules qui la composent.

**La théorie de Rayleigh**

En 1871, le physicien britannique Lord Rayleigh a découvert que la couleur du ciel est principalement due à la diffusion de la lumière par le molécules d'azote (N2) et d'oxygène (O2) présentes dans l'atmosphère. 
Cette théorie, connue sous le nom de "diffusion de Rayleigh", explique pourquoi le ciel apparaît bleu.

Lorsqu'un rayon de lumière solaire pénètre dans l'atmosphère, il est composé de toutes les couleurs du spectre visible. Les molécules d'azote et d'oxygène qui constituent l'air ont une taille très petite par rapport
à la longueur d'onde de la lumière visible. Lorsque ces molécules rencontrent un photon (un quantum de lumière), elles le diffusent dans toutes les directions.

La diffusion est plus efficace pour les photons de faible longueur d'onde, c'est-à-dire les couleurs bleues et violettes. Cela signifie que ces photons sont diffusés dans toutes les directions par les molécules d'azote
et d'oxygène, tandis que les photons de plus grande longueur d'onde (les rouges et les oranges) continuent leur trajet sans être déviés.

**La couleur du ciel**

En conséquence, lorsque nous regardons le ciel, nous voyons principalement la lumière bleue qui a été diffusée dans toutes les directions par les molécules d'azote et d'oxygène. C'est pourquoi le ciel apparaît bleu 
pendant la journée, notamment lorsqu'il est dégagé de nuages.

La couleur du ciel peut varier en fonction de plusieurs facteurs, tels que
:

* La quantité de poussière et d'aérosols dans l'atmosphère, qui peuvent 
absorber ou diffuser les photons de manière inégale.
* La présence de nuages, qui peuvent réfléchir la lumière solaire et 
donner une apparence blanche ou grise au ciel.
* L'heure du jour et la position du soleil, qui influent sur l'angle 
d'incidence des rayons solaires et donc sur la couleur perçue.

En résumé, le ciel est bleu en raison de la diffusion de la lumière par 
les molécules d'azote et d'oxygène dans l'atmosphère, qui privilégie les 
couleurs bleues et violettes.
 </details>


# Les LLM

Les réponses sont générées par un LLM. Il sera le plus souvent différent, même si vous posez plusieurs fois la même question.

Ces LLM sont composés de textes qui prendrdaient des centaines de milliers d'année à lire pour un humaine qui subissent deux traitements informatiques

## Pré-entrainement (Pre-training)

Cette étape consiste à entraîner le modèle sur une vaste quantité de données textuelles pour qu'il apprenne les structures et les régularités de la langue. Durant cette phase, le modèle essaie de prédire la suite d'un texte donné, ce qui l'oblige à comprendre le contexte, la syntaxe, le vocabulaire, et les relations entre les mots.
Détails techniques : Le modèle est exposé à d'immenses corpus de textes, souvent provenant de l'internet, de livres, d'articles scientifiques, etc. Les algorithmes comme les réseaux de neurones transformateurs (Transformers) sont fréquemment utilisés. Le modèle apprend à minimiser une fonction de perte qui mesure l'écart entre ses prédictions et les textes réels.


## Ajustement fin (Fine-tuning)

Après le pré-entrainement, le modèle est affiné sur des tâches spécifiques ou des types de textes particuliers. Cette phase permet de spécialiser le modèle pour qu'il soit plus performant sur des applications concrètes.
Détails techniques : Le modèle pré-entraîné est encore entraîné, mais cette fois-ci sur un ensemble de données plus restreint et spécialisé, souvent étiqueté, qui correspond aux tâches ciblées (par exemple, la classification de textes, la réponse à des questions, la traduction automatique, etc.). Cela permet d'ajuster les paramètres du modèle pour améliorer sa précision et sa pertinence dans le contexte spécifique.

Ces deux étapes, le pré-entrainement et l'ajustement fin, sont cruciales pour la conception et la performance d'un modèle LLM et c'est pour cela qu'il y a plusieurs LLM, car ils ne partent pas du même corpus de texte et il ne sont pas entrainés de la même façon.