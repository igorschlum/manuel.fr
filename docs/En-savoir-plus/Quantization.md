---
sidebar_position: 2
---

# Quantization

Lorsqu'un LLM (Large Language Model) est disponible dans différentes versions 
quantifiées telles que Q2, Q4 ou Q8, la vitesse et la précision du modèle
dépendent du niveau de quantification utilisé. La puissance d'un modèle ne 
peut pas être comparée directement car cela varie en fonction des besoins
spécifiques et des compromis entre la précision et les ressources 
informatiques nécessaires pour l'exécuter.

Les versions Q2, Q4 ou Q8 font référence au niveau de quantification utilisé 
pour représenter les valeurs numériques dans le modèle. Par exemple :

- La version Q2 utilise 2 bits pour stocker chaque valeur numérique (par 
exemple -1, 0 ou +1).
- La version Q4 utilise 4 bits (par exemple -8, -7, ..., +7 ou +8), et ainsi 
de suite.

En général, plus le niveau de quantification est élevé (Q8 par rapport à Q2, 
par exemple), meilleure est la précision du modèle car il peut représenter un 
plus grand nombre de valeurs numériques. Cependant, cela se traduit également 
par une consommation accrue de ressources informatiques (telles que la mémoire
et les calculs) pour stocker et traiter ces valeurs.

Ainsi, le choix entre différentes versions quantifiées d'un LLM dépend des 
compromis en termes de précision et de performance souhaités dans un scénario 
donné :

- La version Q2 sera généralement la plus rapide car elle nécessite moins de 
ressources informatiques pour fonctionner, mais sa précision est limitée. Cela
peut être une bonne option si vous recherchez des performances optimales sur 
des appareils à faible puissance ou si la précision du modèle n'est pas un 
facteur critique.
- La version Q8 offre généralement la meilleure précision car elle permet de 
représenter plus de valeurs numériques, mais cela se traduit par une 
consommation accrue des ressources informatiques et donc potentiellement une 
vitesse d'exécution inférieure. Ce choix peut être judicieux si vous avez 
besoin d'une précision maximale pour garantir la qualité des résultats du
modèle, même au détriment de la performance globale.
- Les versions Q4 et autres peuvent offrir un équilibre entre vitesse et
précision en fonction de vos exigences spécifiques. Par exemple, si vous avez
besoin d'une précision légèrement supérieure à celle offerte par la version Q2
sans trop sacrifier les performances, une quantification intermédiaire (Q4 ou 
autre) pourrait être un bon choix.

En résumé, il n'y a pas de réponse unique à la question de savoir quel niveau 
de quantification est le plus puissant ou le plus rapide car cela dépend des 
compromis entre précision et ressources informatiques que vous êtes prêt à 
faire. La version Q2 sera généralement la plus rapide, tandis que la version 
Q8 offrira la meilleure précision au prix d'une consommation accrue des 
ressources. Les versions intermédiaires (Q4 et autres) peuvent constituer un 
bon compromis entre vitesse et précision en fonction de vos besoins
spécifiques.