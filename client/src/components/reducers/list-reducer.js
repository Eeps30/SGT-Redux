import types from '../actions/types';

const DEFAULT_STATE = {
    items: [],
    singleItem: {},
    gradeAverage: ''
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_LIST_DATA:
            return {...state, items: action.payload.data.data};
        case types.DELETE_SINGLE_ITEM:
            return {...state, singleItem: action.payload}
        default:
            return state;
    }
}