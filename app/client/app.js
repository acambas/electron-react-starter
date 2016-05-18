import React from 'react';
import {render} from 'react-dom';
import MainPage from './containers/mainPage';
var test = window.require('../system/test');

test();

render(<MainPage />, document.getElementById('app'));
console.log('neki test');


