import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import appReducer from '../reducers/main';
import DevTools from './DevTools';


const generateStore = () => {
    //Handle middleware
    let middleware = null;
    let finalCreateStore = null;

    //Prod environment workflow setup
    if (process.env.NODE_ENV !== 'development') {
        middleware = [thunk];
        finalCreateStore = compose(
            applyMiddleware(...middleware)
        )(createStore);
    }

    //Dev environment workflow setup
    if (process.env.NODE_ENV === 'development') {
        const loggerMiddleware = createLogger({
            level: 'info',
            collapsed: true
        });

        middleware = [thunk, loggerMiddleware];

        finalCreateStore = compose(
            applyMiddleware(...middleware),
            DevTools.instrument()
        )(createStore);
    }

    const store = finalCreateStore(appReducer);
    return store;
}

export default generateStore;
