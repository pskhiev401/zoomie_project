import React, { Component } from "react";
import "./AdminUser.scss";
import AdminSideNav from "../SideNav/Admin/AdminSideNav";
import { connect } from "react-redux";
import dlReducer, { getUserInfo } from "../../ducks/dlReducer";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
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

// Modal.setAppElement('#yourAppElement')

class AdminUser extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      completedOrders: [],
      pendingOrders: [],
      selectedObject: []
      // allOrders : [],
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(obj) {
    this.setState({ modalIsOpen: true, selectedObject: obj });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f000";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    //get userdata then update reducer
    axios.get("/api/getUserData").then(res => {
      this.props.getUserInfo(res.data[0]);
    });
    //pending jobs table
    axios.get("/api/getAllPending").then(res => {
      this.setState({ pendingOrders: res.data });
    });
    //completed jobs table
    axios.get("/api/getAllCompleted").then(res => {
      console.log(res.data);
      this.setState({ completedOrders: res.data });
    });
  }

  render() {
    let displayAllPending = this.state.pendingOrders.map((e, i) => {
      return (
        <div key={i} className="user_card">
          <h1 onClick={() => this.openModal(e)}>Job Ticket #{e.id}</h1>
        </div>
      );
    });

    let displayAllCompleted = this.state.completedOrders.map((e, i) => {
      return (
        <div key={i} className="user_card">
          <h1 onClick={() => this.openModal(e)}>Job Ticket #{e.id}</h1>
        </div>
      );
    });
    const {
      first_name,
      last_name,
      status,
      user_email
    } = this.state.selectedObject;
    return (
      <div className="admin_main_container">
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h1>
            CUSTOMER: {first_name} {last_name}
          </h1>
          <h1>JOB STATUS: {status}</h1>
          <h1>EMAIL: {user_email}</h1>
          <button>Notify Customer</button>
          <button>Complete Job</button>
        </Modal>
        <div className="admin_left">
          <AdminSideNav />
        </div>
        <div className="admin_right">
          <h1>Pending Job Tickets</h1>
          <div className="pending_container">{displayAllPending}</div>
        </div>
        <div className="admin_right">
          <h1>Completed Job Tickets</h1>
          <div className="pending_container">{displayAllCompleted}</div>
        </div>
        <div className="admin_right">
          <h1>Charts</h1>
          <div className="pending_container">FRESH</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getUserInfo }
)(AdminUser);
