import types from '../actions/types';

const DEFAULT_STATE = {
    items: [],
    singleItem: {}
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_LIST_DATA:
            return {...state, items: action.payload.data.todos};
        default: 
            return state;
    }
}