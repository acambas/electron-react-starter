import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './style.css';
import React from 'react';
import DevTools from '../../redux/DevTools';
import Counter from '../counter'

const devToolsRender = () => {
	if(process.env.NODE_ENV === 'development'){
		return <DevTools />
	}
}

class component extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return <div id="mainPage" className="container">
            {devToolsRender()}
           <h1>Electron React Redux app packed with webpack</h1>
           <Counter />
           
        </div>
    }
}


export default component;
