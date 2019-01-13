import React, { Component } from 'react'
import MainCarousel from '../src/components/MainCarousel'
import Header from '../src/components/Header'
import TopContent from '../src/components/TopContent'
import MainContent from '../src/components/MainContent'
import Events from '../src/components/Events'
import Footer from '../src/components/Footer'
import BookingForm from '../src/components/BookingForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainCarousel />
        <Header />
        <TopContent title="History in the making" />
        <BookingForm />
        <MainContent title="Hollywood, meet industrial chic" />
        <Events title="This month’s most anticipated events" />
        <Footer />
      </div>
    );
  }
}

export default App
