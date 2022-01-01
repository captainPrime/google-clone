import React from 'react';
import { useEffect, useState } from 'react';
import { db } from '../services/firebase-config';
import { FaTwitter } from 'react-icons/fa';
import '../assets/css/bookmark.css';
import '../assets/css/search.css';
import { collection, getDocs, addDoc } from 'firebase/firestore';
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
    const [bookmarkFromStore, setBookmarks] = useState<BookmarkType[]>([]);

    // firebase store
    const urlCollectionRef = collection(db, 'url');
    //--------------------------------------
    useEffect(() => {
        const getUrl = async () => {
            const data = await getDocs(urlCollectionRef);
            setBookmarks(
                data.docs.map((doc) => ({ name: doc.data().name, id: doc.id })),
            );
        };

        getUrl();
    }, []);

    const [searchValue, setSearchValue] = useState('');

    const handlechangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const CreateUrlFnc = () => {
        const createUrl = async () => {
            try {
                await addDoc(urlCollectionRef, { name: searchValue });
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


     // saving background url

/*  if(imageAsUrlUpload !== "") {
const createUrl = async( ) => {
try {
    await addDoc(urlCollectionRef, {name: imageAsUrlUpload})
} catch (error) {
    console.log(error)
}

 
}

createUrl()

} 

//handles image upload to firebase
/*
if(!imageAsFile ) {
console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
alert("Please select a valid file")
} 
 
const uploadTask = await storage.ref(`/images/${imageAsFile?.name}`).put(imageAsFile) 
 
//initiates the firebase side uploading 
uploadTask.on('state_change', (snapShot:any) => {
//takes a snap shot of the process as it is happening
console.log(snapShot)
} , (err) => {
//catches the errors
console.log(err)
} , () => {
// gets the functions from storage refences the image storage in firebase by the children
// gets the download url then sets the image from firebase as the value for the imgUrl key:

storage.ref('images').child(imageAsFile.name).getDownloadURL()
.then(fireBaseUrl => {
  setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
})

}) */