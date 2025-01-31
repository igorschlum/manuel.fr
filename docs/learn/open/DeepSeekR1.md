---
sidebar_position: 6
---

# DeepSeek

Le LLM à 5 millions de $ qui défraie la chronique

## histoire

DeepSeek est disponible en deux versions DeepSeek v3 et DeepSeekR1. C'est un modèle qui a été entrainé à partir de Llama3-70B de Meta. A la différence de Llama3.1, DeepSeekR1 est orienté raisonnement. Quand vous lui poser une question, il va commencer par réfléchir et poser les bases de la réponse et c'est seulement après qu'il vous répond. Il est donc assez lent à répondre, mais les réponses sont de qualité.

La société chinoise qui fait DeepSeek l'a développé avec des moyens réduits, car il utilise tout le travail fait par Meta avec Llama. Ce qui est intéresssant, c'est qu'il vient concurrencer chatgpt-o1 en open Source.

En moins de 10 jours, il a été téléchargé plus de 5 millions de fois sur Ollama, car il a bénéficier d'un grand succès dans la presse pour avoir fait chuter la valeur des géants de la tech américaine de 1000 milliars de $ en une journée. Il a donc solicité une certaine curiosité dans le grand public.

## disponsible dans plein de tailles

Ce qui est intéressant également avec DeepSeek, c'est qu'il est disponible en différentes tailles. Il est disponible en 1.5b et consomme alors 1.1Go de Ram, en 7b, 8b, 14b, 32b, 70b et jusqu'à 671b.

Sur un mac on peut donc faire tourner jusqu'à la version 70b.

## performance

Quand on lui demande le nombre de jours entre le 2 février 2021 et le 23 mai 2024, il se trompe quand même

<details open>
  <summary>ollama run deepseek-r1:70b
    \>\>\> combien de jours entre le 2 février 2021 et le 23 mai 2024 ?</summary>
<think>
Pour calculer le nombre de jours entre le 2 février 2021 et le 23 mai 
2024, je commence par identifier les années concernées : 2021, 2022, 2023 
et une partie de 2024.

Je dois d'abord déterminer si ces années sont bissextiles. Une année est 
bissextile si elle est divisible par 4, mais pas par 100, sauf si elle est 
également divisible par 400. Ainsi, 2020 était une année bissextile, donc 
2021 ne l'est pas. De même, 2022 et 2023 ne sont pas bissextiles, tandis 
que 2024 le sera.

Ensuite, je calcule les jours restants de l'année 2021 à partir du 2 
février. Février compte 28 jours en 2021, donc du 2 au 28 février, il y a 
26 jours. Ensuite, je prends en compte les mois complets de mars à 
décembre, ce qui représente 10 mois. Chaque mois a un nombre fixe de jours 
: mars (31), avril (30), mai (31), juin (30), juillet (31), août (31), 
septembre (30), octobre (31), novembre (30) et décembre (31). En 
additionnant ces jours, j'obtiens 304 jours pour l'année 2021.

Pour les années 2022 et 2023, qui ne sont pas bissextiles, chaque année 
compte 365 jours. Je les additionne donc : 365 + 365 = 730 jours.

Enfin, pour l'année 2024, je dois calculer les jours du 1er janvier au 23 
mai. Janvier a 31 jours, février 29 jours (car 2024 est bissextile), mars 
31 jours, avril 30 jours et enfin mai jusqu'au 23, soit 23 jours. En 
additionnant ces jours : 31 + 29 + 31 + 30 + 23 = 144 jours.

En totalisant toutes ces périodes, j'obtiens le nombre de jours entre les 
deux dates.
</think>

Pour calculer le nombre de jours entre le **2 février 2021** et le **23 
mai 2024**, nous allons procéder étape par étape en tenant compte des 
années bissextiles.

### Étape 1 : Déterminer les années bissextiles
- **2020** est une année bissextile (divisible par 4 et non divisible par 
100), donc février 2020 a 29 jours.
- **2021**, **2022** et **2023** ne sont pas des années bissextiles, donc 
février compte 28 jours pour ces années.
- **2024** est une année bissextile (divisible par 4 et non divisible par 
100), donc février 2024 a 29 jours.

### Étape 2 : Calcul du nombre de jours restants en 2021
À partir du **2 février 2021** jusqu'au **31 décembre 2021** :
- Février : 28 - 2 + 1 = 27 jours (du 2 au 28 février)
- Mars à Décembre : 
  - Mars : 31 jours
  - Avril : 30 jours
  - Mai : 31 jours
  - Juin : 30 jours
  - Juillet : 31 jours
  - Août : 31 jours
  - Septembre : 30 jours
  - Octobre : 31 jours
  - Novembre : 30 jours
  - Décembre : 31 jours
  
  Total pour 2021 : 27 + (31+30+31+30+31+31+30+31+30+31) = **304 jours**

### Étape 3 : Années complètes (2022 et 2023)
- Chaque année non bissextile compte 365 jours.
  
  Total pour 2022 et 2023 : 365 + 365 = **730 jours**

### Étape 4 : Calcul du nombre de jours en 2024
Du **1er janvier 2024** au **23 mai 2024** :
- Janvier : 31 jours
- Février : 29 jours (année bissextile)
- Mars : 31 jours
- Avril : 30 jours
- Mai : 23 jours
  
  Total pour 2024 : 31 + 29 + 31 + 30 + 23 = **144 jours**

### Étape 5 : Total des jours

Total = Jours en 2021 + Jours en 2022 et 2023 + Jours en 2024 = 304 + 730 + 144 = 1178 jours
\]

**Réponse finale :**

1178

 </details>

Si on compare maintenant avec Copilot de Microsoft il n'y a pas photo, le raisonnement est beaucoup plus précis, rapide et surtout juste. Copilot est également gratuit d'utilisation, on peut l'utiliser en ligne sans s'enregistrer. Copilot n'est toutefois pas open source.

combien de jours entre le 2 février 2021 et le 23 mai 2024 ?

Il y a exactement 1 206 jours entre le 2 février 2021 et le 23 mai 2024.

peux-tu me donner le détail ?

Bien sûr ! Voici le détail :
Du 2 février 2021 au 2 février 2022 : 365 jours (année non bissextile).
Du 2 février 2022 au 2 février 2023 : 365 jours (année non bissextile).
Du 2 février 2023 au 2 février 2024 : 365 jours (année non bissextile).
Du 2 février 2024 au 23 mai 2024 : 111 jours.
En additionnant ces jours : 365 + 365 + 365 + 111 = 1 206 jours.
Et voilà, un total de 1 206 jours ! 😊
Besoin d'autre chose ?

## Conclusion

Attendons quand même la sortie de Llama4 qui devrait faire aussi beaucoup de bruit, attendons de vrais tests en profondeur de deepseek pour voir dans quel type de tâches il peut être vraiment utile, car sa phase de raisonnement l'empêche de répondre rapidement ce que est très pénalisant quand on veut faire de nombreux traitements les uns à la suite des autres.