import React from 'react';
import { useEffect, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import '../assets/css/bookmark.css';
import '../assets/css/search.css';
import { getDocument, createDocument } from '../services/firebase-config';
import Bookmarks from '../components/bookmarks';
import Search from '../components/search';
import Logo from '../components/logo'

interface BookmarkType {
    name: string;
    id: string;
}

interface searchInput {
    name: string;
}

function SearchPage() {
    const [searchValue, setSearchValue] = useState('');
    const [bookmarkFromStore, setBookmarks] = useState<BookmarkType[]>([]);

    //--------------------------------------
    useEffect(() => {
        const getUrl = async () => {
            const data = await getDocument('url');
            setBookmarks(
                data.docs.map((doc) => ({ name: doc.data().name, id: doc.id })),
            );
        };

        getUrl();
    }, []);



    const handlechangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const CreateUrlFnc = () => {
        const createUrl = async () => {
            try {
                await createDocument('url', { name: searchValue });
                window.open(`https://${searchValue}`);
            } catch (error) {
                console.log(error);
            }
        };

        createUrl();
    };

    return (
        <div>
            <Logo />
            <Search
                CreateUrlFnc={CreateUrlFnc}
                handlechange={handlechangeFn}
            />
            <Bookmarks bookmarks={bookmarkFromStore} />
        </div>
    );
}

export default SearchPage;

