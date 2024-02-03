---
sidebar_position: 2
---

# GitHub

Imaginez GitHub comme un grand coffre-fort numérique où les développeurs stockent leurs codes. Ce coffre-fort est spécial car il permet à plusieurs personnes de travailler et collaborer sur le même programme, un peu comme un document Google partagé.

Certains programmes sur GitHub sont "Open Source", ce qui signifie que tout le monde peut les consulter, les modifier et les partager. C'est un peu comme une recette de cuisine libre que tout le monde peut améliorer. Ollama est un projet Open Source, ce qui veut dire que vous pouvez contribuer à son développement en signalant des bugs, en proposant des améliorations ou même en créant du nouveau code.

Ce mode d'emploi d'Ollama en français est également disponible sur GitHub. Cela signifie que vous pouvez égalamentle modifier et l'améliorer. C'est un excellent moyen de partager vos connaissances et d'aider les autres utilisateurs.

Le lien GitHub de Ollama

Le lien GitHub de Ollama.fr

## Configure i18n

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Translate a doc

Copy the `docs/intro.md` file to the `i18n/fr` folder:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

## Start your localized site

Start your site on the French locale:

```bash
npm run start -- --locale fr
```

Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale fr
```

Or build your site to include all the locales at once:

```bash
npm run build
```
