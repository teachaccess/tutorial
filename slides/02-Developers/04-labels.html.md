---
title: Labeling Form Controls and Interactive Elements
toc: Labels
chapter: Writing Code
style: |
    .searchBtn {
      background-image: url('./images/search_icon.png');
      width: 30px;
      height: 30px;
      background-size: 100% 100%;
    }

    #composer {
      border: 1px solid #1466F2;
      width: 200px;
    }

    #description {
      font-size: 12px;
    }

    #dateFormat {
      font-size: 13px;
    }

layoutData:
  description: |
    Accessible labels are necessary to make several other types of elements understandable,
    such as inputs, widgets, and ARIA landmark regions.
    Accessible labels that create a delightful experience are:
    1. Concise -- 1 to 3 simple words. Only occasionally as many as 5 words.
    2. Meaningful -- accurately convey the purpose of the element.

    There are many ways to label an interactive element such as a button or an input field, which you will see below. You can check the results of adding the various label types by testing in your screen reader too!

  examples:
    - title: Self-labeled
      description: |
        Some elements, like links and buttons with display text, label themselves. In this case, screen reader
        users and all other users can perceive the label.

      code: |
        <div>
          <button>Submit</button>
        </div>

    - title: Using <label>
      description: |
        If we put text on the screen near an input such as a text field, the screen reader cannot
        reliably pick up on that visual association. It needs to be told which nearby text is the associated label.
        One way to do this is with the `label` element.

      code: |
        <div>
            <label for="lastName">
              Last name:
            </label>
            <input id="lastName" type="text">
        </div>

    - title: Using 'aria-labelledby'
      description: |
        The HTML label works only for HTML inputs. If we make a control out of other elements by using ARIA,
        we can instead use `aria-labelledby`.

      code: |
        <div>
          <div id="status">What's on your mind?</div>
          <div
            aria-labelledby="status"
            contenteditable
            id="composer"
            role="textbox">
          </div>
        </div>

    - title: Using 'aria-label'
      description: |
        In rare cases, the purpose of the input is visually obvious in context, but it's not obvious to someone
        using a screen reader. We can provide contextual detail with `aria-label`.

      code: |
        <fieldset>
          <legend>Telephone</legend>
          <input id="one" type="number" aria-label="Area Code">
          <input type="number" aria-label="Exchange Code">
          <input type="number" aria-label="Line Number">
        </fieldset>

    - title: Using 'aria-describedby'
      description: |
        Occasionally, a label by itself is insufficient information. If help text is present in the UI,
        we can identify it as an accessible description by using `aria-describedby`.

      code: |
        <div>
          <label for="hikeDate">
            HIKE completion date
          </label>
          <input
            id="hikeDate"
            aria-describedby="dateFormat"
            type="text" />
          <p id="dateFormat">Note: This date will be recorded.</p>
        </div>

    - title: Inaccessible Button exercise
      description: |
        Add an `aria-label` to the button below and label it 'search' to
        make it accessible.

      code: |
        <button
          class="searchBtn">
        </button>

      assertion: |
        var btn = dom.querySelector('button');
        assert(
          btn.hasAttribute('aria-label'),
          "It doesn't look like you added an aria-label to the button"
        );


    - title: Inaccessible Interactive Elements exercise
      description: |
        Add an `aria-labelledby` to the input field below and point it to the `id` of the prompt span.
        Also, add an `aria-describedby` to the input field and point it to the description below to
        make it accessible.

      code: |
        <input type="checkbox" />
        <span id="prompt">
          Save Password
        </span>
        <p id="description">
          Your credentials will not be stored.
        </p>

      assertion: |
        var btn = dom.querySelector('input');
        assert(
          btn.hasAttribute('aria-labelledby') &&
            btn.getAttribute('aria-labelledby') === 'prompt',
          "It doesn't look like you added an aria-labelledby to the input field"
        );
        assert(
          btn.hasAttribute('aria-describedby') &&
            btn.getAttribute('aria-describedby') === 'description',
          "It doesn't look like you added an aria-describedby to the input field"
        );
---
