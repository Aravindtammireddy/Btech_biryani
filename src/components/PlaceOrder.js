import React,{ChangeEvent , useState} from 'react'
import { db } from '../Firebase';
import { addDoc, collection } from "firebase/firestore"; 
import { storage } from "../Firebase";
import { ref, uploadBytesResumable ,  uploadString, getDownloadURL } from "firebase/storage";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Col} from 'reactstrap'
import BillDetails from './BillDetails';
import { loadCart } from './Helpers';
import { Redirect } from 'react-router';
import { cartEmpty } from './Helpers';
export default function PlaceOrder() {
  const [reload,setReload]=useState(false)
    const [values, setValues] = useState({
        name: "",
        hostel:"Aqua A",
        phone:""
        
      });
      const cartData=loadCart();
      const { name, hostel,phone } = values;
      const [file, setFile] = useState("");
      
      const [percent, setPercent] = useState(0);
     
      const handleUpload = () => {
        if (!file) {
          alert("Please upload an image first!");
        }
      const storageRef = ref(storage, `/files/${values.phone}`);
        
                // progress can be paused and resumed. It also exposes progress updates.
                // Receives the storage reference and the file to upload.
       const uploadTask = uploadBytesResumable(storageRef, file);
       uploadString(storageRef, values).then((snapshot) => {
        console.log('Uploaded a raw string!');
      });
        uploadTask.on(
        "state_changed",
       (snapshot) => {
       const percent = Math.round(
       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
        
                        // update progress
      setPercent(percent);
       },
        (err) => console.log(err),
       () => {
                        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
        });
     }
      );
       };
        

      const handlefilechange = (e) => {
         setFile(e.target.files[0]);
      }

      const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };

      
      const onSubmit = async event => {
        event.preventDefault();
        handleUpload();
        console.log( {...values,["items"]:cartData})
        try {
          const docRef = await addDoc(collection(db, "orders"), {...values,["items"]:cartData,progress:false});
          setReload(!reload)
          cartEmpty()
          
        
        } catch (e) {
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
        <Input type="text" name="name" id="name" placeholder="name" style={{padding:"1.3vmax"}} onChange={handleChange}  value={name}/>
      </FormGroup>
      <FormGroup row>
    <Label for="hostel" sm={2}>Hostel</Label>
    <Col sm={10}>
      <Input id="hostel" name="hostel" type="select" onChange={handleChange} value={hostel}>
        <option>
          Aqua A
        </option>
        <option>
          Aqua B
        </option>
        <option>
          Zircon A
        </option>
        <option>
          Zircon B
        </option>
        <option>
          Zircon C
        </option>
      </Input>
    </Col>
  </FormGroup>
  <FormGroup>
    <Label for="phone">
      Ph. number
    </Label>
    <Input
      id="phone"
      name="phone"
      placeholder="phone number"
      type="tel"
      value={phone}
      onChange={handleChange}

    />
  </FormGroup>
  <FormGroup>
       <Label for="qr">pay using this qr code</Label>
       <div><img id="qr" style={{height:"80%",  width:"80%"}} src = 'qr1.JPG' alt = "qr code for payment"></img>
       <p>Your CRN 483499734 
Account Number 8345637677 
IFSC Code KKBK0007889 
UPI Handle btechbiriyani@ybl</p></div>
  </FormGroup>
  <FormGroup>
       <Label for="proof">please upload your payment screenshot</Label><br></br>
       <input type="file" id="proof" onChange={e => handlefilechange(e)} />
  </FormGroup>

      <br></br>
      <br></br>
      <div className="row">
        <Button type="submit" className="col-6 col-md-4 offset-1 offset-md-0 " style={{backgroundColor:"#585BEF",fontSize:"20px",textAlign:"center",margin:"auto"}} >Place The Order</Button><br></br>
      </div>
      
    </Form>
    </div>
  )
}
