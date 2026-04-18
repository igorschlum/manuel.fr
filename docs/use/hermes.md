---
sidebar_position: 4
title: "Hermes"
---

# Intégration de **Hermes Agent** avec Ollama  


## 🚀 Qu’est-ce que Hermes Agent ?

**Hermes Agent** est un **agent IA auto-améliorant** développé par **Nous Research**.  
Contrairement à un simple chatbot, Hermes **apprend de chaque interaction** :

- **Création automatique de compétences** (skills) à partir de vos conversations  
- **Mémoire cross-session** : il se souvient de vous d’une session à l’autre  
- **+70 compétences prêtes à l’emploi** dès le démarrage  
- **Agent multi-plateforme** : il peut agir sur Telegram, Discord, Slack, WhatsApp, Signal, Email…

C’est l’agent IA qui **devient de plus en plus intelligent** au fur et à mesure que vous l’utilisez.

---

## 🤝 Pourquoi cette intégration avec Ollama ?

Ollama a ajouté un support **officiel et ultra-simple** pour Hermes (depuis la version 0.21).

Grâce à cette intégration **par nous** (manuel.fr + Ollama + Nous Research) :

- **100 % local** → vos données restent sur votre machine  
- **Zéro API key** pour les modèles locaux  
- **Installation en 1 commande**  
- **Compatibilité totale** avec tous les modèles Ollama (locaux ou cloud)  
- **Interface chat + passerelle messaging** en quelques secondes

**C’est l’une des façons les plus simples et les plus puissantes d’avoir un vrai agent IA personnel chez soi.**

---

## 🎯 À quoi ça sert concrètement ?

| Usage | Exemple concret |
|-------|-----------------|
| **Productivité quotidienne** | Rédaction, code, résumé de documents |
| **Automatisation** | Surveillance de mails, GitHub, Google Workspace |
| **Assistant personnel** | Rappels intelligents, suivi de projets |
| **Apprentissage continu** | Il transforme vos retours en nouvelles compétences réutilisables |
| **Multi-app** | Parlez-lui sur Telegram ou Discord comme avec un humain |

Hermes **s’améliore tout seul** : plus vous l’utilisez, plus il devient utile et personnalisé.

---

## 📥 Comment ça s’installe ? (Guide étape par étape)

### Méthode recommandée (la plus simple – 30 secondes)

```bash
ollama launch hermes
```

**Ollama fait tout automatiquement :**
1. Installe Hermes (via le script officiel de Nous Research)
2. Vous propose un modèle (local ou cloud)
3. Configure automatiquement le provider Ollama (`http://127.0.0.1:11434/v1`)
4. Lance le chat Hermes

> **Note Windows** : Hermes nécessite WSL2. Exécutez `wsl --install` puis relancez la commande dans le terminal WSL.

### Méthode manuelle (si vous préférez tout contrôler)

```bash
# 1. Installation de Hermes
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# 2. Lancement du wizard de configuration
hermes setup
```

Choisissez **Quick setup** → Ollama détecte automatiquement vos modèles.

### Connexion manuelle à Ollama (option avancée)

Dans le wizard Hermes :
1. **More providers…** → **Custom endpoint**
2. URL : `http://127.0.0.1:11434/v1`
3. API key : **laisser vide**
4. Hermes détecte automatiquement vos modèles Ollama

---

## 📡 Connexion aux messageries (optionnel mais puissant)

```bash
hermes gateway setup
```

**Plateformes supportées** : Telegram • Discord • Slack • WhatsApp • Signal • Email

Une fois configuré, vous pouvez parler à Hermes **depuis n’importe quelle application** comme si c’était un vrai assistant personnel.

---

## 🔄 Commandes utiles

| Commande                     | Usage |
|-----------------------------|-------|
| `ollama launch hermes`      | Installation + lancement complet |
| `hermes setup`              | Relancer le wizard de configuration |
| `hermes gateway setup`      | Configurer les messageries |
| `hermes chat`               | Lancer uniquement l’interface chat |

---

## 💡 Modèles recommandés

**Cloud (rapides et puissants)** :
- `kimi-k2.5:cloud`
- `glm-5.1:cloud`
- `qwen3.5:cloud`

**Locaux (100 % privés)** :
- `gemma4` (~16 Go VRAM)
- `qwen3.6` (~24 Go VRAM)

---

**Prêt à avoir votre propre agent IA qui s’améliore tout seul ?**

👉 Tapez simplement :
```bash
ollama launch hermes
```

Et découvrez la puissance d’un vrai agent autonome sur votre machine !