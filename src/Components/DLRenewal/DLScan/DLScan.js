import React, { Component } from "react";
import "./DLScan.scss";
import FileBase64 from "react-file-base64";

class DLScan extends Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
  }

  getFiles(files) {
    this.setState({ files: files });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">React File to Base64 Converter</h1>
        <div className="text-center mt-25">
          <p className="text-center">Try To Upload Some Image</p>
          <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
        </div>
        <div className="text-center">
          {this.state.files.map((file, i) => {
            return <img key={i} src={file.base64} alt="pending" />;
          })}
          <img src="" alt="pending" />
        </div>
        {this.state.files.length !== 0 ? (
          <div>
            <h3 className="text-center mt-25">Callback Object</h3>
            <div className="pre-container">
              <pre>{JSON.stringify(this.state.files, null, 2)}</pre>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default DLScan;
