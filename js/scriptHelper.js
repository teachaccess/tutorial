window.expandSection = function (event) {
  const additionalLinks = document.getElementById("additionalLinks");
  event.preventDefault();
  if (additionalLinks.style.display == "block") {
    additionalLinks.style.display = "none";
    document.getElementById("a11yLinkHide").style.display = "none";
    document.getElementById("a11yLinkShow").style.display = "block";
  } else {
    additionalLinks.style.display = "block";
    document.getElementById("a11yLinkShow").style.display = "none";
    document.getElementById("a11yLinkHide").style.display = "block";
  }
};

window.expandSectionWithARIA = function (event) {
  const additionalLinks = document.getElementById("additionalLinks");
  event.preventDefault();
  if (additionalLinks.style.display == "block") {
    additionalLinks.style.display = "none";
    document.getElementById("a11yLinkHide").style.display = "none";
    document.getElementById("a11yLinkShow").style.display = "block";
    document.getElementById("a11yLinkHide").focus();
    additionalLinks.setAttribute("aria-expanded", false);
  } else {
    additionalLinks.style.display = "block";
    document.getElementById("a11yLinkShow").style.display = "none";
    document.getElementById("a11yLinkHide").style.display = "block";
    additionalLinks.focus();
    additionalLinks.setAttribute("aria-expanded", true);
  }
};

window.showHideDialog = function (ev) {
  const el = document.getElementById("overlay");
  document.getElementById("closeButton").onkeydown = function (e) {
    if (e.keyCode == 9) {
      e.preventDefault();
      document.getElementById("inputfield").focus();
    }
  };
  if (el.style.display == "flex") {
    el.style.display = "none";
    document.getElementById("sourceLink").focus();
    document.body.style.overflow = "initial";
  } else {
    el.style.display = "flex";
    document.getElementById("inputfield").focus();
    document.body.style.overflow = "hidden";
  }
  ev.preventDefault();
};

window.showHideDialog2 = function (ev) {
  const el = document.getElementById("overlay2");
  document.getElementById("closeButton2").onkeydown = function (e) {
    if (e.keyCode == 9) {
      e.preventDefault();
      document.getElementById("inputfield2").focus();
    }
  };
  if (el.style.display == "flex") {
    el.style.display = "none";
    document.getElementById("sourceLink2").focus();
    document.body.style.overflow = "initial";
  } else {
    el.style.display = "flex";
    document.getElementById("inputfield2").focus();
    document.body.style.overflow = "hidden";
  }
  ev.preventDefault();
};

window.closeDialog = function (ev) {
  if (ev.keyCode == 27) {
    const el = document.getElementById("overlay");
    el.style.display = "none";
    document.getElementById("sourceLink").focus();
  }
};

window.closeDialog2 = function (ev) {
  if (ev.keyCode == 27) {
    const el = document.getElementById("overlay2");
    el.style.display = "none";
    document.getElementById("sourceLink2").focus();
  }
};

// Menu example code.
window.menuExample = {
  onClick(event) {
    const isOpen = this.toggleMenu(event.currentTarget);
    if (isOpen) {
      this.setMenuItemFocus(event.currentTarget);
    }
  },
  // Keep all clicks from escaping the widget.
  onClickWidget() {
    event.preventDefault();
  },
  onMouseoverMenuItem(event) {
    if (event.target.getAttribute("role") === "menuitem") {
      this.setMenuItemFocus(event.target.parentNode.parentNode, event.target);
    }
  },
  onClickMenuItem(event) {
    const menuWidgetElement = event.target.parentNode.parentNode;
    // Some business logic here.
    // {...code...}
    // And clean up.
    this.setButtonFocus(menuWidgetElement);
    this.closeMenu(menuWidgetElement);
  },
  onKeydown(event) {
    const menuWidgetElement = event.currentTarget;
    const menuElement = this.findMenuElement(menuWidgetElement);
    const buttonElement = this.findButtonElement(menuWidgetElement);

    const menuItemElements = Array.prototype.slice.call(
      menuElement.querySelectorAll('[role="menuitem"]')
    );
    let activeIndex = -1;

    menuItemElements.forEach(function (menuItem, ii) {
      if (menuItem.getAttribute("data-active") === "true") {
        activeIndex = ii;
      }
    });

    function cancelEvent(event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }

    switch (event.keyCode) {
      case 40:
      case 38:
        // Open the menu if it is not open already.
        this.openMenu(event.currentTarget);
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
        this.setMenuItemFocus(menuWidgetElement, menuItemElement);

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
          this.closeMenu(menuWidgetElement);
          this.setButtonFocus(menuWidgetElement);
        } else if (event.target === buttonElement) {
          this.openMenu(menuWidgetElement);
          this.setMenuItemFocus(menuWidgetElement);
        }
        cancelEvent(event);
        break;
      case 27:
        // ESC key.
        this.closeMenu(menuWidgetElement);
        this.setButtonFocus(menuWidgetElement);
        cancelEvent(event);
        break;
      default:
        console.log(event.keyCode);
    }
  },
  openMenu(menuWidgetElement) {
    const menuElement = this.findMenuElement(menuWidgetElement);
    if (menuElement.getAttribute("data-open") === "false") {
      menuElement.style.display = "block";
      menuElement.setAttribute("data-open", "true");
    }
    return true;
  },
  closeMenu(menuWidgetElement) {
    const menuElement = this.findMenuElement(menuWidgetElement);
    menuElement.style.display = "none";
    menuElement.setAttribute("data-open", "false");
    this.removeMenuItemFocus(menuWidgetElement);
    return false;
  },
  toggleMenu(menuWidgetElement) {
    const menuElement = this.findMenuElement(menuWidgetElement);
    if (menuElement.getAttribute("data-open") === "false") {
      return this.openMenu(menuWidgetElement);
    }
    return this.closeMenu(menuWidgetElement);
  },
  setButtonFocus(menuWidgetElement) {
    this.findButtonElement(menuWidgetElement).focus();
  },
  setMenuItemFocus(menuWidgetElement, activeMenuItemElement) {
    const menuElement = this.findMenuElement(menuWidgetElement);
    this.removeMenuItemFocus(menuWidgetElement);

    if (!activeMenuItemElement) {
      activeMenuItemElement =
        menuElement.querySelectorAll('[role="menuitem"]')[0];
    }

    activeMenuItemElement.setAttribute("data-active", "true");
    activeMenuItemElement.focus();
  },
  removeMenuItemFocus(menuWidgetElement) {
    const menuElement = this.findMenuElement(menuWidgetElement);

    Array.prototype.forEach.call(
      menuElement.querySelectorAll('[role="menuitem"]'),
      function (menuItemElement) {
        menuItemElement.setAttribute("data-active", "false");
      }
    );

    this.findButtonElement(menuWidgetElement).focus();
  },
  findMenuElement(menuWidgetElement) {
    while (menuWidgetElement.className.indexOf("popupMenuWidget") === -1) {
      menuWidgetElement = menuWidgetElement.parentNode;
    }
    return menuWidgetElement.querySelector('[role="menu"],ul');
  },
  findButtonElement(menuWidgetElement) {
    while (menuWidgetElement.className.indexOf("popupMenuWidget") === -1) {
      menuWidgetElement = menuWidgetElement.parentNode;
    }
    return menuWidgetElement.querySelector('[role="button"],a');
  },
};
