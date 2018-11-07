import React, {Component} from 'react';
import './Landing.css';

export default class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurantsDefault: []
    }
  }

  componentDidMount() {
      fetch('/')
      .then(restaurants => this.setState({restaurantsDefault: restaurants}))
  }


  render(){
    return(
      <div>

      </div>
    );
  };
};

