import {CHANGE_COUNTER} from '../../actions/counter'

export default (state = 0, action) => {
    switch (action.type){
        case CHANGE_COUNTER:
            return state + action.data;
        default:
            return state;
    }
};
