import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Cart from './components/Cart';
import BuyDish from './components/BuyDish';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import AllOrders from './components/AllOrders';
import { HashRouter , BrowserRouter,Switch,Route, Link, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import PlaceOrder from './components/PlaceOrder';
import OrderConfirmation from './components/OrderConfirmation';
import { updateDoc ,doc} from 'firebase/firestore';
import { db } from './Firebase';

function App() {
      const Test=()=>{
            const handleClick=()=>{
                  updateDoc(doc(db,"test","pm5F4HFFdyJT5sa65g2N"),{value:"kumar"})
                  .then((ref)=>{console.log("updates")})
            }
            return (<div style={{margin:"30% 20%"}}><button onClick={handleClick}>test</button></div>)
      }
 return ( <div>
   <div style={{backgroundColor:"yellow","textAlign":"center",fontSize:"20px",fontWeight:"700"}}><div>Contact Us <span>8688185437</span></div></div>
      <NavBar/>
      <HashRouter>
            <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/orderconfirmation" component={OrderConfirmation}/>
                  <Route path="/allorders" component={AllOrders}/>
                  <Route path="/cart" component={Cart}/>
                  <Route path="/placeorder" component={PlaceOrder}/>
                  <Redirect to="/home"/>
                  
            </Switch>
      </HashRouter>
  </div>)
}

export default App;
