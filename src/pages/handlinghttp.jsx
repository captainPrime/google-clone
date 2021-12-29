import React, { useEffect } from 'react';
import HttpService from '../services/https';

function Handlinghttp() {
    const services = new HttpService();

    const getPost = () => {
        services.get('posts').then((res) => {
            console.log('posts', res);
        });
    };

    const addPost = () => {
        services
            .post('posts', {
                title: 'foo',
                body: 'bar',
                userId: 1,
            })
            .then((res) => {
                console.log('posts', res);
            });
    };
    return (
        <div>
            <button
                style={{ marginRight: '10px' }}
                onClick={getPost}
                className="btn btn-primary"
            >
                Get Post
            </button>
            <button onClick={addPost} className="btn btn-primary">
                Add Post
            </button>
        </div>
    );
}

export default Handlinghttp;
