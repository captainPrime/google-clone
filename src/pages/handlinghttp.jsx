import React, { useEffect } from 'react';
import Services from '../services/https';

function Handlinghttp() {
    useEffect(() => {
        Services.get('employee').then((res) => {
            console.log('Employee Data', res);
        });
    }, [Services]);
    return <div></div>;
}

export default Handlinghttp;
