---
title: Color Contrast
chapter: Design Principles
style: |
  #container {
    background-color: #3a5795;
    width: 45px;
    padding: 10px;
    margin: 10px;
  }

layoutData:
  description: |
    Sufficient color contrast allows people to clearly see content on the page.

  examples:
    - title: Color Contrast (C)
      description: |
        The Web Content Accessibility Guidelines <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">
        recommends a color contrast of 4.5:1</a> to meet color contrast guidelines.
        You can use various color contrast checkers online to verify your color contrast
        ratio. <a href="http://www.paciellogroup.com/resources/contrastanalyser/">Colour Contrast Analyser</a>
        and <a href="http://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333">
        Colour Contrast Check Tool</a> are examples of tools available online.

        For the two house icons below, the color contrast has been calculated
        using the Colour Contrast Analyser. For your exercise below, please use the
        <a href="http://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333">
        Colour Contrast Check Tool</a> to enter the background (#405865) and foreground (#FFFFFF) values specified here.
        The tool will show you the color contrast ratio. Please replace the 'x' below with the contrast of the third icon,
        e.g., `<span id='contrastValue'>2000</span>`.

      code: |
        <div>
          <div id='container'>
            <img
              src='./images/contrast-bad-2-2.png'
              alt='house with bad contrast' />
          </div>
          <span>Color Contrast -- 2.2: 1</span>
        </div>

        <div>
          <div id='container'>
            <img
              src='./images/contrast-better-4-6.png'
              alt='house with better contrast' />
          </div>
          <span>Color Contrast -- 4.6: 1</span>
        </div>

        <div>
          <div id='container'>
            <img
              src='./images/contrast-good-7-5.png'
              alt='house with good contrast' />
          </div>
          <p>Background Color: #405865<p>
          <p>Foreground Color: #FFFFFF<p>
          <span>Color Contrast -- </span>
          <span id='contrastValue'>x</span>
          <span>:1</span>
        </div>

      assertion: |
        assert(
          dom.querySelector('#contrastValue').innerHTML === '7.05',
          "Did you really use the Colour Contrast Check tool? Try again!"
        );
---
