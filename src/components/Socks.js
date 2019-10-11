import React from 'react'
import './product_style.css'
class SocksList extends React.Component{
    state = {
        color:'green',
        id:''
    }
    changeImage =(color,id)=>{
        this.setState((preCurrent)=>({
            color:preCurrent.color = color,
            id:preCurrent.id = id
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
                                     ()=>this.changeImage(variant.variantColor,variant.variantId)
                                 }
                                 key={variant.variantId}
                            >
                            </div>
                        ))}
                        <button onClick={()=>this.props.updateCart(this.state.id)}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default SocksList