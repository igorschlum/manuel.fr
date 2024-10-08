---
sidebar_position: 1
---
A vous de jouer, et installons [Ollama](https://ollama.ai) l'outil libre et gratuit, pour que vous puissiez pratiquer l'intelligence artificielle sur votre Macintosh. Vous devez avoir du temps devant vous, pour avancer pas à pas dans ce site.

# Prérequis

Vous devez avoir un Mac M1, M2 ou M3. Si vous ne savez pas ce que c'est, visitez [cette page Wikipedia](https://fr.wikipedia.org/wiki/Apple_M1). Si vous n'en avez pas, vous pouvez consulter sur internet comment installer Ollama sur votre PC ou sur votre ancien Macintosh.

Et vous devez avoir quelques notions d'anglais, mais nous traduirons au fur et à mesure tous les termes anglais que nous croiserons, comme [LLM](/docs/learn/lectures/glossaire#LLM)

N'hésitez pas à m'écrire si vous ne comprenez pas une étape, tout est fait pour être très accessible.

C'est parti !

# Installation

Si ce n'est déjà fait, commencez par **[téléchargez Ollama](https://ollama.ai/download)**

Vous avez dans votre dossier téléchargement le fichier Ollama-darwin.zip

Double cliquez dessus (pour décompresser l'application) si la décompression n'est pas automatique et déplacez la dans votre dossier applications.

Lancez l'application Ollama,

![Attention](/img/warning.png)


Un dialogue apparaît pour vous demander de confirmer, car c'est une application chargée depuis l'internet et pas depuis l'AppStore d'Apple. Vous pouvez confirmer.

Ollama se lance et si vous ne l'avez pas déplacé dans le dossier Applications, un dialogue en anglais vous proposera de le faire

![Attention](/img/move.png)

Cliquez sur **Move to application**

Un autre dialogue en anglais vous souhaite la bienvenue et vous présente le logo Ollama.

![Attention](/img/next.png)

Cliquez sur Next.

## Ouvrir l'application terminal

Pour lancer Ollama et pour charger un premier [LLM](/docs/learn/lectures/glossaire#LLM), il faut lancer l'application Terminal qui se trouve dans le dossier Utilitaire de votre Mac.

Taper dans le terminal la commande:

```bash
ollama run llama3.1
```

Le mot `run` permet d'executer le modèle `llama3.1`. Si le modèle n'est pas chargé, il va se charger (cela occupe un peu moins de 4 Giga sur le disque). Ça veut dire qu'une fois Llama3.1 chargé sur votre ordinateur, vous n'avez plus besoin de connexion internet pour l'interroger. Vous pouvez le faire gratuitement, autant de fois que vous voulez sans risquer de recevoir de la publicité en rapport avec vos recherches.

![run llama3](/img/llama3.png)