import React, { Component } from "react";
import MonacoEditor, { MonacoDiffEditor } from "react-monaco-editor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "// type your code...",
      originalCode: "function f()\n{  console.info('hi');\n}\n"
    };
  }
  editorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
    editor.focus();
  };
  onChange = (newValue, e) => {
    console.log("onChange", newValue, e);
  };
  render() {
    const { code, originalCode } = this.state;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <MonacoDiffEditor
          height="600"
          language="javascript"
          value={code}
          original={originalCode}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        <MonacoEditor
          height="600"
          language="javascript"
          theme="vs-light"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default App;
