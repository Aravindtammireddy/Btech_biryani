import React,{useEffect, useState} from 'react'
import { db } from '../Firebase';
// import { collection, getDocs } from "firebase/firestore"; 
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getDocs } from 'firebase/firestore';
import OrderCard from './OrderCard';
import { set } from 'firebase/database';
export default function AllOrders() {
  const [allOrderDetails,setAllOrderDetails]=useState([
]
)

  const getData=async ()=>{
  const querySnapshot = await getDocs(collection(db, "orders"));
  var temp_currOrderDetails=[]
querySnapshot.forEach((doc) => {
  // doc.data()['id']=doc.id;
  var temp=doc.data()
  temp['id']=doc.id;
  // if(temp.progress == "false"){
  // temp_currOrderDetails.push(temp);
  // }
   temp_currOrderDetails.push(temp);

}



)

setAllOrderDetails(temp_currOrderDetails)

}

getData()
// console.log(allOrderDetails)
  return (
    <div className="container-fluid">
      <div className="row">
        
        {allOrderDetails.map((order)=>{
          return (<OrderCard  id = {order.id} key={order.id} order={order}/>)
        })
        }
      
      </div>
      {/* {allOrderDetails.map((item)=>{ return (<div key={item.hostel}>{item.hostel}</div>)})} */}

    </div>
  )
}
