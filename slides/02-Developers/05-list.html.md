---
title: Lists
chapter: Writing Code

style: |
  img {
    width: 100px;
    height: 100px;
  }

layoutData:
  description: |
    Semantic lists help screen readers understand the type of the element and the number of items in the element, and provide
    easier navigation via list commands specific to screen readers.

  examples:
    - title: Semantic Lists Using HTML
      description: |
        HTML provides tags that express lists. Most likely you are already familiar with the
        ```ul``` (unordered list) and ```ol``` (ordered list) tags.

        In the example below, the list is correctly announced by screen readers as a list with three items.

        1. Turn on VoiceOver with <kbd>Cmd</kbd> + <kbd>F5</kbd>.

        2. Press <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Cmd</kbd> + <kbd>h</kbd> repeatedly until you have jumped to the Editor Output heading.

        3. Press <kbd>Ctrl</kbd> + <kbd>Opt</kbd> + <kbd>Right Arrow</kbd>.

        VoiceOver will announce 'List 3 items'.

      code: |
        <ul>
          <li>Eggs</li>
          <li>Milk</li>
          <li>Bread</li>
        </ul>

    - title: Semantic List Using ARIA Roles
      description: |
        The list below uses ARIA roles to express the semantics of a list from a generic div structure.
        This approach to expressing list structure can be used if it is not possible to use the native
        HTML list tags.

        Notice that the default list styling is not applied. That is because the browser's default
        stylesheet targets ```ul``` and ```ol``` tags.

        In the example below, the list is correctly announced by screen readers as a list with three items.

      code: |
        <div role="list">
          <div role="listitem">Sea</div>
          <div role="listitem">Surf</div>
          <div role="listitem">Sun</div>
        </div>

    - title: Unsemantic List exercise
      description: |
        Update the example below so that the items are expressed as a list. The easiest way to
        make this semantic is to use a list tag. If that is not
        possible, wrap the elements in a container and give
        it a role of ```list```. The individual items will need to be identified with a role of ```listitem```.

      code: |
        <div>
          <span>A house of straw</span>
          <span>A house of sticks</span>
          <span>A house of bricks</span>
        </div>

      assertion: |
        assert(
          dom.querySelector('[role="list"]') || dom.querySelector('ul') || dom.querySelector('ol'),
          "You should create a wrapping element for the list. Either a 'ul', 'li' OR a 'div' with the role 'list'."
        );
        assert(
          dom.querySelectorAll('[role="listitem"]').length ==3 || dom.querySelectorAll('li').length == 3,
          "Wrap the items in an 'li' element or in a 'span' OR 'div' with the role 'listitem'."
        );
---
