import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  constructor(){
    super()

    this.state = {
      pizzas: []
    }
  }

  componentDidMount() { 
    fetch(`http://localhost:3001/pizzas`)
    .then(res => res.json())
    .then(data => this.setState({pizzas: data}))
  }

  render() {
    const {pizzas} = this.state
    console.log(pizzas)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizzas.map(pizza => (
              <Pizza pizza={pizza}/>
            ))
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
