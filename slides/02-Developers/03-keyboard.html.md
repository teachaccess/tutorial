---
title: Keyboard Navigation
chapter: Writing Code
style: |
  img {
    width: 100px;
    height: 100px;
  }
  .customButton {
    border: 1px solid black;
    width: 65px;
    background-color: lightgray;
    text-align: center;
  }

layoutData:
  description: |
    Make all interactive elements work with  a keyboard. For example, make sure a button that you activate
    with a click is also in the keyboard tab sequence and that pressing enter or space
    activates it. Set the tabindex attribute to 0 to include an element in the browser's keyboard tab sequence.  If you want an element out of sequence, set its tabindex to -1 and use Javascript to control its focus and tab sequence, and related keyboard events. We do not recommend using tabindex values
    greater than 0 even though browsers support them. Note that HTML links and input elements have an implied tabindex of 0.

  examples:
    - title: Semantic Button
      description: |
        The button below uses a semantic button tag and is correctly announced by
        screen readers. If you are on a Mac, turn on VoiceOver and tab to the
        button. You will hear the name of the element and the element type announced
        by VoiceOver.

      code: |
        <button onclick="alert('Take a HIKE!')">
          Submit
        </button>

    - title: Unsemantic Button exercise
      description: |
        The button below is constructed using an unsemantic div. The easiest way to
        make this semantic is to use a real button or input tag. Here is another way. In the
        example below,
        1. Add `role` = 'button'.
        2. `tabindex` = '0'.

        Verify with VoiceOver that you can tab to the button and hear the button name and the fact
        that it is a button element. Note that you would need to add an onkeypress or onkeydown handler to the button so you
        can tab to the button and press enter to activate it using just the keyboard.

      code: |
        <div class="customButton">
          Submit
        </div>

      assertion: |
        var btn = dom.querySelector('.customButton');
        assert(
          btn.hasAttribute('tabindex') && btn.getAttribute('tabindex') === "0",
          "It doesn't look like you added a tabindex to your custom button."
        );

        assert(
          btn.getAttribute('role') === "button",
          "It doesn't look like you added a role of button to your custom button."
        );

---
