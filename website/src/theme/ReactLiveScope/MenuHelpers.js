export function onClick(event) {
    var isOpen = toggleMenu(event.currentTarget);
    if (isOpen) {
      setMenuItemFocus(event.currentTarget);
    }
  };
  
  export function onClickWidget(event) {
    event.preventDefault();
  };
  
  export function onMouseoverMenuItem(event) {
    if (event.target.getAttribute("role") === "menuitem") {
      setMenuItemFocus(event.target.parentNode.parentNode, event.target);
    }
  };
  
  export function onClickMenuItem (event) {
    var menuWidgetElement = event.target.parentNode.parentNode;
    // Some business logic here.
    // {...code...}
    // And clean up.
    setButtonFocus(menuWidgetElement);
    closeMenu(menuWidgetElement);
  };
  
  export function onKeyDown (event) {
    var menuWidgetElement = event.currentTarget;
    var menuElement = findMenuElement(menuWidgetElement);
    var buttonElement = findButtonElement(menuWidgetElement);
  
    var menuItemElements = Array.prototype.slice.call(
      menuElement.querySelectorAll('[role="menuitem"]')
    );
    var activeIndex = -1;
  
    menuItemElements.forEach((menuItem, ii) => {
      if (menuItem.getAttribute("data-active") === "true") {
        activeIndex = ii;
      }
    });
  
    cancelEvent = (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };
  
    switch (event.keyCode) {
      case 40:
      case 38:
        // Open the menu if it is not open already.
        openMenu(event.currentTarget);
        // Up/down keys.
        // Set the first
        // Move between the menu items.
        var up = event.keyCode === 38;
        var dir = up ? -1 : 1;
        var end = up ? 0 : menuItemElements.length - 1;
        var boundIt = up ? Math.max : Math.min;
  
        // Get the index of the next menu item to highlight.
        // Keep the index within the bounds of the array of menu items.
        var index = boundIt(activeIndex + dir, end);
        var menuItemElement = menuItemElements[index];
        setMenuItemFocus(menuWidgetElement, menuItemElement);
  
        cancelEvent(event);
        break;
      case 37:
      case 39:
        // Left/Right keys.
        // Stop event propagation for all arrow keys.
        cancelEvent(event);
        break;
      case 32:
      // Space bar.
      case 13:
        // Return key.
        if (activeIndex > -1) {
          // Some business logic here.
          // {...code...}
          // And clean up.
          closeMenu(menuWidgetElement);
          setButtonFocus(menuWidgetElement);
        } else if (event.target === buttonElement) {
          openMenu(menuWidgetElement);
          setMenuItemFocus(menuWidgetElement);
        }
        cancelEvent(event);
        break;
      case 27:
        // ESC key.
        closeMenu(menuWidgetElement);
        setButtonFocus(menuWidgetElement);
        cancelEvent(event);
        break;
      default:
        console.log(event.keyCode);
    }
  };
  
  export function openMenu (menuWidgetElement) {
    var menuElement = findMenuElement(menuWidgetElement);
    if (menuElement.getAttribute("data-open") === "false") {
      menuElement.style.display = "block";
      menuElement.setAttribute("data-open", "true");
    }
    return true;
  };
  
  export function closeMenu (menuWidgetElement) {
    var menuElement = findMenuElement(menuWidgetElement);
    menuElement.style.display = "none";
    menuElement.setAttribute("data-open", "false");
    removeMenuItemFocus(menuWidgetElement);
    return false;
  };
  
  export function toggleMenu (menuWidgetElement) {
    var menuElement = findMenuElement(menuWidgetElement);
    if (menuElement.getAttribute("data-open") === "false") {
      return openMenu(menuWidgetElement);
    } else {
      return closeMenu(menuWidgetElement);
    }
  };
  
  export function setButtonFocus (menuWidgetElement) {
    findButtonElement(menuWidgetElement).focus();
  };
  
  export function setMenuItemFocus (menuWidgetElement, activeMenuItemElement) {
    var menuElement = findMenuElement(menuWidgetElement);
    removeMenuItemFocus(menuWidgetElement);
  
    if (!activeMenuItemElement) {
      activeMenuItemElement =
        menuElement.querySelectorAll('[role="menuitem"]')[0];
    }
  
    activeMenuItemElement.setAttribute("data-active", "true");
    activeMenuItemElement.focus();
  };
  
  export function removeMenuItemFocus (menuWidgetElement) {
    var menuElement = findMenuElement(menuWidgetElement);
  
    Array.prototype.forEach.call(
      menuElement.querySelectorAll('[role="menuitem"]'),
      (menuItemElement) => {
        menuItemElement.setAttribute("data-active", "false");
      }
    );
  
    findButtonElement(menuWidgetElement).focus();
  };
  
  export function findMenuElement (menuWidgetElement) {
    while (menuWidgetElement.className.indexOf("popupMenuWidget") === -1) {
      menuWidgetElement = menuWidgetElement.parentNode;
    }
    return menuWidgetElement.querySelector('[role="menu"],ul');
  };
  
  export function findButtonElement (menuWidgetElement) {
    while (menuWidgetElement.className.indexOf("popupMenuWidget") === -1) {
      menuWidgetElement = menuWidgetElement.parentNode;
    }
    return menuWidgetElement.querySelector('[role="button"],a');
  };