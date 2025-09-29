---
sidebar_position: 10
title: "OpenCode"
---

OpenCode est un outil open source qui permet d’utiliser l’intelligence artificielle pour comprendre, explorer et interagir avec un projet de développement. Contrairement à des assistants comme ChatGPT ou Claude, OpenCode est conçu pour fonctionner **directement dans votre terminal**, en local, et avec vos propres fichiers.

Il ne s’agit pas d’un éditeur de code, mais d’un **agent intelligent** qui peut répondre à des questions sur votre projet, vous aider à naviguer dans le code, et même vous suggérer des améliorations. Et tout cela, sans avoir besoin d’envoyer vos fichiers dans le cloud.

---

## 🧠 À quoi sert OpenCode ?

OpenCode permet de créer une application ou un site web **sans savoir programmer**, simplement en dialoguant avec une intelligence artificielle. On peut commencer par demander à l’IA de générer un prototype, puis lui faire faire des modifications au fur et à mesure, en fonction de ses besoins.

C’est une manière accessible et puissante de découvrir le développement logiciel, même si on débute.

OpenCode fonctionne avec des modèles LLM (Large Language Models) que vous pouvez choisir en fonction de la mémoire disponible sur votre machine :

- Si vous avez un Mac récent, vous pouvez utiliser une version open source d’**Ollama**, qui permet d’exécuter des modèles localement.
- Sinon, vous pouvez utiliser **Qwen3 Coder**, un modèle performant disponible en plusieurs tailles, adapté aux petites configurations.

Une fois votre projet généré, vous pouvez :

- Le pousser sur **GitHub** gratuitement
- Le déployer sur un serveur **Vercel** gratuitement

Cela vous permet d’avoir une application en ligne, accessible depuis n’importe quel navigateur, sans frais.

OpenCode est donc un outil idéal pour :

- Prototyper rapidement une idée
- Modifier un projet existant sans toucher au code
- Comprendre comment fonctionne une application
- Travailler avec une IA directement dans le terminal


Exemples de commandes :

```bash
opencode
```

Puis dans l’interface :

```bash
/init
```

Cela crée un fichier `AGENTS.md` qui sert de point de départ pour l’analyse du projet.

Ensuite, vous pouvez poser des questions comme :

```bash
Comment est gérée l’authentification dans @packages/functions/src/api/index.ts ?
```

---

## 🛠️ Installation sans Homebrew

Si vous n’avez pas Homebrew sur votre Mac, pas de souci. Voici comment installer OpenCode autrement :

### 1. Ouvrez votre terminal

### 2. Tapez la commande suivante :

```bash
curl -fsSL https://opencode.ai/install | bash
```

Cette commande télécharge et installe automatiquement OpenCode dans le dossier `~/.opencode/bin`.

### 3. Ajoutez ce dossier à votre `PATH` si nécessaire :

```bash
export PATH="$HOME/.opencode/bin:$PATH"
```

Vous pouvez aussi ajouter cette ligne à votre fichier `.zshrc` ou `.bash_profile` pour que ce soit permanent.

### 4. Vérifiez l’installation :

```bash
opencode --version
```

---

## 🍺 Installation avec Homebrew

Si vous utilisez Homebrew, l’installation est encore plus simple :

```bash
brew install sst/tap/opencode
```

Cela installe automatiquement OpenCode et le rend accessible dans votre terminal.

---

## 🔐 Authentification

OpenCode fonctionne avec des modèles d’intelligence artificielle. Vous devez donc vous connecter avec une clé API.

### 1. Lancez la commande :

```bash
opencode auth login
```

### 2. Suivez les instructions pour coller votre clé API. Vous pouvez en obtenir une sur [opencode.ai/auth](https://opencode.ai/auth) ou utiliser une clé OpenAI si vous en avez déjà une.

---

## 🤖 Fonctionnement avec Ollama

OpenCode peut aussi fonctionner avec [Ollama](https://ollama.com), une solution locale pour exécuter des modèles LLM sur votre propre machine.

### Pour utiliser OpenCode avec Ollama :

1. Installez Ollama sur votre Mac :  
   [Télécharger Ollama](https://ollama.com/download)

2. Lancez Ollama dans le terminal :

```bash
ollama run llama3
```

3. Dans OpenCode, configurez l’authentification pour utiliser Ollama :

```bash
opencode auth login
```

Puis sélectionnez **Ollama** comme fournisseur de modèle.

Cela permet à OpenCode d’interagir avec votre projet en utilisant un modèle IA local, sans dépendre d’un service cloud.

---

## 🚀 Utilisation dans un projet

Une fois installé et authentifié :

1. Allez dans le dossier de votre projet :

```bash
cd /chemin/vers/mon/projet
```

2. Lancez OpenCode :

```bash
opencode
```

3. Initialisez le projet :

```bash
/init
```

4. Posez vos questions dans le terminal, comme :

```bash
Quels sont les fichiers qui gèrent les appels API ?
```

---

## 🧩 Remarques

- OpenCode fonctionne en ligne de commande, mais l’interface est très intuitive.
- Il est compatible avec macOS (Intel et Apple Silicon).
- Vous pouvez l’utiliser avec différents fournisseurs IA (OpenAI, Claude, Ollama, etc.).
- Il ne modifie pas votre code, sauf si vous lui demandez explicitement.

---

OpenCode est un outil puissant pour les développeurs qui veulent **gagner du temps** et **mieux comprendre leur code**, sans dépendre d’un navigateur ou d’un service cloud.
```

---

Tu veux que je t’aide à rédiger une page pour Ollama ou à créer un exemple de session avec OpenCode + Ollama ? Je peux t’en préparer une aussi.