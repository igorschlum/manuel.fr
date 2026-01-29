---
sidebar_position: 10
title: "MCP"
---

# Model Context Protocol

Les grands modèles de langage (LLM) comme ceux que vous pouvez exécuter localement sur votre Mac grâce à Ollama sont incroyablement puissants pour générer du texte, traduire, répondre à des questions... Mais leur véritable potentiel se révèle lorsqu'ils peuvent interagir avec le monde extérieur : accéder à vos fichiers, consulter des API, naviguer sur le web, interroger des bases de données, etc. C'est là qu'intervient le *Model Context Protocol (MCP)*.

## Qu'est-ce que le MCP (Model Context Protocol) ?

Imaginez que votre LLM soit un cerveau brillant, mais enfermé dans une boîte. Pour agir sur le monde ou obtenir des informations spécifiques non présentes dans ses données d'entraînement, il a besoin "d'outils" ou de "bras".

Le MCP est une **norme ouverte**, initialement proposée par Anthropic (la société derrière Claude AI), qui vise à **standardiser la manière dont les LLM communiquent avec ces outils externes**.

Avant le MCP (et encore aujourd'hui sans lui), connecter un LLM à un outil externe (comme votre système de fichiers ou une API spécifique) nécessitait :

1.  D'apprendre au LLM à reconnaître quand il a besoin d'un outil et à formuler une demande spécifique (souvent via des "function calls" ou "tool calls").
2.  D'écrire du code personnalisé ("le serveur" ou "l'agent") qui écoute ces demandes, exécute l'action correspondante (lire un fichier, appeler une API...), et renvoie le résultat au LLM.

Ce processus est fastidieux, non standardisé (chaque développeur pouvait le faire différemment), et souvent spécifique à une application ou un environnement.

**Le MCP propose une solution en définissant :**

*   Un **format standardisé** pour les requêtes du LLM ("Je veux lire le fichier X", "Je veux chercher Y sur le web").
*   Un **protocole de communication standardisé** entre le LLM (ou l'application qui l'utilise) et le "serveur" qui héberge l'outil.

En résumé, le MCP est comme une **"interface universelle"** qui permet aux LLM de se "brancher" plus facilement à différents outils, un peu comme un port USB standard permet de connecter divers périphériques à un ordinateur.

Le projet MCP est openSource et disponible sur (GitHub)[https://github.com/modelcontextprotocol].

## Pourquoi le MCP est-il Intéressant ?

L'intérêt principal du MCP réside dans **l'interopérabilité et la simplification**.

1.  **Standardisation :** Plus besoin de réinventer la roue à chaque fois. Les développeurs peuvent créer des "serveurs MCP" pour des outils spécifiques (accès aux fichiers, GitHub, Google Drive, bases de données SQL, navigateur web, etc.), et ceux-ci peuvent potentiellement être utilisés par différentes applications ou LLM compatibles MCP.
2.  **Facilité d'Intégration :** Connecter un nouvel outil à un LLM devient plus simple. Si un serveur MCP existe pour cet outil, il suffit souvent de le configurer pour que le LLM puisse l'utiliser.
3.  **Écosystème en Croissance :** Initialement proposé par Anthropic, le MCP gagne du terrain et reçoit le soutien d'acteurs majeurs comme **OpenAI et Microsoft**. Cela suggère qu'il pourrait devenir un standard de fait pour l'interaction entre les IA "agents" et leurs outils.
4.  **Vers des Agents IA plus Puissants :** Le MCP est une brique essentielle pour créer des "agents IA" ou des "copilotes" plus capables, capables d'exécuter des tâches complexes en plusieurs étapes en utilisant divers outils de manière autonome.

## Utiliser le MCP avec Ollama sur Mac

La bonne nouvelle, c'est que le MCP n'est pas réservé aux modèles propriétaires comme Claude ! Grâce à la nature ouverte du protocole et à l'écosystème Ollama, il est tout à fait possible de faire interagir vos LLM locaux avec des outils via le MCP.

Comment ça marche ?

L'idée est d'avoir un "serveur MCP" qui tourne sur votre Mac et qui fait le lien entre Ollama (qui exécute le LLM) et les outils externes.

Un exemple concret est le projet **`ollama-mcp`** (disponible sur GitHub et installable via npm/npx). Ce projet spécifique agit comme un serveur MCP qui :

1.  Communique avec votre instance Ollama locale (pour lister les modèles disponibles, envoyer des prompts, recevoir les réponses du LLM).
2.  Expose ces capacités via l'interface standardisée MCP.

Cela permet à des applications compatibles MCP (comme l'application de bureau Claude, à l'origine, mais potentiellement d'autres outils futurs) de découvrir et d'interagir avec vos modèles Ollama locaux comme s'il s'agissait de n'importe quelle autre source de modèle compatible MCP.

D'autres approches existent également, comme l'utilisation d'outils tels que `mcphost`, qui permettent de démarrer un serveur capable de gérer plusieurs "serveurs MCP" (pour les fichiers, la recherche web, les bases de données...) et de les connecter à un modèle Ollama spécifique capable de faire des "tool calls".


## Apple MCP Tools : Contrôlez votre Mac avec l'IA via MCP

Pour illustrer concrètement la puissance du MCP sur macOS, un projet open source particulièrement intéressant est (**Apple MCP Tools**)[https://github.com/Dhravya/apple-mcp], développé par Dhravya Shah. Ce projet fournit une collection d'outils "natifs" pour Mac, accessibles via le protocole MCP. Concrètement, cela signifie que vous pouvez demander à une IA compatible MCP (utilisée via une application comme Claude Desktop, Cursor, ou potentiellement vos modèles Ollama locaux via un hôte MCP) d'interagir directement avec vos applications Apple !

Imaginez pouvoir demander à votre assistant IA de :

*   Envoyer un iMessage ou un email (même avec des pièces jointes).
*   Lire, rechercher ou créer des notes dans l'application Notes.
*   Chercher un contact.
*   Gérer vos Rappels (créer, lister, rechercher).
*   Consulter ou ajouter des événements à votre Calendrier.
*   Effectuer une recherche web (via DuckDuckGo).
*   Interagir avec Plans (rechercher des lieux, obtenir des itinéraires).

Le véritable atout de ce projet est la capacité à **enchaîner ces commandes** pour créer des flux de travail complexes, comme "lis la note sur la conférence, trouve les contacts mentionnés, et envoie-leur un email de remerciement". C'est un excellent exemple de la manière dont MCP permet aux modèles de langage de dépasser la simple génération de texte pour devenir de véritables assistants capables d'agir sur votre environnement Mac. Facilement installable (notamment via Smithery ou `bun`), ce projet démontre le potentiel passionnant de l'intégration de l'IA locale et des outils du quotidien grâce à des standards ouverts comme MCP.

## Autres ressources à explorer

A tester, le projet (MCP Server Fetch)[https://4sysops.com/archives/install-mcp-server-fetch-for-claude-ai-on-mac-and-windows/] qui permet de récupérer des pages web en markdown à travers le protocole MCP sur Mac

Et l'installation de (GitHubMCP server)[https://allthings.how/how-to-set-up-github-mcp-server-for-use-with-claude-desktop-on-windows-and-mac/] sur MacOS 


## En Conclusion

Le Model Context Protocol (MCP) représente une avancée significative vers une meilleure **interopérabilité** dans le monde de l'IA. Il standardise la façon dont les LLM peuvent accéder à des outils et des données externes, ouvrant la voie à des applications et des agents IA plus puissants et plus utiles.

Pour les utilisateurs de **Mac** qui apprécient la flexibilité et le contrôle offerts par **Ollama** et les LLM open source, la compatibilité émergente avec le MCP est une excellente nouvelle. Elle promet de pouvoir bientôt connecter facilement vos modèles locaux à un écosystème croissant d'outils, débloquant ainsi de nouvelles possibilités passionnantes, tout en gardant le contrôle sur votre environnement. L'avenir de l'IA locale et connectée s'annonce prometteur !

##