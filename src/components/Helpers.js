export const addItemToCart = (item, next) => {
  item["iscart"]=true;
  item["quantity"]=1;
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({
        ...item,
        count: 1
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      next();
    }
  };
  
  export const loadCart = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
          // console.log(JSON.parse(localStorage.getItem("cart")))
        return JSON.parse(localStorage.getItem("cart"));
      }
      else{
        return []
      }
    }
  };
  
  export const removeItemFromCart = productId => {
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product.id === productId) {
          cart.splice(i, 1);
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
  };
  
  export const cartEmpty = () => {
    if (typeof window !== undefined) {
      localStorage.setItem("cart", JSON.stringify([]));
      
    }
  };

  export const alreadyExistInCart=(productId)=>{
    if(typeof window!=undefined){
        if(localStorage.getItem('cart')){
            const cart=JSON.parse(localStorage.getItem("cart"));
            const cartFiltered=cart.filter((each)=>{
                return (each.id==productId)})
            if (cartFiltered.length!==0){
                    console.log(cartFiltered)
                    return true
                }
                return false
            
        }
        

            
        
        
    }
    
  }
  

  export const increaseQuantity=(id)=>{
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
    }
    for (var i=0;i<cart.length;i++){
      if (cart[i]['id']==id){
        cart[i]["quantity"]+=1
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  export const decreaseQuantity=(id)=>{
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
    }
    for (var i=0;i<cart.length;i++){
      if (cart[i]['id']==id){
        if (cart[i]['quantity']>1){
          cart[i]["quantity"]-=1
        }
        
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }