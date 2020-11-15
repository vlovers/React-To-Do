import React from 'react';
import {Route} from 'react-router-dom'
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import WithRestoService from '../hoc';

const App = ({RestoService}) => {
    
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Route exact path={`/`}>
                <MainPage/>
            </Route>
            <Route path={`/cart`}>
                <CartPage/>
            </Route>
            
            
        </div>
    )
}

export default WithRestoService()(App);