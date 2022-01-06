import * as React from 'react';
import { FaPaperPlane, FaSearch } from 'react-icons/fa';
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
                required
                    type="text"
                    onChange={props.handlechange}
                    className="search-field"
                    onKeyPress={(e) => e.key === 'Enter' && props.CreateUrlFnc()}
                    placeholder="type a url"
                />
                <button onClick={props.CreateUrlFnc} className="submit-btn">
                    <FaPaperPlane style={{color: "rgb(210, 210, 210)"}}/>
                </button>
            </div>
        </div>
    );
}

export default Search;