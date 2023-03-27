import React ,{useState} from 'react'
import { db } from '../Firebase'
import { Table } from 'reactstrap';
import { collection, updateDoc,doc } from 'firebase/firestore';

export default function OrderCard({order}) {
    const [delivered,setDelivered]=useState(order.progress)
    function done(){
        
        updateDoc(doc(db,"orders",order.id),{progress:!delivered})
                  .then((ref)=>{})
                  setDelivered(!delivered);


    }
    var total=0;
    for (var i=0;i<order['items'].length;i++){
        var temp=order['items'][i];
        total+=temp['quantity']*temp['price']
    }
  return (
    <div className="container mt-4" style={{borderRadius:"20px",fontSize:"18px",fontWeight:"500"}}>
         <div className="row" style={{alignItems:"center"}}>
                <div className="col-12 col-md-4" style={{backgroundColor:`${delivered?"lightgreen":"white"}`,border:"1px solid black",borderRadius:"20px"}}>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",}}><div style={{fontWeight:"700",color:"red"}}>{order.hostel}</div><div>{order.name}</div></div>
                    <div style={{textAlign:"center"}}>{order.phone}</div>
                    <div>
                            <Table hover>
                                <thead>
                                    <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                    <th>
                                        Cost/pack
                                    </th>
                                    <th>
                                        Total
                                    </th>
                                    </tr>
                        </thead>
                        <tbody>
                        {order['items'].map((item=>{return (<tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity*item.price}</td>

                        </tr>)}))}
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Sub Total</td>
                            <td>{total}</td>
                        </tr>
                        </tbody>
                        </Table>
                    </div>
                    <div style={{marginBottom:"10px",marginLeft:"37%"}}><button className='btn btn-primary' onClick={done}>Delivered</button></div>
                 </div>
                 
             </div>
     </div>
  )
}
