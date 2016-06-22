/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react';
import TOC from './components/TOC';
import Toolbar from './components/Toolbar';

/**
 * The master layout specifies the overall layout of the page, such as
 * the table of contents, a progress indicator and of course the slide itself.
 * The current slide component is passed as child to it.
 *
 * Be default the master layout renders a table of contents, navigation buttons
 * and the slide content:
 *
 * +----------------------------------------+
 * |+---------+ +--------------------------+|
 * ||         | | +-----------------------+||
 * ||         | | |                       |||
 * ||         | | |         Slide         |||
 * ||   TOC   | | |                       |||
 * ||         | | +-----------------------+||
 * ||         | | +-----------------------+||
 * ||         | | |         Toolbar       |||
 * ||         | | +-----------------------+||
 * |+---------+ +--------------------------+|
 * +----------------------------------------+
 *
 */
export default function MasterLayout(props) {
  const slide = props.slides[props.slideIndex];
  const {className, children, ...restProps} = props;
  return (
    <div id="page" className={className}>
      <TOC {...restProps} togglable={true} />
      <div id="main" className="flex-column">
        <img style={{alignSelf: 'flex-end', width: 122, margin: 10}} src="logo-teach-access.svg" alt="Teach Access Bridge" />
        {children}
        <Toolbar
          className="flex-item-fix"
          slideIndex={props.slideIndex}
          numberOfSlides={props.slides.length}
        />
      </div>
    </div>
  );
}

MasterLayout.propTypes = {
  /**
   * The index of the current slide
   */
  slideIndex: React.PropTypes.number,

  /**
   * All slides
   */
  slides: React.PropTypes.array,

  /**
   * CSS class names to add to the page.
   */
  className: React.PropTypes.string,
};
