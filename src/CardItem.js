import React from 'react';

class CartItem extends React.Component{

  
   
    render()
    {
        const {price,title,qty}=this.props.product;
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteQuantity}=this.props;
        return (


            <div className="cart-item">
            <div className="left-block">
            <img style={styles.image}/>
            </div>
            <div className="right-block">
            <div style={{fontSize:25}}>{title}</div>
            <div  style={{color:'#777'}}>Rs {price}</div>
            <div  style={{color:'#777'}}> Qty {qty} : </div>
            <div className="cart-item-actions">
            <img 
                alt="increase" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/864/864378.svg"
                onClick={()=>onIncreaseQuantity(product)}
                />
               <img
                alt="decrease" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/864/864373.svg"
                onClick={()=>onDecreaseQuantity(product)}

                />
                <img 
                alt="delete" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/3096/3096673.svg"
                onClick={()=>onDeleteQuantity(product.id)}
                />

             {/* Buttons */}
            </div>
            
            </div>       
            </div>

        );
    }
}

const styles={
    image:{

        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'


    }
}

export default CartItem;