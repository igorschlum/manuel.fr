---
sidebar_position: 4
title: "OpenClaw"
---

## OpenClaw : l’assistant IA open-source qui agit

**OpenClaw** est un **assistant IA personnel open-source et auto-hébergé** capable d’aller bien au-delà d’un simple chatbot. Contrairement à une IA qui se contente de répondre à vos questions, OpenClaw **exécute des tâches réelles**, interagit avec votre système et vos applications, et peut fonctionner **24 h/24 sur votre machine ou serveur**. Une différence clé avec d’autres solutions IA, c’est que OpenClaw est **proactif** : il peut **prendre des décisions et lancer des actions de lui-même**, selon les règles et permissions que vous définissez.

Ce projet a **changé de nom deux fois** : *Clawdbot* → *Moltbot* → *OpenClaw*.

> OpenClaw s’appelait à l’origine *Clawdbot*. Il a été renommé *OpenClaw* suite à une demande de la société Anthropic autour d’un conflit de marque, mais **les fonctionnalités restent les mêmes**.

---

## 🧠 Ce que fait OpenClaw

OpenClaw est conçu pour être plus qu’un simple générateur de texte : c’est un **agent autonome** qui peut, selon les permissions que vous lui donnez :

- interagir avec vos fichiers et votre système local ;
- lire et automatiser des tâches dans votre navigateur ou vos applications ;
- exécuter des commandes shell, des scripts ou des routines complètes ;
- gérer vos e-mails, calendrier, messages ou rappels ;
- s’intégrer à des plateformes de chat comme **WhatsApp, Telegram, Discord, Slack, Signal ou iMessage** pour être contrôlé depuis votre messagerie habituelle.

Le cœur du système repose sur un **assistant IA qui interprète vos instructions en langage naturel** et planifie des actions à partir de celles-ci, utilisant des modèles (localement ou via API) pour définir la meilleure façon d’exécuter vos demandes.


## 🛠 Installation et fonctionnement

OpenClaw est conçu pour être auto-hébergé :

- vous l’exécutez sur votre **ordinateur (Mac, Windows, Linux)** ou sur un serveur personnel (VPS, Raspberry Pi, etc.) ;
- il fonctionne de manière persistante, en arrière-plan, avec une mémoire contextuelle locale qui lui permet de **se souvenir de vos interactions** au fil du temps ;
- contrairement aux assistants cloud classiques, **vous gardez le contrôle total de vos données** si vous utilisez des modèles locaux ou que vous configurez les accès API de manière sécurisée.

On va faire comme si OpenClaw était un nouvel employé :

- On va lui faire un compte à lui sur la machine.
- On va limiter ses accès réseaux
- On va limiter ses privilèges
- On va lui donner ses propres Autoristation et mots de passe et ne pas partager les notres
- Et on va regarder ce qu'il fait et lui demander de rendre des comptes.

---

## 🛠 Installation sur macOS

OpenClaw est conçu pour être auto-hébergé et peut être installé directement sur macOS :

1. Téléchargez la dernière version du fichier .dmg depuis la page des releases GitHub :  
   👉 [OpenClaw](https://github.com/openclaw/openclaw/releases/)

2. Ouvrez ce fichier et installez l’application dans le dossier **Applications** comme n’importe quel logiciel macOS.

3. Lancez l’application **OpenClaw** et accordez-lui les autorisations que vous souhaitez (accès aux fichiers, au calendrier, automatisation, etc.).

👉 Il est impératif de comprendre ce que vous autorisez et comment sécuriser votre instance si vous choisissez d’utiliser OpenClaw au quotidien.

---

## ⚙️ Utiliser Ollama comme moteur IA

Ollama a intégré une commande à taper pour installer sa connexion avec Openclaw

```bash
ollama launch openclaw
```
---

## Ouvrir la fenêtre d'OpenClaw

[Lien pour ouvrir OpenClaw](http://127.0.0.1:18789/)

## 📌 En résumé

OpenClaw est un **assistant IA auto-hébergé puissant et modulaire**, qui transforme un simple prompt en une action concrète sur votre système ou vos applications. Contrairement aux agents AI classiques qui attendent vos messages, il peut **prendre des initiatives, se souvenir du contexte et agir en continu**.

Cela ouvre des possibilités fascinantes pour l’automatisation personnelle et professionnelle — mais requiert aussi une bonne compréhension des implications de sécurité avant d’être utilisé sur une machine principale.



- [Doc officielle](https://docs.openclaw.ai/providers/ollama)
