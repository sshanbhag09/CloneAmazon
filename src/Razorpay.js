import React from 'react'

function Razorpay() {
    return (
        <div className='razorpay'>
            <a href='https://rzp.io/l/wEf9U9DiF'>
            <img src='https://cdn.razorpay.com/static/assets/merchant-badge/badge-dark.png' alt=''></img>
            </a>
            <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_If95gxGWXZoeal" async> </script> </form>
        </div>
    )
}

export default Razorpay
