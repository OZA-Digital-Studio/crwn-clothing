import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IfiZ4JTKaImtzFvzZ3aBzsjAICFksSPz3mROnpsdIJQbAjAEiZoK1cmEUwYk7eXapyC5eppAFUptKVycsJY1N3E00SAHs2BPB";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => alert("Payment Successful!", response))
      .catch((error) => {
        console.log("Payment error: ", error);
        alert(
          "There was a payment issue. PLease make sure you use the provided credit card as a test"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWn Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your totl is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
