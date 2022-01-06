import { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/button';
import { Modal } from 'react-bootstrap'
import { FaPen } from 'react-icons/fa';
import '../assets/css/upload.css';
/* import './assets/uploadsection.css'; */
import { FaImage } from 'react-icons/fa';

function BGModal() {
    interface ImageFiles {
        name: string;
    }

    const allInputs = { imgUrl: '' };
    const [imageAsFile, setImageAsFile] = useState<ImageFiles>();
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);

    console.log(imageAsFile);
    const handleImageAsFile = (e: any) => {
        const image = e.target.files[0];
        setImageAsFile((imageFile) => image);
    };
    const [show, setShow] = useState(false);
    const handleClose = async () => {
        setShow(false);
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <div className="btn-container" onClick={handleShow}>
                <form className="container">
                    <Button className="image-upload">
                        <FaPen style={{ color: 'white' }} /> &nbsp;
                        customise background
                    </Button>
                </form>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Customize background</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="upload-container">
                        <div className="uploadArea">
                            <div className="option">
                                <form action="#">
                                    <div className="input-file-container">
                                        <input
                                            className="input-file"
                                            id="my-file"
                                            type="file"
                                            onChange={handleImageAsFile}
                                        />
                                        <label className="input-file-trigger">
                                            Upload Image..
                                        </label>
                                    </div>
                                    <p className="file-return"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default BGModal;
