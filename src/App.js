import React, { Component } from 'react';
import HeaderComponent from './components/headercomponent/headercomponent';
import PreviewSectionComponent from './components/previewSectionComponent/previewSectionComponent';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <HeaderComponent />
            <PreviewSectionComponent />
        </div>
    );
  }
}

export default App;
