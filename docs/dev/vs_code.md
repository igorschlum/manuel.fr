---
sidebar_position: 4
---

# VS Code

Visual Studio Code (VS Code) est un éditeur de code gratuit développé par Microsoft. Il est très populaire car il est léger, puissant et s'adapte à tous les types de développement.

Grâce à l'intelligence artificielle, VS Code peut vous aider à écrire du code plus rapidement et avec moins d'erreurs. Au lieu de payer pour des services en ligne comme ChatGPT, vous pouvez utiliser des modèles d'IA locaux installés sur votre Mac avec Ollama. Cela vous permet d'être aidé gratuitement et en toute confidentialité.

## Installer VS Code

1. Rendez-vous sur le site officiel : [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Cliquez sur le bouton **Télécharger pour Mac**
3. Une fois le téléchargement terminé, ouvrez le fichier téléchargé depuis votre dossier **Téléchargements**
4. Glissez-déposez l'application **Visual Studio Code** dans votre dossier **Applications**
5. Lancez VS Code depuis votre dossier Applications ou via Spotlight (Cmd + Espace)

## Utiliser Ollama dans VS Code

Voici la méthode la plus simple pour utiliser des modèles d'IA locaux dans VS Code avec Ollama.

### Prérequis

Avant de commencer, assurez-vous d'avoir :

- **Ollama installé** sur votre Mac (voir la page [Installer Ollama](/install/))
- **Visual Studio Code installé** (voir section ci-dessus)
- **L'extension GitHub Copilot Chat installée** dans VS Code
- **Une connexion GitHub active** dans VS Code

### Installer l'extension GitHub Copilot Chat

1. Ouvrez VS Code
2. Cliquez sur l'icône **Extensions** dans la barre latérale gauche (ou appuyez sur `Cmd + Shift + X`)
3. Recherchez **GitHub Copilot Chat**
4. Cliquez sur **Installer**

> **Note :** Vous devrez vous connecter à votre compte GitHub pour activer l'extension. Cliquez sur le bouton de connexion qui apparaît et suivez les instructions.

### Configurer Ollama dans VS Code

Une fois toutes les prérequis remplis, ouvrez le **Terminal** de votre Mac et tapez la commande suivante :

```bash
ollama launch vscode
```

Cette commande configure automatiquement VS Code pour qu'il puisse voir et utiliser vos modèles Ollama installés localement.

### Utiliser un modèle local dans le chat

Après avoir lancé la commande :

1. Ouvrez **Copilot Chat** dans VS Code (icône de chat dans la barre latérale ou `Cmd + Shift + P` puis tapez "Copilot Chat: Open Chat")
2. Cliquez sur le **sélecteur de modèle** (souvent affiché en bas du panneau de chat ou dans les paramètres du chat)
3. Choisissez **Ollama** ou **Local** comme fournisseur
4. Sélectionnez le modèle que vous avez installé (par exemple `qwen3.5:122b`, `mistral`, etc.)

Vous pouvez maintenant discuter avec l'IA et demander de l'aide pour écrire du code, expliquer des concepts, ou corriger des erreurs — le tout avec un modèle qui tourne localement sur votre Mac !

### Dépannage

Si votre modèle n'apparaît pas dans le sélecteur :

- **Vérifiez votre connexion GitHub** dans VS Code (en bas à gauche, cliquez sur l'icône de compte)
- **Assurez-vous que Ollama fonctionne** : ouvrez un terminal et tapez `ollama list` pour voir vos modèles installés
- **Redémarrez VS Code** après avoir lancé `ollama launch vscode`
- **Vérifiez que vous avez bien installé un modèle** : si la liste est vide, installez-en un avec `ollama pull llama3.2` (ou un autre modèle de votre choix)

## Extensions utiles selon vos besoins

En plus de GitHub Copilot Chat, voici d'autres extensions qui peuvent vous être utiles selon ce que vous voulez faire :

### Exécuter du code

Pour exécuter du code directement depuis VS Code sans ouvrir de terminal :

- Installez l'extension **Code Runner**

### Développer en Python

Pour écrire et déboguer des scripts Python :

- **Python** (par Microsoft)
- **Python Debugger**
- **Pylance**

### Développer en PHP

Pour le développement PHP :

- **PHP Intelephense**
- **PHP Profiler**
- **IntelliPHP**

### HTML et CSS

Pour travailler avec HTML et CSS :

- **HTML CSS Support**

### Interface en français

Pour avoir VS Code entièrement en français :

- **French Language Pack**

### Containers et développement web

Pour travailler avec Docker ou des environnements isolés :

- **Docker**
- **Dev Containers**

### Développer en Go

Si vous souhaitez compiler Ollama vous-même ou travailler avec Go :

- **Go** (par Go Team)

### Alternative avancée : Code GPT

> **Note :** Code GPT était auparavant recommandé comme solution principale, mais la méthode avec GitHub Copilot Chat est maintenant plus simple et mieux intégrée. Code GPT reste une alternative si vous avez des besoins spécifiques.

L'extension **Code GPT** permet également d'utiliser Ollama dans VS Code. Elle peut être utile si vous avez des besoins avancés ou si vous préférez son interface. Cependant, pour la plupart des utilisateurs qui veulent simplement utiliser des modèles locaux, GitHub Copilot Chat est la solution la plus simple et la mieux maintenue.
