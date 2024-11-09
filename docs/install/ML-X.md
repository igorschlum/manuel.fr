---
sidebar_position: 12
---
Pour affiner des modèles existants, il faut installer ML-X sur votre Mac.
MLX est une librairie OpenSource développée par Apple et qui permet de profiter de la puissance des processeurs Apple silicon (M1, M2, M3) pour faire tourner des modèles d'intelligence artificielle ou pour les entraîner.


Allez sur le site officiel pour télécharger le package MLX [ici](https://pypi.org/project/mlx-lm/).

Installez la version de MLX avec la commande PIP install, mais si vous préférez vous pouvez aussi l'installer avec conda.

```bash
pip install mlx-lm
```

L'installeur de mlx-lm, va également installer les librairies suivantes :

[LoRA and QLoRA fine-tuning](https://github.com/ml-explore/mlx-examples/blob/main/llms/mlx_lm/LORA.md)
[Merging models](https://github.com/ml-explore/mlx-examples/blob/main/llms/mlx_lm/MERGE.md)
et [HTTP model serving](https://github.com/ml-explore/mlx-examples/blob/main/llms/mlx_lm/SERVER.md)

ml-x permet de faire des tâches en ligne de commande de façon plus complexes que Ollama.

Avec votre compte [HuggingFace](https://www.manuel.fr/install/Hugging%20Face%20CLI) vous pouvez utiliser directement des modèles de données avec ML-X

Sur HuggingFace, vous pouvez chercher les modèles de [MLX Community](https://huggingface.co/mlx-community).

On va prendre par exemple le modèle [Llama-3.2-1B-Instruct-bf16](https://huggingface.co/mlx-community/Llama-3.2-1B-Instruct-bf16)

```bash
python -m mlx_lm.generate --model mlx-community/Llama-3.2-1B-Instruct-bf16 --prompt "pourquoi le ciel est bleu"
```

Voici le résultat que ça va afficher

```bash
(base) igor@macIgor ~ % python -m mlx_lm.generate --model mlx-community/Llama-3.2-1B-Instruct-bf16 --prompt "pourquoi le ciel est bleu"
config.json: 100%|██████████████████████████████████████████████████████████████████████████████████| 968/968 [00:00<00:00, 9.29MB/s]
special_tokens_map.json: 100%|██████████████████████████████████████████████████████████████████████| 296/296 [00:00<00:00, 2.48MB/s]
model.safetensors.index.json: 100%|█████████████████████████████████████████████████████████████| 10.4k/10.4k [00:00<00:00, 33.3MB/s]
tokenizer_config.json: 100%|█████████████████████████████████████████████████████████████████████| 54.5k/54.5k [00:00<00:00, 641kB/s]
tokenizer.json: 100%|███████████████████████████████████████████████████████████████████████████| 9.09M/9.09M [00:04<00:00, 1.86MB/s]
model.safetensors: 100%|████████████████████████████████████████████████████████████████████████| 2.47G/2.47G [08:00<00:00, 5.15MB/s]
Fetching 6 files: 100%|████████████████████████████████████████████████████████████████████████████████| 6/6 [08:01<00:00, 80.18s/it]
==========
Prompt: <|begin_of_text|><|start_header_id|>system<|end_header_id|>

Cutting Knowledge Date: December 2023
Today Date: 27 Sep 2024

<|eot_id|><|start_header_id|>user<|end_header_id|>

pourquoi le ciel est bleu<|eot_id|><|start_header_id|>assistant<|end_header_id|>


Le ciel bleu est un phénomène naturel qui se produit lorsque les particules de l'atmosphère, comme les gaz et les poussières, sont absorbées par la lumière du soleil et réfléchies, créant ainsi un effect de couleur bleue. Voici une explication plus détaillée :

Lorsque la lumière du soleil frappe les particules de l'atmosphère, elles interagissent
==========
Prompt: 44 tokens, 75.977 tokens-per-sec
Generation: 100 tokens, 51.564 tokens-per-sec
Peak memory: 2.327 GB
(base) igor@macIgor ~ % 
```

pour les plus courageux, il y a des [scripts d'exemple](https://github.com/ml-explore/mlx-examples) pour faire par exemple de la reconnaissance vocale avex Whisper ou faire de la génération d'image avec Stable diffusion.

