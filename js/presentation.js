/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

/**
 * This is the JavaScript entry point to the presentation.
 * This file allows you to customize some aspects of the presentation, such
 * as the master layout to use (if you don't want to edit the default one),
 * or which keyboard bindings to use for navigation, or to perform any other
 * kind of custom initialization step.
 */

import presentation from 'exerslide/js/presentation';

/**
 * The master layout for this presentation. To customize is, either edit it
 * directly or copy it and point to the copy here.
 */
import MasterLayout from './MasterLayout';

/**
 * This sets up the default keybindings for a presentation. This should be an
 * object with `keys -> function` mapping. exerslide will bind event
 * handlers for those keys (key combinations) and call the corresponding function
 * providing an API to control the presentation. Currently provided is
 *
 * - nextSlide(): Advance to the next slide
 * - previousSlide(): Go back to the previous slide
 * - gotToSlide(index): Go to slide <index>
 *
 * We use https://craig.is/killing/mice to bind the event handlers. Have
 * a look at the documentation to find out how to specify key combinations.
 */
function next({nextSlide}) {
  nextSlide();
}

function prev({previousSlide}) {
  previousSlide();
}

const keyMap = {
  left: prev,
  right: next,
  'alt+pageup': prev,
  'alt+pagedown': next,
};

/**
 * __exerslide_slides__ is "magic" global variable that holds an array of slide
 * objects. By default this variable is injected by webpack. You could use
 * to perform additional modifications to the slides.
 */
/* global __exerslide_slides__*/

presentation({
  MasterLayout,
  keyMap,
  slides: __exerslide_slides__,
});
