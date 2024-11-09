---
sidebar_position: 3
---

# Docusaurus

Docusaurus est un outil qui permet à plusieurs personnes de collaborer à la rédaction d'un site internet. Les pages s'affichent très rapidement. C'est l'outil que nous avons choisi pour convevoir le site manuel.fr

Pour installer et commencer à utiliser Docusaurus sur votre Mac, voici les étapes à suivre :

## Prérequis

Vous aurez besoin de Node.js version 18.0 ou supérieure, nous en avons fait une [page](/docs/use/outils/node_npm).

## Générez un nouveau site

Générez un nouveau site Docusaurus en utilisant le modèle classique. Le modèle classique sera automatiquement ajouté à votre projet après avoir exécuté la commande suivante dans le terminal :

```bash
npm init docusaurus@latest my-website classic
```

## Démarrez votre site

Exécutez le serveur de développement avec les commandes suivantes :
```bash
cd my-website
```

La commande `cd` change le répertoire avec lequel vous travaillez. Pour travailler avec votre site Docusaurus nouvellement créé, vous devrez naviguer dans le terminal vers ce répertoire.

```bash
npm install
```

pour installer toutes les dépendances nécessaires.

```bash
npm run start
```

La commande npm run start construit votre site localement et le sert via un serveur de développement, prêt à être visualisé à l’adresse http://localhost:3000/.

## Modifiez votre site

Ouvrez `docs/intro.md` (cette page) et modifiez quelques lignes : le site se recharge automatiquement et affiche vos modifications.

Le lien Gitbug de [Docusaurus](https://github.com/facebook/docusaurus)

[Video en français](https://www.youtube.com/watch?v=rKjyB_PKcV8) pour expliquer comment on peut faire un site Docusaurus.

Autre [vidéo Youtube en anglais](https://www.youtube.com/watch?v=xKOhIJQi84w) qui explique comment on peut personnaliser un site Docusaurus.

J'aimerai implanter sur ce site la recherche qui est possible avec Docusaurus. Visiblement, ce module est compatible avec Docusaurus 3

https://github.com/easyops-cn/docusaurus-search-local/issues