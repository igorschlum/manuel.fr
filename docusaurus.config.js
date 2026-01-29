// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
/** @type {import('@docusaurus/types').Config} */
import { themes as prismThemes } from "prism-react-renderer";

const config = {
  title: "Manuel.fr",
  tagline: "Déployer l'IA OpenSource sur votre Mac avec Ollama",
  // MODIFICATION : Le favicon pointe maintenant vers le fichier SVG
  favicon: "img/favicon.svg",
  future: {
    experimental_faster: false,
    v4: true,
  },
  url: "https://manuel.fr",
  baseUrl: "/",
  organizationName: "igorschlum",
  projectName: "manuel.fr",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          includeCurrentVersion: true,
          showLastUpdateTime: true,
          editUrl: "https://github.com/igorschlum/manuel.fr/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/igorschlum/manuel.fr/blob/main/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: "description",
        content:
          "Ollama expliqué, pour utiliser facilement les LLMs OpenSource sur son Mac",
      },
      { property: "og:title", content: "Manuel.fr pour Ollama et les LLMs" },
      {
        property: "og:description",
        content:
          "Ollama expliqué, pour utiliser facilement les LLMs OpenSource sur son Mac",
      },
      { property: "og:image", content: "https://manuel.fr/img/logo.svg" },
      { property: "og:url", content: "https://manuel.fr/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Manuel.fr pour Ollama et les LLMs" },
      {
        name: "twitter:description",
        content:
          "Ollama expliqué, pour utiliser facilement les LLMs OpenSource sur son Mac",
      },
      { name: "twitter:image", content: "https://manuel.fr/img/facile.svg" },
    ],
    image: "img/icon.png",
    navbar: {
      title: "manuel.fr",
      logo: {
        alt: "Logo manuel.fr",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "L",
          position: "left",
          to: "/learn",
          label: "Comprendre",
        },
        {
          to: "/use",
          sidebarId: "U",
          label: "Utiliser",
          position: "left",
        },
        {
          sidebarId: "I",
          to: "/install",
          label: "Installer",
          position: "left",
        },
        {
          sidebarId: "D",
          to: "/dev",
          label: "Développer",
          position: "left",
        },
        {
          sidebarId: "B",
          to: "/bib",
          label: "Bib",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/igorschlum/manuel.fr",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Chapitres",
          items: [
            { label: "Comprendre", to: "/learn/" },
            { label: "Utiliser", to: "/use/" },
            { label: "Installer", to: "/install/" },
            { label: "Développer", to: "/dev/" },
            { label: "Bibliothèque", to: "/bib/" },
          ],
        },
        {
          title: "Communauté",
          items: [
            { label: "Ollama.com", href: "https://ollama.com" },
            { label: "Discord", href: "https://discord.com/invite/ollama" },
            { label: "(X) Twitter", href: "https://x.com/ollama" },
          ],
        },
        {
          title: "Et aussi",
          items: [
            { label: "Blog", to: "/blog" },
            {
              label: "GitHub",
              href: "https://github.com/igorschlum/manuel.fr",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Igor Schlumberger.`,
    },
    prism: {
      theme: prismThemes.github,
      additionalLanguages: ["php"],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  },
};

export default config;
