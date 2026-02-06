---
sidebar_position: 8
title: "UTM (machine virtuelle macOS)"
---

# UTM : machine virtuelle open‑source sur macOS

UTM est un **logiciel open‑source** pour créer des **machines virtuelles** sur macOS. Il s’appuie sur QEMU et permet d’installer d’autres systèmes (Linux, Windows, etc.) directement sur votre Mac.

UTM est un **bon choix** si vous avez **beaucoup de mémoire** ou si vous voulez **apprendre et tester** sans risquer de problèmes sur votre Mac principal.

UTM n’est **pas conseillé** sur un Mac avec **8 Go de RAM**.  
Pour des **tests légers**, cela peut passer avec **16 Go de RAM**, et on peut commencer à l’envisager au‑delà.  
Tout dépend aussi des **LLM** que vous voulez utiliser.

En revanche, pour **mettre un Mac en production** avec un agent comme OpenClaw, il est souvent préférable de **dédier un Mac mini** plutôt que de virtualiser, afin d’utiliser **toute la mémoire disponible**.

---

## ✅ Téléchargement

Téléchargez UTM depuis le site officiel :
https://mac.getutm.app/

---

## 🛠 Installation

1. Téléchargez l’application UTM.
2. Ouvrez le fichier `.dmg`.
3. Glissez UTM dans le dossier **Applications**.
4. Lancez l’application et autorisez les permissions demandées par macOS.

---

## 🧭 Créer une première machine virtuelle

1. Cliquez sur **Create a New Virtual Machine**.
2. Choisissez **Virtualize** (pour Apple Silicon) ou **Emulate** si nécessaire.
3. Sélectionnez le système à installer (ex. Linux).
4. Attribuez la RAM et l’espace disque.
5. Démarrez la VM et suivez l’installation.

---

## 🔒 Bonnes pratiques

- Allouez de la mémoire et du stockage en fonction des ressources de votre Mac.
- Gardez UTM à jour.
- Pour de meilleures performances, privilégiez **Virtualize** quand c’est possible.
