import React, { Component } from 'react';
import './SlickMin.css';
import './App.css';
import './main.css';
import './about.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Finance from './components/Finance/Finance';
import Services from './components/Services/Services';
import Career from './components/Career/Career';
import ErrorPage from './components/404/404';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/products' component={Products}/>
            <Route path='/finance' component={Finance} />
            <Route path='/services' component={Services} />
            <Route path='/career' component={Career} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={ContactUs} />
            
            <Route component={ErrorPage} />

            
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
