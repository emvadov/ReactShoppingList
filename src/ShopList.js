import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ShopList extends Component {

    

    state = {

        title: '',
        quantity: '',
        price: '',
        description: ''

        
        }

  render() {
    return (
      
        <div className="Shopping-List">

        <div className="LHeader">
            <p>Add Your Items Here</p>


        </div>
        
        <div className="LContainer">

             <form onSubmit={this.handleSubmit}>
                
                
                <input type="checkbox" value="{this.state.value}" onChange={this.handleChange} />
                <input type="text" value="Add Item" onChange={this.handleChange} />
                
            </form>

        </div>

        
        </div>



    );
  }
}

export default ShopList;