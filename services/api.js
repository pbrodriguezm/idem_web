/*import Vue from 'vue'

class ApiService {
    axios
    baseUrl

    constructor(axios) {

        this.axios = axios
        this.baseUrl = 'http://idem.elefante.host:3000/'
    }

    getAll(params) {
        let self = this;
        return self.axios.get(`${self.baseUrl}idem_cursos`);
    }

    get(id) {
        let self = this;
        return self.axios.get(`${self.baseUrl}${id}`);
    }
}

export default ApiService*/

import axios from 'axios'
export default axios.create({
    baseURL: 'http://idem.elefante.host:3000/',
    timeout: 5000,
    headers: {
        //'X-Auth-Token': 'f2b6637ddf355a476918940289c0be016a4fe99e3b69c83d',
        'Content-Type': 'application/json'
    }
})