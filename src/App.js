import React, { Component, Fragment} from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {


  state = {
    pizzas: []
  }

  componentDidMount() { 
    fetch(`http://localhost:3001/pizzas`)
    .then(res => res.json())
    .then(data => this.setState({pizzas: data}))
  }

  getPizzaId(id) {
    console.log(id)
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm />
        <PizzaList pizzas={this.state.pizzas} getPizzaId={this.getPizzaId}/>
      </Fragment>
    );
  }
}

export default App;
