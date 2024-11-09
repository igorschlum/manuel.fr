---
sidebar_position: 5
---

# Modelfile

Un Modelfile est une sorte de plan ou de modèle qui permet de créer et partager des modèles d'intelligence artificielle (IA) avec l'outil Ollama.

## Format du Modelfile

Le format du Modelfile comprend plusieurs instructions :

FROM : Spécifie le modèle de base à utiliser.
TEMPLATE : Définit le modèle de message pour les entrées utilisateur et les réponses du modèle.
SYSTEM : Spécifie un message système qui peut être utilisé pour personnaliser le comportement du modèle.
ADAPTER : Permet d'appliquer un adaptateur LoRA au modèle de base (facultatif).
LICENSE : Indique la licence sous laquelle le modèle est partagé ou distribué.
MESSAGE : Permet de spécifier des messages pour l'historique du modèle.
Instructions

Les instructions peuvent être utilisées dans n'importe quel ordre, mais il est recommandé de commencer par FROM.

## Exemples

Voici un exemple simple de Modelfile :

```bash

Copy code
FROM <modèle_de_base>
TEMPLATE """{{ if .System }}<|im_start|>system
{{ .System }}<|im_end|>
{{ end }}{{ if .Prompt }}<|im_start|>user
{{ .Prompt }}<|im_end|>
{{ end }}"""
SYSTEM """Bonjour, comment puis-je vous aider ?"""
```

Cet exemple définit un modèle de base, un modèle de message pour les entrées utilisateur et une réponse par défaut.

## Notes

Le Modelfile n'est pas sensible à la casse.
Les instructions peuvent être utilisées dans n'importe quel ordre.

## Usage

Vous pouvez par exemple demander à un modèle d'être un professeur d'anglais, de juger le niveau de l'élève, de lui poser des questions et de lui expliquer ses erreurs, puis de mettre en pratique par des exemples les connaissances acquises.