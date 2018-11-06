import React, {Component} from 'react';
import PreviewCardComponent from './RestaurantCard';
import './index.css';

export default class PreviewSectionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsDefault: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/')
    .then(resp => resp.json())
    .then(restaurant => this.setState({restaurantsDefault: restaurant}))
  }

  render(){
    return(
      <section className="preview--wrapper">
        <h1 className="preview-heading__size preview-heading__color">See The Best Restaurant In Your Area</h1>
        <div className="card-wrapper">
          { this.state.restaurantsDefault.map(restaurant => {
            return(
            <PreviewCardComponent
              restaurantName={restaurant.name}
              phone={restaurant.phone}
              location={restaurant.location.address1 + " " + restaurant.location.city}
              image={restaurant.image}
            />)
          })}
        </div>
      </section>
    );
  }
}