import React, { useEffect,useState } from "react";
import { loadCart } from "./Helpers";
import { Link } from "react-router-dom";
import CardHelper from "./Card";



const Cart=()=>{
    const [reload,setReload]=useState(false)
    const [cartData,setCartData]=useState([])
    useEffect(()=>{
        setCartData(loadCart())
    },[reload])
    
    return(
      <div className='container'>
            <div style={{fontSize:"20px",fontWeight:"800",color:"#207398",textAlign:"center"}}><span style={{fontSize:"30px",color:"green"}}>Your Cart </span></div>
            <div style={{position:"relative",alignItems:"center",textAlign:"center"}}><Link className="btn btn-primary" to="/placeorder">Proceed to purchase</Link></div> 
        <div className='row'>

            <div>

            <div className='container'>
              <div className="row">

            {cartData.map((eachCartProduct,index)=>{
              // return (<div></div>)
              eachCartProduct["addtoCart"]=false;
              eachCartProduct["removeFromCart"]=true;
              eachCartProduct["setReload"]=setReload;
              eachCartProduct["reload"]=reload;
              
              
                return (<div key={eachCartProduct.id}>
                    
                    <CardHelper props={eachCartProduct}  />
                </div>)
            })}

            </div>
           
            </div>

            </div>
            
        </div>
        </div>
    )
}

export default Cart