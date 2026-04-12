---
sidebar_position: 12
title: "Paperclip"
---

## Paperclip : orchestrer une équipe d'agents IA

**Paperclip** est une plateforme open-source qui permet d'organiser des **agents IA en véritable entreprise**, avec un organigramme, des objectifs, des budgets et une gouvernance. Au lieu de piloter un assistant à la fois dans un terminal, vous gérez une **équipe complète d'agents** qui travaillent ensemble.

Ce n'est pas un chatbot, pas un framework d'agents, pas un outil de workflow — c'est un **orchestrateur**. Les agents gardent leur propre runtime (Claude Code, OpenClaw, Pi, un script bash...), Paperclip s'occupe de les coordonner.

---

## Le principe

Paperclip fonctionne en trois étapes :

1. **Définir l'objectif** — par exemple : "Construire la meilleure app de prise de notes IA"
2. **Constituer l'équipe** — un CEO, un CTO, des ingénieurs, des designers... chaque agent vient du runtime de votre choix
3. **Piloter et surveiller** — vous validez la stratégie, vous fixez les budgets, vous suivez depuis le tableau de bord

Chaque agent a un **rôle**, un **objectif** et un **budget**. Les tâches remontent toujours à la mission de l'entreprise, ce qui fait que chaque agent comprend *pourquoi* il fait ce qu'il fait, pas seulement *quoi* faire.

---

## Installer Paperclip

L'installation se fait en une seule commande :

```bash
npx paperclipai onboard --yes
```

Le setup interactif vous guide pour la base de données, l'authentification et la création de votre première entreprise. Tout fonctionne en local avec un unique processus Node.js et une base Postgres embarquée.

Paperclip est open-source, sous licence MIT, auto-hébergé — pas besoin de compte Paperclip.

---

## Utiliser Paperclip avec Ollama et Pi

Pour faire tourner Paperclip avec des modèles locaux via Ollama, on utilise **Pi** comme passerelle. C'est Pi qui fait le pont entre Paperclip et les modèles d'Ollama.

Assurez-vous d'avoir installé Pi au préalable (voir la page [Pi](/install/pi)), puis lancez :

```bash
ollama launch pi
```

Pi se connecte à Ollama et expose les modèles locaux. Paperclip peut alors utiliser ces modèles via Pi pour ses agents.

---

## Ce que Paperclip apporte

### Un organigramme pour vos agents

Vous construisez une hiérarchie : un CEO qui délègue à un CTO, qui délègue à des ingénieurs, et ainsi de suite. Chaque agent sait à qui il rend des comptes et de qui il reçoit ses instructions.

### Des budgets par agent

Chaque agent a un budget mensuel. À 80 %, il reçoit un avertissement. À 100 %, il se met en pause automatiquement. Vous, en tant que conseil d'administration, pouvez toujours dépasser les limites si nécessaire.

### Un système de tickets

Toute la communication entre agents passe par des **tickets**. Chaque instruction, réponse, appel d'outil et décision est enregistré. Le journal d'audit est en ajout seul — pas de modification, pas de suppression.

### Des battements de cœur (heartbeats)

Les agents se réveillent selon un planning, vérifient le travail à faire et agissent. Par exemple : un rédacteur de contenu toutes les 4 heures, un analyste SEO toutes les 8 heures, un responsable réseaux sociaux toutes les 12 heures.

### La gouvernance

Vous êtes le conseil d'administration. Les agents ne peuvent pas embaucher sans votre approbation. Le CEO ne peut pas exécuter une stratégie sans votre validation. Vous pouvez mettre en pause, reprendre, réaffecter ou terminer n'importe quel agent à tout moment.

L'autonomie est un **privilège que vous accordez**, pas un comportement par défaut.

---

## Ce que Paperclip n'est pas

- **Pas un chatbot** — les agents ont des missions, pas des fenêtres de discussion
- **Pas un framework d'agents** — Paperclip ne vous dit pas comment construire vos agents, juste comment les coordonner
- **Pas un constructeur de workflows** — pas de glisser-déposer, pas de pipelines visuels
- **Pas un gestionnaire de prompts** — les agents apportent leurs propres prompts et modèles

---

## En résumé

Paperclip transforme une collection d'agents IA isolés en une **entreprise structurée** avec des objectifs, des budgets et une gouvernance. Avec Ollama et Pi, vous pouvez faire tourner tout ça en local avec des modèles open source.

- [Documentation officielle](https://docs.paperclip.ing)
- [GitHub](https://github.com/paperclipai/paperclip)
- [Discord](https://discord.gg/m4HZY7xNG3)