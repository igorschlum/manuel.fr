---
sidebar_position: 1
---

# LlaMa

Les modèles de langage Llama sont développés par Meta, la société derrière Facebook et Instagram. Llama est gratuit d'utilisation pour les entreprises de moins d'un milliard d'utilisateurs, en d'autres termes, la plupart des entreprises en dehors des géants de la tech.

Llama 2 a été le premier modèle de langage large (LLM) libre de droit. Initialement destiné aux chercheurs et aux scientifiques, Llama 2 a été rapidement adapté pour un usage plus large par des développeurs grâce à l’outil llama.cpp, permettant de le faire tourner sur un ordinateur personnel ou un serveur Linux. Ollama a ensuite développé un logiciel autour de llama.cpp, le rendant très simple à utiliser.

Llama 2 a été suivi de Llama 3, puis des versions Llama 3.1 et 3.2, avec Llama 3.2 Vision en dernière version à ce jour. Les nouvelles versions de Llama sont publiées fréquemment, et d’autres améliorations sont attendues.

Llama 2 nécessitait au minimum 4 Go de mémoire et existait en trois tailles : 7B, 13B et 70B. Il a été téléchargé plus de 2,3 millions de fois sur Ollama.com, avec une dernière mise à jour en janvier 2024.

Ensuite, Llama 3 a été lancé en versions 8B et 70B, atteignant 6,6 millions de téléchargements sur Ollama, avec sa dernière mise à jour en juin 2024.

Llama 3.1 a fait sensation en introduisant un modèle encore plus grand de 405B, le plus gros modèle gratuit disponible, bien que peu accessible pour la plupart des utilisateurs en raison de ses exigences de ressources. Cette version a également introduit les premiers modèles "Tool" chez Ollama.

Un modèle "Tool" peut se connecter à des outils externes, libérant les LLM de leurs données statiques. Les modèles de données classiques fonctionnent dans un environnement fermé et sont limités aux informations avec lesquelles ils ont été entraînés. Par exemple, si on lui demande l'heure ou la météo actuelle, il ne peut pas répondre, car il ne dispose pas de données en temps réel.

Avec un modèle Tool, les LLM peuvent utiliser des fonctions externes, comme vérifier l'heure ou consulter la météo, pour enrichir leurs réponses. Le modèle peut déterminer automatiquement s’il a besoin de ces informations et les intégrer dans sa réponse. Par exemple, il pourrait dire : "C’est le printemps, il fait beau ; je vous recommande de visiter le Jardin des plantes où les cerisiers sont en fleur."

Fin septembre 2024, Meta a lancé Llama 3.2, incluant une version optimisée pour l’auto-complétion, pouvant bientôt fonctionner sur des téléphones portables et des ordinateurs plus légers. Llama 3.2 existe également en version Vision, permettant d’analyser et de répondre à des questions sur des images.

Llama 3.2 est également entrainé pour fonctionner, outre l'anglais en allemand, en français, en italien, en portugais, en hindi, en espagnol, et en Thaï.

Llama 3.3 70b est sorti début décembre 2024. Il est meilleur pour traiter des fichiers json en entrée comme en sortie.

Pour en savoir plus sur Le LLM Llama, vous pouvez visiter [sa page Wikipedia](https://fr.wikipedia.org/wiki/LLaMA)

Voir [Llama 3.2](https://ollama.com/library/llama3.2) sur [Ollama.com](https://ollama.com/)

---
sidebar_position: 1
---
# LlaMa

Les modèles de langage Llama sont développés par Meta, la société derrière Facebook et Instagram. Llama est gratuit d'utilisation pour les entreprises de moins d'un milliard d'utilisateurs, en d'autres termes, la plupart des entreprises en dehors des géants de la tech.

Llama 2 a été le premier modèle de langage large (LLM) libre de droit. Initialement destiné aux chercheurs et aux scientifiques, Llama 2 a été rapidement adapté pour un usage plus large par des développeurs grâce à l’outil llama.cpp, permettant de le faire tourner sur un ordinateur personnel ou un serveur Linux. Ollama a ensuite développé un logiciel autour de llama.cpp, le rendant très simple à utiliser. Llama 2 nécessitait au minimum 4 Go de mémoire et existait en trois tailles : 7B, 13B et 70B. Il a été téléchargé plus de 2,3 millions de fois sur Ollama.com, avec une dernière mise à jour en janvier 2024.

Ensuite, Llama 3 a été lancé en versions 8B et 70B, atteignant 6,6 millions de téléchargements sur Ollama, avec sa dernière mise à jour en juin 2024.

Llama 3.1 a fait sensation en introduisant un modèle encore plus grand de 405B, le plus gros modèle gratuit disponible, bien que peu accessible pour la plupart des utilisateurs en raison de ses exigences de ressources. Cette version a également introduit les premiers modèles "Tool" chez Ollama. Un modèle "Tool" peut se connecter à des outils externes, libérant les LLM de leurs données statiques. Les modèles de données classiques fonctionnent dans un environnement fermé et sont limités aux informations avec lesquelles ils ont été entraînés. Par exemple, si on lui demande l'heure ou la météo actuelle, il ne peut pas répondre, car il ne dispose pas de données en temps réel. Avec un modèle Tool, les LLM peuvent utiliser des fonctions externes, comme vérifier l'heure ou consulter la météo, pour enrichir leurs réponses. Le modèle peut déterminer automatiquement s’il a besoin de ces informations et les intégrer dans sa réponse. Par exemple, il pourrait dire : "C’est le printemps, il fait beau ; je vous recommande de visiter le Jardin des plantes où les cerisiers sont en fleur."

Fin septembre 2024, Meta a lancé Llama 3.2, incluant une version optimisée pour l’auto-complétion, pouvant bientôt fonctionner sur des téléphones portables et des ordinateurs plus légers. Llama 3.2 existe également en version Vision, permettant d’analyser et de répondre à des questions sur des images. Llama 3.2 est également entrainé pour fonctionner, outre l'anglais en allemand, en français, en italien, en portugais, en hindi, en espagnol, et en Thaï.

Llama 3.3 70b est sorti début décembre 2024. Il est meilleur pour traiter des fichiers json en entrée comme en sortie.

## Llama 4 : Le Multimodal Natif

Début mai 2025, Ollama est enfin compatible avec **Llama 4** qui est sorti quelques semaines plus tôt. Cette nouvelle collection de modèles marque une étape importante car ils sont **nativement multimodaux**, capables de traiter à la fois du texte et des images en entrée pour générer du texte et du code en sortie. Ils reposent sur une architecture efficace de type **Mixture-of-Experts (MoE)**.

Deux modèles principaux sont proposés via Ollama :

*   **Llama 4 Scout** : Un modèle MoE de 109 milliards de paramètres au total, avec 17 milliards actifs lors de l'inférence. Ce modèle pèse quand même 67 Go, on peut le faire tourner sur un mac bien équipé.
    *   Commande Ollama : `ollama run llama4:scout`
*   **Llama 4 Maverick** : Un modèle MoE plus large de 400 milliards de paramètres au total, avec également 17 milliards actifs. (je n'ai pas testé ce modèle qui demande 245 Go sur le disque dur)
    *   Commande Ollama : `ollama run llama4:maverick`

Llama 4 est conçu pour des cas d'usage commerciaux et de recherche. Ses capacités incluent la génération de texte multilingue, la génération de code, et surtout, des **expériences multimodales** : raisonnement visuel, reconnaissance d'images, génération de légendes, et réponse à des questions générales sur une image (testé jusqu'à 5 images en entrée par Meta).

Il prend en charge nativement **12 langues** : l'allemand, l'anglais, l'arabe, l'espagnol, le français, l'hindi, l'indonésien, l'italien, le portugais, le tagalog, le thaï et le vietnamien. (Il est à noter que le pré-entraînement a couvert 200 langues, ouvrant la porte au fine-tuning pour d'autres langues, sous respect de la licence).

**Retour d'expérience personnel :** Ayant pu tester Llama 4 peu après sa sortie, j'ai constaté qu'il était **exceptionnellement bon en traduction** entre les langues supportées. C'est un vrai point fort. En revanche, malgré ses capacités multimodales annoncées, je n'ai **pas encore réussi à obtenir de bons résultats pour des tâches simples d'OCR** (Reconnaissance Optique de Caractères) sur une image. Il semble que ce domaine nécessite peut-être encore des ajustements ou une approche spécifique.

Comme ses prédécesseurs récents, Llama 4 est distribué sous la **Llama 4 Community License**, autorisant les usages commerciaux et la recherche, y compris la génération de données synthétiques pour améliorer d'autres modèles, sous réserve du respect de la politique d'utilisation acceptable.

Llama 4 représente donc une avancée majeure vers des IA plus polyvalentes, intégrant nativement la vision.


Pour en savoir plus sur Le LLM Llama, vous pouvez visiter [sa page Wikipedia](https://fr.wikipedia.org/wiki/LLaMA)
Voir les modèles Llama sur [Ollama.com](https://ollama.com/), par exemple [Llama 3.2](https://ollama.com/library/llama3.2) et [Llama4](https://ollama.com/library/llama4).