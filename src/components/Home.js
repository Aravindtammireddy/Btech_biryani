import React from 'react'
import CardHelper from './Card'
import { Link } from 'react-router-dom'
import products from './product'
// export default function Home() {
//   return (
    
//     <div className="container">
//       <div className="row offset">
//         {products.map((item)=>{
//           return (<div className="col-md-3" key={item.id}><CardHelper props={item}/></div>)
//         })}
//       </div>
//     </div>
//   )
// }
// import React, { useState, useEffect } from "react";
// import "../styles.css";
// import { API } from "../backend";
// import Base from "./Base";
// import Card from "./Card";
// import { getProducts } from "./helper/coreapicalls";
// import { isAutheticated } from "../auth/helper";

export default function Home() {
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false);

  // const loadAllProduct = () => {
  //   getProducts().then(data => {
  //     if (data.error) {
  //       setError(data.error);
  //     } else {
  //       setProducts(data);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   loadAllProduct();
  // }, []);

  return (
    
      <div className='container' style={{marginTop:""}}>
        <div style={{fontSize:"30px",fontWeight:"800",color:"#207398",textAlign:"center"}}><span style={{fontSize:"30px",color:"green"}}>Welcome </span><span>!! to BTech Biryani </span></div>
        <div className="row">
          {products.map((product, index) => {
            product["addtoCart"]=true;
            product["removeFromCart"]=false;
            return (
              <div key={index} className="col-md-4 p-0 m-0">
                <CardHelper props={product}/>
                {/* {product.name} */}
              </div>
            );
          })}
        </div>
      </div>
    
  );
}

