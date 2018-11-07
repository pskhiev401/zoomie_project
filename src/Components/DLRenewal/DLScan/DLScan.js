import React, { Component } from "react";
import "./DLScan.scss";
import FileBase64 from "react-file-base64";
import axios from "axios";
import UserSideNav from "../../UserSideNav/UserSideNav";
// import microblink from 'microblink';

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

  submitHandler = () => {
    // console.log(this.state.files[0].base64)
    axios.post("/api/dlscan", { base64: this.state.files[0].base64 });
  };

  render() {
    // console.log(this.state.files[0])
    return (
    
      <div className="scan_main">
          <div className="left_container">
        <UserSideNav/>
        </div>
        
        <div className="scan_center">
          <h1 className="text-center">Upload Drivers License</h1>
          <br />

          <div className="text-center mt-25">
            <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
          </div>
          <br />
          <div className="text-center">
            {this.state.files.map((file, i) => {
              return (
                <img
                  className="img_box"
                  key={i}
                  src={file.base64}
                  alt="Pending..."
                />
              );
            })}
          </div>
          <br />
          <button onClick={() => this.submitHandler()} className="scan_button">
            Submit
          </button>

          {this.state.files.length !== 0 ? (
            <div>
              <h3 className="text-center mt-25">Callback Object</h3>
              <div className="pre-container">
                <pre>{JSON.stringify(this.state.files, null, 2)}</pre>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    
    );
  }
}

export default DLScan;
