
import React, { useState, useEffect } from "react";
import { Redirect,Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart,alreadyExistInCart,increaseQuantity,decreaseQuantity } from "./Helpers";
import "./Card.css";


const CardHelper = (
  props 
) => {
  let stock = props.stock;
  const product=props.props
  const addtoCart=product.addtoCart;
  const removeFromCart=product.removeFromCart;
  const checkRequirement=product.checkRequirement;
  const [redirect, setRedirect] = useState(false);
  const cartTitle = product ? product.name : "A photo from pexels";
  const count = product ? product.count : 0;
  const category = product ? product.category : "nothing";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";
  const addToCart = () => {
    if(!alreadyExistInCart(product.id)){
        addItemToCart(product, () => alert("product added to cart successfully"));
    }
    else{
        // props.setstock({...stock ,  category :  stock[category] - count })
        alert("product already in cart")
    }
    
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-primary mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product.id);
            checkRequirement();
            product.setReload(!product.reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove
        </button>
      )
    );
  };
  return (
     <div className="tshirtCard" style={{border:"1px solid black",width:"86%",borderRadius:"10px", paddingBottom:"10%",position:"relative",left:"7%",top:"10%",marginBottom:"10%"}}>
      <div style={{fontSize:"20px",fontWeight:"800",color:"#207398",textAlign:"center"}}>{cartTitle}</div>
      <hr></hr>
      <span style={{justifyContent:"center"}}>
        {getARedirect(redirect)}
        <div><img src={product.image} style={{ height: "170px", width: "80%",objectFit:"cover",marginLeft:"10%" }}
        className="mb-3 rounded"/></div>
        {/* {stock} */}
        <span style={{fontSize:"15px",fontWeight:"800",color:"#207398",margin:"0 0 0 10px"}}>Description:</span>
        <div style={{overflowX:"hidden",fontSize:"17px",fontWeight:"600",color:"black",margin:"0 10px 0 10px"}}>
          {cartDescrption}{cartDescrption.length<30?<div><br></br></div>:""}
        </div>
        <div style={{textAlign:"center"}}>
        <span style={{fontSize:"20px",fontWeight:"800",color:"#207398"}}>Price:</span><span style={{fontSize:"20px",fontWeight:"800",color:"green"}}>Rs {cartPrice}</span><span style={{fonstSzie:"10px",fontWeight:"500",color:"red"}}>(<s>{product.originalPrice}</s>)</span>
        </div>
        {product["iscart"]?<div className="row" style={{alignItems:"center",justifyContent:"center",margin:"0 0 0 25%",width:"50%"}}><span>Quantity</span><span><button onClick={()=>{decreaseQuantity(product.id); checkRequirement();product.setReload(!product.reload) ;}}>-</button></span><span style={{fontSize:"20px",fontWeight:"800" , border:"1px solid black",padding:"0 5px",margin:"5px"}}>{product.quantity}</span><span><button onClick={()=>{increaseQuantity(product.id) ;checkRequirement();product.setReload(!product.reload)}}>+</button></span></div>:<span></span>}
        <div className="row" >
          {addtoCart?<div className="col-6 offset-3" >{showAddToCart(addtoCart)}</div>:
          <div className="col-6 offset-3" >{showRemoveFromCart(removeFromCart)}</div>}
          {/* <div className="col-5 btn btn-block btn-outline-success mt-2 mb-2"><Link to={`/buydish/${product.id}`}>Buy Now</Link></div> */}
          
        </div>
      </span>
    </div> 

    
    
    
  );
};

export default CardHelper;

