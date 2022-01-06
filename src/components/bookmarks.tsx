import * as React from 'react';
import { FaTwitter, FaEllipsisV } from 'react-icons/fa';
import '../assets/css/bookmark.css';
import '../assets/css/loader.css';
import { truncate } from '../utils/helper';
import { PopoverFnc } from './BootstrapFunctions';


interface BookmarkType {
    name: string;
    id: string;
}

type BookmarkPropType = {
    bookmarks: any;
};

function Bookmarks(props: BookmarkPropType) {
    const { bookmarks } = props;
    return (
        <ul className="bookmark-container">
            {bookmarks.map((bookmark: BookmarkType) => {
                return (
                    <div className="section">
                        <PopoverFnc SelectedUrlId={bookmark.id} />
                        <a href={`https://${bookmark.name}`}>
                            <li className="bookmark">
                                <FaTwitter style={{ color: 'white' }} />
                            </li>
                        </a>
                        <div>
                            <a
                                className="bookmark-link"
                                href={`https://${bookmark.name}`}
                            >
                                <p>{truncate(`${bookmark.name}`, 12)}</p>
                            </a>
                        </div>
                    </div>
                );
            })}
        </ul>
    );
}

export default Bookmarks;
