---
title: Dialogs
chapter: Writing Code
style: |
  #slide {
    position: initial;
  }
  #overlay, #overlay2 {
    display: none;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    text-align:center;
    z-index: 1000;
    background-color: rgba(0, 0, 0, .4);
  }

  #container, #container2 {
    width:400px;
    background-color: #fff;
    border:1px solid #000;
    padding:15px;
    text-align:center;
  }

  #container {
    margin: 400px auto;
  }

  #container2 {
    margin: 400px auto;
  }

  label {
    float: left;
    width: 100px;
    clear: both;
    text-align: right;
    margin: 0 10px;
  }

  #content, #content2 {
    margin: 20px 0;
  }

  #closeButton:focus {
    outline: 2px solid #4A97F9;
    outline-offset: 1px;
  }

  #closeImg {
    float: right;
    margin-top: 9px;
  }

  #sourceLink, #sourceLink2 {
      margin: 10px;
  }

  #content2 > div {
    margin: 10px 0;
  }

layoutData:
  description: |
    Dialogs are a little bit trickier to make accessible, but with a few key principles, they can be made keyboard navigable and usable with screen readers.

  examples:
    - title: Semantic Dialog
      description: |
        Start VoiceOver if you are on your Mac and press enter on the Show Dialog button. You will notice that:
        1. VoiceOver announces that a dialog is opened and the name of the dialog because
        we have a `role` of 'dialog' with a label associated using `aria-labelledby`.
        2. When the dialog opens, focus lands in the first focusable element in
        the dialog.
        3. Tabbing keeps focus within the dialog. Note that you have to write code to restrict the tab sequence to the dialog.
        4. Closing the dialog places focus back on the source button.
        5. Pressing the <kbd>esc</kbd> key closes the dialog and places the focus back on the source button. Note that for widgets like
        typeaheads, pressing <kbd>esc</kbd> should close the typeahead and not the dialog.

        Note that if you have textual content in the dialog besides labels, you should associate it
        with an `aria-describedby` to the right input field so it gets announced when you tab to the input field.
      code: |
        <button onclick='showHideDialog(event)' id="sourceLink">
            Show Dialog
        </button>
        <div id="overlay" onkeydown='closeDialog(event)'>
          <div
            id="container"
            role='dialog'
            aria-labelledby='dialog-title'>
              <h2 id='dialog-title'>Shipping Address</h2>
              <div id="content">
                <div>
                  <label for="inputfield">Name </label>
                  <input
                    type="text"
                    name="Name field"
                    id="inputfield" />
                </div>
              </div>
              <div>
                <button
                  onclick='showHideDialog(event)'
                  id="submitButton">
                    Submit
                </button>
                <button
                  onclick='showHideDialog(event)'
                  id="closeButton">
                    Close
                </button>
              </div>
          </div>
        </div>

    - title: Unsemantic Dialog exercise
      description: |
        The dialog below is unsemantic:

        1. The fact that a dialog opened up is not announced to VoiceOver.
        2. The heading that labels the dialog is not announced when the dialog is opened.

        To fix these issues:
        1. Change the `<b>` to a semantic `h2` tag.
        2. To the div with `id` container2, add a `role` of 'dialog'.
        3. To the div with `id` container2, add `aria-labelledby`='dialog-title'.

        Verify with VoiceOver.

      code: |
        <button
          onclick='showHideDialog2(event)'
          id="sourceLink2">
            Show Dialog
        </button>
        <div id="overlay2" onkeydown='closeDialog2(event)'>
          <div id="container2">
            <b id='dialog-title'>Shipping Address</b>
            <div>
              <div id="content2">
                <div>
                  <label for="inputfield2">Name </label>
                  <input
                    type="text"
                    name="Name field"
                    id="inputfield2" />
                </div>
                <div>
                  <button
                    onclick='showHideDialog2(event)'
                    id='submitButton2'>
                      Submit
                  </button>
                  <button
                    onclick='showHideDialog2(event)'
                    id='closeButton2'>
                      Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      assertion: |
        var dialog = dom.querySelector('#container2');
        var title = dom.querySelector('#dialog-title');
        var heading = dom.querySelector('h2');
        assert(
          dialog.hasAttribute('role') && dialog.getAttribute('role')=== "dialog",
          "It doesn't look like you added a role of 'dialog'."
        );
        assert(
          dialog.hasAttribute('aria-labelledby') && dialog.getAttribute('aria-labelledby')=== "dialog-title",
          "It doesn't look like you associated the heading to the dialog with an aria-labelledby."
        );
        assert(
          heading && (heading.getAttribute('id') === 'dialog-title'),
          "It doesn't look like you made the dialog heading semantic."
        );

---
