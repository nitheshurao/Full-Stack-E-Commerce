import React, { Component } from 'react';
import Header from './componets/Header/Header';
import Footer from './componets/Footer';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProducScreen from './screens/ProductScreen/ProducScreen';

const App = () => {

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id?' component={ProducScreen} />
      </main>
      <Footer />
    </Router >




  )
}

export default App;
