import React from 'react'
import  StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutPayment = ({price}) =>{
    const PriceForStripe = price * 100 ;
    const PublishKey = 'pk_test_PNDpTAPycS4pFWpsk1MjxINl00Uwntpf84' ;
    const onToken = Token => {
        console.log(Token)
        alert('Payment successful')
    }
    return(
        <StripeCheckout
            name = "Clever Shop"
            image = "https://stripe.com/img/documentation/checkout/marketplace.png"
            label = "Pay Now "
            currency = "USD"
            description = {` Your Total is $${price}`}
            amount = {PriceForStripe}
            panelLabel = "Pay Now"
            token = {onToken}
            shippingAddress
            zipCode
            stripeKey={PublishKey}
        />
    )
}

export default StripeCheckoutPayment ; 