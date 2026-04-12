---
sidebar_position: 14
title: "Pi"
---

## Pi : un agent de codage minimal et extensible

**Pi** est un agent de codage open-source, léger et modulaire. Il sait faire le minimum vital — lire, écrire, modifier des fichiers et exécuter des commandes — et se compléter au fil du temps grâce à un **système d'extensions**.

Contrairement à des assistants plus lourds, Pi se contente de quatre outils de base : `read`, `write`, `edit` et `bash`. Tout le reste s'ajoute selon vos besoins, en installant des extensions.

La raison principale d'installer Pi ici, c'est pour utiliser **Paperclip avec Ollama**. Pi fait le pont entre les deux et permet de faire tourner Paperclip avec des modèles locaux.

---

## Installer Pi

La façon la plus simple sur Mac est d'utiliser Ollama :

```bash
ollama launch pi
```

Cette commande installe Pi, configure Ollama comme fournisseur de modèles (y compris les outils web), et ouvre une session interactive. Tout est prêt en une seule étape.

Pour configurer Pi sans lancer de session :

```bash
ollama launch pi --config
```

Vous pouvez aussi préciser directement un modèle :

```bash
ollama launch pi --model qwen3.5:cloud
```

---

## Installer Pi manuellement

Si vous préférez installer Pi sans passer par `ollama launch` :

```bash
npm install -g @mariozechner/pi-coding-agent
```

Il faut ensuite configurer Ollama comme fournisseur de modèles. Créez ou modifiez le fichier `~/.pi/agent/models.json` :

```json
{
  "providers": {
    "ollama": {
      "baseUrl": "http://localhost:11434/v1",
      "api": "openai-completions",
      "apiKey": "ollama",
      "models": [
        {
          "id": "qwen3.5"
        }
      ]
    }
  }
}
```

Puis définissez le fournisseur et le modèle par défaut dans `~/.pi/agent/settings.json` :

```json
{
  "defaultProvider": "ollama",
  "defaultModel": "qwen3.5"
}
```

---

## Le système d'extensions

La force de Pi, c'est qu'il ne fait que ce que vous lui demandez — et rien de plus. Vous ajoutez des capacités au besoin, en installant des extensions depuis npm ou GitHub :

```bash
pi install npm:@foo/une-extension
pi install git:github.com/utilisateur/repo@v1
```

Les extensions s'invoquent ensuite via des commandes `/skill:nom`.

### Recherche web

L'extension `@ollama/pi-web-search` permet à Pi de chercher sur le web et de récupérer des pages. Si vous avez lancé Pi via `ollama launch`, elle est déjà incluse. Sinon :

```bash
pi install npm:@ollama/pi-web-search
```

### Autoresearch

L'extension `pi-autoresearch` ajoute des boucles d'expérimentation autonomes. Vous lui donnez une métrique mesurable (vitesse des tests, taille du bundle, score Lighthouse...) et elle l'optimise en faisant des essais, en mesurant les résultats, en gardant les améliorations et en annulant les régressions.

```bash
pi install https://github.com/davebcn87/pi-autoresearch
```

Utilisation :

```bash
/autoresearch optimize unit test runtime
```

---

## Pourquoi installer Pi ?

Pi est utile pour :

- avoir un **agent de codage léger** qui fait l'essentiel sans surcharge
- **ajouter les capacités que vous voulez** via les extensions
- utiliser **Paperclip avec Ollama** — un bon moyen de faire tourner Paperclip avec des modèles locaux

Vous pouvez parcourir toutes les extensions disponibles sur [pi.dev/packages](https://pi.dev/packages).