import React, { Component } from 'react';
import Header from './componets/Header/Header';
import Footer from './componets/Footer';
import { Container } from 'react-bootstrap'
import './index.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeScreen />
        <Footer />
      </div>
    );
  }
}

export default App;
