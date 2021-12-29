import React from 'react';

type datatype = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    
}; 

function jionURL(baseURl: string, url: string) {
    return `${baseURl}/${url}`;
}

let domain = 'https://jsonplaceholder.typicode.com';

export default class HttpService {
    request(url: string, method = 'POST', data?: any) {
        url = jionURL(domain, url);

        const options = {
            headers,
            method,
        };

       if (data) {
            data = JSON.stringify({ ...data});
        }  

        return fetch(url, options);
    }

    get(url: string, id: string) {
        const method = 'GET';

        if (id) {
            url = `${url}/${id}`;
        }

        return this.request(url, method).then((res) => res.json());
    }

    post(url: string, data: datatype) {
        const method = 'POST';
        return this.request(url, method, data).then((res) => res.json());
    }

    delete(url: string, id: string) {
        const method = 'DELETE';

        if (id) {
            url = `${url}/${id}`;
        }

        return this.request(url, method).then((res) => res.json());
    }
}

/* import React from 'react';

const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
};

function jionURL(baseURl, url) {
    return `${baseURl}/${url}`;
}

export default class HttpService {
    constructor() {
        this.domain = 'https://jsonplaceholder.typicode.com';
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
 */



