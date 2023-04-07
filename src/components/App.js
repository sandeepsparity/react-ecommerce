import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/products/:id" component={ProductDetails} />
                    <Route path="/cart" component={ShoppingCart} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
            </main>
            <Footer />
        </>
    );
};

export default App;
