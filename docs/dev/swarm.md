---
sidebar_position: 5
---
Swarm est un framework (un ensemble de fonctions) écrit en python qui permet de faire interagir plusieurs LLM entre eux pour créer des agents.
C'est un outil en anglais que l'on peut télécharge gratuitement sur GitHub. Il est développé par OpenAI et fonctionne normalement avec ChatGPT, mais on peut le modifier pour le faire fonctionner avec Ollama. Pour installler Swarm, il faut taper cette commande dans le terminal :

```bash
pip install git+ssh://git@github.com/openai/swarm.git
```

Il se peut qu'un message en rouge apparaisse au moment de l'installation vous indiquant qu'il faut installer spyder. Spyder est un environnement de développement pour développer en python. Pour installer Spyder il faut taper cette commande dans le terminal :

```bash
pip install spyder
```

Swarm repond au problème qu'un prompt tout seul ne peut pas tout faire quand on veut faire des tâches complexes avec de l'IA. Par exemple si vous voulez une IA qui puisse chercher des données dans un RAG et ensuite prendre ces données pour les traduire en vietnamien, vous devrez utiliser d'un côté une IA qui est efficace pour récupérer les données et répondre à la question et ensuite utiliser une autre IA qui saura traduire les résultats en Vietnamien. Il faudra donc enchaîner plusieurs IA, les uns à la suite des autres.

On peut imaginer également que vous voulez vous assurer que vous pouvez faire confiance aux réponses de l'IA et éviter les Hallucations et que vous préférer répondre "Je ne sais" plutôt que de répondre à côté. Vous pouvez alors poser la même question à deux ou trois IA, puis ensuite demander à ces trois IA de comparer les réponses les unes avec les autres pour dire si les réponses des trois IA sont identiques. Si les trois IA vous disent que les réponses sont indentiques, il y a de fortes chances que ça soit vrai.

On retrouve ici toutes les explications données par OpenIA sur comment utiliser Swarm : https://cookbook.openai.com/examples/orchestrating_agents

Il y a la chaine Youtube en anglais de [Cole Medin](https://www.youtube.com/@ColeMedin/videos) qui est bien faite et qui donne plein d'explications techhnique sur l'IA, Python, LangChain et plein d'outils. Il explique comment créer des agents, etc.

Il y a particulièrement [cette Video](https://www.youtube.com/watch?v=q7_5eCmu0MY) sur swarm, puis [cette autre vidéo](https://www.youtube.com/watch?v=8jpVeUTNExI) qui explique comment utiliser swarm avec Ollama.

pour installer tous les tutos sur les Agents de Cale Medin, utilisez le terminal pour vous placez-vous dans le dossier où vous mettez les projets gitHub et taper cette commande :

```bash
git clone https: //github.com/coleam00/ai-agents-masterclass.git
```

Ce même Code Medin travaille sur un projet d'AI Coding Assistant qui est expliqué dans [cette vidéo](https://www.youtube.com/watch?v=31ivQdydmGg) en anglais



```bash
git clone https://github.com/coleam00/bolt.new-any-llm.git
```