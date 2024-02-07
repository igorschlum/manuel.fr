---
sidebar_position: 2
---

# Python

**Python** est un langage de programmation largement utilisé dans les applications Web, le développement de logiciels, la science des données et le machine learning¹. Il est efficace, facile à apprendre et peut s'exécuter sur de nombreuses plateformes¹. Python est également apprécié pour sa syntaxe claire et simple, ce qui facilite l'apprentissage des concepts de base de la programmation².

Voici comment vous pouvez installer Python sur votre Mac :

1. Rendez-vous sur le site officiel de Python⁶.

2. Téléchargez la version la plus récente de Python 3⁶. Une version « binaire universelle » de Python, qui fonctionne nativement sur les nouveaux processeurs Intel et les anciens processeurs PPC du Mac, y est disponible⁶.

3. Une fois le téléchargement terminé, localisez le fichier d’installation et double-cliquez dessus pour lancer le processus d’installation[^10^].

4. Vous obtiendrez un certain nombre de choses après installation : Un dossier Python 3.12 dans votre dossier Applications. Dedans vous trouverez IDLE, l'environnement de développement qui fait partie des distributions Python officielles ; PythonLauncher, qui gère le lancement de scripts Python depuis le Finder⁶.

5. Un framework /Library/Frameworks/Python.framework, qui inclut l’exécutable Python et ses bibliothèques. L’installateur ajoute ce chemin à votre PATH⁶.

6. Pour désinstaller MacPython, vous pouvez simplement supprimer ces trois choses⁶.

7. Un lien symbolique vers l'exécutable Python est placé dans /usr/local/bin/⁶.

8. Pour vérifier que Python a été correctement installé, ouvrez l'interpréteur des commandes. Tapez "python3" dans l'invite de commandes⁹.

9. Pour tester votre installation, vous pouvez essayer d'exécuter un script simple comme `print('Hello world!')`⁶.

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
N'oubliez pas que Python est livré avec un environnement de développement appelé IDLE, qui vous permet d'écrire, de tester et éventuellement de déboguer vos scripts⁶. Bonne programmation ! 🐍