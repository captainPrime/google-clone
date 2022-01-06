import React from 'react';
import { useEffect, useState } from 'react';
import { FaTwitter } from 'react-icons/fa';
import '../assets/css/bookmark.css';
import '../assets/css/search.css';
import { getDocument, createDocument, deleteDocument } from '../services/firebase-config';
import Bookmarks from '../components/bookmarks';
import Search from '../components/search';
import Logo from '../components/logo'
import { AlertFnc } from '../components/BootstrapFunctions';
import BGModal from '../components/Modal'
import { setTimeout } from 'timers';

interface BookmarkType {
    name: string;
    id: string;
}
interface searchInput {
    name: string;
}

function SearchPage(props: any) {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setloading] = useState(false)
    const [urlValidation, setUrlvalidation] = useState(false)
    const [error, setError] = useState(false)
    const [bookmarkFromStore, setBookmarks] = useState<BookmarkType[]>([]);
    useEffect(() => {
        const getUrl = async () => {
            const data = await getDocument('url');
            setBookmarks(
                data.docs.map((doc) => ({ name: doc.data().name, id: doc.id })),
            );
            setloading(true)
        };

        getUrl();
    }, []);
    const handlechangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    const CreateUrlFnc = async () => {
        try {

            if (searchValue === "") {
                setError(true);
                setTimeout(() => {
                    setError(false)
                }, 3000);
            }
            if (searchValue !== "") {
                if (searchValue.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null) {
                    await createDocument('url', { name: searchValue })
                    window.open(`https://${searchValue}`);
                    window.location.reload();
                }
                else {
                    setError(true);
                    setTimeout(() => {
                        setError(false)
                    }, 3000);
                }
            }
        } catch (error) {
            console.log(error)

        }
    };

    return (
        <div>
            {error ?
                <AlertFnc errorMessage="You have inputed an invalid url... please try again" />
                :
                <div></div>
            }
            <Logo />
            <Search
                CreateUrlFnc={CreateUrlFnc}
                handlechange={handlechangeFn}
            />
            {loading ?
                <Bookmarks bookmarks={bookmarkFromStore} />
                :
                <div>
                    <div className="loader"></div>
                    <br />
                    <h4>Loading Bookmarks...</h4>
                </div>
            }
            <BGModal />
        </div>
    );
}
export default SearchPage;