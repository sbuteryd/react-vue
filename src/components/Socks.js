import React from 'react'
import './product_style.css'
import FlavorForm from '../components/Productreview'
class SocksList extends React.Component{
    state = {
        color:'green',
        id:'',
    }
    changeImage =(color,id)=>{
        this.setState((preCurrent)=>({
            color:preCurrent.color = color,
            id:preCurrent.id = id
        }))
    }

    render() {
        const {product,blue,green, inStock,variants,details,brand} = this.props.product
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
                                     ()=>this.changeImage(variant.variantColor,variant.variantId)
                                 }
                                 key={variant.variantId}
                            >
                            </div>
                        ))}
                        <button  disabled={this.state.color ==='blue'} style={{background: this.state.color ==='blue' ? '#f1f1f1':'#1E95EA'}} onClick={()=>this.props.updateCart(this.state.id)}>
                            Add to cart
                        </button>
                    </div>
                </div>
                <FlavorForm/>
            </div>
        );
    }
}
export default SocksList