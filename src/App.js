import React, { Component } from 'react';
import HeaderComponent from './components/Header';
import PreviewSectionComponent from './components/SectionPreview';
import Landing from './components/Pages/Landing';
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
