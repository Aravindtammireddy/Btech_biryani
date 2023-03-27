import React, { useEffect,useState } from "react";
import { loadCart } from "./Helpers";
import { Link } from "react-router-dom";
import CardHelper from "./Card";
import { addDoc, collection,getDocs,updateDoc,doc } from "firebase/firestore"; 
import { db } from '../Firebase';



const Cart=()=>{
    const [reload,setReload]=useState(false)
    const [cartData,setCartData]=useState([])
    const [curr_stock,setCurr_Stock]=useState(60)


    const loadStocks= async ()=>{
        const querySnapshot = await getDocs(collection(db, "count"));
        var cur_stock=[]
      querySnapshot.forEach((doc) => {
        // doc.data()['id']=doc.id;
        var temp=doc.data()
        cur_stock.push(temp);
      
      }
      
      
      
      )
      setCurr_Stock(cur_stock[0].stock)


    }
    var curr_orders=0;
    for (var i=0;i<cartData.length;i++){
        if (cartData[i].id==1){
          curr_orders+=(1*cartData[i].quantity)
        }
        else if (cartData[i].id==2){
          curr_orders+=(4*cartData[i].quantity);
        }
        else{
          curr_orders+=(6*cartData[i].quantity);
        }
      }
    //   console.log(curr_orders,curr_stock)
    loadStocks()
    useEffect(()=>{
        setCartData(loadCart())
        
        
        
        

    },[reload])
    
    return(
      <div className='container'>
            <div style={{fontSize:"20px",fontWeight:"800",color:"#207398",textAlign:"center"}}><span style={{fontSize:"30px",color:"green"}}>Your Cart </span></div>
            <div style={{position:"relative",alignItems:"center",textAlign:"center"}}>{(curr_orders>curr_stock)?<div><button  className="btn btn-danger">we have only {curr_stock} biriyani's in stock please remove some items in cart</button></div>:<div><Link className="btn btn-primary" to="/placeorder">Proceed to purchase</Link></div>}</div> 
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