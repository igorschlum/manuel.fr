---
sidebar_position: 5
---

# Python

**Python** est un langage de programmation largement utilisé dans les applications Web, le développement de logiciels, la science des données et le machine learning¹. Il est efficace, facile à apprendre et peut s'exécuter sur de nombreuses plateformes¹. Python est également apprécié pour sa syntaxe claire et simple, ce qui facilite l'apprentissage des concepts de base de la programmation².

Voici comment vous pouvez installer Python sur votre Mac :

1. Rendez-vous sur le [site officiel de Python](https://www.python.org/downloads/macos/).

2. Téléchargez la version la plus récente de Python 3 (la 3.12.7). Une version « binaire universelle » de Python, qui fonctionne nativement sur les nouveaux processeurs Intel et les anciens processeurs PPC du Mac, y est disponible.

3. Une fois le téléchargement terminé, localisez le fichier d’installation et double-cliquez dessus pour lancer le processus d’installation.

4. Vous obtiendrez un certain nombre de choses après installation : Un dossier Python 3.12 dans votre dossier Applications. Dedans vous trouverez IDLE, l'environnement de développement qui fait partie des distributions Python officielles ; PythonLauncher, qui gère le lancement de scripts Python depuis le Finder.

5. Un framework /Library/Frameworks/Python.framework, qui inclut l’exécutable Python et ses bibliothèques. L’installateur ajoute ce chemin à votre PATH.

6. Pour désinstaller MacPython, vous pouvez simplement supprimer ces trois choses.

7. Un lien symbolique vers l'exécutable Python est placé dans /usr/local/bin/.

8. Pour vérifier que Python a été correctement installé, ouvrez l'interpréteur des commandes. Tapez "python3" dans l'invite de commandes.

9. Pour tester votre installation, vous pouvez essayer d'exécuter un script simple comme `print('intelsec x telnet')`.

## Installer PIP

1. Ouvrez un terminal et taper:
```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
```

2. Un fichier python va s'installer. Lancez le grâce à cette commande:
```bash
python3 get-pip.py
```

3. Pour vérifier que pip est bien installé, faites:
```bash
pip3 --version
```
N'oubliez pas que Python est livré avec un environnement de développement appelé IDLE, qui vous permet d'écrire, de tester et éventuellement de déboguer vos scripts. Bonne programmation ! 🐍

Si vous voulez apprendre le langage python en vu d'usages en intelligence artificielle, vous pouvez regarder cette série de vidéos de formation très bien faite et créé par Guillaume Saint-Cirgue.

https://www.youtube.com/watch?v=82KLS2C_gNQ&list=PLO_fdPEVlfKqMDNmCFzQISI2H_nJcEDJq

## Installer IPyton


IPython est un shell interactif pour Python, avec des fonctionnalités comme l'auto-complétion et la gestion d'erreurs, très utile en intelligence artificielle pour tester des algorithmes et visualiser des données. Il est aussi à la base des notebooks Jupyter. Pour l'installer, utilisez la commande suivante dans votre terminal

```bash
pip install ipython
```

## installer la librairie Python pour Ollama

On peut faire des scripts en langage python pour automatiser des tâches avec Ollama. Pour cela, il faut installer la librairie Python pour Ollama.

```bash
pip install ollama
```

## Ecrire un premier script en Python pour Ollama

Vous pouvez taper depuis le terminal la commande ipyton pour accéder à l'interpréteur python.

le signe In [1] est affiché dans le terminal, cela indique que le programme a commencé à fonctionner.

Vous pouvez taper des commandes en Python et les exécuter avec la touche entrée.

Dans la première ligne, on va taper "import ollama" pour importer la librairie Python pour Ollama.

Dans la deuxième ligne, on va taper "question = 'what is the color of the sky?'

Sur la troisième ligne, on va indiquer les paramètres nécessaires au bon fonctionnement d'Ollama. Pour cela, on va devoir les écrire sur plusieurs lignes et on va utiliser (majuscule + retour à la ligne) pour écrire plusieurs commandes dans une même instruction.

```bash
stream = ollama.chat(
   ...: model="llama3.2", stream=True,
   ...: messages = [
   ...: { "role": "user", 'content': f"Question: {question}"}
   ...: ]
   ...: )
   ...: for chunk in stream:
   ...:     print(chunk['message']['content'], end='', flush=True)
```

A la fin vous pouvez faire Enter pour éxecuter le script python et vous devriez voir la réponse d'Ollama dans le terminal.

L'intérêt de passer par une commande python plutôt que de passer par une commande directe dans le terminal, est qu'on peut ensuite enregistrer cette commande dans un fichier et lancer le script. On peut aussi lui donner des paramètres différents pour changer son comportement et on peut faire varier les paramètres d'Ollama.

