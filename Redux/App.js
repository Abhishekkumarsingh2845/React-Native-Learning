import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
 
import CartScreen from  './CartScreen';

const App=()=>
    {
        <Provider store={store}>
            <CartScreen/>
        </Provider>
    }
     

    