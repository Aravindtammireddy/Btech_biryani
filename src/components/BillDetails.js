import React from 'react'
import { loadCart } from './Helpers'
import { Table } from 'reactstrap';
export default function BillDetails() {
    const cartDetails=loadCart();
    var total=0;
    for (var i=0;i<cartDetails.length;i++){
        var temp=cartDetails[i];
        total+=temp['quantity']*temp['price']
    }
  return (
    <div className="container-fluid">
        <p className="form-heading" style={{fontWeight:"700",fontSize:"2vmax",color:"#585BEF",textAlign:"center"}}>Bill Details</p>

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
                Cost per pack
            </th>
            <th>
                Total
            </th>
            </tr>
  </thead>
  <tbody>
  {cartDetails.map((item=>{return (<tr key={item.id}>
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
  )
}
