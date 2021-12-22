import * as React from 'react';
import { FaTwitter } from 'react-icons/fa';
import '../assets/css/bookmark.css';
import { truncate } from '../utils/helper';

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
                    <a
                        className="bookmark-link"
                        href={`https://${bookmark.name}`}
                    >
                        <li className="bookmark">
                            <FaTwitter style={{ color: 'white' }} />
                        </li>
                        <p>{truncate(`${bookmark.name}`, 12)}</p>
                    </a>
                );
            })}
        </ul>
    );
}

export default Bookmarks;
