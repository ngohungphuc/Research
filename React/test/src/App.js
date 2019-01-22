import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
		super(props);
    this.state = { selectedFile: null, loaded: 0 };
  }

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  handleUpload = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile, this.state.selectedFile.name);
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <input type="file" name="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}>Upload</button>
        <div> {Math.round(this.state.loaded, 2)} %</div>
      </div>
    );
  }
}

export default App;
