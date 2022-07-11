import React, { Component } from 'react';
import Header from './componets/Header/Header';
import Footer from './componets/Footer';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProducScreen from './screens/ProductScreen/ProducScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

const App = () => {

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id?' component={ProducScreen} />

        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/Login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />

      </main>
      <Footer />
    </Router >




  )
}

export default App;
