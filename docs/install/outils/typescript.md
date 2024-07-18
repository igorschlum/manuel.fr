---
sidebar_position: 6
---

# TypeScript

**TypeScript** est un outil puissant qui peut aider les développeurs à écrire du code JavaScript plus robuste, plus lisible et plus facile à maintenir.

TypeScript permet de définir des types pour les variables, les fonctions et les objets, ce qui permet de détecter les erreurs avant l'exécution. Le typage statique rend le code plus lisible et compréhensible pour les développeurs.

Les erreurs de typage sont ainsi détectées à la compilation, ce qui permet d'éviter les erreurs d'exécution et facilite la refactorisation du code et la correction des erreurs.

TypeScript s'intègre parfaitement avec JavaScript, ce qui permet de l'utiliser dans des projets existants. TypeScript peut être utilisé pour le développement web, le développement mobile, le développement d'applications back-end et bien plus encore.

TypeScript peut également être utilisé pour améliorer les sites [Docusaurus](/docs/install/outils/docusaurus)

## installer TypeScript sur votre Mac

Vous devez avoir installé préalablement npm

Ouvrez l'application Terminal et il est conseillé de l'installer globalement pour que typescript soit accessible depuis tous les dossiers.

Si vous voulez installer typescript pour tous les utilisateurs du Mac, tapez :

```bash
sudo npm install -g typescript
```

Pour appeler Typescript, on utilise la commande tsc. Pour savoir quelle version de typescript, et pour verifier que typescript est bien installer on tape

```bash
tsc -v
```

version 5.4.2

C'est la version que j'ai à la date de la mise à jour de cette page.

## installer ts-node

Il faut maintenant que nous installions ts-node qui permet d'executer des fichiers typescript directement dans le terminal sans les compiler préalablement en javascript.

Cela permet de mettre à jour le code Javascript directement quand il est modifié et donc ça accélère le cycle de développement. Cela fonctionne avec react.


```bash
sudo npm install -g ts-node
```

Nous allons vérifier si ts-node est bien installé en tapant dans le terminal

```bash
ts-node --version
```

j'utilise à la date de mise à jour de cette page, la version 

v10.9.2

## installer save-dev


```bash
npm install --save-dev typescript
```


On va commencer par vérifier que l'on peut appeler Ollama en javascript.

Il faut installer la librairie Javascript (et Python) d'Ollama

en tapant

```bash
pip install ollama
```

Puis j'ai pris l'exemple Javascript sur le site d'Ollama que j'ai sauvé dans un fichier demo.mjs, je l'ai adapté pour qu'il me réponde en français. Je suis obligé de le lui préciser, sinon il commence à me répondre en français, puis passe à l'anglais.

```bash
import ollama from 'ollama'

const response = await ollama.chat({
  model: 'llama2',
  messages: [{ role: 'user', content: "Peux-tu m'expliquer en français pourquoi le ciel est bleu?" }],
})
console.log(response.message.content)
```

J'exécute le script dans le terminal

```bash
node demo.mjs
```

Et j'ai bien une réponse en français :

Bien sûr ! Le ciel bleu est une chose très intéressante de observer et il y a plusieurs raisons pour lesquelles le ciel peut paraître bleu. Voici quelques-unes des raisons les plus courantes :

1. Réflexion de la lumière solaire : Lorsque la lumière solaire arrive sur Terre, elle traverse l'atmosphère qui réfléchit une partie de cette lumière. La longueur d'onde bleue est réfléchie plus que les autres couleurs, ce qui rend le ciel bleu.
2. Dispersion de la lumière : Lorsque la lumière solaire traverse l'atmosphère, elle est décomposée en ses différentes couleurs selon la longueur d'onde. La lumière bleue est déphasée par rapport à la lumière rouge et orange, ce qui crée l'illusion d'un ciel bleu.
3. Scattering des molécules : Les molécules de l'atmosphère scattent la lumière solaire en toutes les directions, mais plus les molécules sont petites, plus elles scattent une plus grande partie de la lumière. Les molécules d'oxygène et de nitrogène sont généralement plus petites que les molécules de dioxyde de carbone, ce qui explique pourquoi le ciel est plus bleu au lever et au coucher du soleil.
4. Pollution atmosphérique : La présence de particules dans l'atmosphère peut également affecter la couleur du ciel. Par exemple, si il y a trop de particules dans l'air, le ciel peut paraître gris ou noir, plutôt que bleu.

En résumé, le ciel bleu est causé par une combinaison de la réflexion de la lumière solaire, de la dispersion de la lumière, du scattering des molécules et de la présence de particules dans l'atmosphère.

