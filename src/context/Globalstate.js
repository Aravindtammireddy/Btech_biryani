import React, { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';
 const intialstate = {
    orders : [],
    stock :  []
}

 export const Globalcontext = createContext(intialstate);

 export const GlobalProvider = ({children}) => {
     const [state,dispatch] = useReducer(AppReducer , intialstate);

     async function getorders(){
      try {
         const res = await axios.get('https://btech-biryani-server.onrender.com/api/v1/orders');
         console.log(res.data)
         dispatch ({
            type : "GET_ORDERS" ,
            payload: res.data
         })
         return res.data
      }
         catch(er){
            console.log(er);
         } 
     }

     async function getstock(name){
      try {
         const res = await axios.get(`https://btech-biryani-server.onrender.com/api/v1/stocks/${name}`);
         return res.data
      }
         catch(er){
            console.log(er);
         } 
     }

     async function delelteorder(_id){
      try {
         console.log(_id);
         await axios.delete(`https://btech-biryani-server.onrender.com/api/v1/orders/${_id}`);
         dispatch({
            type : 'DELETE_ORDER',
            payload : _id
         });
        }
         catch(er){   console.log(er);  } 
      }
             

     async function addorder(order){
      try {
        
         await axios.post(`https://btech-biryani-server.onrender.com/api/v1/orders`,order);
         dispatch({
            type : 'ADD_ORDER',
            payload : order
         });
        }
         catch(er){   console.log(er);  } 
       
}

      async function updateprogress(_id,progress){
         try{
               await axios.put(`https://btech-biryani-server.onrender.com/api/v1/orders/updateprogress/${_id}`,{progress:progress})
         }
         catch(er){
            console.log(er)
         }
      }
    
     return (
        <Globalcontext.Provider value = {{ 
            orders : state.orders,
            getorders,
            delelteorder ,
            getstock, 
            addorder,
            updateprogress
            }}>
            {children}
        </Globalcontext.Provider>
     )
 }

