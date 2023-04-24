import React from 'react'

export default function OrderConfirmation(props) {
  let count = props.count
  return (
    <>
    { count>=3 ? <div style={{color:"green",fontSize:"20px",fontWeight:"600",margin:"10% 10%"}}>you order will be delivered to your hostel</div>:
    <div style={{color:"green",fontSize:"20px",fontWeight:"600",margin:"10% 10%"}}>Order Placed successfully , it will be delivered to you at your selected time at the <p style={{fontWeight:"600",fontSize:"25px",color:"red"}}>OPP Rk juice shop,shopping complex</p></div>
  }
  </>
  )
}
