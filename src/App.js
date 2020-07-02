import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  constructor()
  {
      super();
      this.state={
          products:[
         {
          price:999,
          title:'Watch Phone',
          qty:1,
          img:'https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          id:1
         },
         {
          price:999,
          title:'Phone',
          qty:10,
          img:'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80',
          id:2
         },
         {
          price:999,
          title:'Phone',
          qty:1,
          img:'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80',
          id:3
         }
          ]


      }


  }
  handleIncreaseQuantity=(product)=>
  {
      console.log('hey plz increase the qty of',product)
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;
      this.setState({
          products:products
      })

  }
  handleDecreaseQuantity=(product)=>
  {
      console.log('hey plz increase the qty of',product)
      const {products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty==0)
          return;
      products[index].qty-=1;
      this.setState({
          products:products
      })

  }
  handleDeleteProduct=(id)=>{
      const{products}=this.state
      const items=products.filter((item)=>item.id!==id);
      this.setState({
          products:items
      })
  }
  getCartCount=()=>
  {
     const{products}=this.state;
     let count=0;
     products.forEach((product)=>{
        count+=product.qty;

     })
     return count;

  }
  getCartTotal=()=>{
      const {products}=this.state;
      let cartTotal=0;
      products.map((product)=>
      {
          cartTotal+=product.qty*product.price;
      });
      return cartTotal;

  }
  render()
  {
    const{products}=this.state;

  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <h1>Cart</h1>
      <Cart  
      products={products} 
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteQuantity={this.handleDeleteProduct}/>
      <div style={{padding:10,fontSize:20}}>Total: {this.getCartTotal()}</div>

    </div>
  );
  }
}

export default App;
