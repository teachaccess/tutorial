import React from 'react';
import Editor from 'exerslide/components/Editor';
import '../js/scriptHelper';

import 'codemirror/mode/htmlmixed/htmlmixed';

function toDOM(html) {
  let div = global.document.createElement('div');
  div.innerHTML = html;
  return div;
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.code,
      assertion: props.assertion && this._makeAssertion(props.assertion),
      result: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      code: nextProps.code,
      assertion: nextProps.assertion &&
        this._makeAssertion(nextProps.assertion),
    });

    if (this.state.code !== nextProps.code) {
      this.refs.editor.setValue(nextProps.code);
    }
  }

  _onChange(code) {
    this.setState({code});
  }

  _makeAssertion(code) {
    let assertion = new Function('assert', 'source', 'dom', code);
    let assert = function(check, msg) {
      if (!check) {
        console.error(msg);
        throw new Error(msg);
      }
    };

    return function(source) {
      assertion(assert, source, toDOM(source));
    };
  }

  _verify() {
    let html = this.refs.editor.getValue();
    if (html) {
      try {
        this.state.assertion(html);
      } catch(ex) {
        this.setState({result: {error: ex.message}});
        return;
      }
      this.setState({result: {success: true}});
    } else {
      this.setState({result: {error: 'Cannot validate empty input.'}});
    }
  }

  render() {
    let {title, description} = this.props;
    return (
      <div className="example">
        {title ?
          <h2>
            {this.state.assertion ?
              <i className="fa fa-wrench">
                <i className="accessible_elem">Wrench Icon</i>
              </i> :
              null
            }
            &nbsp;{title}
          </h2> :
          null
        }
        {description ? this.props.contentConverter(description) : null}
        {this.props.code ?
          <div className="editorWithPreview">
            <Editor
              ref="editor"
              mode="htmlmixed"
              defaultValue={this.state.code}
              config={{
                extraKeys: {
                  Tab: false,
                  'Shift-Tab': false
                }
              }}
              onChange={this._onChange.bind(this)}
            />
            <div className="preview"
              aria-label="Editor Output"
              dangerouslySetInnerHTML={{__html: '<h3 class="previewHeading">Editor Output</h3>' + this.state.code}}
              tabIndex="0"
            />
          </div> :
          null
        }
        {this.state.assertion ?
          <div className="verify">
            <button
              onClick={this._verify.bind(this)}
              type="button"
              className="button">
              Verify
            </button>
            {this.state.result.error ?
              <span className="text-danger" role="alert" tabindex={0}>
                &nbsp;{this.state.result.error}
              </span> :
              null
            }
            {this.state.result.success ?
              <span className="text-success" role="alert" tabindex={0}>
                &nbsp;Well done!
              </span> :
              null
            }
          </div> :
          null
        }
        {this.props.note ?
          <div className="note">
            {this.props.contentConverter(description)}
          </div> :
          null
        }
      </div>
    );
  }
}

export default class HTMLExercise extends React.Component {
  componentDidMount() {
    let {layoutData: {description, examples}, slideIndex} = this.props;
    if (slideIndex == 14) {
      exerslide.platFormFn(document, 'script', 'facebook-jssdk');
    }
  }

  render(element: ReactElement, container: DOMElement) {
    let {layoutData: {description, examples}, slideIndex} = this.props;

    return (
      <div className="htmlExercise">
        {description ? this.props.contentConverter(description) : null}
        {examples && examples.map(
          (example, i) => <Example key={slideIndex + i} contentConverter={this.props.contentConverter} {...example} />
        )}
      </div>
    );
  }
}
