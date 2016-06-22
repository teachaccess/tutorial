/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react';
import {groupByChapter} from 'exerslide/js/chapterHelper';
import {IS_MOBILE} from 'exerslide/js/deviceHelper';
import {getOptions} from 'exerslide/js/optionHelper';
import {getSlideURL} from 'exerslide/js/url';

import './css/toc.css';

/**
 * An entry in the Table of Contents
 */
class Entry extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.slideIndex !== this.props.slideIndex ||
      nextProps.active !== this.props.active;
  }

  componentDidUpdate() {
    if (this.props.active) {
      this.refs.anchor.focus();
    }
  }

  render() {
    const {slideIndex, slides, active} = this.props;
    const slide = slides[slideIndex];
    const slideOptions = getOptions(slides, slideIndex);
    const classes = 'slide' + (active ? ' active' : '');
    const Layout = slide.layout;
    const layoutClasses =
      Layout && Layout.getClassNames && Layout.getClassNames(slideIndex);
    const title = slideOptions.toc || slideOptions.title ||
      `Slide ${slideIndex + 1}`;
    const props = {};
    if (active) {
      props['aria-current'] = 'page';
    }

    return (
      <li
        className={classes + ' ' + layoutClasses}>
        <a
          {...props}
          ref="anchor"
          tabIndex={active ? 0 : -1}
          title={title}
          href={getSlideURL(slideIndex)}>
          <span className="title">{title}</span>
        </a>
      </li>
    );
  }
}

Entry.propTypes = {
  slideIndex: React.PropTypes.number,
  slides: React.PropTypes.array,
  active: React.PropTypes.bool,
};

/**
 * The Table of Contents functions as overview over the content as well as
 */

export default class TOC extends React.Component {
  constructor(props) {
    super(props);
    const slideOptions = getOptions(props.slides, props.slideIndex);
    let collapsed = false;
    if (props.togglable) {
      // On mobile devices we collapse the TOC by default
      if (IS_MOBILE) {
        collapsed = true;
      } else if (slideOptions.hasOwnProperty('hidetoc')) {
        collapsed = slideOptions.hidetoc;
      }
    }
    this.state = {
      groupedSlides: groupByChapter(props.slides),
      collapsed,
      explicitlyToggled: false,
    };
    this._onToggle = this._onToggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.slides !== this.props.slides) {
      this.setState({groupedSlides: groupByChapter(nextProps.slides)});
    }
    if (nextProps.slideIndex !== this.props.slideIndex) {
      const slideOptions = getOptions(nextProps.slides, nextProps.slideIndex);
      if (!this.state.explicitlyToggled) {
        let collapsed = IS_MOBILE ? true : Boolean(slideOptions.hidetoc);
        this.setState(
          {
            collapsed,
          },
          () => this.props.onToggle(!this.state.collapsed)
        );
      }
    }
  }

  _onToggle() {
    this.setState(
      {
        collapsed: !this.state.collapsed,
        explicitlyToggled: true,
      },
      () => this.props.onToggle(!this.state.collapsed)
    );
  }

  render() {
    let slideIndex = 0;
    const {slides, togglable} = this.props;
    const {collapsed} = this.state;
    const chapters = this.state.groupedSlides.map(chapter => {
      let entry;
      if (Array.isArray(chapter)) {
        const isActive = this.props.slideIndex >= slideIndex &&
          this.props.slideIndex < slideIndex + chapter.length;
        entry = chapter.map((slide, index) =>
          <Entry
            key={slideIndex + index}
            slideIndex={slideIndex + index}
            slides={slides}
            active={this.props.slideIndex === slideIndex + index}
          />
        );
        entry =
          <li
            key={chapter[0].options.chapter}
            className={'chapter' + (isActive ? ' actice' : '')}>
            <h3 className="title">
              {chapter[0].options.chapter}
            </h3>
            <ol className="slides">{entry}</ol>
          </li>;
        slideIndex += chapter.length;
      } else {
        entry =
          <Entry
            key={slideIndex}
            slideIndex={slideIndex}
            slides={slides}
            active={this.props.slideIndex === slideIndex}
          />;
        slideIndex += 1;
      }
      return entry;
    });

    return (
      <div
        role="navigation"
        id={this.props.id || 'toc'}
        className={collapsed ? 'collapsed' : ''}>
        <h2 id="toc-title">Table of Contents</h2>
        {togglable ?
          <button
            className="toggleButton"
            type="button"
            aria-controls="toc-list"
            aria-expanded={!collapsed}
            aria-label="Table of Contents"
            onClick={this._onToggle}>
            <i
              className={
                'fa fa-lg ' + (collapsed ? 'fa-bars' : 'fa-chevron-left')
              }
            />
          </button> :
          null
        }
        <ol
          id="toc-list"
          aria-controls="main"
          aria-labelledby="toc-title">
          {chapters}
        </ol>
      </div>
    );
  }
}

TOC.propTypes = {
  /**
   * Index of the currently shown slide.
   */
  slideIndex: React.PropTypes.number,

  /**
   * All slides.
   */
  slides: React.PropTypes.array,

  /**
   * Whether to show a toggle button or not.
   */
  togglable: React.PropTypes.bool,

  /**
   * Callback called when TOC is shown or hidden.
   */
  onToggle: React.PropTypes.func,
};

TOC.defaultProps = {
  onToggle: () => {},
};
