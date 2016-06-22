---
title: ARIA
chapter: Writing Code

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

layoutData:
  description: |
    ARIA or <a href="http://www.w3.org/WAI/intro/aria.php">Accessible Rich Internet
    Applications</a> provides a framework of roles, properties, and guidelines to help
    develop accessible user interactions.

  examples:
    - title: ARIA
      description:
        For this exercise, we will focus on one small part of WAI-ARIA called landmark regions.
        landmark regions help screen reader users do what others do when they
        glance at a page, i.e., see its different parts from a bird's-eye view. They also
        make it easy to move the screen reader's reading cursor to different locations on the page.
        Instructions for this exercise are in the comment block in the editor below.

      code: |

        <h3>ARIA Landmarks Exercise</h3>
        <!--
             1. Turn on VoiceOver.
             2. Press ctrl-opt-u.
             3. Press right arrow until you hear "Landmarks".
             4. Press down arrow to read the landmark list.
             5. Press enter to move the VoiceOver reading cursor
                to the beginning of one of the landmark regions.
        -->
        How many landmarks did you find on the page?
        <input type="text" id="landmarks">

      assertion: |
        var link = document.getElementById('landmarks');
        assert(
          link.value === '3' || link.value === 'three',
          "That is not the right number of landmarks on the page!"
        );


      note: |

        There are several types of landmark roles. Some of them are:

        `<main> = <div role=”main”>`  - Equivalent to “directing the gaze” of the screen
          reader user. Should contain only the primary content of the page.

        `<nav> = <div role=”navigation”>` - contains a set of links or elements for
          navigating the site

        `<aside> = <div role=”complementary”>` - content that supplements the main
          content

        `<div role=”search”>` - search widget

        `<header> = <div role=”banner”>` - the banner of the page

        `<footer> = <div role=”contentinfo”>` - information about the page such as
          copyright, help, and information links that appear in the footer

        <a href='http://www.w3.org/TR/wai-aria/roles#document_structure_roles'>
          Other ARIA roles are documented in the WCAG spec.
        </a>

        <a href='http://www.w3.org/TR/wai-aria/states_and_properties#state_prop_def'>
          More about ARIA states and properties
        </a>

---
