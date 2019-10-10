import React from 'react'
import './product_style.css'

export default class Socks extends React.Component{
    state = {
        color:'green'
    }
    changeImage =(color)=>{
        this.setState((preCurrent)=>({
            color:preCurrent.color = color
        }))
    }
    render() {
        const {product,blue,green, inStock,variants,details,cart,brand} = this.props.product
        const {updateCart} = this.props

        return (
            <div className='product'>
                <div className='product-image'>
                    <img src={this.state.color ==='green' ? green:blue } alt=""/>
                </div>
                <div className='product-info'>
                    <h1>{`${brand}  ${product}`}</h1>
                    {inStock ? <p>In Stock</p>:<p>Out of Stock</p>}
                    <ul>
                        {details.map((detail,index)=>
                                <li key={index}>{detail}</li>
                        )}
                    </ul>
                    <div>
                        {variants.map((variant)=>(
                            <div className='color-box' style={{background:variant.variantColor}} onMouseOver={()=>this.changeImage(variant.variantColor)} key={variant.variantId}/>
                        ))}
                    </div>
                    <button onClick={()=>updateCart()}>
                        Add to cart
                    </button>
                    <div className='cart'>
                        <p>Cart({cart})</p>
                    </div>
                </div>
            </div>
        );
    }
}