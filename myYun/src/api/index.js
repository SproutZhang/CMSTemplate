import axios from 'axios';
import qs from 'querystring'

export async function get(url){
    return await axios.get(url).then(d=>d.data)
}

export async function post(url,params){
    return await axios.post(url,qs.stringify(params)).then(d=>d.data)
}



