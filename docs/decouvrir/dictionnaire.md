---
sidebar_position: 2
---

Rien ne vaut une démonstration de ce qui est faisable en IA sur son Mac en OpenSource avec Ollama. Avant de vous lancer dans l'installation du logiciel et de ce qu'il faut pour le faire tourner, je vous propose de passer en revue ce que vous pouvez faire avec cet outil.

## Comme un dictionnaire

Quand vous lancez Ollama, vous pouvez lui poser des questions comme si vous consultiez un dictionnaire :

```
quelle est la définition du mot "caligraphie" ?

Le mot "caligraphie" provient du grec antiguî "kallos" (beauté) et "graphein" (écrire). La caligraphie est donc définie comme l'art de  Writings (l'écriture) de manière élégante et raffinée, mettant en valeur la beauté de la calligraphie.

En plus de son sens littéral, le terme "caligraphie" peut également être utilisé pour décrire l'art de créer des écritures nobles et ornées, souvent utilisées dans les documents importants ou des objets de collection. La caligraphie est considérée comme un art digne d'intérêt et d'étude, car elle nécessite une grande maîtrise de la plume et du papier, ainsi qu'une bonne compréhension de la calligraphie itself.

La caligraphie peut être pratiquée à main levée ou à l'aide d'un outil, tels que un stylet ou une plume, et peut être utilisée pour créer des textes en écritureursive, en calligraphie mixte, en calligraphie cursive, etc. Les artistes caligraphes peuvent également combiner différentes techniques et styles pour créer des œuvres originales et riches en details.
```
## Comme un mode d'emploi

Mais on peut aussi lui demander des conseils.

```
>>> peux-tu me répondre en français ? Par quoi faut-il commencer pour apprendre la caligraphie ?  Bien sûr ! Voici les étapes à suivre pour commencer à apprendre la calligraphie :

1. Choisissez les outils appropriés : Commencez avec des outils de base tels que une bonne qualité de plume, de l'encre et du papier. Vous pourriez également investir dans un guide ou un livre d'apprentissage pour vous aider à comprendre les bases.

2. Apprenez les grandes lignes de la construction des lettres : Déterminez les formes géométriques sous-jacentes aux lettres, y compris les traits verticaux et horizontaux, les boucles et les flourishes. Practiquez en drawant ces formes sur du papier pour développer la mémoire musculaire et la coordination.

3. Exécutez des exercices de base : Commencez avec des drills simples tels que le tracé des lettres ou la pratique de combinaisons de lettres. Au fil du temps, accroissez les exercices pour tester vos coordonnées et votre contrôle.

4. Apprenez des techniques de lettre à la main : Étudiez différents styles de calligraphie tels que le moderne, le copperplate ou le brush script. Practiquez en utilisant différents outils et techniques.

5. Essayez avec différentes matières : Tentez d'utiliser différentes sortes d'encre, de papier et de plumes pour voir comment elles affectent votre lettrage. Cela peut vous aider à développer un style personnel et préféré.

6. Étudiez le travail des autres calligraphes : Regardez le travail des calligraphes professionnels pour en être inspiré et apprendre de leurs techniques. Vous pouvez trouver des exemples en ligne ou dans des livres de calligraphie.

7. Prend un cours ou une atelier : Considérez prendre une classe ou un atelier de calligraphie pour obtenir des conseils personnalisés et une guiderisation directe d'un enseignant expérimenté. Cela vous aidera à améliorer vos compétences et votre technique.

8. Pratiquez régulièrement : La consistance est la clé pour apprendre la calligraphie. Réservez du temps chaque jour ou chaque semaine pour pratiquer et expérimenter différents styles et techniques.

9. Utilisez les technologies à votre avantage : Utilisez des outils numériques tels que des logiciels de lettre ou des applications pour vous aider à pratiquer et à améliorer vos compétences en calligraphie. Ces outils peuvent fournir des conseils utiles sur votre lettrage et vous aider à raffiner votre technique.

10. Soyez patient et persévérant : Apprendre la calligraphie prend du temps et de l'effort, donc ne vous découragez pas si vous ne voyez pas d'améliorations immédiates. Maintenez une pratique régulière, avec détermination e persévérance, et vous serez bientôt maître de cette belle art forme
```

On voit à la fin de ce dixième conseil qu'il y a des erreurs dans le texte. En effet, si on pose la question en français, mais qu'on ne demande pas de répondre en français et que l'IA n'a pas assez d'informations pour répondre en français, il va répondre en anglais. Quand on le force à répondre en français, il le fait, mais traduit la réponse qu'il avait préparé en anglais et peut faire des erreurs.

Les ingénieurs de l'IA ont eu la bonne idée de dire que l'IA ne fait pas d'erreur, mais que ce sont des allucinations.

## comme un livre de recette de cuisine

```
 peux-tu me donner une recette de mousse au chocolat en m'indiquant les dosag
... es dans le système métrique et en me donnant la liste des ingrédients et la 
... recette en français ?
Of course! Here is the recipe for egg-free chocolate mousse in both French
and metric units, along with the list of ingredients:

Ingrédients (en métrique):

* 350 ml de lait de coco entier
* 6 oz de chocolat noir (70% de cocoa ou plus)
* 1/4 tasse de farine de cacao
* 1 tas d'extrait de vanille en poudre
* 1/2 tasse de lait d'eau

Recette (en français):

1. Dans un blender ou un robot culinaire, mélangez le lait de coco, le chocolat, la farine de cacao et l'extrait de vanille jusqu'à ce que les ingrédients soient bien miscies et crémeux.
2. Dans un bol séparé, battez la crème chantilliat hasta qu'elle forme des croissants. Laissez refroidir.
3. Folds la crème battue dans le mélange de chocolat jusqu'à ce qu'il soit bien combiné.
4. Versez la mousse dans des cuillères individuelles ou dans un plat de 
service. Laissez réfrigérer pendant au moins 2 heures ou une nuit complète.
5. Avant de servir, décorez la mousse avec des lamelles de chocolat ou des graines de noix (optionnel).

Here are the dosages for each ingredient in the recipe:

* Lait de coco entier: 350 ml
* Chocolat noir (70% de cocoa ou plus): 6 oz
* Farine de cacao: 1/4 tasse
* Extrait de vanille en poudre: 1 tas
* Lait d'eau: 1/2 tasse

I hope this helps! Let me know if you have any questions.
````
On voit ici qu'on doit forcer llama2 a répondre en français et qu'on doit le forcer (sans total succès à utiliser le système métrique dans ses réponses)

Cliquez sur le côté pour découvrir d'autres usages de l'intelligence artificielle