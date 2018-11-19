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
    // const {
    //   customerFamilyName,
    //   customerFirstName,
    //   dateOfBirth,
    //   sex,
    //   eyeColor,
    //   hairColor,
    //   weightPounds,
    //   height,
    //   fullAddress,
    //   jurisdictionVehicleClass,
    //   documentExpirationDate
    // } = this.state.blinkResponse;
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
          <button onClick={() => this.submitHandler()} className="scan_button">
            Submit
          </button>
        </div>

        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="scanner_modal">
            <div className="modal_content">
              hi
              <div className="top_name">
                <img
                  src="https://image.flaticon.com/icons/svg/262/262527.svg"
                  alt="person logo"
                />
                <div>Patric</div>
                <div>Khiev</div>
              </div>
              <div className="modal_bottom">
                <div className="modal_left">
                  <div>
                    <img
                      src="https://image.flaticon.com/icons/svg/918/918183.svg"
                      alt="birthday cake"
                    />
                    12.26.2000
                  </div>
                  <div>
                    <img
                      src="https://image.flaticon.com/icons/svg/1152/1152322.svg"
                      alt="sex icon"
                    />
                    MALE
                  </div>
                  <div>
                    <img
                      src="https://image.flaticon.com/icons/svg/802/802067.svg"
                      alt="eye icon"
                    />
                    BRN
                  </div>
                  <div>
                    <img src=" " alt="hair icon" />
                    hair BRN
                  </div>
                  <div>188</div>
                  <div>
                    <img
                      src="https://image.flaticon.com/icons/svg/392/392932.svg"
                      alt="height icon"
                    />
                    6'0''
                  </div>
                </div>
                <div className="modal_right">
                  <div className="add_top">
                    <div>6 FALMOUTH COVE</div>
                  </div>
                  <div className="add_bottom">
                    <div>SAN RAFAEL</div>
                    <div>CA</div>
                    <div>94901</div>
                  </div>
                  <div>CLASS C</div>
                  <div>12.26.2022</div>
                </div>
              </div>
              <button>Pay Now</button>
            </div>

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
          </div>
        </Modal>
      </div>
    );
  }
}

export default DLScan;
