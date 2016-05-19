import React from 'react';
import {connect} from 'react-redux';
import {changeCounter} from '../../actions/counter';

const incrementValue =2;

class component extends React.Component {
    constructor(props){
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    render() {
        return <div className="counter">
           <h2 className="align-center">Counter</h2>
           
           <div className="row">
                <button className="btn btn-primary" onClick={this.increment}>add {incrementValue}</button>
                <strong>{this.props.count}</strong>
                <button className="btn btn-primary" onClick={this.decrement}>subtract {incrementValue}</button>
           </div>
        </div>
    }
    
    increment() {
        this.props.changeCounter(incrementValue);
    }
    decrement() {
        this.props.changeCounter(incrementValue * -1);
    }
}


const mapStateToProps = (state) => {
    return {
        count: state
    }
};

const mapActions = (dispatch) => {
    return {
        changeCounter(increment) {
            dispatch(changeCounter(increment));
        }
    }
};


export default connect(mapStateToProps, mapActions)(component);
