import React, { useEffect,useState } from "react";
import { loadCart } from "./Helpers";
import { Link } from "react-router-dom";
import CardHelper from "./Card";
import { useContext } from 'react';
import { Globalcontext } from '../context/Globalstate';
import {socket} from './Socket'



const Cart=()=>{

    const [reload,setReload]=useState(false)
    const [cartData,setCartData]=useState([])
    const {getstock} = useContext(Globalcontext);
    const [msg,setMsg]=useState("")
    const [stock, setstock] = useState({"dum":"Loding stocks" , "fry":"loading stocks"});
    //   console.log(curr_orders,curr_stock)

    // socket.on("new_stock",async ()=>{
    //     const result1 = await getstock("dum");
    //     const result2 = await getstock("fry");
    //     setstock({"dum":result1[0].quantity , "fry":result2[0].quantity});
    //     console.log(`called`, result1[0].quantity , result2[0].quantity );
    // })
      
    const checkRequirement=()=>{
        let ordered_stock_dum=0
        let ordered_stock_fry=0;
          for (var i=0;i<cartData.length;i++){
        
            if (cartData[i].category=="dum"){
              ordered_stock_dum+=(cartData[i].count*cartData[i].quantity)
            }
            else if (cartData[i].category=="fry"){
              ordered_stock_fry+=(cartData[i].count*cartData[i].quantity)
            }
          }
          if(ordered_stock_dum>stock['dum'] & ordered_stock_fry>stock['fry']){
            setMsg(`we have only ${stock['dum']} dum biryani's and ${stock['fry']} fried piece biryani's please remove some items from cart`)
          }
          else if(ordered_stock_dum>stock['dum'] ){
            setMsg(`we have only ${stock['dum']} dum biryani's please remove some items from cart`)
          }
          else if(ordered_stock_dum>stock['dum'] & ordered_stock_fry>stock['fry']){
            setMsg(`we have only ${stock['fry']} fried piece biryani's please remove some items from cart`)
          }
          else{
            setMsg("")
          }
    }
    
    useEffect(()=>{
         setCartData(loadCart())
        // async function fun () {
        //     const result1 = await getstock("dum");
        //     const result2 = await getstock("fry");
        //     setstock({"dum":result1[0].quantity , "fry":result2[0].quantity});
        //     console.log(`called`, result1[0].quantity , result2[0].quantity );
        //   }
        //   fun();
          
        //   checkRequirement()
        
    },[reload,msg])
 
    // useEffect(()=>{
    //     checkRequirement()
    // },[msg])
    
    return(
      <div className='container'>
            <div style={{fontSize:"20px",fontWeight:"800",color:"#207398",textAlign:"center"}}><span style={{fontSize:"30px",color:"green"}}>Your Cart </span></div>
            <div style={{position:"relative",alignItems:"center",textAlign:"center"}}>{(cartData.length==0?<div style={{textAlign:"center",fontWeight:"800",color:"red"}}>Cart is empty , please add something here to proceed for purchasing</div>:<div><Link className="btn btn-primary" to="/placeorder">Proceed to purchase</Link></div>)}</div> 
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
              eachCartProduct["checkRequirement"]=checkRequirement;
              
              
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