import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import swal from "sweetalert2";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    await console.log("test");
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok)
      swal({
        title: "Payment Sent",
        text: "Ready to send your order?",
        type: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm Order"
      })
        .then(result => {
          if (result.value) {
            swal("Sweeeet!", "Your order sent", "success");
          }
        })
        .then(() => {
          this.props.changeState();
        });
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <p>CA DMV: $28</p>
        <p>Zoomie Fee: $20</p>
        <p>Total Cost: $48</p> <br />
        <p>Enter Your Payment Details</p>
        <CardElement />
        <button
          onClick={async () => {
            await this.submit();
          }}
        >
          Pay Now
        </button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
