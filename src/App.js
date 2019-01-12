import React, { Component } from 'react'
import MainCarousel from '../src/components/MainCarousel'
import Header from '../src/components/Header'
import TopContent from '../src/components/TopContent'
import MainContent from '../src/components/MainContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainCarousel />
        <Header />
        <TopContent title="History in the making" />
        <MainContent />
      </div>
    );
  }
}

export default App
