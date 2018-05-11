import types from './types';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/students';

export function getList(){
    const response = axios.get('http://localhost:8000/students')

    return {
        type: types.GET_LIST_DATA,
        payload: response
    }
}