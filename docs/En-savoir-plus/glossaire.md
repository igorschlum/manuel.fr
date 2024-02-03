---
sidebar_position: 1
---

# Glossaire

On explique ici les termes techniques utilisés dans ce site

## LLM{#LLM}

Large Language Model.

*LLM signifie "Large Language Model" en anglais, et se traduit par "modèle 
de langage naturel à grande échelle" en français.*

## Unsencored

*Un modèle "uncensored" est une version modifiée d'un modèle classique qui 
utilise des données provenant de sources moins censurées. Cela signifie 
qu'il peut produire des réponses plus nuancées et plus complexes sur des 
sujets sensibles, tels que la politique ou la religion, mais il est
également possible qu'il génère du contenu offensif ou inapproprié. En 
d'autres termes, un modèle "uncensored" est plus puissant mais aussi plus 
risqué à utiliser.*





## Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
