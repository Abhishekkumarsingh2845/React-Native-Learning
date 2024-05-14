import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/store';
 
import CartScreen from  './Redux/CartScreen';

const App=()=>
    {
        <Provider store={store}>
            <CartScreen/>
        </Provider>
    }


    export default App;