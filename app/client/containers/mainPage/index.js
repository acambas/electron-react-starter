import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import DevTools from '../../redux/DevTools';

const devToolsRender = () => {
	if(process.env.NODE_ENV === 'development'){
		return <DevTools />
	}
}

class component extends React.Component {
    render() {
        return <div className="container">
            {devToolsRender()}

           hello world
        </div>
    }
}


export default component;
