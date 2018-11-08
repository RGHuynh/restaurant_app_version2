import React, {Component} from 'react';
import ImageContainer from './ImageContainer';
import './index.css';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.setImageContainer = this.setImageContainer.bind(this);
    this.state = {
      images: []
    }
  }
  
  componentDidMount() {
    fetch("http://localhost:3001/restaurant")
    .then(response => response.json())
    .then(restaurantPhotos => {
      this.setState({
        images: restaurantPhotos
      })
    })
  }

  setImageContainer() {
    let imageContainer = this.state.images.map(image => {
      let index = this.state.images.indexOf(image)
      return(<ImageContainer imageUrl={image} imageId={"restaurant-image" + index}/>)
    })
    return imageContainer
  }

  render(){
    return(
      <header className="section restaurant-header-wrapper">
        {this.setImageContainer()}
      </header>
    );
  }
}