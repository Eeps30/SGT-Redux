import types from '../actions/types';

const DEFAULT_STATE = {
    items: [],
    singleItem: {},
    gradeAverage: 0
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_STUDENT_LIST_DATA:
            return {...state, items: action.payload.data.data};
        case types.GET_TEACHER_LIST_DATA:
            return {...state, items: action.payload.data.data}
        case types.DELETE_SINGLE_STUDNET:
            return {...state, singleItem: action.payload}
        case types.DELETE_SINGLE_TEACHER:
            return {...state, singleItem: action.payload}
        case types.EDIT_SINGLE_STUDENT:
            return {...state, singleItem: action.payload}
        case types.EDIT_SINGLE_TEACHER:
            return {...state, singleItem: action.payload}
        default:
            return state;
    }
}