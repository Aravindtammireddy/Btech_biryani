import React,{ChangeEvent ,useEffect, useState , useContext } from 'react';
import { Globalcontext } from '../context/Globalstate';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import BillDetails from './BillDetails';
import { loadCart } from './Helpers';
import { Redirect } from 'react-router';
import { cartEmpty } from './Helpers';
import {socket} from './Socket'

export default function PlaceOrder() {
  const {getstock} = useContext(Globalcontext);
  //const [stock, setstock] = useState({"dum":30 , "fry":30});
  const [curr_stock_dum,setCurr_Stock_Dum]=useState(0)
  const [curr_stock_fry,setCurr_Stock_Fry]=useState(0)
  // let curr_stock_dum  =0;
  // let curr_stock_fry = 0
  let ordered_stock_dum=0
  let ordered_stock_fry=0;
  useEffect(()=>{
    async function fun () {
       var cur_stock_dum = await getstock("dum");
       var cur_stock_fry = await getstock("fry");
       setCurr_Stock_Dum(cur_stock_dum[0].quantity)
       setCurr_Stock_Fry(cur_stock_fry[0].quantity)
      

    }

    fun();   
  },[])
  const [reload,setReload]=useState(false)
    const [values, setValues] = useState({
        name: "",
        hostel:"",
        phone:""
        
      });
      var curr_orders=  0;
      const {addorder} = useContext(Globalcontext);
      const cartData=loadCart();
      const { name, hostel,phone } = values;
      const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };
     
      for (var i=0;i<cartData.length;i++){
        
        if (cartData[i].category=="dum"){
          ordered_stock_dum+=(cartData[i].count *cartData[i].quantity)

        }
        else if (cartData[i].category=="fry"){
          ordered_stock_fry+=(cartData[i].count *cartData[i].quantity)
        }
      }

      
      
      const onSubmit = async event => {

        event.preventDefault();
       
       let time  = (event.target[`radio1`].value)
       let ID = (event.target[`proof`].value)
       event.target['button'].disabled=true;
       
        const neworder = {
              name : values.name,
              hostel : values.hostel,
              phonenumber : values.phone,
              slot : time,
              transactionID : ID,
              items :cartData

        }
        try {
          
          
          let remaining_stock_dum = curr_stock_dum - ordered_stock_dum
          let remaining_stock_fry = curr_stock_fry - ordered_stock_fry
          
          if(remaining_stock_dum<0 || remaining_stock_fry< 0){
            alert(`your order is more than availability please check and order again`)
          }
          else{
           socket.emit("stockchange",[{name:"dum",count: remaining_stock_dum} , {name:"fry",count: remaining_stock_fry}]);
          await addorder(neworder)
          setReload(!reload)
          cartEmpty()
        } }catch (e) {
          console.error("Error adding document: ", e);
        }
        
    }
  return (
    <div className="  offset-md-3 col-12 col-md-6">
      {reload?<Redirect to="orderconfirmation"/>:<span></span>}
        <div style={{}}> 
            <BillDetails/>
        </div>
        <Form   onSubmit={onSubmit}> 
        <p className="form-heading" style={{fontWeight:"700",fontSize:"2vmax",color:"#585BEF",textAlign:"center"}}>Your details</p>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" required id="name" placeholder="name" style={{padding:"1.3vmax"}} onChange={handleChange}  value={name}/>
      </FormGroup>
      <FormGroup>
        <Label for="hostel">Hostel</Label>
        <Input type="text" name="hostel" required id="hostel" placeholder="hostel" style={{padding:"1.3vmax"}} onChange={handleChange}  value={hostel}/>
      </FormGroup>
      
  <FormGroup>
    <Label for="phone">
      Ph. number
    </Label>
    <Input
      id="phone"
      name="phone"
      required
      placeholder="phone number"
      type="tel"
      value={phone}
      onChange={handleChange}
    />
  </FormGroup>
  <legend>select a time slot to deliver</legend>
  <FormGroup check>
      <Input
         required
        name="radio1"
        type="radio"
        value="7:000pm"
      />
      {' '}
      <Label check>
        7:00PM
      </Label>
    </FormGroup>
  <FormGroup check>
      <Input
         required
        name="radio1"
        type="radio"
        value="7:30PM"
      />
      {' '}
      <Label check>
      7:30PM
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
         required
        name="radio1"
        type="radio"
        value="8:00PM"
      />
      {' '}
      <Label check>
      8:00PM
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
         required
        name="radio1"
        type="radio"
        value="8:30PM"
      />
      {' '}
      <Label check>
       8:30PM
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
         required
        name="radio1"
        type="radio"
        value="9:00PM"
      />
      {' '}
      <Label check>
       9:00PM
      </Label>
    </FormGroup>
  <FormGroup>
       <Label for="qr">pay using this qr code</Label>
       <div><img id="qr" style={{height:"80%",  width:"80%"}} src = 'qr2.jpeg' alt = "qr code for payment"></img>
       <p> Account Number 8688185437 
           UPI Handle porikanithyanand@ybl</p></div>
  </FormGroup>

  <FormGroup>
       <Label for="proof">please enter your transactionID</Label><br></br>
       <input type="text" required name="proof" id='proof'  />
  </FormGroup>

      <br></br>
      <br></br>
      <div className="row">
        <Button type="submit" name="button" className="col-6 col-md-4 offset-1 offset-md-0 " style={{backgroundColor:"#585BEF",fontSize:"20px",textAlign:"center",margin:"auto"}} >Place The Order</Button><br></br>
      </div>
      
    </Form> 
  
    </div>
  )
}
