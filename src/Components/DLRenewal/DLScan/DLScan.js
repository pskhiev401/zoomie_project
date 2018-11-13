import React, { Component } from "react";
import "./DLScan.scss";
import FileBase64 from "react-file-base64";
import axios from "axios";
import UserSideNav from "../../SideNav/Users/UserSideNav";
import Modal from "react-responsive-modal";
import InsideScanModal from "./InsideScanModal";

class DLScan extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      files: [],
      blinkResponse: []
    };
  }
  getFiles = files => {
    this.setState({ files: files });
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  submitHandler = () => {
    // console.log(this.state.files[0].base64);
    // axios
    //   .post("/api/dlscan", { base64: this.state.files[0].base64 })
    //   .then(res => {
    //     console.log(res.data);
    //     this.setState({ blinkResponse: res.data });
    //   });
    this.onOpenModal(this.state.blinkResponse);
  };

  render() {
    const { open } = this.state;
    console.log(this.state.blinkResponse);
    const {
      customerFamilyName,
      customerFirstName,
      dateOfBirth,
      sex,
      eyeColor,
      hairColor,
      weightPounds,
      height,
      fullAddress,
      jurisdictionVehicleClass,
      documentExpirationDate
    } = this.state.blinkResponse;
    return (
      <div className="scan_main">
        <div className="left_nav_container">
          <UserSideNav />
        </div>
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Review Data
        </button>
        <div className="right_container">
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
        </div>

        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="modal_box">
            <div className='top_name'>
              <h1>Patric</h1>
              <h1>Khiev</h1>
            </div>
          </div>
          <h1>121688</h1>
          <h1>sex 1</h1>
          <h1>eye BRN</h1>
          <h1>hair BRN</h1>
          <h1>188</h1>
          <h1>72 in</h1>
          <h1>6 FALMOUTH COVE, SAN RAFAEL, CA 94901000</h1>
          <h1>C</h1>
          <h1>12162022</h1>
          <button>Pay Now</button>

          {/* <div>{customerFamilyName}</div>
          <div>{customerFirstName}</div>
          <div>{dateOfBirth}</div>
          <div>{sex}</div>
          <div>{eyeColor}</div>
          <div>{hairColor}</div>
          <div>{weightPounds}</div>
          <div>{height}</div>
          <div>{fullAddress}</div>
          <div>{jurisdictionVehicleClass}</div>
          <div>{documentExpirationDate}</div> */}
        </Modal>
      </div>
    );
  }
}

export default DLScan;
