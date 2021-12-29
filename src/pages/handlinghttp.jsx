import React, { useEffect } from 'react';
import HttpService from '../services/https';

function Handlinghttp() {

    const services = new HttpService
    useEffect(() => {
        services.get('posts').then(res => {
            console.log('posts', res);
        });
    }, [services]);

    return <div></div>;
}

export default Handlinghttp;
