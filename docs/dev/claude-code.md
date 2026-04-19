---
sidebar_position: 2.5
title: "Claude Code"
---

## Développer avec Claude Code et Ollama

**Claude Code** est l'outil de codage agentique d'Anthropic. Il peut **lire, modifier et exécuter du code** directement dans votre répertoire de travail, depuis le terminal.
Grâce à Ollama, vous pouvez utiliser Claude Code avec des **modèles open source** — locaux ou cloud — sans avoir besoin d'une clé API Anthropic.

C'est une façon passionnante d'explorer ce qu'un assistant de code autonome peut faire pour vous, avec des modèles que vous choisissez librement.

---

## Installer Claude Code

Avant de lancer quoi que ce soit, il faut installer Claude Code sur votre Mac. Ouvrez le Terminal et lancez :

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Une fois installé, la commande `claude` est disponible dans votre terminal.

---

## Lancer Claude Code avec Ollama

La façon la plus simple de démarrer est d'utiliser `ollama launch` :

```bash
ollama launch claude
```

Ollama vous guide dans le choix du modèle, configure tout automatiquement et lance Claude Code. Pas de fichier de config à créer, pas de variable d'environnement à définir — c'est prêt en quelques secondes.

Vous pouvez aussi préciser directement le modèle que vous souhaitez utiliser :

```bash
ollama launch claude --model glm-5.1:cloud
```

Ou avec un modèle local :

```bash
ollama launch claude --model gemma4
```

---

## Choisir un modèle

Claude Code fonctionne avec les modèles fournis par Ollama via son API compatible Anthropic. Voici quelques modèles qui s'en sortent particulièrement bien pour le codage :

**Modèles cloud :**

- **glm-5.1:cloud** — excellent en raisonnement et génération de code
- **kimi-k2.5:cloud** — modèle cloud très performant
- **minimax-m2.7:cloud** — modèle cloud puissant
- **qwen3.5:cloud** — rapide et efficace

**Modèles locaux :**

- **gemma4** — modèle local de Google
- **qwen3.5** — modèle local d'Alibaba

:::tip Modèles locaux ou cloud ?
Les modèles **cloud** offrent souvent plus de contexte et de puissance, mais nécessitent une connexion internet.
Les modèles **locaux** fonctionnent hors ligne, de façon plus confidentielle, et surtout sans limites de tokens — parfait pour les tâches simples répétitives.
:::

Vous pouvez parcourir tous les modèles cloud disponibles sur [ollama.com/search](https://ollama.com/search) en filtrant par la catégorie *cloud*.

---

## Le mode non-interactif (headless)

Claude Code peut aussi fonctionner **sans interface interactive** — idéal pour l'automatisation, les conteneurs Docker ou les pipelines CI/CD.

```bash
ollama launch claude --model glm-5.1:cloud --yes -- -p "comment fonctionne ce dépôt ?"
```

Dans cette commande :
- `--yes` : télécharge automatiquement le modèle et saute les sélecteurs (requiert `--model`)
- `--` : tout ce qui suit est transmis directement à Claude Code
- `-p "..."` : le prompt envoyé à Claude Code

C'est très pratique pour scripter des analyses de code ou des revues automatiques.

---

## La recherche web

Claude Code peut effectuer des **recherches sur le web** grâce à l'API de recherche web d'Ollama. Cela lui permet d'aller chercher de la documentation, des exemples de code ou des informations à jour pendant qu'il travaille.

La configuration se fait côté Ollama — consultez la documentation sur la [recherche web](https://docs.ollama.com/capabilities/web-search) pour l'activer.

---

## Les tâches planifiées avec `/loop`

La commande `/loop` permet de **répéter une tâche à intervalle régulier** directement dans Claude Code. C'est un peu comme avoir un assistant qui revient régulièrement faire le point pour vous.

**Syntaxe :**

```
/loop <intervalle> <prompt ou commande>
```

**Quelques idées d'utilisation :**

- Surveiller vos PR :
  ```
  /loop 30m Résume l'état de mes pull requests ouvertes
  ```
- Suivre l'actualité IA :
  ```
  /loop 1h Cherche les dernières actualités IA et fais un résumé
  ```
- Trier les nouveaux tickets :
  ```
  /loop 15m Vérifie les nouveaux tickets GitHub et classe-les par priorité
  ```
- Rappels :
  ```
  /loop 1h Rappelle-moi de vérifier le déploiement
  ```

C'est un moyen simple d'automatiser des tâches répétitives sans quitter votre terminal.

---

## L'intégration Telegram

Vous pouvez aussi **discuter avec Claude Code via Telegram**, en connectant un bot :

```bash
ollama launch claude -- --channels plugin:telegram@claude-plugins-official
```

Pour ça, il faut créer un bot Telegram via **@BotFather**, puis installer le plugin officiel depuis GitHub. Pour un fonctionnement autonome du bot, vous pouvez configurer des règles de permissions ou utiliser `--dangerously-skip-permissions` dans un environnement isolé.

---

## Comprendre la configuration manuelle

Si vous êtes curieux de comprendre ce qui se passe sous le capot quand vous faites `ollama launch claude`, voici la configuration manuelle équivalente :

```bash
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=http://localhost:11434
```

Puis lancez Claude Code avec le modèle de votre choix :

```bash
claude --model qwen3.5
```

Ou tout sur une seule ligne :

```bash
ANTHROPIC_AUTH_TOKEN=ollama ANTHROPIC_BASE_URL=http://localhost:11434 ANTHROPIC_API_KEY="" claude --model glm-5.1:cloud
```

:::tip Fenêtre de contexte
Claude Code a besoin d'une **grande fenêtre de contexte** pour fonctionner correctement. On recommande au moins **64k tokens**. Consultez la documentation d'Ollama sur la [longueur de contexte](https://docs.ollama.com/how-to/ctx-length) pour ajuster ce paramètre si nécessaire.
:::

En pratique, vous n'aurez presque jamais besoin de faire cette configuration manuellement — `ollama launch` s'en charge pour vous. Mais c'est toujours bon de savoir comment ça marche en dessous !

---

## Message de dépense Anthropic

Vous pouvez voir apparaître un message du type :

```
You've spent $5 on the Anthropic API this session.
Learn more about how to monitor your spending:
https://docs.anthropic.com/s/claude-code-cost
```

**Ne tenez pas compte de ce message.** Claude Code ne sait pas qu'il tourne avec un modèle open source servi par Ollama. Ce compteur de dépenses est conçu pour l'API Anthropic payante et n'a aucune signification quand vous utilisez des modèles locaux ou cloud via Ollama.

---

## Résumé

Avec Claude Code et Ollama, vous pouvez :

- **lancer un assistant de codage agentique** en une seule commande (`ollama launch claude`)
- **choisir librement votre modèle** — local pour la vie privée, cloud pour la puissance
- **automatiser des tâches** en mode headless pour vos pipelines CI/CD
- **rechercher sur le web** directement depuis Claude Code
- **planifier des tâches récurrentes** avec `/loop`
- **interagir via Telegram** pour un accès mobile à votre assistant

C'est une exploration passionnante de ce que l'IA open source peut apporter à votre quotidien de développeur — le tout depuis votre terminal, sans verrou éditeur.

---

## Ce que couvre cette page

- **Installation** de Claude Code sur macOS
- **Lancement rapide** avec `ollama launch claude`
- **Choix de modèles** recommandés (locaux et cloud)
- **Mode headless** pour l'automatisation et CI/CD
- **Recherche web** intégrée via Ollama
- **Tâches planifiées** avec `/loop`
- **Intégration Telegram** pour un bot de codage
- **Configuration manuelle** pour comprendre les rouages internes