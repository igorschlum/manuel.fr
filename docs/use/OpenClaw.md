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

---

## 🛠 Installation et fonctionnement

OpenClaw est conçu pour être auto-hébergé :

- vous l’exécutez sur votre **ordinateur (Mac, Windows, Linux)** ou sur un serveur personnel (VPS, Raspberry Pi, etc.) ;
- il fonctionne de manière persistante, en arrière-plan, avec une mémoire contextuelle locale qui lui permet de **se souvenir de vos interactions** au fil du temps ;
- contrairement aux assistants cloud classiques, **vous gardez le contrôle total de vos données** si vous utilisez des modèles locaux ou que vous configurez les accès API de manière sécurisée.

Pour installer OpenClaw, il faut ouvrir le terminal et taper la commande :

```bash
sudo curl -fsSL https://openclaw.ai/install.sh | bash
```

---

## ⚠️ Sécurité et risques

Donner à un assistant IA des **permissions étendues sur votre système** présente des risques non négligeables :

- accès à vos fichiers personnels, calendriers ou messages ;
- possibilité d’exécuter des commandes système ou des scripts sans supervision ;
- **risque d’injection de prompt ou d’exécution involontaire de commandes** si OpenClaw est mal configuré ;
- stockage de données sensibles en clair si vous n’êtes pas rigoureux dans vos réglages.

👉 Il est donc impératif de comprendre ce que vous autorisez et comment sécuriser votre instance si vous choisissez d’utiliser OpenClaw au quotidien.

---

## 💡 Scénarios d’usage

Voici quelques exemples de ce que OpenClaw peut faire une fois installé :

- vous envoyer un résumé automatique de vos e-mails chaque matin ;
- exécuter un script pour organiser vos fichiers ou lancer des tâches répétitives ;
- automatiser des interactions Web (navigation, remplissage de formulaires, extraction de données) ;
- intégrer vos routines quotidiennes à un flux de travail proactif, en anticipant certaines actions.

Ce type d’agent va au-delà de la simple réponse textuelle : il **gère, planifie et agit** en fonction de vos instructions.

---

## 📌 En résumé

OpenClaw est un **assistant IA auto-hébergé puissant et modulaire**, qui transforme un simple prompt en une action concrète sur votre système ou vos applications. Contrairement aux agents AI classiques qui attendent vos messages, il peut **prendre des initiatives, se souvenir du contexte et agir en continu**.

Cela ouvre des possibilités fascinantes pour l’automatisation personnelle et professionnelle — mais requiert aussi une bonne compréhension des implications de sécurité avant d’être utilisé sur une machine principale.

---

## 🧩 Exemple de configuration Ollama

```bash
cat ~/.clawdbot/clawdbot.json
```

```json
{
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "models": {
    "providers": {
      "ollama": {
        "baseUrl": "http://127.0.0.1:11434/v1",
        "apiKey": "ollama-local",
        "api": "openai-responses",
        "models": [
          {
            "id": "glm-4.7-flash:latest",
            "name": "GLM-4.7 Flash",
            "reasoning": true,
            "input": ["text"],
            "cost": {
              "input": 0,
              "output": 0,
              "cacheRead": 0,
              "cacheWrite": 0
            },
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "ollama/glm-4.7-flash:latest"
      },
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      },
      "compaction": {
        "mode": "safeguard"
      },
      "workspace": "/Users/manuel/clawd"
    }
  },
  "gateway": {
    "mode": "local",
    "auth": {
      "mode": "token",
      "token": "CHANGE_ME"
    },
    "port": 18789,
    "bind": "loopback",
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    }
  }
}
```

---

## 🔗 Ressources

- [Doc officielle](https://docs.openclaw.ai/getting-started)
