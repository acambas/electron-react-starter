import React from 'react';
import {render} from 'react-dom';
import MainPage from './containers/mainPage';
import {Provider} from 'react-redux';
import createReduxStore from './redux';

const test = window.require('../system/test');
test();

const store = createReduxStore();

render(
    <Provider store={store}>
        <MainPage />
    </Provider>
    , document.getElementById('app'));
