import React from 'react';
import Socks from './components/Socks'
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
      cart:0,
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
    }
  }
  updateCart= ()=>{
    this.setState((pre)=>({
      cart:pre.data.cart+=1
    }))
  }

  render() {
    return (
        <div>
          <Socks
              product={this.state.data}
              updateCart={this.updateCart}
          />
        </div>
    );
  }
}

export default App;
