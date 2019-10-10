import React from 'react'
import './product_style.css'

export default class Socks extends React.Component{
    render() {
        const {product,blue,green, inStock,variants,details} = this.props.product
        return (
            <div className='product'>
                <div className='product-image'>
                    <img src={green} alt=""/>
                </div>
                <div className='product-info'>
                    <h1>{product}</h1>
                    {inStock ? <p>In Stock</p>:<p>Out of Stock</p>}
                    <ul>
                        {details.map((detail,index)=>
                                <li key={index}>{detail}</li>
                        )}
                    </ul>
                    <ul>
                        {variants.map((variant)=>(
                            <p key={variant.variantId}>{variant.variantColor}</p>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}