import React, { Component } from 'react';
import ShopList from './ShopList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="Header">
          <p>ShoppingList</p>
        </div>

        <div className="Container">
          <ShopList></ShopList>
        </div>

      </div>
    );
  }
}

export default App;
