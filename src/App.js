import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { 
  Home, 
  About, 
  Cart, 
  Checkout, 
  Error, 
  Products,
  PrivateRoute,
} from './pages';
import AuthWrapper from './pages/AuthWrapper';
import Product from './Product';



function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar/>
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/products">
            <Products/>
          </Route>
          
        <Route exact path='/:productID' >
          <Product/>
        </Route>
            <PrivateRoute exact path='/checkout'>
              <Checkout />
            </PrivateRoute>
          
          <Route exact path="*">
            <Error/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </AuthWrapper>
  )
}

export default App
