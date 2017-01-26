import axios from 'axios';


export const FETCH_DATA = 'FETCH_DATA';

export function fetchData() {

    const config = {
        headers: { 'Authorization': 'Bearer sk_test_ujVxc7JMCr0ivKQV' }
    };

    const request = axios.get('https://api.culqi.com/v2/charges', config);

    return {
        type: FETCH_DATA,
        payload: request,

    };


}
