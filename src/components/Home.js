import CardHelper from './Card'
import { Link } from 'react-router-dom'
import products from './product';
import { useContext } from 'react';
import { Globalcontext } from '../context/Globalstate';
import React, { useState, useEffect } from "react";
import {socket} from './Socket'

export default function Home() {
  const {getstock} = useContext(Globalcontext);
  const [stock, setstock] = useState({"dum":"Loding stocks" , "fry":"loading stocks"});
  socket.on("new_stock",async ()=>{
    const result1 = await getstock("dum");
    const result2 = await getstock("fry");
    setstock({"dum":result1[0].quantity , "fry":result2[0].quantity});
    console.log(`called`, result1[0].quantity , result2[0].quantity );
})
  useEffect(()=>{
    async function fun () {
      const result1 = await getstock("dum");
      const result2 = await getstock("fry");
      setstock({"dum":result1[0].quantity , "fry":result2[0].quantity});
      console.log(`called`, result1[0].quantity , result2[0].quantity );
    }
    fun();   
  },[])
  if(stock['dum']<=0 & stock['fry']<=0){
    return <div style={{textAlign:"center",fontWeight:"800",color:"red"}}>Sorry , No more Stock Left , Visit again tomorrow</div>
  }
  else{
  return (
    
      <div className='container-fluid' style={{marginTop:"",}}>
        <div style={{fontSize:"30px",fontWeight:"800",color:"#207398",textAlign:"center"}}><span style={{fontSize:"30px",color:"green"}}>Welcome </span><span>!! to BTech Biryani </span></div>
        
        
        <div className="offset-1" style={{fontSize:"20px",fontWeight:"600",marginTop:"20px",display:`${stock['fry']<=0?"none":"something"}`}}> Hyderabadi Fried Piece Biryani <span style={{fonstSzie:"10px",fontWeight:"500",color:"red"}}>( {stock.fry} left)</span></div>
        <div className="row" style={{display:`${stock['fry']<=0?"none":"something"}`}}>
          {products.map((product, index) => {
            product["addtoCart"]=true;
            product["removeFromCart"]=false;
            if(product.category=="fry"){
            return (
              <div key={index} className="col-md-4 p-0 m-0">
                <CardHelper props={product} setstock={setstock} stock={stock}/>
                {/* {product.name} */}
              </div>
            );}
          })}
        </div>
        <hr></hr>
        <div className="offset-1" style={{fontSize:"20px",fontWeight:"600",display:`${stock['dum']<=0?"none":"something"}` }}>Hyderabadi Dum Biryani<span style={{fonstSzie:"10px",fontWeight:"500",color:"red"}}>( {stock.dum} left)</span></div>
        <div className="row" style={{display:`${stock['dum']<=0?"none":"something"}`}}>
          {products.map((product, index) => {
            product["addtoCart"]=true;
            product["removeFromCart"]=false;
            if(product.category=="dum"){
            return (
              <div key={index} className="col-md-4 p-0 m-0">
                <CardHelper props={product} setstock={setstock} stock={stock}/>
                {/* {product.name} */}
              </div>
            );}
          })}
        </div>
      </div>
    
  );}
}

