// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manuel.fr',
  tagline: "Déployer l'IA sur votre Mac avec Ollama",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://manuel.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'igorschlum', // Usually your GitHub org/user name.
  projectName: 'manuel.fr', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/igorschlum/manuel.fr/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/igorschlum/manuel.fr/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended for long-term cache of index file.
        hashed: true,
        // For Docs using Chinese, set the language option accordingly.
        language: "fr",
      }
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ollama.png',
      navbar: {
        title: 'manuel.fr',
        logo: {
          alt: 'Manuel.fr Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/learn', // Chemin vers la page d'accueil de la sidebar "Découvrir"
            label: 'Comprendre',
            position: 'left',
          },  
         {
           to: '/docs/install', // Chemin vers la page d'accueil de la sidebar "installer"
           label: 'Installer',
           position: 'left',
        },
        {
            to: '/docs/bib', // Chemin vers la page d'accueil de la sidebar "Bibliotèques"
            label: 'Bib',
            position: 'left',
        },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/igorschlum/manuel.fr',
            label: 'GitHub',
            position: 'right',
          },
       ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
           items: [
             {
               label: 'Comprendre',
              to: '/docs/learn/',
            },
           ],
         },
          {
            title: 'Community',
            items: [
              {
                label: 'Ollama.com',
                href: 'https://ollama.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/ollama',
              },
              {
                label: '(X) Twitter',
                href: 'https://x.com/ollama',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/igorschlum/manuel.fr',
              },
            ],
          },
        ],
         copyright: `Copyright © ${new Date().getFullYear()} <a href="https://x.com/igorschlum" style="color: white;>Igor Schlumberger</a>.`,

      },
      prism: {
        theme: prismThemes.github,
        additionalLanguages: ['php'],
      },
    }),
};

export default config;
