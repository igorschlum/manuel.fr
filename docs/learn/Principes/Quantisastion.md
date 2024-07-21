---
sidebar_position: 5
---

# Quantisation

## Principe

Qu'est-ce que la quantisation et comment cela réduit les modèles d'IA ?

La quantisation est une technique utilisée pour réduire la taille des modèles de machine learning tout en maintenant l'exactitude. 
Cela peut entraîner des temps d'exécution plus rapides, une utilisation de mémoire inférieure et des exigences de bande passante réduites lors du déploiement de ces modèles sur les appareils Edge ou dans d'autres environnements à ressources limitées.

### en pratique

les modèles d'intelligence artificielle sur Ollama sont souvent disponibles en plusieurs formats de quantisation, plus la Quantisation est élevée, plus le LLM est volumineux en mémoire et plus le traitement est long, car les données numériques sont stockées sur un plus grand nombre d'octets ce qui peut avoir une incidence positive sur la qualité des réponses.

Q2 signifie que les données sont stockées sur 2 octets, Q8 siginifie que les informations sont stockées sur 8 octets.

### Dans le détail

Le terme "quantization" vient du traitement numérique des signaux où il s'agit du processus de conversion d'un signal analogue en une représentation discrète utilisant des nombres à précision finie (bits). Dans les contextes de l'apprentissage automatique, la quantisation est principalement utilisée pour compresser et accélérer les modèles.

Il existe deux types principaux de quantisations : la quantisation à précision maximale (full-precision) et la quantisation à faible précision. Les modèles à précision maximale utilisent le maximum de bits autorisés par les contraintes matérielles ou logicielles (par exemple, des nombres flottants), tandis que les modèles à faible précision réduisent cette précision pour économiser l'espace et améliorer les performances au coût d'une perte d'exactitude.

La quantisation d'un réseau neuronal consiste à remplacer ses poids par des valeurs à des largeurs de bits inférieures, comme des entiers à 8 bits au lieu de nombres flottants à 32 bits ou même des valeurs binaires (1 et -1). Cela peut réduire significativement la taille du modèle sans causer une perte trop importante d'exactitude. L'impact exact sur les performances dépend de facteurs tels que l'architecture du réseau neuronal, sa complexité et de la façon dont il a été entraîné initialement avec des poids à précision 
maximale.

Les techniques de quantisation sont devenues de plus en plus importantes car les modèles d'apprentissage automatique grandissent et deviennent plus complexes en raison de leur nature resource-intense pendant le déploiement. En quantifiant ces modèles, les développeurs peuvent les rendre compatibles avec des appareils qui ne disposent pas de puissance de traitement ou de mémoire suffisantes pour exécuter de grandes réseaux neuronales directement à partir de la RAM.

Quels sont les étiquettes avec un Q et un nombre ?

En ce qui concerne le quantization d'un modèle de langage (LLM), différents nombres tels que Q2 jusqu'à Q8 représentent le nombre debits utilisés pour la précision pendant l'entraînement du modèle. Le "Q" signifie "quantized" et chaque niveau (par exemple, Q4) indique qu'il y a quatre bits attribués pour stocker des valeurs dans un certain couche ou noeud dans l'architecture du réseau neuronal.

Le compromis entre qualité et vitesse est une considération importante lors de la quantization des modèles car réduire la précision peut entraîner une perte d'exactitude, notamment si vous allez trop loin (par exemple, en utilisant uniquement 2 ou 4 bits). 
Cependant, cet erreur peut être négligeable en fonction de votre cas d'utilisation.

Par exemple, dans les tâches de traitement du langage naturel telles que la traduction et la résumé, où le contexte est crucial mais pas toujours critique pour la correction, des erreurs mineures peuvent encore produire des résultats acceptables sans affecter significativement l'expérience utilisateur.

Pour récapituler

Lorsque les utilisateurs exécutent leurs propres modèles, ils devraient prendre en compte les facteurs suivants :

1) Les spécificités de votre application – si une haute précision est nécessaire même à la vitesse réduite (ou inversement), vous devrez peut-être expérimenter avec différents niveaux de quantization ;

2) Les contraintes matérielles – certains appareils peuvent ne supporter que certaines largeurs de bits en raison de leur architecture ou des limitations de mémoire. Dans ces cas, il est essentiel de choisir un niveau qui convienne dans ces limites tout en offrant une performance acceptable.

En résumé, la quantization permet aux développeurs et utilisateurs de plus grande flexibilité pour déployer les modèles d'apprentissage automatique sur différents plateformes en réduisant la taille du modèle sans sacrifier trop d'exactitude. En comprenant les compromis impliqués avec différents niveaux de précision (Q2 jusqu'à Q8), vous pouvez prendre des décisions éclairées quant à quel niveau convient le mieux à vos besoins spécifiques, qu'ils soient axés sur la vitesse ou sur la maintenance d'une haute qualité d'output de vos LLM IA.

Si vous voulez en savoir plus que les méthode de Quantification, [cet article](https://www.unite.ai/fr/comparing-quantization-techniques-for-scalable-vector-search/) écrit par Haziqa Sajid est très bien fait.
