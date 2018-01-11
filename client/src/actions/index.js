import axios from 'axios';
import { FETCH_USER } from './types';


export const getUser = () => {
    return (dispatch) => {
        axios
            .get('/api/user')
            .then(res => dispatch({ type: FETCH_USER, payload: res }));
    }
}