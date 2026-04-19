---
sidebar_position: 2.6
title: "Copilot CLI"
---

## Développer avec Copilot CLI et Ollama

**GitHub Copilot CLI** est l'agent IA de codage officiel de GitHub pour le terminal. Il comprend votre codebase, répond à vos questions, édite des fichiers, exécute des commandes shell et aide à debugger, refactoriser et documenter.

Grâce à l'intégration Ollama, vous pouvez utiliser n'importe quel modèle Ollama (local ou cloud) à la place des modèles hébergés par GitHub.

:::tip Copilot CLI dans VS Code
Cette intégration fonctionne dans le terminal intégré de VS Code. Ce n'est pas la même chose que l'intégration directe dans GitHub Copilot Chat (l'interface graphique). Pour le chat dans l'éditeur, utilisez `ollama launch vscode`. Les deux peuvent être utilisés ensemble : CLI pour les commandes terminal + Chat pour l'édition visuelle.
:::

---

## Installer Copilot CLI

**Prérequis :**

- Ollama installé et lancé
- GitHub Copilot CLI installé :

```bash
brew install copilot-cli
```

---

## Lancer Copilot CLI avec Ollama

La façon la plus simple est d'utiliser `ollama launch` :

```bash
ollama launch copilot
```

Ollama configure Copilot CLI pour utiliser vos modèles et le lance prêt à l'emploi.

Vous pouvez aussi préciser directement le modèle :

```bash
ollama launch copilot --model kimi-k2.5:cloud
```

Ou avec un modèle local :

```bash
ollama launch copilot --model qwen3.5
```

---

## Configuration manuelle (option avancée)

Si vous préférez tout contrôler :

```bash
export COPILOT_PROVIDER_BASE_URL=http://localhost:11434/v1
export COPILOT_PROVIDER_API_KEY=
export COPILOT_PROVIDER_WIRE_API=responses
export COPILOT_MODEL=qwen3.5

copilot
```

---

## Mode non-interactif (headless)

Idéal pour Docker, CI/CD ou scripts :

```bash
ollama launch copilot --model kimi-k2.5:cloud --yes -- -p "comment fonctionne ce repository ?"
```

Le flag `--yes` télécharge automatiquement le modèle et passe directement les arguments à Copilot CLI.

---

## Choisir un modèle

**Modèles cloud (rapides et performants) :**

- **kimi-k2.5:cloud** — modèle cloud très performant
- **glm-5:cloud** — excellent en raisonnement
- **qwen3.5:cloud** — rapide et efficace

**Modèles locaux (100 % privés) :**

- **qwen3.5** — modèle local d'Alibaba
- **glm-4.7-flash** — modèle local rapide

:::tip Contexte
Pour les gros projets, on recommande un modèle avec un contexte ≥ 64k tokens. Pour comprendre ce qu'est la taille de contexte et comment l'ajuster, consultez la page [Commandes — La taille de contexte](/use#la-taille-de-contexte).
:::

---

## Commandes utiles

| Commande | Usage |
|---|---|
| `ollama launch copilot` | Installation + lancement complet |
| `ollama launch copilot --model XXX` | Lancer avec un modèle précis |
| `copilot` | Lancer Copilot CLI (après configuration) |
| `ollama launch vscode` | Intégration directe dans VS Code Copilot Chat |

---

## Résumé

Avec Copilot CLI et Ollama, vous pouvez :

- **lancer un assistant de codage** en une seule commande (`ollama launch copilot`)
- **choisir librement votre modèle** — local ou cloud
- **automatiser des tâches** en mode headless pour vos pipelines CI/CD
- **utiliser le terminal de VS Code** avec tous les modèles Ollama