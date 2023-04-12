import { getShoppingCart } from "../utiliti/fakedb";

 const productsAndCartData = async() =>{

  const productsData = await fetch('/data.json')
  const products = await productsData.json();
  const savedCart = getShoppingCart();
  // console.log(products,savedCart)

  let cartArray = [];
  for(const id in savedCart){
    const foundProduct= products.find(product => product.id === id)
    if(foundProduct){
     foundProduct.quantity = savedCart[id]
     cartArray.push(foundProduct)
    }
   }
   return {cartArray,products};
}

export  {productsAndCartData};