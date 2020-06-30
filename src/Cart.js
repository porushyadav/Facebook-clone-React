import React from 'react';
import CardItem from './CardItem';
class Cart extends React.Component{
    constructor()
    {
        super();
        this.state={
            products:[
           {
            price:999,
            title:'Watch Phone',
            qty:1,
            img:'',
            id:1
           },
           {
            price:999,
            title:'Phone',
            qty:10,
            img:'',
            id:2
           },
           {
            price:999,
            title:'Phone',
            qty:1,
            img:'',
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
    render()
    {
        const{products}=this.state;
        return (
            <div className="cart">
            {products.map((product)=>{

                return (
                    <CardItem 
                    product={product} 
                    key={product.id} 
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteQuantity={this.handleDeleteProduct}
                    />)
            })}
            

            </div>
            
            );
    }
}



export default Cart;