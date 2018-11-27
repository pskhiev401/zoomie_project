import React, { Component } from "react";
import AdminSideNav from "../../SideNav/Admin/AdminSideNav";
import "./AdminUser.scss";
import { connect } from "react-redux";
import axios from "axios";
import Modal from "react-responsive-modal";

class AdminUser extends Component {
  state = {
    open: false,
    completedOrders: [],
    pendingOrders: [],
    selectedObject: [],
    emailMessage: "",
    default_message:
      "Wow that was...EASY! You will receive your items in the mail within 3-4 business days!"
  };
  componentDidMount() {
    this.getPendingList();
    this.getCompletedList();
  }

  getPendingList = () => {
    axios.get("/api/getAllPending").then(res => {
      this.setState({ pendingOrders: res.data });
    });
  };

  getCompletedList = () => {
    axios.get("/api/getAllCompleted").then(res => {
      console.log(res.data);
      this.setState({ completedOrders: res.data });
    });
  };
  // MODAL
  onOpenModal = obj => {
    this.setState({ open: true, selectedObject: obj });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  //EMAIL HANDLER
  emailHandler2 = e => {
    console.log(e);
    axios.post("/api/sendEmail2", { e });
  };
  // JOB STATUS HANDLERS
  reviewedJob = e => {
    console.log("reviewedJob", e);
    axios.post("/api/updateStatus", { e }).then(() => {
      this.getPendingList();
      this.getCompletedList();
    });
  };
  //DELETE JOBS
  completeJob = id => {
    axios.delete(`/api/deleteJob/${id}`).then(() => {
      this.getPendingList();
      this.getCompletedList();
    });
  };

  render() {
    // console.log("pendingOrders", this.state.pendingOrders);
    // console.log("completed Orders", this.state.completedOrders);
    // console.log("selectedObject", this.state.selectedObject);
    const { open } = this.state;
    const {
      first_name,
      last_name,
      status,
      user_email
    } = this.state.selectedObject;
    let displayAllPending = this.state.pendingOrders.map((e, i) => {
      return (
        <div key={i} className="user_card">
          <h1 onClick={() => this.onOpenModal(e)}>Job Ticket #{e.id}</h1>
        </div>
      );
    });
    let displayAllCompleted = this.state.completedOrders.map((e, i) => {
      return (
        <div key={i} className="user_card">
          <h1 onClick={() => this.onOpenModal(e)}>Job Ticket #{e.id}</h1>
        </div>
      );
    });
    // RENDER TO SCREEN
    return (
      <div className="admin_main_container">
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
        {/* <div className="admin_right">
          <h1>Charts</h1>
          <div className="pending_container">TURTLE POWER</div>
        </div> */}
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="admin_modal">
            <h1>
              CUSTOMER: {first_name} {last_name}
            </h1>
            <h1>JOB STATUS: {status}</h1>
            <h1>EMAIL: {user_email}</h1>
            <br />
            {status === "Completed" && (
              <textarea
                defaultValue={this.state.default_message}
                maxLength={250}
                onChange={e =>
                  this.setState({ default_message: e.target.value })
                }
              />
            )}
            <br />
            <div className="btn_container">
              {status === "Completed" && (
                <button
                  onClick={() =>
                    this.emailHandler2({
                      obj: this.state.selectedObject,
                      emailMessage: this.state.default_message
                    })
                  }
                >
                  Notify Customer
                </button>
              )}
              {status === "Pending" && (
                <button
                  onClick={() => this.reviewedJob(this.state.selectedObject)}
                >
                  Reviewed Completed
                </button>
              )}
              {status === "Completed" && (
                <button
                  onClick={() =>
                    this.completeJob(this.state.selectedObject.user_id)
                  }
                >
                  Job Completed
                </button>
              )}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(AdminUser);
