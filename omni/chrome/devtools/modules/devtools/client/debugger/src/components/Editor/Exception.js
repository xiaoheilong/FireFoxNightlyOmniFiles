"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("devtools/client/shared/vendor/react");

loader.lazyRequireGetter(this, "_editor", "devtools/client/debugger/src/utils/editor/index");
loader.lazyRequireGetter(this, "_indentation", "devtools/client/debugger/src/utils/indentation");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */
class Exception extends _react.PureComponent {
  componentDidMount() {
    this.addEditorExceptionLine();
  }

  componentDidUpdate() {
    this.clearEditorExceptionLine();
    this.addEditorExceptionLine();
  }

  componentWillUnmount() {
    this.clearEditorExceptionLine();
  }

  setEditorExceptionLine(doc, line, column, lineText) {
    doc.addLineClass(line, "wrapClass", "line-exception");
    column = Math.max(column, (0, _indentation.getIndentation)(lineText));
    const columnEnd = doc.cm ? (0, _editor.getTokenEnd)(doc.cm, line, column) : null;
    const markText = doc.markText({
      ch: column,
      line
    }, {
      ch: columnEnd,
      line
    }, {
      className: "mark-text-exception"
    });
    this.exceptionLine = line;
    this.markText = markText;
  }

  addEditorExceptionLine() {
    const {
      exception,
      doc,
      selectedSourceId
    } = this.props;
    const {
      columnNumber,
      lineNumber
    } = exception;
    const location = {
      column: columnNumber - 1,
      line: lineNumber,
      sourceId: selectedSourceId
    };
    const {
      line,
      column
    } = (0, _editor.toEditorPosition)(location);
    const lineText = doc.getLine(line);
    this.setEditorExceptionLine(doc, line, column, lineText);
  }

  clearEditorExceptionLine() {
    if (this.markText) {
      const {
        doc
      } = this.props;
      this.markText.clear();
      doc.removeLineClass(this.exceptionLine, "wrapClass", "line-exception");
      this.exceptionLine = null;
      this.markText = null;
    }
  } // This component is only used as a "proxy" to manipulate the editor.


  render() {
    return null;
  }

}

exports.default = Exception;