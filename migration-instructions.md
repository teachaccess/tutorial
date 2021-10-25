# Docusaurus migration challenge 🚀

The [Teach Access tutorial](<(https://teachaccess.github.io/tutorial/)>)'s underlying framework, [exerslide](https://github.com/facebookarchive/exerslide), was archived by its owner and has not been updated for several years. In the last week of Hacktoberfest, we're making a challenge to migrate to [Docusaurus](https://github.com/facebook/docusaurus)!

1. Fork `teachaccess/tutorial`
1. `git checkout docusaurus`
1. `cd website`
1. `yarn install`
1. `yarn start` (you should now see the docusaurus tutorial load in your browser)
1. For the slide you're updating, locate the [exerslide code](https://github.com/teachaccess/tutorial/tree/master/slides) and the [docusaurus code](https://github.com/teachaccess/tutorial/blob/docusaurus/docs)
1. Open the tutorial website to the slide you're updating so you can see how it works [tutorial](https://teachaccess.github.io/tutorial/)
1. Recreate the same functionality with [docusaurus](https://github.com/teachaccess/tutorial/tree/docusaurus/docs)
1. If using VSCode, add this [MDX extension](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx) for syntax highlighting
1. Open PR against `docusaurus` 🎉

Check out the Headings slide for an example ([before](https://github.com/teachaccess/tutorial/blob/master/slides/02-Developers/01-headings.html.md) and [after](https://github.com/teachaccess/tutorial/blob/docusaurus/docs/code/headings.mdx))
