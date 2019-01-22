import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as React from 'react';

declare const require: any;

interface Props {
  value: string;
  language: string;
  onChange: (newValue: string) => any;
}

export default class App extends React.Component<Props, {}> {
  editor: monaco.editor.IStandaloneCodeEditor;

  render(): JSX.Element {
    return <div className='monaco-editor' ref='editor'></div>;
  }

  componentDidMount() {
    // Monaco requires the AMD module loader to be present on the page. It is not yet
    // compatible with ES6 imports. Once that happens, we can get rid of this.
    // See https://github.com/Microsoft/monaco-editor/issues/18
    (window['require'])(['vs/editor/editor.main'], () => {
      this.editor = monaco.editor.create(this.refs['editor'] as HTMLDivElement, {
        value: this.props.value,
        language: this.props.language,
        lineNumbers: false,
      });

      this.editor.onDidChangeModelContent(event => {
        this.props.onChange(this.editor.getValue());
      });
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.value !== this.props.value && this.editor) {
      this.editor.setValue(this.props.value);
    }

    if (prevProps.language !== this.props.language) {
      throw new Error('<MonacoEditor> language cannot be changed.');
    }
  }
}

export default App;
