import React, { Component } from "react";
import AdminSideNav from "../SideNav/Admin/AdminSideNav";
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
      "Wow that was....EASY! You should receive your items in the mail within 3-4 business days!"
  };
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
  // MODAL 
  onOpenModal = obj => {
    this.setState({ open: true, selectedObject: obj });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  //EMAIL HANDLER
  emailHandler2 = () => {
    // through body,  selected object send EmailAddress, this.state.whatever you typed
    axios.post('"/api/sendEmail2"', {obj: this.state.selectedObject, emailMessage: this.state.default_message })
  };
  // JOB STATUS HANDLERS
  reviewedJob = (e) =>{
    console.log(e)
  }

  completeJob = (e) => {
    console.log(e)
    //axios.delete
  }

  render() {
    const { open } = this.state;
    const {first_name,last_name,status,user_email} = this.state.selectedObject;
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
    return (
      <div className="admin_main_container">
        <div className="admin_left">
          <AdminSideNav />
        </div>
        <div className="admin_right">
          <h1>Pending Job Tickets</h1>
          <div className="pending_container">{displayAllPending}</div>
          {/* <div className="pending_container">TURTLE IN</div> */}
        </div>
        <div className="admin_right">
          <h1>Completed Job Tickets</h1>
          <div className="pending_container">{displayAllCompleted}</div>
          {/* <div className="pending_container">A HALFSHELL</div> */}
        </div>
        <div className="admin_right">
          <h1>Charts</h1>
          <div className="pending_container">TURTLE POWER</div>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h1>
            CUSTOMER: {first_name} {last_name}
          </h1>
          <h1>JOB STATUS: {status}</h1>
          <h1>EMAIL: {user_email}</h1>
          <br />
          {status === "Completed" && (
            <textarea
              defaultValue={this.state.default_message}
              maxlength={250}
              onChange={e => this.setState({ default_message: e.target.value })}
            />
          )}
          <br />
          <div className='btn_container'>
            {status === "Completed" && <button>Notify Customer</button>}
            {/* onClick={() => this.emailHandler2()} */}
            {status === "Pending" && <button>Reviewed Completed</button>}
            {/* onClick={this.reviewedJob(this.state.selectedObject)} */}
            {status === "Completed" && <button>Job Completed</button>}
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(AdminUser);