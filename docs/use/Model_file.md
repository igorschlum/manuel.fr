---
sidebar_position: 5
---

# Modelfile

Un Modelfile est une configuration, un ensemble d'instructions, qui définit comment créer et personnaliser un modèle d'IA avec Ollama. Il sert de recette pour construire un modèle prêt à l'emploi ou à être partagé.

## Structure d'un Modelfile

Un Modelfile est un fichier texte contenant des instructions clés qui configurent le modèle. Voici les instructions principales :

*   **`FROM`** (Obligatoire) :  Indique le modèle de base à partir duquel vous construisez.  C'est le point de départ.  Exemple : `FROM llama2`
*   **`TEMPLATE`** (Fortement recommandé) :  Définit la structure des interactions entre l'utilisateur et le modèle. Il contrôle la façon dont les messages système, les questions de l'utilisateur et les réponses du modèle sont formatés.  C'est crucial pour le comportement du modèle.
*   **`SYSTEM`** :  Définit un message système initial. Ce message "prépare" le modèle, lui donnant un rôle, un ton, ou des instructions spécifiques *avant* que l'utilisateur n'interagisse.
*   **`ADAPTER`** (Optionnel) :  Permet d'appliquer un adaptateur LoRA (Low-Rank Adaptation) pré-entraîné. Les LoRA sont de petits modules qui modifient le comportement d'un modèle de base sans avoir à le ré-entraîner complètement.  C'est un moyen efficace d'ajuster un modèle à une tâche spécifique.
*   **`LICENSE`** (Optionnel, mais important pour le partage) :  Spécifie la licence sous laquelle le modèle est distribué.  Cela indique aux autres utilisateurs comment ils peuvent utiliser et partager votre modèle (par exemple, MIT, Apache 2.0, Creative Commons).
*   **`MESSAGE`** (Optionnel): Permet d'injecter des messages pré-définis dans l'historique des conversations du modèle. Utile pour l'initialisation ou la démonstration.
*   **`PARAMETER`** (Optionnel) : Permet de spécifier des paramètres pour modifier le fonctionnement d'Ollama comme par exemple `num_ctx`, `num_gqa`, `num_gpu`, `repeat_last_n`, `repeat_penalty`, `temperature`, `stop`, `tfs_z`, `top_k`, `top_p`.

**Ordre des Instructions :**

Bien que techniquement l'ordre ne soit pas strictement imposé (sauf `FROM` qui devrait être en premier), il est *fortement recommandé* de suivre une structure logique :

1.  `FROM`
2.  `SYSTEM`
3.  `TEMPLATE`
4.  `ADAPTER` (si besoin)
5.  `LICENSE`
6. `MESSAGE`
7. `PARAMETER`

## Exemple Complet : Professeur d'Anglais

Voici un exemple concret et plus élaboré, illustrant l'usage du Modelfile pour créer un professeur d'anglais personnalisé :

```bash
Modelfile
FROM llama2:13b

SYSTEM """
You are a friendly and patient English teacher.  Your goal is to help the student improve their English skills.
Begin by assessing the student's level (beginner, intermediate, advanced).
Ask questions that are appropriate for their level.
Provide clear explanations of grammar and vocabulary.
Correct the student's mistakes gently and constructively.
Offer examples to illustrate the concepts.
Be encouraging and supportive.
Use Markdown for formatting.  Bold important words and use bullet points for lists.
"""

TEMPLATE """
{{- if .System }}
<|im_start|>system
{{ .System }}<|im_end|>
{{- end }}
{{- if .Prompt }}
<|im_start|>user
{{ .Prompt }}<|im_end|>
{{- end }}
<|im_start|>assistant
{{ .Response }}<|im_end|>
"""

PARAMETER temperature 0.7
PARAMETER top_p 0.9
PARAMETER stop "<|im_start|>"
PARAMETER stop "<|im_end|>"

```

**Explication de l'Exemple :**

*   **`FROM llama2:13b`**:  Utilise le modèle `llama2` avec 13 milliards de paramètres comme base.  Assurez-vous d'avoir téléchargé ce modèle au préalable (`ollama pull llama2:13b`).
*   **`SYSTEM`**:  Définit le rôle du modèle (professeur d'anglais) et ses instructions détaillées.  Notez l'utilisation des sauts de ligne pour la lisibilité.
*   **`TEMPLATE`**:  Utilise un format de chat commun (`<|im_start|>`, `<|im_end|>`) pour structurer les messages. C'est un format souvent utilisé par les modèles de chat. Le prompt est le message de l'utilisateur. Le `{{ .Response }}` est la où la réponse d'Ollama sera insérée.
*    **`PARAMETER`** :
    *  `temperature 0.7` :  Une température modérée pour un équilibre entre créativité et cohérence.
    *   `top_p 0.9`:  Un paramètre de sampling qui limite les choix du modèle aux tokens les plus probables.
    *   `stop "<|im_start|>"`
    *   `stop "<|im_end|>"`:  Indique au modèle de s'arrêter de générer du texte lorsqu'il rencontre ces séquences, ce qui correspond à la fin d'un message dans notre `TEMPLATE`.

**Comment utiliser cet exemple :**

1.  **Créer le fichier:** Copiez le code ci-dessus dans un fichier texte, par exemple `EnglishTeacher.Modelfile`.
2.  **Construire le modèle:**  Dans votre terminal, utilisez la commande `ollama create`:

    ```bash
    ollama create english-tutor -f EnglishTeacher.Modelfile
    ```
    (Remplacez `english-tutor` par le nom que vous souhaitez donner à votre modèle.)

3.  **Interagir avec le modèle:**

    ```bash
    ollama run english-tutor
    ```
    Vous pouvez maintenant commencer à discuter avec votre professeur d'anglais personnalisé !

## Bonnes Pratiques et Conseils

*   **Expérimentation:**  N'hésitez pas à modifier les paramètres (`temperature`, `top_p`, etc.) et le message `SYSTEM` pour ajuster le comportement du modèle.
*   **Clarté du `SYSTEM`:**  Plus votre message `SYSTEM` est précis et détaillé, mieux le modèle comprendra son rôle et ses objectifs.
*   **Choix du `TEMPLATE`:**  Le `TEMPLATE` est crucial.  Si vous utilisez un modèle de chat, assurez-vous que le `TEMPLATE` correspond à ce que le modèle attend.
*   **Testez régulièrement:**  Après chaque modification du Modelfile, testez votre modèle pour vous assurer qu'il se comporte comme prévu.
*   **Documentation:**  Si vous partagez votre modèle, incluez une description claire de son objectif et de son fonctionnement.
*   **`FROM` : spécifier une version**: Il est recommandé d'utiliser un tag spécifique de version pour le modèle `FROM`, par exemple `FROM llama2:7b-text-q4_0`. Cela garantit que votre Modelfile fonctionnera de manière prévisible, même si de nouvelles versions du modèle de base sont publiées. Si vous ne spécifiez pas de tag, Ollama utilisera le tag `latest`, qui pourrait changer et potentiellement casser votre Modelfile.
* **`PARAMETER`**: les valeurs par défaut des paramètres sont visible avec `ollama show --modelfile <modelname>`

## Usage (Reprise et Amélioration)

Vous pouvez utiliser votre Modelfile pour créer des modèles spécialisés dans divers domaines. L'exemple du professeur d'anglais est un excellent point de départ. Vous pouvez l'adapter pour créer :

*   Des assistants d'écriture (pour différents styles : roman, poésie, scénario...)
*   Des tuteurs pour d'autres matières (mathématiques, histoire, programmation...)
*   Des générateurs de code
*   Des chatbots spécialisés (support client, jeux de rôle...)
*   Des outils de résumé ou de traduction

En combinant un modèle de base solide, un message `SYSTEM` bien conçu et un `TEMPLATE` adapté, vous pouvez créer des modèles d'IA puissants et personnalisés avec Ollama.

