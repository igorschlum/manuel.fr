---
sidebar_position: 2
title: "Coder avec Ollama"
---

## Coder depuis le terminal avec Ollama

Ollama permet d’utiliser des **outils d’assistance au code directement depuis votre terminal**.  
Grâce à la commande `ollama launch`, vous pouvez **configurer et lancer des assistants de codage** comme Claude Code, Codex, OpenCode ou Droid sans avoir à créer de fichiers de configuration ou définir manuellement des variables d’environnement.
---

## 🛠 Lancer un outil de codage

La commande principale pour démarrer est :

```bash
ollama launch
```

Elle vous guide dans le choix de l’outil et du modèle à utiliser, puis lance cet assistant de codage.

Vous pouvez aussi lancer directement un outil particulier :

```bash
ollama launch claude
ollama launch opencode
ollama launch codex
ollama launch droid
```

Chaque outil offre une expérience différente, mais tous exploitent des modèles de langage puissants pour générer, analyser ou corriger du code à partir de simples prompts (des instructions textuelles).

:::tip Cheat-sheet
```bash
ollama launch
ollama launch claude
ollama launch opencode
ollama launch codex
ollama launch droid
```

Exemples de prompts :

```text
Explique ce bloc de code et propose des tests.
Corrige cette erreur TypeScript.
```
:::

---

🧠 Comment ça marche

Plutôt que de faire des réglages complexes :
- Pas de fichiers de config à créer,
- Pas de variables d’environnement à définir,

`ollama launch` gère tout automatiquement pour vous : choix du modèle, configuration interne et exécution de l’outil.

Ensuite, le modèle interprète vos prompts pour vous aider avec des tâches de codage comme :
- générer du code à partir d’une description,
- corriger un fichier ou une erreur,
- expliquer un morceau de code,
- générer des tests ou des exemples.

Vous interagissez toujours via le terminal.

---

📦 Quelques assistants disponibles

🧩 Claude Code

Un assistant de codage agent capable de lire, modifier et exécuter du code. Il fonctionne bien avec des modèles locaux et cloud fournis par Ollama.

🧑‍💻 Codex

L’assistant de codage orienté code d’OpenAI, utilisable via l’intégration Ollama. Il comprend des prompts de code et génère des solutions ou des suggestions.

🧠 OpenCode

Un outil de codage open-source qui peut fonctionner avec une large variété de modèles de plusieurs fournisseurs, y compris les modèles locaux d’Ollama.

🤖 Droid

Un autre assistant de codage intégré que vous pouvez lancer avec la même commande `ollama launch`.

---

📌 Exemples concrets

🔹 Lancer Claude Code et poser une question

```bash
ollama launch claude
```

Puis, dans l’interface interactive :

```text
Fais une fonction Python qui trie une liste de chaînes par longueur.
```

Le modèle vous répond avec le code correspondant.

---

🔹 Corriger une erreur depuis le terminal

Toujours après avoir lancé un assistant :

```text
Voici mon code JavaScript avec une erreur de syntaxe, peux-tu la corriger ?
```

L’assistant analyse et propose une version corrigée.

---

🧩 Choisir un modèle

Ollama vous propose souvent de choisir :
- des modèles locaux (exécutés sur votre machine),
- ou des modèles cloud (exécutés sur des serveurs distants).

Les modèles cloud ont souvent plus de contexte ou de puissance, mais les modèles locaux sont plus respectueux de la vie privée et ne nécessitent pas de connexion internet.

Quelques modèles qui fonctionnent bien pour des tâches de codage :
- glm-4.7-flash
- qwen3-coder
- gpt-oss:20b
- ou des variantes cloud de ces mêmes modèles

---

🧠 Résumé

Avec Ollama et la commande ollama launch, vous pouvez :
- lancer un assistant de codage en une seule commande,
- interagir avec des modèles qui génèrent ou analysent du code,
- travailler sur du code directement depuis un terminal sans config complexe,
le tout en choisissant entre modèles locaux ou cloud en fonction de vos besoins.

C’est une façon puissante et flexible d’intégrer l’IA dans votre workflow de développement.

---

## 🧠 Ce que couvre cette page

✔️ **Commandes essentielles** (`ollama launch`, outils spécifiques)  
✔️ **Explication simple** de ce qu’il se passe (vos prompts → modèles → code)  
✔️ **Exemples concrets** pour poser des prompts depuis le terminal  
✔️ **Différentes intégrations** disponibles (Claude Code, Codex, OpenCode, Droid)  
✔️ **Choix de modèles** (local vs cloud)
