import types from './types';
import axios from 'axios';

export function getList(){
    const response = axios.get('http://localhost:8000/students')

    return {
        type: types.GET_LIST_DATA,
        payload: response
    }
}

export function deleteItem(id){
    const response = axios.post('http://localhost:8000/students/delete', {
            id
        })

    return {
        type: types.DELETE_SINGLE_ITEM,
        payload: response
    }
}