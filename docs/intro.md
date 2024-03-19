---
sidebar_position: 1
---

Manuel pour installer, comprendre et utiliser **l'intelligence artificielle** sur Mac avec [Ollama](https://ollama.ai).

# Introduction

A la sortie du premier Macintosh, tout le monde était impressionné par MacWrite, le traitement de texte qui permettait de faire de la mise en page tellement facilement et par MacPaint l'outil pour dessiner.

On pouvait voir l'ordinateur personnel comme une super machine à écrire et une feuille de dessin où l'on pouvait effacer facilement et agencer des créations graphiques.

Le parallèle avec l'intelligence artificielle sur Mac, c'est qu'aujourd'hui on est impressionné par l'IA générative qui sait écrire, résumer et analyser des textes et par la capacité graphique à faire des images à partir de prompts.

Les usages sont pourtant beaucoup plus larges et on va explorer le potentiel d'utilisation de l'IA OpenSource sur Mac, en cherchant à expliquer le pourquoi et le comment pour des novices.

## Prérequis

Vous devez avoir un Mac M1. Si vous ne savez pas ce que c'est, visitez [cette page Wikipedia](https://fr.wikipedia.org/wiki/Apple_M1). Si vous n'en avez pas, vous pouvez apprendre la théorie et pas la pratique.

Vous devez avoir envie de découvrire l'intelligence artificielle en utilisation libre et gratuite. Nous allons utiliser l'application Ollama.

Vous devez avoir du temps devant vous, pour avancer pas à pas dans ce site.

Et vous devez avoir quelques notions d'anglais, mais nous traduirons au fur et à mesure tous les termes anglais que nous croiserons, comme [LLM](/docs/En-savoir-plus/glossaire#LLM)

N'hésitez pas à m'écrire si vous ne comprenez pas une étape, tout est fait pour être très accessible.

C'est parti !

### Installation

Si ce n'est déjà fait, commencez par **[téléchargez Ollama](https://ollama.ai/download)**

Vous avez dans votre dossier téléchargement le fichier Ollama-darwin.zip

Double cliquez dessus (pour décompresser l'application) et déplacez la dans votre dossier applications.

Lancez l'application Ollama,

![Attention](../static/img/warning.png)


Un dialogue apparaît pour vous demander de confirmer, car c'est une application chargée depuis l'internet et pas depuis l'AppStore d'Apple. Vous pouvez confirmer.

Ollama se lance et si vous ne l'avez pas déplacé dans le dossier Applications, un dialogue en anglais vous proposera de le faire

![Attention](../static/img/move.png)

Cliquez sur **Move to application**

Un autre dialogue en anglais vous souhaite la bienvenue et vous présente le logo Ollama.

![Attention](../static/img/next.png)

Cliquez sur Next.

## Ouvrir l'application terminal

Pour lancer Ollama et pour charger un premier LLM, il faut lancer l'application Terminal qui se trouve dans le dossier Utilitaire de votre Mac.

Taper dans le terminal la commande:

```bash
ollama run llama2
```

Le mot `run` permet d'executer le modèle `llama2`. Si le modèle n'est pas chargé, il va se charger (cela occupe un peu moins de 4 Giga sur le disque)

![run llama2](../static/img/llama2.png)

Une fois le modèle téléchargé, vous pouvez commencer une discution.

*demandez par exemple*

```bash
je suis étudiant en philosophie, j'ai 34 ans et je vis à Montreal,
en quoi l'intelligence artificielle peut m'être utile ?
```
*vous pouvez bien sur personnaliser la demande, c'est une bonne façon d'apréhender l'intelligence artificielle. Voici le genre de réponse que vous pouvez avoir, sachant qu'à chaque fois la réponse est différente, même si vous lui posez la même question.*


```text
As a philosopher studying in Montreal, you may find the field of 
artificial intelligence (AI) to be particularly fascinating and relevant 
to your academic pursuits. Here are some ways AI can be useful for 
philosophers like you:

1. Enhancing research capabilities: AI can help automate and accelerate 
the process of conducting research in philosophy, particularly when it 
comes to analyzing large datasets, identifying patterns, and discovering 
new insights. You could use AI tools to analyze texts, identify key 
concepts, and uncover connections between different philosophical ideas.

2. Improving argumentation: AI can assist in developing more logical and 
persuasive arguments by analyzing the structure of your writing and 
identifying areas for improvement. This can help you refine your arguments
and make them more convincing to your peers and readers.

3. Facilitating collaboration: AI-powered tools can facilitate 
collaboration among philosophers by enabling real-time commentary, 
discussion, and feedback on each other's work. This can foster a more 
dynamic and interactive learning environment, where you can engage with 
your peers and experts in the field more easily.

4. Enhancing pedagogy: AI can help improve the teaching experience by 
creating personalized learning materials, automating grading, and 
providing real-time feedback to students. This can make the learning 
process more efficient and effective, allowing you to focus on delivering 
high-quality instruction.

5. Expanding knowledge horizons: AI can help philosophers expand their 
knowledge base by analyzing vast amounts of data, identifying patterns, 
and discovering new insights that may not have been apparent through 
traditional research methods. This can open up new areas of inquiry and 
lead to exciting breakthroughs in the field.

6. Improving decision-making: AI can assist philosophers in making more 
informed decisions by analyzing data, identifying patterns, and providing 
insights that may not be immediately apparent. This can be particularly 
useful when dealing with complex ethical dilemmas or policy decisions.

7. Enhancing creativity: AI can inspire new ideas and approaches to 
philosophical inquiry by generating novel perspectives, questions, and 
arguments. This can help you think outside the box and develop innovative 
solutions to longstanding philosophical problems.

8. Facilitating communication: AI-powered tools can simplify communication
among philosophers and with non-philosophers alike, making it easier to 
convey complex ideas and engage in productive dialogue. This can help 
bridge the gap between different disciplines and foster greater 
understanding and collaboration.

9. Supporting critical thinking: AI can assist philosophers in developing 
their critical thinking skills by providing opportunities for reflective 
practice, testing hypotheses, and evaluating arguments. This can help you 
become a more effective thinker and communicator.

10. Enhancing the philosophy of mind: AI can shed light on the nature of 
consciousness and the mind by analyzing neural networks, identifying 
patterns in cognitive processes, and developing new theories about the 
workings of the human brain. This can lead to a deeper understanding of 
the mind and its role in shaping philosophical inquiry.

By leveraging these potential applications, you can explore the exciting 
possibilities that AI offers for philosophers, expanding your knowledge 
base, improving your research and teaching methods, and contributing to 
the advancement of the field as a whole.
```

*Premier problème, on voit que souvent, même si on lui pose la question en français, il a tendance à répondre en anglais. On peut lui demander sèchement:*

```text
En français.
```

*et il vous donne la réponse en français :*

```texte
Comme philosophe étudiant à Montreal, vous pourriez trouver le domaine de 
l'intelligence artificielle (IA) particulièrement fascinant et pertinent 
pour vos études académiques. Voici quelques manières dont l'IA peut être 
utile pour des philosophes comme vous :

1. Amélioration des capacités de recherche : L'IA peut aider à automatiser
et à accélérer le processus de recherche en philosophie, notamment 
lorsqu'il s'agit d'analyser de grandes données, d'identifier des modèles 
et de découvrir de nouvelles insights. Vous pourriez utiliser les outils 
de l'IA pour analyser des textes, identifier les concepts clés et
découvrir des connexions entre les différentes idées philosophiques.

2. Amélioration des arguments : L'IA peut aider à développer des arguments
plus logiques et convaincants en analysant la structure de votre écriture 
et en identifiant des domaines pour amélioration. Cela vous aidera à
réfuter vos arguments et à les rendre plus convaincants aux yeux de vos 
pairs et de vos lecteurs.

3. Facilitation de la collaboration : Les outils de l'IA peuvent faciliter
la collaboration among philosophers en utilisant des commentaires, des 
discussions et des feedback en temps réel. Cela peut créer un 
environnement d'apprentissage plus dynamique et interactive, où vous 
pouvez interagir plus facilement avec vos pairs et les experts de la 
field.

4. Amélioration de l'enseignement : L'IA peut aider à améliorer 
l'expérience d'apprentissage en créant des matériaux de apprentissage 
personnalisés, en automatisant le marquage et en fournissant des feedback 
en temps réel aux étudiants. Cela peut rendre le processus d'apprentissage
plus efficace et efficace, ce qui vous laisse plus de temps pour enseigner
de manière de qualité.

5. Développement de nouvelles perspectives : L'IA peut aider les 
philosophes à élargir leur connaissance en analysant des données vastes, 
identifiant des modèles et découvrant de nouvelles insights qui ne 
seraient pas apparus par des méthodes traditionnelles d'étude. Cela peut 
ouvrir de nouvelles perspectives pour l'enquête philosophique et mener à 
des découvertes excitantes dans le domaine.

6. Amélioration de la prise de décisions : L'IA peut aider les philosophes
à prendre des décisions plus informées en analyse des données, 
identification de modèles et identification de nouveaux insights qui ne 
seraient pas apparus par des méthodes traditionnelles de prise de
décisions. Cela peut vous aider à prendre des décisions plus éclairées 
dans votre vie personnelle et professionnelle.

7. Renforcement de la créativité : L'IA peut inspirer de nouvelles idées 
et approches philosophiques en générant des perspectives novatrices, des 
questions et des arguments qui ne seraient pas immédiatement apparus à 
travers des méthodes traditionnelles d'étude. Cela peut vous aider à 
penser à l'extérieur du boîtier et à développer de nouvelles solutions à 
des problèmes philosophiques anciens.

8. Facilitation de la communication : Les outils de l'IA peuvent 
simplifier la communication entre philosophes et avec les non-philosophes,
facilitant la transmission de concepts complexes et permettant une 
interaction plus facile. Cela peut vous aider à communiquer de manière 
plus efficace avec vos pairs et avec les non-philosophes.

9. Renforcement des compétences criticales : L'IA peut aider les 
philosophes à développer leurs compétences critiques en fournissant des 
opportunités de pratique, de testing des hypothèses et d'évaluation des 
arguments. Cela peut vous aider à devenir un penseur plus efficace et une 
communicatrice plus convaincante.

10. Élargissement de la philosophie de l'esprit : L'IA peut éclairer sur 
la nature de la conscience et du cerveau en analysant les réseaux neuraux,
en identifiant des modèles dans les processus cognitifs et en développe 
new theories about the workings of the human brain. Cela peut vous aider à
mieux comprendre l'esprit et son rôle dans la philosophie.

En utilisant ces potential applications, vous pouvez explorer les 
possibilités excitantes que l'IA offre aux philosophes pour élargir votre 
connaissance base, améliorer vos méthodes de recherche et d'enseignement, 
et contribuer au développement de la field.
```


Pour afficher les modèles installés, taper dans le terminal de commande:

```bash
ollama list
```

![Attention](../static/img/list.png)

Pour proposer une modification, rendez-vous sur le [github de cette page](https://github.com/igorschlum/manuel.fr) puis dans `docs/intro.md` et cliquer sur le petit stylet.
