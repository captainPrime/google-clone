import * as React from 'react';
import { FaMicrophone, FaSearch } from 'react-icons/fa';
import '../assets/css/search.css';

type searcPropType = {
    CreateUrlFnc: any;
    handlechange: any;
};
function Search(props: searcPropType) {
    return (
        <div className="container">
            <div className="input-form">
                <button className="btn2">
                    <FaSearch />
                </button>
                <input
                    type="text"
                    onChange={props.handlechange}
                    className="search-field"
                    placeholder="type a url"
                />
                <button onClick={props.CreateUrlFnc} className="submit-btn">
                    <FaMicrophone />
                </button>
            </div>
        </div>
    );
}

export default Search;
