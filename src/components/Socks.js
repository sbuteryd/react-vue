import React from 'react'
import './product_style.css'
import PropTyles  from 'prop-types'

class SocksList extends React.Component{
    state = {
        color:'green',
        cart:0
    }
    changeImage =(color)=>{
        this.setState((preCurrent)=>({
            color:preCurrent.color = color
        }))
    }
    updateCart= ()=>{
        this.setState((pre)=>({
            cart:pre.cart+=1
        }))
    }
    render() {
        const {product,blue,green, inStock,variants,details,cart,brand} = this.props.product
        return (
            <div className='product'>
                <div className='product-image'>
                    <img src={this.state.color ==='green' ? green:blue } alt=""/>
                </div>
                <div className='product-info'>
                    <h1>{`${brand}  ${product}`}</h1>
                    {inStock ? <p>In Stock</p>:<p>Out of Stock</p>}
                    <p>Shipping: {this.props.premium ? 'Free':'2.99'}</p>
                    <ul>
                        {details.map((detail,index)=>
                                <li key={index}>{detail}</li>
                        )}
                    </ul>
                    <div>
                        {variants.map((variant)=>(
                            <div className='color-box'
                                 style={{background:variant.variantColor}}
                                 onMouseOver={
                                     ()=>this.changeImage(variant.variantColor)
                                 }
                                 key={variant.variantId}
                            />
                        ))}
                    </div>
                    <button onClick={()=>this.updateCart()}>
                        Add to cart
                    </button>
                    <div className='cart'>
                        <p>Cart({this.state.cart})</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default SocksList