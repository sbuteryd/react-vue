import React from 'react'
import './product_style.css'

export default class Socks extends React.Component{
    render() {
        const {product,blue,green} = this.props.product
        return (
            <div className='product'>
                <div className='product-image'>
                    <img src={green} alt=""/>
                </div>
                <div className='product-info'>
                    <h1>{product}</h1>
                </div>
            </div>
        );
    }
}