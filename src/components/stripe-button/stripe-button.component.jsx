import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51IfiZ4JTKaImtzFvzZ3aBzsjAICFksSPz3mROnpsdIJQbAjAEiZoK1cmEUwYk7eXapyC5eppAFUptKVycsJY1N3E00SAHs2BPB';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!')
    }

    return(
        <StripeCheckout
         label='Pay Now'
         name= 'CRWn Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your totl is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}           
        />
    )
};

export default StripeCheckoutButton;