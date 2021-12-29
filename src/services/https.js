import React from 'react';
import { FaOptinMonster } from 'react-icons/fa';

const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
};

function jionURL(baseURl, url) {
    return `${baseURl}/${url}`;
}

class Services {
    constructor() {
        this.domain = 'http://dummy.restapiexample.com/api/v1';
    }

    request(url, method = 'POST', data = null) {
        url = jionURL(this.domain, url);

        const option = {
            headers,
            method,
        };

        if (data) {
            option.body = JSON.stringify({ ...data });
        }

        return fetch(url, option);
    }

    get(url, id) {
        const method = 'GET';

        if (id) {
            url = `${url}/${id}`;
        }

        return this.request(url, method).then((res) => res.json());
    }

    post(url, data) {
        const method = 'POST';
        return this.request(url, method, data).then((res) => res.json());
    }

    delete(url, id) {
        const method = 'DELETE';

        if (id) {
            url = `${url}/${id}`;
        }

        return this.request(url, method).then((res) => res.json());
    }
}

export default Services;
