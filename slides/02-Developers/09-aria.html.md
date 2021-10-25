---
title: ARIA
chapter: Writing Code
content_type: text/x-markdown

style: |
  .container {
    font-size: 100%
    width: 120px;
    height: 100px;
    border: thin solid gray;
  }

  #additionalLinks, #a11yLinkHide {
    display: none;
  }

layout_data:
  examples:
    - title: ARIA Landmarks
      description: |
        For this exercise, we will focus on one small part of WAI-ARIA called landmark regions.
        Landmark regions help screen reader users do what others do when they
        glance at a page, i.e., see its different parts from a bird's-eye view. They also
        make it easy to move the screen reader's reading cursor to different locations on the page.

        1. Turn on VoiceOver.
        2. Press <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>u</kbd>.
        3. Press right arrow until you hear "Landmarks".
        4. Press down arrow to read the landmark list.
        5. Press enter to move the VoiceOver reading cursor to the beginning of one of the landmark regions.

      code: |

        <h3>ARIA Landmarks Exercise</h3>

        How many landmarks did you find on the page?
        <input type="text" id="landmarks">

      assertion: |
        var link = document.getElementById('landmarks');
        assert(
          link.value === '4' || link.value === 'four',
          "That is not the right number of landmarks on the page!"
        );


      note: |

        There are several types of landmark roles. Some of them are:

        - `<main>`,`<div role="main">` -- Equivalent to “directing the gaze” of 
        the screen reader user. Should contain only the primary content of the 
        page.

        - `<nav>`,`<div role="navigation">` -- contains a set of links or 
        elements for navigating the site

        - `<aside>`, `<div role="complementary">` - content that supplements 
        the main content

        - `<div role="search">` - search widget

        - `<header>`, `<div role="banner">` - the banner of the page

        - `<footer>`, `<div role="contentinfo">` - information about the page 
        such as copyright, help, and information links that appear in the 
        footer

          More Informative Resources : 
          
          [Introduction to ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria)

          [Top 5 Rules of ARIA ](https://www.deque.com/blog/top-5-rules-of-aria/)

          [Other ARIA roles are documented in the WCAG 
          spec.](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

          [More about ARIA states and 
          properties](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties)

          [More about Authoring Practices ](https://www.w3.org/TR/wai-aria-practices-1.1/)

---
ARIA or [Accessible Rich Internet
Applications](http://www.w3.org/WAI/intro/aria.php) provides a framework of 
roles, properties, and guidelines to help
develop accessible user interactions.

