---
sidebar_position: 3
---

# Serveur Local

Comme la confidentialité des informations est essentiel, on va voir comment on peut installer un mac local sur un réseau pour qu'il soit utilisable par les autres postes pour faire par exemple du contrôle de code source et pour partager des modèles.

# Partager Ollama sur votre réseau local sur MacOS

Vous pouvez partager l'application Ollama sur votre réseau local en wifi ou par internet. Cela veut dire que vous pouvez y accéder depuis votre téléphone mobile ou depuis un autre ordinateur de votre réseau. C'est pratique en famille ou en entreprise.

Dans son utilisation basic le logiciel Ollama que vous avez installé n'est utilisable que depuis l'ordinateur sur lequel il tourne et on le lance depuis le terminal car il écoute uniquement sur `localhost` (127.0.0.1), ce qui le rend inaccessible depuis d'autres ordinateurs.

Je pars du principe que vous allez faire cela sur un Mac mini ou un MacStudio qui sont les plus adaptés, car une fois configurés, ils n'ont plus besoin d'écran, de clavier et de souris. Ils se mettent en veille et donc ne consomment presque rien tant qu'il n'y a pas de requêtes entrantes et peuvent redémarrer tout seuls en cas de coupure de courant.


## Configurer le pare-feu macOS (si activé)

*   Si le pare-feu macOS est activé, vous devez autoriser les connexions entrantes pour Ollama.
*   Allez dans "Préférences Système" > "Sécurité et confidentialité" > "Pare-feu".
*   Si le pare-feu est activé, cliquez sur "Options de pare-feu...".
*   Cliquez sur le bouton "+" et ajoutez l'application Ollama.  Le chemin de l'exécutable est généralement `/usr/bin/ollama`.  Assurez-vous que l'option "Autoriser les connexions entrantes" est sélectionnée.
*   Si vous ne trouvez pas Ollama dans la liste, vous pouvez autoriser les connexions entrantes pour le processus `ollama` (sans l'interface graphique) en cliquant sur le `+` et en ajoutant `/usr/bin/ollama`.
*   **Alternative (moins sécurisée):** Pour des tests rapides *uniquement*, vous pouvez temporairement désactiver le pare-feu.  *N'oubliez pas de le réactiver immédiatement après.*

## configurer Ollama pour écouter les appels réseau


Ollama utilise des variables d'environnement pour sa configuration. La variable clé ici est `OLLAMA_HOST`.

### sur la session en cours

Cette modification ne sera valable que pour la session Terminal en cours. C'est idéal pour tester rapidement.

1.  Ouvrez l'application "Terminal" (Applications/Utilitaires).

2.  Tapez les commandes suivantes, une par ligne, en appuyant sur Entrée après chaque ligne:

```bash
export OLLAMA_HOST=0.0.0.0:11434
ollama serve
```

La première ligne configure la variable d'environnement. La deuxième redémarre le service Ollama avec la nouvelle configuration.  Ne fermez pas cette fenêtre de Terminal, sinon le service s'arrêtera.

### Le faire à chaque démarrage et garder le modèle en mémoire

On va enregistrer cette commande pour qu'elle soit exécuter à chaque démarrage

```bash
nano ~/.zshrc
```

Ajoutez la commande de partage et l'option keep-alive qui garde les modèles en VRAM

```bash
export OLLAMA_HOST=0.0.0.0:11434
ollama serve --keep-alive -1
```


Sauvegardez et quittez.

## Trouver l'adresse IP de votre Mac

*   Bien que nous ayons configuré Ollama pour écouter sur toutes les interfaces, vous devez connaître l'adresse IP de votre Mac pour que les autres appareils puissent s'y connecter.
*   **Préférences Système:** Allez dans "Préférences Système" > "Réseau". Sélectionnez votre connexion active (Wi-Fi ou Ethernet) et notez l'adresse IP affichée (par exemple, `192.168.1.10`).
*   **Terminal (alternative):**  Ouvrez Terminal et tapez: `ifconfig | grep "inet " | grep -v 127.0.0.1`.  L'adresse IP à côté de `inet` (et qui n'est *pas* 127.0.0.1) est votre adresse.

## Accéder à Ollama depuis un autre appareil

*   Sur un autre ordinateur, tablette ou téléphone connecté au *même* réseau local, ouvrez un navigateur web.
*   Dans la barre d'adresse, tapez l'adresse IP de votre Mac, suivie de `:11434`.  Par exemple:

```
http://192.168.1.10:11434  (Remplacez 192.168.1.10 par l'adresse IP de votre Mac)
```
*   Vous devriez maintenant pouvoir interagir avec l'API Ollama depuis cet appareil.  Pour utiliser l'API, référez-vous à la documentation officielle d'Ollama, mais au lieu d'utiliser `localhost:11434`, utilisez l'adresse IP de votre Mac suivie de `:11434`.

Vous pouvez ainsi configurer cette adresse dans l'application [ChatBox](https://www.manuel.fr/use/chatbox) ou dans l'application [MSTY](https://www.manuel.fr/use/Msty).

### Configurez le mac pour qu'il redémarre automatiquement

Vous pouvez activer cette option depuis les préférences système, économiseur d'énergie puis "Option" et ensuite Activer "Démarrage automatique après une panne de courant".

Le plus simple est d'activer cette option depuis le terminal

```bash
sudo pmset -a autorestart 1
```

et pour vérifier l'état

```bash
pmset -g | grep autorestart
```

#### On configure le mac pour une semi-veille

On commence par régler le mac pour qu'il ne se mette pas en veille profonde

```bash
sudo pmset -a standby 0
```

Puis on permet qu'il sorte de veille s'il reçoit des requêtes sur le réseau.

```bash
sudo pmset -a womp 1
```

Vérification de la configuration

```bash
pmset -g | grep womp
pmset -g | grep standby
```

