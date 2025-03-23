---
sidebar_position: 4
---

Je vous propose de configurer Ollama pour le rendre encore plus performant

# Utiliser une interface utilisateur plus performante

Dans son utilisation basique, on lance l'application Ollama depuis le terminal en tapant

```bash
ollama run lama3.2
```

Cette commande va lancer l'application Ollama si elle ne tourne pas déjà, charger le modèle lama3.2 et vous donner la main pour que vous puissiez taper votre "prompt", c'est à dire la question que vous allez poser à Ollama.

Ce que vous ne voyez pas, c'est que l'application Ollama va installer un serveur qui est disponible depuis votre terminal en tapant dans la barre d'URL http://127.0.0.1:11434

Si Ollama fonctionne normalement, vous verrez apparaître "Ollama is running" dans votre navigateur.

En informatique, 127.0.0.1 c'est l'adresse IP locale de votre ordinateur. Sur tous les ordinateurs, en tapant 127.0.0.1, on accède au serveur local de son ordinateur s'il y en a un qui tourne.

:11434, c'est le "port" utilisé par le serveur. Vous pouvez sur une même machine avoir plusieurs serveurs qui tournent sur l'adresse IP 127.0.0.1, mais chacun sur un port. Le port par défaut est le port 80. Si vous ne l'indiquez pas, il est choisi d'office.

Ollama s'est installé par défaut sur le port 11434. On peut taper une commande pour changer de port pour Ollama au cas où un autre serveur tourne sur votre ordinateur sur ce port, mais c'est très peu probable.

Il ya des applications qui vont "discuter" avec Ollama par le biais du serveur et qui vous permettent de choisir une interface agréable pour ce faire.

Je vous conseille pour cela l'application Msty que l'on peut télécharger et installer ici. Cette application est intéressa

# garder un LLM en mémoire

Si vous utilisez un Mac avec beaucoup de mémoire, vous allez choisir de travailler avec un LLM puissant pour avoir la meilleur qualité de réponse. Or les LLM puissants sont souvent les stockés dans des fichiers volumineux. Plus le LLM est pertinent, plus il est lent à répondre et long à charger. Comme par défaut Ollama libère la mémoire des LLMs toutes les 5 minutes si le LLM n'est pas utilisé, on se retrouve rapidement à ce que le LLM se recharge régulièrement ce qui ralenti encore plus le travail avec l'IA.

pour l'instant, c'est un peu compliqué de conserver un LLM en mémoire.

Il faut ouvrir le terminal et indiquer ici le nom de votre modèle. Personnellement j'utilise le modèle llama3.1:70b-instruct-q8_0 qui occupe 74 Go de mémoire.

```bash
curl http://localhost:11434/api/generate -d '{"model": "llama3.1:70b-instruct-q8_0", "keep_alive": -1}'
```

# Augmenter la mémoire disponible pour le GPU

Quand vous utilisez un LLM avec Ollama, l'application essaie de loger le LLM dans la mémoire alouée aux GPU. MacOS alloue automatiquement de la mémoire vive disponible pour les GPU, mais dans la limite de 66% de la mémoire totale.

les GPU, sont des processeurs simple qui savent exécuter beaucoup de tâches en parallèle. Ils ont été créés principalement pour accélérer l'affichage des sur les écrans et sont le plus souvent dans des cartes graphiques.

Si vous avez un Mac et que vous voulez attribuer plus de RAM aux GPU. Vous pouvez le faire avec la commande :


sur un Mac 32 Go de RAM, on peut pousser la GPU jusqu'à 28 Go de RAM
```bash
sudo sysctl iogpu.wired_limit_mb=28672
```
sur un Mac 192 Go de RAM, on peut pousser la GPU jusqu'à 180 Go de RAM
```bash
sudo sysctl iogpu.wired_limit_mb=184320
```
Pour remettre la valeur standard il faut taper dans le terminal
```bash
sudo sysctl iogpu.wired_limit_mb=0
```

# Partager Ollama sur votre réseau local sur MacOS

Vous pouvez partager l'application Ollama sur votre réseau local en wifi ou par internet. Cela veut dire que vous pouvez y accéder depuis votre téléphone mobile ou depuis un autre ordinateur de votre réseau. C'est pratique en famille ou en entreprise.

Dans son utilisation basic le logiciel Ollama que vous avez installé n'est utilisable que depuis l'ordinateur sur lequel il tourne et on le lance depuis le terminal car il écoute uniquement sur `localhost` (127.0.0.1), ce qui le rend inaccessible depuis d'autres ordinateurs.


## configurer Ollama pour écouter les appels réseau


Ollama utilise des variables d'environnement pour sa configuration. La variable clé ici est `OLLAMA_HOST`.

### Option 1 (Temporaire, pour tester)

Cette modification ne sera valable que pour la session Terminal en cours. C'est idéal pour tester rapidement.

1.  Ouvrez l'application "Terminal" (Applications/Utilitaires).

2.  Tapez les commandes suivantes, une par ligne, en appuyant sur Entrée après chaque ligne:

```bash
export OLLAMA_HOST=0.0.0.0:11434
ollama serve
```

La première ligne configure la variable d'environnement. La deuxième redémarre le service Ollama avec la nouvelle configuration.  Ne fermez pas cette fenêtre de Terminal, sinon le service s'arrêtera.

### Option 2 (Permanent)

Cette modification sera appliquée à chaque démarrage d'Ollama. C'est la méthode recommandée pour une utilisation régulière.

1.  **Créer ou modifier le fichier de service systemd:** Ollama utilise `systemd` pour gérer son démarrage et son exécution.  Nous allons modifier le fichier de service.

2.  Ouvrez "Terminal".

3.  Tapez la commande suivante (vous aurez besoin de votre mot de passe administrateur) :

```bash
sudo /usr/bin/ollama system-service enable
```
4.  Ouvrez le fichier du service avec la commande :

```bash
sudo nano /etc/systemd/system/ollama.service
```
ou si la commande au dessus ne fonctionne pas

```bash
sudo nano ~/.config/systemd/user/ollama.service
```

5.  Cherchez la ligne qui commence par `ExecStart=`. Elle ressemble probablement à ceci:

```
ExecStart=/usr/bin/ollama serve
```
6.  **Ajoutez** la variable d'environnement `OLLAMA_HOST` juste avant la commande `/usr/bin/ollama serve`, en vous assurant qu'elle soit sur la même ligne que `ExecStart=`. Le résultat devrait ressembler à ceci :

```
ExecStart=OLLAMA_HOST=0.0.0.0:11434 /usr/bin/ollama serve
```

7.   Enregistrez les modifications et fermez l'éditeur de texte (Ctrl+O, Entrée, Ctrl+X dans nano).

8.  Rechargez la configuration de `systemd` :

```bash
sudo systemctl daemon-reload
```
9.  Redémarrez le service Ollama :

```bash
sudo systemctl restart ollama
```

## Configurer le pare-feu macOS (si activé)

*   Si le pare-feu macOS est activé, vous devez autoriser les connexions entrantes pour Ollama.
*   Allez dans "Préférences Système" > "Sécurité et confidentialité" > "Pare-feu".
*   Si le pare-feu est activé, cliquez sur "Options de pare-feu...".
*   Cliquez sur le bouton "+" et ajoutez l'application Ollama.  Le chemin de l'exécutable est généralement `/usr/bin/ollama`.  Assurez-vous que l'option "Autoriser les connexions entrantes" est sélectionnée.
*   Si vous ne trouvez pas Ollama dans la liste, vous pouvez autoriser les connexions entrantes pour le processus `ollama` (sans l'interface graphique) en cliquant sur le `+` et en ajoutant `/usr/bin/ollama`.
*   **Alternative (moins sécurisée):** Pour des tests rapides *uniquement*, vous pouvez temporairement désactiver le pare-feu.  *N'oubliez pas de le réactiver immédiatement après.*

### Trouver l'adresse IP de votre Mac

*   Bien que nous ayons configuré Ollama pour écouter sur toutes les interfaces, vous devez connaître l'adresse IP de votre Mac pour que les autres appareils puissent s'y connecter.
*   **Préférences Système:** Allez dans "Préférences Système" > "Réseau". Sélectionnez votre connexion active (Wi-Fi ou Ethernet) et notez l'adresse IP affichée (par exemple, `192.168.1.10`).
*   **Terminal (alternative):**  Ouvrez Terminal et tapez: `ifconfig | grep "inet " | grep -v 127.0.0.1`.  L'adresse IP à côté de `inet` (et qui n'est *pas* 127.0.0.1) est votre adresse.

### Accéder à Ollama depuis un autre appareil

*   Sur un autre ordinateur, tablette ou téléphone connecté au *même* réseau local, ouvrez un navigateur web.
*   Dans la barre d'adresse, tapez l'adresse IP de votre Mac, suivie de `:11434`.  Par exemple:

```
http://192.168.1.10:11434  (Remplacez 192.168.1.10 par l'adresse IP de votre Mac)
```
*   Vous devriez maintenant pouvoir interagir avec l'API Ollama depuis cet appareil.  Pour utiliser l'API, référez-vous à la documentation officielle d'Ollama, mais au lieu d'utiliser `localhost:11434`, utilisez l'adresse IP de votre Mac suivie de `:11434`.

Vous pouvez ainsi configurer cette adresse dans l'application [ChatBox](https://www.manuel.fr/use/chatbox) ou dans l'application [MSTY](https://www.manuel.fr/use/Msty).