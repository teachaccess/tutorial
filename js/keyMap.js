/**
 * This sets up the default keybindings for a presentation. The module should
 * return an object with `keys -> function` mapping. exerslide will bind event
 * handlers for those keys (key combinations) and call the corresponding function
 * providing an API to control the presentation. Currently provided is
 *
 * - nextSlide(): Advance to the next slide
 * - previousSlide(): Go back to the previous slide
 * - gotToSlide(index): Go to slide <index>
 *
 * We use http://dmauro.github.io/Keypress/ to bind the event handlers. Have
 * a look at the documentation to find out how to specify key combinations.
 */

function next({nextSlide}) {
  nextSlide();
}

function prev({previousSlide}) {
  previousSlide();
}

export default {
  left: prev,
  right: next,
  'alt pageup': prev,
  'alt pagedown': next,
};
