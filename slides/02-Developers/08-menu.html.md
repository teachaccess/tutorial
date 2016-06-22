---
title: Menus
chapter: Writing Code
style: |
  img {
    width: 100px;
    height: 100px;
  }

layoutData:
  description: |
    Menus, like dialogs, rely on a few key principles to render them usable with the keyboard or screen reader.

  examples:
    - title: Accessible Menu
      description: |
        The example below shows how to apply ARIA attributes to an unordered list
        element to give it the semantics screen readers need to announce it as a menu.
        It also demonstrates the JavaScript functionality you need to create the
        appropriate keyboard interaction.

        1. You can move focus to the button by pressing tab.
        2. Pressing enter with focus on the button opens the menu and moves focus to the first menu item.
        3. Up and down arrows navigate the menu.
        4. Escape closes the menu, returning focus to the button.
        5. If actions were implemented, pressing enter on a menu item would perform the action.

      code: |
        <!-- `menuExample` is a global object
          that contains the behavior
          methods for the menu interaction. -->
        <div
          id="popupMenuExample"
          class="popupMenuWidget"
          onkeydown="(menuExample.onKeydown.bind(menuExample))(event)"
          onclick="(menuExample.onClickWidget.bind(menuExample))(event)">
          <a
            href="#"
            role="button"
            tabindex="0"
            aria-haspopup="true"
            aria-owns="actionsMenu"
            onclick="(menuExample.onClick.bind(menuExample))(event)">Actions &#9660;</a>
          <ul
            id="actionsMenu"
            role="menu"
            data-open="false"
            onmouseover="(menuExample.onMouseoverMenuItem.bind(menuExample))(event)"
            onclick="(menuExample.onClickMenuItem.bind(menuExample))(event)"
            style="display: none;">
            <li role="presentation">
              <a
                id="action_1"
                href="#"
                role="menuitem"
                tabindex="-1"
                data-active="false">Create</a>
            </li>
            <li role='presentation'>
              <a
                id="action_2"
                href="#"
                role="menuitem"
                tabindex="-1"
                data-active="false">Edit</a>
            </li>
            <li role='presentation'>
              <a
                id="action_3"
                href="#"
                role="menuitem"
                tabindex="-1"
                data-active="false">Delete</a>
            </li>
          </ul>
        </div>

    - title: Inaccessible Menu exercise
      description: |
        Update the example below to include the necessary markup for making
        this menu accessible. You should address the following issues.

        1. The `a` tag with the ID `menuTrigger` has an associated popup. Therefore, it should be marked up with `aria-haspopup` and `aria-owns` to make this relationship explicit.
        2. The `a` tag with the ID `menuTrigger` should be marked up as a button with the role `button`.
        3. The `a` tag with the ID `menuTrigger` should be tabbable. Add an explicit `tabindex="0"` to it.
        4. The `ul` tag with the ID 'actionsMenu' should be marked up as a menu with the role `menu`.
        5. The `a` tags inside the div with the ID `actionsMenu` are menu items. Mark them up with the role `menuitem`.
        6. The `a` tags inside the div with the ID `actionsMenu` should not be tabbable. Add an explicit `tabindex="-1"` to each of them.

      code: |

        <!-- `menuExample` is a global object
          that contains the behavior
          methods for the menu interaction. -->
        <div
          id="popupMenuExampleWithAssertions"
          class="popupMenuWidget"
          onclick="(menuExample.onClickWidget.bind(menuExample))(event)"
          onkeydown="(menuExample.onKeydown.bind(menuExample))(event)">
          <a
            id="menuTrigger"
            onclick="(menuExample.onClick.bind(menuExample))(event)">Actions &#9660;</a>
          <ul
            id="actionsMenu"
            data-open="false"
            onmouseover="(menuExample.onMouseoverMenuItem.bind(menuExample))(event)"
            onclick="(menuExample.onClickMenuItem.bind(menuExample))(event)"
            style="display: none;">
            <li role='presentation'>
              <a
                id="action_1"
                href="#"
                data-active="false">Create</a>
            </li>
            <li role='presentation'>
              <a
                id="action_2"
                href="#"
                data-active="false">Edit</a>
            </li>
            <li role='presentation'>
              <a
                id="action_3"
                href="#"
                data-active="false">Delete</a>
            </li>
          </ul>
        </div>

      assertion: |
        var menuWidget = dom.querySelector('#popupMenuExampleWithAssertions');

        // aria-haspopup
        assert(
          menuWidget.querySelector('#menuTrigger').getAttribute('aria-haspopup') === 'true',
          'Add the attribute `aria-haspopup="true"` to the element with the ID `menuTrigger`'
        );

        // aria-owns
        assert(
          menuWidget.querySelector('#menuTrigger').getAttribute('aria-owns') === 'actionsMenu',
          'Add the attribute `aria-owns="actionsMenu"` to the element with the ID `menuTrigger`'
        );
        // button role
        assert(
          menuWidget.querySelector('#menuTrigger').getAttribute('role') === 'button',
          'Add the attribute `role="button"` to the element with the ID `menuTrigger`'
        );
        // button tab index
        assert(
          menuWidget.querySelector('#menuTrigger').getAttribute('tabIndex') === '0',
          'Add the attribute `tabindex="0"` to the element with the ID `menuTrigger`'
        );

        // menu role
        assert(
          menuWidget.querySelector('#actionsMenu').getAttribute('role') === 'menu',
          'Add the attribute `role="menu"` to the element with the ID `actionsMenu`'
        );

        // menu link item roles
        assert(
          [].slice.call(menuWidget.querySelector('#actionsMenu').querySelectorAll('a')).every(function (item) {
            return item.getAttribute('role') === 'menuitem';
          }),
          'Add the attribute `role="menuitem"` to each of the `a` tag elements in the element with the ID `actionsMenu`'
        );

        // menu link items tabindices
        assert(
          [].slice.call(menuWidget.querySelector('#actionsMenu').querySelectorAll('a')).every(function (item) {
            return item.getAttribute('tabIndex') === '-1';
          }),
          'Add the attribute `tabindex="-1"` to each of the `a` tag elements in the element with the ID `actionsMenu`'
        );

---
