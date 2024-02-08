import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f3f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'cf7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '394'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '101'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7c3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '343'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '9c1'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f63'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c9b'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '5ff'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'cb0'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '2c6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '987'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '6d8'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'ead'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '7dd'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '02d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'f19'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '4a8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '19b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '798'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '330'),
            routes: [
              {
                path: '/docs/category/bibliothèque',
                component: ComponentCreator('/docs/category/bibliothèque', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/en-savoir-plus',
                component: ComponentCreator('/docs/category/en-savoir-plus', 'f9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/usage',
                component: ComponentCreator('/docs/category/usage', 'bae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/En-savoir-plus/glossaire',
                component: ComponentCreator('/docs/En-savoir-plus/glossaire', '477'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/En-savoir-plus/instruct',
                component: ComponentCreator('/docs/En-savoir-plus/instruct', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/En-savoir-plus/Paramètres',
                component: ComponentCreator('/docs/En-savoir-plus/Paramètres', '119'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/En-savoir-plus/Quantization',
                component: ComponentCreator('/docs/En-savoir-plus/Quantization', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/En-savoir-plus/rag',
                component: ComponentCreator('/docs/En-savoir-plus/rag', '2fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/Code',
                component: ComponentCreator('/docs/models-list/Code', '9ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/Education',
                component: ComponentCreator('/docs/models-list/Education', '268'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/Général',
                component: ComponentCreator('/docs/models-list/Général', 'e51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/Image',
                component: ComponentCreator('/docs/models-list/Image', '5f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/models-list/Médecin',
                component: ComponentCreator('/docs/models-list/Médecin', '372'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/outils/Docker',
                component: ComponentCreator('/docs/outils/Docker', '54c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/outils/Github',
                component: ComponentCreator('/docs/outils/Github', 'f17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/outils/python',
                component: ComponentCreator('/docs/outils/python', '005'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Usage/chatbox',
                component: ComponentCreator('/docs/Usage/chatbox', '2d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Usage/Entrainer un modèle',
                component: ComponentCreator('/docs/Usage/Entrainer un modèle', '44a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Usage/Import Modèle',
                component: ComponentCreator('/docs/Usage/Import Modèle', '80e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Usage/ModelFile',
                component: ComponentCreator('/docs/Usage/ModelFile', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Usage/vs code',
                component: ComponentCreator('/docs/Usage/vs code', 'a70'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '598'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
