---
title: "Docker"
sidebar_position: 10
---

#Docker

Si vous êtes sur MacOS, il n'est pas conseillé d'utiliser Docker pour faire tourner Ollama, car Docker ne gère pas bien la mémoire allouée par MacOS à la GPU. Plus simplement avec Docker, Ollama va tourner, mais beaucoup plus lentement, ce qui est dommage.

## Installation interactive
Télécharger le fichier d'installation depuis le site officiel de Docker ou les notes de version
Double-cliquer sur le fichier Docker.dmg pour l'ouvrir
Faire glisser l'icône Docker dans dossier Applications
Lancer Docker en double-cliquant sur l'icône Docker dans Applications
Cliquez sur "Accepter" pour accepter les conditions d'utilisation
Choisissez entre :
Utiliser les paramètres recommandés (plus simple)
Utiliser des paramètres avancés (pour plus de contrôle)
Cliquez sur "Terminer"
Entrez votre mot de passe si demandé

## Installation en ligne de commande

```bash
sudo hdiutil attach Docker.dmg
sudo /Volumes/Docker/Docker.app/Contents/MacOS/install
sudo hdiutil detach /Volumes/Docker
```
Points clés à retenir
Docker Desktop est gratuit pour petits projets personnels et éducatifs
Il nécessite un abonnement payant pour l'utilisation professionnelle dans les grandes entreprises
Le symbole Docker apparaît en haut à droite de l'écran après installation
Vous pouvez configurer Docker pour démarrer automatiquement au login
Démarrage et utilisation
Ouvrez un terminal pour exécuter vos commandes Docker
Cliquez sur l'icône Docker pour accéder aux préférences
Bonnes pratiques
Gardez Docker toujours à jour
Utilisez des conteneurs légers pour optimiser les performances
Gérez vos images Docker avec Docker Hub ou votre propre registry
Cette documentation vous guide à travers l'installation et le démarrage de Docker sur MacOS. N'hésitez pas à consulter la documentation officielle pour plus de détails sur l'utilisation avancée de Docker.


*Docker est une plateforme de conteneurisation open source. Les conteneurs Docker sont des packages légers et autonomes qui incluent tout ce dont votre application a besoin pour fonctionner :*

*Le code de l'application
Les dépendances
Les bibliothèques
Les configurations
L'environnement d'exécution
Imaginez un conteneur Docker comme un cargo transportant tout ce dont vous avez besoin pour construire une maison : les briques, le bois, les outils, etc. Le cargo vous permet de transporter facilement tous ces éléments d'un endroit à l'autre sans avoir à vous soucier de la compatibilité avec le lieu de destination.*

*Avantages de Docker pour l'IA
Simplifie le développement :
Permet de créer des environnements de développement reproductibles et isolés.
Facilite le partage de code et de modèles avec d'autres.
Facilite le déploiement :
Permet de déployer des modèles d'IA en production de manière portable et fiable.
Élimine les problèmes de compatibilité entre les environnements.
Améliore la collaboration :
Permet aux équipes de travailler sur des projets d'IA de manière plus efficace.
Facilite le partage des connaissances et des meilleures pratiques.
Démarrer avec Docker
Installer Docker sur votre ordinateur.
Apprendre les bases de la CLI Docker.
Créer votre premier conteneur Docker.
Déployer votre modèle d'IA dans un conteneur Docker.*

*Docker est un outil puissant qui peut simplifier le développement et le déploiement de modèles d'IA. Il est facile à apprendre et à utiliser. Il peut vous aider à gagner du temps et à améliorer votre productivité.*
