---
title: Text Size
chapter: Designers
style: |
  #container {
    font-size: 100%
    width: 80px;
    height: 50px;
    border: thin solid gray;
    margin: 10px;
  }

  #additionalLinks, #a11yLinkHide {
    display: none;
  }

layoutData:
  description: |
    People with low vision use browser zoom tools and assistive technology such
    as [ZoomText](http://www.aisquared.com/products/zoomtext/) to increase the size of content on the screen. This exercise shows you the difference between
    zooming all the content versus zooming just the text on the page.

  examples:
    - title: Text Size (T)
      description: |
        For people with low vision, it is important to support the ability to increase
        text size without text overlapping or getting truncated. To test, use your browser's
        built-in zoom or text-resize feature to zoom and make sure text is still readable.
        If you are building for the mobile web, please don't disable pinch and zoom.

        <a href='http://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-scale'>
          WCAG guidelines recommend allowing zooming up to 200% without loss of content.
        </a>

        <a href='http://webaim.org/techniques/fonts/#font_size'>
          More on fonts and accessibility in the WebAIM site.
        </a>

        For the exercise below, you will need a browser like Safari that allows you to
        increase just the text size instead of zooming in the whole page. On Safari,
        go to View and Zoom Text Only and then select Zoom In from the same menu. You
        will notice that the words bleed outside the box below. Try fixing this example
        by specifying the width and height as relative units, such as ems. Set the height
        to 3em and width to 10em and verify your answers.

      code: |
        <div
          id='container'>
            Lorem ipsum dolor sit amet
        </div>

      assertion: |
        var container = dom.querySelector('#container');
        assert(
          container.style.height === '3em' && container.style.width === '10em',
          "It doesn't seem like the height and width are set to the right ems"
        );
---
