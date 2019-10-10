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
    },
    premium:true
  }
  render() {
    return (
        <div>
          <SocksList
              product={this.state.data}
              premium={'premium'}
          />
          <SocksList
              product={this.state.data}
          />
        </div>
    );
  }
}

export default App;
