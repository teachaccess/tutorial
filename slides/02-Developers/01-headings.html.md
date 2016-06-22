---
title: Headings
chapter: Writing Code

style: |
  .fakeHeading {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }

  #slide h3 {
    margin: 5px;
  }

layoutData:
  description: |
    Headings provide structure to a page. A person using a screen reader can
    navigate a page quickly using headings on the page if the headings used are
    semantic. Semantic headings include real heading tags such as `h1`, `h2`.
  examples:
    - title: Semantic Heading
      description: |
        The heading below is a real heading and uses an `<h3>` tag. If you are on a
        Mac, turn on VoiceOver with <kbd>Cmd</kbd> + <kbd>F5</kbd> and then press
        <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Cmd</kbd> + <kbd>h</kbd> to jump to
        a heading.
      code: |
        <h3>A real heading</h3>
    - title: Unsemantic Heading exercise
      description: |
        The heading below is a fake heading made to look like a heading with an
        unsemantic `<div>`. Change the `<div>` below to use an `<h3>` tag. Now verify your semantic heading using the Verify button as well as
        with VoiceOver.
      code: |
        <div class="fakeHeading">
          A fake heading
        </div>
      assertion: |
        assert(
          dom.querySelector('h3'),
          "It doesn't look like you converted the div to a real heading."
        );

---
