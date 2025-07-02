---
sidebar_position: 7
---

# Hugging Face

Hugging Face est un site qui permet de retrouver et de télécharger des modèles de données. La bibliothèque des modèles de données sur Hugging Face est beaucoup plus large que celle d'Ollama, mais c'est plus compliqué de les utiliser.

## créer un compte sur Hugging Face

Vous devez commencer par créer un compte gratuit sur HuggingFace pour ensuite pouvoir télécharger et utiliser les modèles de données soit en les important avec Ollama, soit en les faisant tourner avec MLX qui est la librairie OpenSource développée par Apple.

## trouver un modèle sur Hugging Face

Sur HuggingFace, on retrouve des LLM sous plusieurs formats. Il y a ceux que l'on peut importer avec une simple commande s'ils sont au format GGUF.

Il y a [ici sur HuggingFace](https://huggingface.co/models?library=gguf&sort=trending), la liste des modèles les plus "Trending" au format GGUF.

On peut chercher dans la liste par mot clé et si par exemple je veux un modèle pour traduire de l'anglais vers le Russe et le Chinois, je peux essayer le [modèle t5_translate fait pas iG8R](https://huggingface.co/iG8R/t5_translate_en_ru_zh_large_1024_v2-Q8_0-GGUF)

Je clique le carré à côté du nom pour copier le nom du modèle et le dossier qui le contient.

```bash
iG8R/t5_translate_en_ru_zh_large_1024_v2-Q8_0-GGUF
```

## importer un modèle depuis Hugging Face

Pour importer le modèle dans Ollama, il suffit de rajouter "ollama run hf.co/ devant le nom du modèle qu'on veut importer. Par exemple

```bash
ollama run hf.co/iG8R/t5_translate_en_ru_zh_large_1024_v2-Q8_0-GGUF
```

Certains modèles nécessitent de mettre son identifiant HuggingFace pour pouvoir les télécharger et parfois, il y a des erreurs de TimeOut sur le téléchargement.

```bash
ollama run hf.co/{username}/{reponame}:latest
```

peut alors être remplacé par :

```bash
ollama run hf-mirror.com/{username}/{reponame}:latest
```


Vous voyez ensuite le modèle s'importer dans Ollama, comme s'il était chargé depuis le site Ollama.

## créer un template file

Malheureusement dans certain, le fichier de template n'a pas été exporté au moment de la création du modèle en GUFF et il faut utiliser l'ancienne méthode qui est plus compliqué pour importer un fichier GUFF comme [expliqué ici](/use/import_guff)