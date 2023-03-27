import React from 'react'
import products from './product'
export default function BuyDish({match}) {

  const curr_prod=products.filter(item=>{return item.id==match.params.id})[0]
  console.log(curr_prod)
  return (
    <div>
      <div>you are buying</div>
      <div className="tshirtCard" style={{border:"1px solid black",width:"86%",borderRadius:"10px", paddingBottom:"10%",position:"relative",left:"7%",top:"10%",marginBottom:"10%"}}>
      <div style={{fontSize:"20px",fontWeight:"800",color:"#207398",textAlign:"center"}}>{curr_prod.name}</div>
      <hr></hr>
      <span style={{justifyContent:"center"}}>
        <div><img src="small.jpeg" style={{ height: "170px", width: "80%",objectFit:"cover",marginLeft:"10%" }}
        className="mb-3 rounded"/></div>
        
        <span style={{fontSize:"15px",fontWeight:"800",color:"#207398",margin:"0 0 0 10px"}}>Description:</span>
        <div style={{overflowX:"hidden",fontSize:"17px",fontWeight:"600",color:"black",margin:"0 10px 0 10px"}}>
          {curr_prod.description.slice(0,50)}{curr_prod.description.length<30?<div><br></br></div>:"..."}
        </div>
        <div style={{textAlign:"center"}}>
        <span style={{fontSize:"20px",fontWeight:"800",color:"#207398"}}>price:</span><span style={{fontSize:"20px",fontWeight:"800",color:"green"}}>Rs {curr_prod.price}</span>
        </div>
        
      </span>
    </div>
    </div>
  )
}
