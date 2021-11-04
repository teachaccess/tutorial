const config = {
  title: "Teach Access",
  tagline: "A website for testing",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  organizationName: "Teach Access",
  projectName: "test-site",
  scripts: ["https://buttons.github.io/buttons.js"],
  favicon: "img/logo-teach-access.svg",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "../docs",
          sidebarPath: "../website/sidebars.json",
        },
        theme: {
          customCss: "../src/css/customTheme.css",
        },
      },
    ],
  ],
  plugins: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    navbar: {
      logo: {
        src: "img/logo-teach-access.svg",
        srcDark: "img/logo-teach-access-dark.svg",
        alt: "Teach Access",
      },
      items: [
        {
          to: "docs/introduction/using-this-tutorial",
          label: "Tutorial",
          position: "left",
        },
        // {
        //   to: "/help",
        //   label: "Help",
        //   position: "left",
        // },
      ],
    },
    image: "img/undraw_online.svg",
    footer: {
      links: [],
      copyright: "Copyright © 2021 Teach Access",
      logo: {
        src: "img/logo-teach-access.svg",
        srcDark: "img/logo-teach-access-dark.svg",
        alt: "Teach Access",
      },
    },
  },
};

module.exports = config;
