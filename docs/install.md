---
sidebar_position: 1
---

# Installation

Nous allons découvrir ensemble **l'intelligence artificielle** sur Mac.

## Prérequis

Vous devez avoir un Mac M1. Si vous ne savez pas ce que c'est, visitez [cette page Wikipedia](https://fr.wikipedia.org/wiki/Apple_M1). Si vous n'en avez pas, vous pouvez apprendre la théorie et pas la pratique.

Vous devez avoir envie de découvrire l'intelligence artificielle en utilisation libre et gratuite. Nous allons utiliser l'application Ollama.

Vous devez avoir du temps devant vous, pour avancer pas à pas dans ce site.

Et vous devez avoir quelques notions d'anglais, mais nous traduirons au fur et à mesure tous les termes anglais que nous croiserons.

N'hésitez pas à m'écrire si vous ne comprenez pas une étape, tout est fait pour être très accessible.

C'est parti !

### Premier lancement

Si ce n'est déjà fait, commencez par **[téléchargez Ollama](https://ollama.ai/download)**

Vous avez dans votre dossier téléchargement le fichier Ollama-darwin.zip

Double cliquez dessus (pour décompresser l'application) et déplacez la dans votre dossier applications.

Lancez l'application Ollama,

![Attention](../static/img/warning.png)


Un dialogue apparaît pour vous demander de confirmer, car c'est une application chargée depuis l'internet et pas depuis l'AppStore d'Apple. Vous pouvez confirmer.

Ollama se lance et si vous ne l'avez pas déplacé dans le dossier Applications, un dialogue en anglais vous proposera de le faire

![Attention](../static/img/move.png)

Cliquez sur **Move to application**

Un autre dialogue en anglais vous souhaite la bienvenue et vous présente le logo Ollama.

![Attention](../static/img/next.png)

Cliquez sur Next.








- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
