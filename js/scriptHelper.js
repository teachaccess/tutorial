global.expandSection = function(event) {
  var additionalLinks = document.getElementById('additionalLinks');
  event.preventDefault();
  if (additionalLinks.style.display == 'block') {
    additionalLinks.style.display = 'none';
    document.getElementById('a11yLinkHide').style.display = 'none';
    document.getElementById('a11yLinkShow').style.display = 'block';
  } else {
    additionalLinks.style.display = 'block';
    document.getElementById('a11yLinkShow').style.display = 'none';
    document.getElementById('a11yLinkHide').style.display = 'block';
  }
}

global.expandSectionWithARIA = function(event) {
  var additionalLinks = document.getElementById('additionalLinks');
  event.preventDefault();
  if (additionalLinks.style.display == 'block') {
    additionalLinks.style.display = 'none';
    document.getElementById('a11yLinkHide').style.display = 'none';
    document.getElementById('a11yLinkShow').style.display = 'block';
    document.getElementById('a11yLinkHide').focus();
    additionalLinks.setAttribute('aria-expanded', false);
  } else {
    additionalLinks.style.display = 'block';
    document.getElementById('a11yLinkShow').style.display = 'none';
    document.getElementById('a11yLinkHide').style.display = 'block';
    additionalLinks.focus();
    additionalLinks.setAttribute('aria-expanded', true);
  }
}

global.showHideDialog = function(ev) {
  var el = document.getElementById("overlay");
  document.getElementById('closeButton').onkeydown = function(e) {
    if (e.keyCode == 9) {
      e.preventDefault();
      document.getElementById('inputfield').focus();
    }
  }
  if (el.style.display == "block") {
    el.style.display = "none";
    document.getElementById('sourceLink').focus();
    document.body.style.overflow = 'initial';
  } else {
    el.style.display = "block";
    document.getElementById('inputfield').focus();
    document.body.style.overflow = 'hidden';
  }
  ev.preventDefault();
}

global.showHideDialog2 = function(ev) {
  var el = document.getElementById("overlay2");
  document.getElementById('closeButton2').onkeydown = function(e) {
    if (e.keyCode == 9) {
      e.preventDefault();
      document.getElementById('inputfield2').focus();
    }
  }
  if (el.style.display == "block") {
    el.style.display = "none";
    document.getElementById('sourceLink2').focus();
    document.body.style.overflow = 'initial';
  } else {
    el.style.display = "block";
    document.getElementById('inputfield2').focus();
    document.body.style.overflow = 'hidden';
  }
  ev.preventDefault();
}

global.closeDialog = function(ev) {
  if (ev.keyCode == 27) {
    var el = document.getElementById("overlay");
    el.style.display = "none";
    document.getElementById('sourceLink').focus();
  }
}

global.closeDialog2 = function(ev) {
  if (ev.keyCode == 27) {
    var el = document.getElementById("overlay2");
    el.style.display = "none";
    document.getElementById('sourceLink2').focus();
  }
}

// Menu example code.
global.menuExample = {
  onClick: function (event) {
    var isOpen = this.toggleMenu(event.currentTarget.parentNode);
    if (isOpen) {
      this.setMenuItemFocus(event.currentTarget.parentNode);
    }
  },
  // Keep all clicks from escaping the widget.
  onClickWidget: function () {
    event.preventDefault();
  },
  onMouseoverMenuItem: function (event) {
    if (event.target.getAttribute('role') === 'menuitem') {
      this.setMenuItemFocus(event.target.parentNode.parentNode, event.target)
    }
  },
  onClickMenuItem: function (event) {
    var menuWidgetElement = event.target.parentNode.parentNode;
    // Some business logic here.
    // {...code...}
    // And clean up.
    this.setButtonFocus(menuWidgetElement);
    this.closeMenu(menuWidgetElement);
  },
  onKeydown: function (event) {
    var menuWidgetElement = event.currentTarget;
    var menuElement = this.findMenuElement(menuWidgetElement);
    var buttonElement = this.findButtonElement(menuWidgetElement);

    var menuItemElements = Array.prototype.slice.call(menuElement.querySelectorAll('[role="menuitem"]'));
    var activeIndex = -1;

    menuItemElements.forEach(function (menuItem, ii) {
      if (menuItem.getAttribute('data-active') === "true") {
        activeIndex = ii;
      }
    });

    function cancelEvent (event) {
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
  openMenu: function (menuWidgetElement) {
    var menuElement = this.findMenuElement(menuWidgetElement);
    if (menuElement.getAttribute('data-open') === 'false') {
      menuElement.style.display = 'block';
      menuElement.setAttribute('data-open', 'true');
    }
    return true;
  },
  closeMenu: function (menuWidgetElement) {
    var menuElement = this.findMenuElement(menuWidgetElement);
    menuElement.style.display = 'none';
    menuElement.setAttribute('data-open', 'false');
    this.removeMenuItemFocus(menuWidgetElement);
    return false;
  },
  toggleMenu: function (menuWidgetElement) {
    var menuElement = this.findMenuElement(menuWidgetElement);
    if (menuElement.getAttribute('data-open') === 'false') {
      return this.openMenu(menuWidgetElement);
    }
    else {
      return this.closeMenu(menuWidgetElement);
    }
  },
  setButtonFocus: function (menuWidgetElement) {
    this.findButtonElement(menuWidgetElement).focus();
  },
  setMenuItemFocus: function (menuWidgetElement, activeMenuItemElement) {
    var menuElement = this.findMenuElement(menuWidgetElement);
    this.removeMenuItemFocus(menuWidgetElement);

    if (!activeMenuItemElement) {
      activeMenuItemElement = menuElement.querySelectorAll('[role="menuitem"]')[0];
    }

    activeMenuItemElement.setAttribute('data-active', 'true');
    activeMenuItemElement.focus();
  },
  removeMenuItemFocus: function (menuWidgetElement) {
    var menuElement = this.findMenuElement(menuWidgetElement);

    Array.prototype.forEach.call(menuElement.querySelectorAll('[role="menuitem"]'), function (menuItemElement) {
      menuItemElement.setAttribute('data-active', 'false');
    });

    this.findButtonElement(menuWidgetElement).focus();
  },
  getActiveMenuItem: function (menuWidgetElement) {
    var menuElement = this.findMenuElement(menuWidgetElement);
    var activeMenuItemElement = menuElement.querySelector('[data-active="true"]');
  },
  findMenuElement: function (menuWidgetElement) {
    return menuWidgetElement.querySelector('[role="menu"]');
  },
  findButtonElement: function (menuWidgetElement) {
    return menuWidgetElement.querySelector('[role="button"]');
  }
};
