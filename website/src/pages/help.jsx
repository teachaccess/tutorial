/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Layout from "@theme/Layout";

const React = require("react");

const CompLibrary = {
  Container: (props) => <div {...props} />,
  GridBlock: (props) => <div {...props} />,
  MarkdownBlock: (props) => <div {...props} />,
};

const { Container } = CompLibrary;
const { GridBlock } = CompLibrary;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        "doc1.html"
      )})`,
      title: "Browse Docs",
    },
    {
      content: "Ask questions about the documentation and project",
      title: "Join the community",
    },
    {
      content: "Find out what's new with this project",
      title: "Stay up to date",
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post" style={{ textAlign: "center" }}>
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>
            Contact us at{" "}
            <a href="mailto: info@teachaccess.org">info@teachaccess.org</a> or
            make a{" "}
            <a
              href="https://github.com/teachaccess/tutorial/issues"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub issue
            </a>
            .
          </p>
          <div>
            <p>We'd love to improve the tutorial with your feedback</p>
          </div>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

export default (props) => (
  <Layout>
    <Help {...props} />
  </Layout>
);
