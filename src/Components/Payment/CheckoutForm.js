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
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button
          onClick={async () => {
            await this.submit();
          }}
        >
          Pay
        </button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);