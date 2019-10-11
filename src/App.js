import React from 'react';
import SocksList from './components/Socks'
import blue from './assert/vmSocks-blue-onWhite.jpg'
import green from './assert/vmSocks-green-onWhite.jpg'


class App extends React.Component{
  state = {
    data :{
      product:'Socks',
      brand:'Vue Mastery',
      blue:blue,
      green:green,
      inStock: true,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green'
        },
        {
          variantId: 2235,
          variantColor: 'blue'
        }
      ]
    },
    premium:true,
    cart:[]
  }
  updateCart= (variantId)=>{
    this.setState((pre)=>({
      cart:pre.cart.concat([variantId])
    }))
  }
  render() {
    console.log('render',this.state.cart)
    return (
        <div>
          <div className='cart'>
            <p>Cart({this.state.cart.length})</p>
          </div>
          <SocksList
              product={this.state.data}
              premium={'premium'}
              updateCart={this.updateCart}
          />
        </div>
    );
  }
}

export default App;
