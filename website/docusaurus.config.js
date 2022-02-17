const config = {
  title: "Teach Access Tutorial",
  tagline: "Best practices for making accessible mobile and web apps",
  url: "https://teachaccess.github.io",
  baseUrl: "/tutorial/",
  organizationName: "teachaccess",
  projectName: "tutorial",
  deploymentBranch: "gh-pages",
  scripts: ["https://buttons.github.io/buttons.js", "/js/scriptHelper.js"],
  favicon: "../img/logo-teach-access.svg",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
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
        src: "../img/logo-teach-access.svg",
        srcDark: "../img/logo-teach-access-dark.svg",
        alt: "Teach Access",
      },
      items: [
        {
          to: "/tutorial",
          label: "Tutorial",
          position: "left",
        },
        {
          to: "/help",
          label: "Help",
          position: "left",
        },
      ],
    },
    image: "../img/undraw_online.svg",
    footer: {
      links: [],
      copyright: "Copyright © 2022 Teach Access",
      logo: {
        src: "../img/logo-teach-access.svg",
        srcDark: "../img/logo-teach-access-dark.svg",
        alt: "Teach Access",
      },
    },
  },
};

module.exports = config;
