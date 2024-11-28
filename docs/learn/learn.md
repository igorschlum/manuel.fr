---
sidebar_position: 1
title: "Introduction"
---

Manuel.fr veut vous faire découvrir, comprendre et surtout utiliser **l'intelligence artificielle** sur Mac avec [Ollama](https://ollama.com).
J'ai passé beaucoup de temps à comprendre et à synthétiser ce que j'ai apris pour vous faire gagner du temps.

# Introduction

Vous connaissez ChatGPT qui a été lancé le 30 novembre 2022, on peut lui poser des questions dans un prompt et vous obtenez instantanément une réponse à votre question. C'est la révolution de l'IA Générative, et les géants du net font la course à l'innovation.

Une autre révolution plus discrète a suivi. Celle de l'IA OpenSource, menée par le groupe Meta et suivie par d'autres qui permet de faire tourner l'IA sur son propre ordinateur ou ses propres serveurs.

Vous pouvez ainsi éviter que votre usage de l'IA ne vienne nourrir des serveurs de publicité ; vos données restent confidentielles. l'IA OpenSource permet également de faire tourner différents modèles qui ont chacun leur propre comportement.

L'application Ollama vous permet de faire tourner les dictionnaires ([LLM](/learn/lectures/glossaire#LLM)) Open source que vous voulez sur votre ordinateur en toute confidentialité et sans coût supplémentaire autre que l'électricité consommée par votre ordinateur. Le plus connu des [LLM](/learn/lectures/glossaire#LLM) gratuits est Llama qui a inspiré le nom de l'application Ollama, mais nous verrons plus loin sur le site qu'il y a beaucoup d'autres [LLM](/learn/lectures/glossaire#LLM) que l'on peut utiliser.


## Exemple

Avant d'installer Ollama, voici un exemple de [Prompt](/learn/lectures/glossaire#prompt), (terme utilisé en anglais pour désigner l'instruction que l'on demander à l'IA) et de réponse


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

La couleur du ciel peut varier en fonction de plusieurs facteurs, tels que :

* La quantité de poussière et d'aérosols dans l'atmosphère, qui peuvent absorber ou diffuser les photons de manière inégale.
* La présence de nuages, qui peuvent réfléchir la lumière solaire et donner une apparence blanche ou grise au ciel.
* L'heure du jour et la position du soleil, qui influent sur l'angle d'incidence des rayons solaires et donc sur la couleur perçue.

En résumé, le ciel est bleu en raison de la diffusion de la lumière par les molécules d'azote et d'oxygène dans l'atmosphère, qui privilégie les couleurs bleues et violettes.
 </details>

## Plan du site

[Comprendre](/learn), pour les explications théoriques

[Utiliser](/use/), pour utiliser Ollama

[Installer](/install/) pour installer les outils dont nous allons avoir besoin lors de l'utilisation d'Ollama

[Bibliothèque](/bib/) pour découvrir les principaux LLM disponibles

Nous allons partir du principe que vous êtes curieux, malin, que vous avez envie d'apprendre, mais que nous n'y connaissez pas grand chose. Les fins connaisseurs pourront toujours utiliser les index à droite pour passer à la section suivante quand il connaisse déjà je sujet traité.


Nous allons voir sur ce site [comment installer Ollama](/install/) sur votre Mac en lançant llama3.2

Vouz verrez également ici quelles sont les différents types de [LLM](/learn/lectures/glossaire#LLM) et à quoi ils servent.

Vous pourrez accéder à la liste des [LLM](/learn/lectures/glossaire#LLM) qui sont disponibles sur le site Ollama qui en facilite l'installation.

Vous comprendrez pourquoi chaque [LLM](/learn/lectures/glossaire#LLM) est souvent distribué en plusieurs tailles et en plusieur types.

Vous verrez que vous pourrez cloner un modèle pour en créer un qui aura un comportement différent.

Vous verrez quels sont les outils que l'on peut ajouter pour compléter le fonctionnement d'Ollama.

Vous verrez comment vous pourrez affiner un modèle avec des informations nouvelles.

Vous verrez la différence entre Affiner un modèle et faire du RAG

Vous verrez aussi comment importer un [LLM](/learn/lectures/glossaire#LLM) depuis Hunging Face.

Si vous voulez collaborer à l'écriture de ce site, il est fait avec Docusaurus et son code source est sur GitHub.
En attendant, n'hésitez pas à cliquer dans les menus du site pour le parcourir et vous formez.

Commençons par conprendre quels sont des [Usages](/learn/usages) simples que l'on peut faire avec l'Intelligence Artificielle
