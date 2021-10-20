module.exports = {
  title: "Teach Access",
  tagline: "A website for testing",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  organizationName: "facebook",
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
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "doc1",
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
      },
      items: [
        {
          to: "docs/",
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
