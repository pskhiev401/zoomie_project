import React, { Component } from "react";
import "./DLScan.scss";
import FileBase64 from "react-file-base64";
import axios from "axios";
import UserSideNav from "../../SideNav/Users/UserSideNav";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class DLScan extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      files: [],
      blinkResponse: []
    };
  }


openModal() {
  this.setState({ modalIsOpen: true })
}

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  getFiles(files) {
    this.setState({ files: files });
  }

  submitHandler = () => {
    // console.log(this.state.files[0].base64)

    axios
      .post("/api/dlscan", { base64: this.state.files[0].base64 })
      .then(res => {
        console.log(res.data);
        this.setState({ blinkResponse: res.data });
      });
    this.openModal(this.state.blinkResponse)
  };

  render() {
    console.log(this.state.blinkResponse)
    const {customerFamilyName,
      customerFirstName,
      dateOfBirth,
      sex,
      eyeColor,
      hairColor,
      weightPounds,
      height,
      fullAddress,
      jurisdictionVehicleClass,
      documentExpirationDate} = this.state.blinkResponse
    return (
      <div className="scan_main">
      <Modal
        isOpen={this.state.modalIsOpen}
        // onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}>

          <div>{customerFamilyName}</div>
          <div>{customerFirstName}</div>
          <div>{dateOfBirth}</div>
          <div>{sex}</div>
          <div>{eyeColor}</div>
          <div>{hairColor}</div>
          <div>{weightPounds}</div>
          <div>{height}</div>
          <div>{fullAddress}</div>
          <div>{jurisdictionVehicleClass}</div>
          <div>{documentExpirationDate}</div>
        </Modal>
        <div className="left_container">
          <UserSideNav />
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

        

          {/* {this.state.files.length !== 0 ? (
            <div>
              <h3 className="text-center mt-25">Callback Object</h3>
              <div className="pre-container">
                <pre>{JSON.stringify(this.state.files, null, 2)}</pre>
              </div>
            </div>
          ) : null} */}
        </div>
      </div>
    );
  }
}

export default DLScan;
