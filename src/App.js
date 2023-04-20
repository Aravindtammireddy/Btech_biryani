import './App.css';
import { useState } from 'react';
import Cart from './components/Cart';
import Home from './components/Home';
import AllOrders from './components/AllOrders';
import { HashRouter , BrowserRouter,Switch,Route, Link, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import PlaceOrder from './components/PlaceOrder';
import OrderConfirmation from './components/OrderConfirmation';
import { updateDoc ,doc} from 'firebase/firestore';
import {GlobalProvider} from './context/Globalstate';

function App() {
     
 return ( <div>
   
   <div style={{backgroundColor:"yellow","textAlign":"center",fontSize:"20px",fontWeight:"700"}}><div>Contact Us: <span>93447 99429</span></div></div>
   <div style={{backgroundColor:"yellow","textAlign":"center",fontSize:"22px",fontWeight:"800"}}><div>Our Stall is live at NSO Ground</div></div>

   {/* <div id="updates">Hello</div> */}
   <GlobalProvider >
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
      </GlobalProvider>
  </div>)
}

export default App;
