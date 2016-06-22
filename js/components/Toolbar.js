/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react';
import {nextSlide, previousSlide} from 'exerslide/js/navigation';
import {getContentWidthStyle} from 'exerslide/js/layoutHelper';

import './css/toolbar.css';

/**
 * This components generates a previous and next buttons (rendered as arrows,
 * using Font Awesome) to navigate the presentation.
 */
export default function Toolbar(props) {
  const {slideIndex} = props;
  return (
    <div
      role="navigation"
      id="toolbar"
      className={props.className}
      style={getContentWidthStyle()}
      aria-label="Slide">
      <button
        type="button"
        aria-label="previous"
        onClick={previousSlide}
        disabled={slideIndex === 0}>
        <i className="fa fa-lg fa-chevron-left"></i>
      </button>
      <span
        aria-label={
          'Slide ' + (slideIndex + 1) + ' of ' + props.numberOfSlides
        }>
        {' ' + (slideIndex + 1) + '/' + props.numberOfSlides + ' '}
      </span>
      <button
        type="button"
        aria-label="next"
        onClick={nextSlide}
        disabled={slideIndex + 1 === props.numberOfSlides}>
        <i className="fa fa-lg fa-chevron-right"></i>
      </button>
    </div>
  );
}

Toolbar.propTypes = {
  /**
   * This index of the current slide.
   */
  slideIndex: React.PropTypes.number.isRequired,
  /**
   * Number of slides.
   */
  numberOfSlides: React.PropTypes.number.isRequired,
};

