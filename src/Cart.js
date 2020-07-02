import React from 'react';
import CardItem from './CardItem';
const Cart =(props)=>{
  
   
        const{products}=props;
        
        return (
            <div className="cart">
            {products.map((product)=>{

                return (
                    <CardItem 
                    product={product} 
                    key={product.id} 
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteQuantity={props.onDeleteQuantity}
                    />)
            })}
            

            </div>
            
            );
   
}



export default Cart;