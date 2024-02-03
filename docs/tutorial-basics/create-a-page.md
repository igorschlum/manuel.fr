---
sidebar_position: 1
---

# Llama2 par Meta

*le LLM Llama2 est un modèle de langage naturel développé par des 
chercheurs à la recherche en intelligence artificielle (AI) de Facebook. 
Il a été formé sur une énorme base de données de textes du web et est 
capable d'effectuer une grande variété de tâches de traitement du langage 
naturel. Le modèle repose sur l'architecture Transformer et utilise des
mécanismes d'auto-attention pour traiter les séquences d'entrée.*

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
