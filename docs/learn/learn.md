---
sidebar_position: 1
title: "Comprendre"
---

Manuel.fr veux vous faire découvrir, comprendre et et surtout utiliser **l'intelligence artificielle** sur Mac avec [Ollama](https://ollama.com).
J'ai passé beaucoup de temps à comprendre et à synthétiser ce que j'ai apris pour vous faire gagner du temps.

# Introduction

Vous connaissez ChatGPT, on peut lui poser des questions dans un prompt et vous obtenez instantanément une réponse à votre question. C'est une avancé technologique étonnante que l'on appelle l'IA générative. ChatGPT qui est très utile a pourtant quelques défauts.

Son premier défaut, c'est qu'il sait qui vous êtes et ce que vous cherchez et que potentiellement votre profil publicitaire peut être vendu.
Son deuxième défaut, c'est qu'il n'est pas souverain, c'est à dire que les questions que vous posez et les informations qui vont avec sont envoyées sur les serveurs de la société OpenAI.
Son troisième défaut, c'est qu'il ne tourne qu'avec ses propres dictionnaires et que vous devez vous en accomoder.

L'application Ollama vous permet de faire tourner les dictionnaires (LLM) que vous voulez sur votre ordinateur en toute confidentialité et sans coût supplémentaire que l'électricité consommée par votre ordinateur. Le plus connu des LLM gratuits est Llama3.1 qui a inspiré le nom de l'application Ollama, mais nous verrons plus loin sur le site qu'il y a beaucoup d'autres LLM que l'on peut utiliser.


# Exemple


Avant d'installer Ollama, voici un exemple de [Prompt](/docs/learn/lectures/glossaire#prompt), (terme utilisé en anglais pour désigner l'instruction que l'on demander à l'IA) et de réponse


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

Nous allons voir sur ce site comment installer Ollama sur votre Mac en lançant llama3.1
il vous suffira de suivre les instructions expliquées ici.

Vouz verrez également ici quelles sont les différents types de LLM.

Vous pourrez accéder à la liste des LLM qui sont disponibles sur le site Ollama qui en facilite l'installation.

Vous comprendrez pourquoi chaque LLM est souvent distribué en plusieurs tailles et en plusieur types.

Vous verrez que vous pourrez cloner modèle pour en créer un qui aura un comportement différents.

Vous verrez quels sont les outils que l'on peut ajouter pour compléter le fonctionnement d'Ollama.

Vous verrez comment vous pourrez affiner un modèle avec des informations nouvelles.

Vous verrez la différence entre Affiner un modèle et faire du RAG

Vous verrez aussi comment importer un LLM depuis Hunging Face.

et plein d'autres choses qui vont être ajoutées au fur et à mesure sur ce site.

Si vous voulez collaborer à l'écriture de ce site, il est fait avec Docusaurus et son code source est sur GitHub.
En attendant, n'hésitez pas à cliquer dans les menus du site pour le parcourir et vous formez.
