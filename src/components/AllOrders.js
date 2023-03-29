import React,{useEffect, useState ,  useContext } from 'react';
import OrderCard from './OrderCard';
import { Globalcontext } from '../context/Globalstate';

export default function AllOrders() {
  const {orders ,getorders } = useContext(Globalcontext);
  const [order, setorder] = useState([]);
  useEffect(()=>{ 
    
    async function fun () {
    const result = await getorders();
    setorder(result);
    console.log(`called`, result , orders);
  }
  fun();}

  ,[]);
  
  console.log(orders,"orders")

  return (
    <div className="container-fluid">
      <div className="row">
        
        {order.map((eachOrder)=>{
          return (<OrderCard  id = {eachOrder._id} key={eachOrder._id} order={eachOrder} setorder={setorder} stateOrder={order}/>)
        })
        }
     
      
      </div>
      {/* {allOrderDetails.map((item)=>{ return (<div key={item.hostel}>{item.hostel}</div>)})} */}

    </div>
  )
}
