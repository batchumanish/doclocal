// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation",
  tagline: "Covalent",
  favicon: "img/assets/covalent-logo-blue-favicon.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "psiog", // Usually your GitHub org/user name.
  projectName: "covalent", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /* @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-TRT4EEMTZS",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/assets/covalent-logo-horizontal-blue.png",
      navbar: {
        logo: {
          alt: "My Site Logo",
          src: "none",
          srcDark: "/img/assets/v2-logo.svg",
          href: "/docs/",
        },
        hideOnScroll: true,
        items: [
          {
            to: "https://www.covalent.xyz/open-source/",
            label: "Open Source",
            position: "left",
          },
          {
            to: "https://www.covalent.xyz/cloud/",
            label: "Cloud",
            position: "left",
          },
          {
            to: "/docs/",
            label: "Docs",
            position: "left",
          },
          {
            to: "https://www.covalent.xyz/blog/",
            label: "Blog",
            position: "left",
          },
          // {
          //   to: "https://github.com/AgnostiqHQ/covalent",
          //   label: "GitHub",
          //   position: "right",
          // },
          {
            to: "https://github.com/AgnostiqHQ/covalent",
            label: " Star ",
            position: "right",
            className: "header-button",
            style: { paddingLeft: "45px", marginRight: "5px" },
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "Q3YUVEAWIZ",
        apiKey: "d1aa790c9792f48a1de172758a70fb42",
        indexName: "prod-d131025ev59nut-amplifyapp",
        contextualSearch: true,
        debug: false, // Set debug to true if you want to inspect the modal
        placeHolder: "Search",
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
    plugins: 
    [
        // Other plugins
        [
          'docusaurus-plugin-dotenv',
          {
              path:'./.env',
              systemvars: true, 
          }
        ]
    ],
  
};

module.exports = config;
