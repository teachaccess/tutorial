const config = {
  title: "Teach Access",
  tagline: "A website for testing",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  organizationName: "Teach Access",
  projectName: "test-site",
  scripts: ["https://buttons.github.io/buttons.js"],
  favicon: "img/favicon.svg",
  customFields: {
    users: [
      {
        caption: "User1",
        image: "/img/undraw_open_source.svg",
        infoLink: "https://www.facebook.com",
        pinned: true,
      },
    ],
  },
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
        blog: {
          path: "blog",
        },
        theme: {
          customCss: "../src/css/customTheme.css",
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    navbar: {
      logo: {
        src: "img/favicon.svg",
        alt: "Teach Access",
      },
      items: [
        {
          to: "docs/welcome",
          label: "Tutorial",
          position: "left",
        },
        {
          to: "docs/doc4",
          label: "API",
          position: "left",
        },
        {
          to: "/help",
          label: "Help",
          position: "left",
        },
      ],
    },
    image: "img/undraw_online.svg",
    footer: {
      links: [],
      copyright: "Copyright © 2021 Your Name or Your Company Name",
      logo: {
        src: "img/favicon.svg",
      },
    },
  },
};

module.exports = config;
