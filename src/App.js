import React from 'react';
import Socks from './components/Socks'
import blue from './assert/vmSocks-blue-onWhite.jpg'
import green from './assert/vmSocks-green-onWhite.jpg'


class App extends React.Component{
  state = {
    date :{
      product:'Socks',
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
    }
  }
  render() {
    return (
        <div>
          <Socks product={this.state.date} />
        </div>
    );
  }
}

export default App;
