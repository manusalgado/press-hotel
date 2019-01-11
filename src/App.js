import React, { Component } from 'react'
import MainCarousel from '../src/components/MainCarousel'
import Header from '../src/components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainCarousel />
        <Header />
      </div>
    );
  }
}

export default App
