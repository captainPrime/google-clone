import React, { useState } from 'react'
import { FaExclamationTriangle, FaEllipsisV } from 'react-icons/fa';
import { Toast, Alert, OverlayTrigger, Row, Col } from 'react-bootstrap';
import Popover from 'react-bootstrap/popover'
import Button from 'react-bootstrap/button';
import '../assets/css/bootstrapfnc.css';
import '../assets/css/bookmark.css';
import { deleteDocument } from '../services/firebase-config';

type BootstrapPropType = {
    SelectedUrlId: string;
};
type alertPropType = {
    errorMessage: string;

};
export function AlertFnc(props: alertPropType) {
    return (
        <div>
            <Alert variant="danger">
                {props.errorMessage}
            </Alert>
        </div>
    )
}

export function PopoverFnc(props: BootstrapPropType) {
    const DeleteUrlFnc = async (id: string) => {
        try {
            await deleteDocument('url', props.SelectedUrlId);
            window.location.reload();
        } catch (error) {
            console.log(error)

        }

    }; 
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Delete Bookmark</Popover.Header>
            <Popover.Body>
                <div className='delete-section'>
                    <Button className='btn btn-danger' onClick={() => DeleteUrlFnc(props.SelectedUrlId)} >Delete</Button>
                    <Button className='btn btn-primary' onClick={() => document.body.click()}>cancel</Button>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger
            rootClose
            trigger={"click"}
            placement="right"
            overlay={popover}
        >
            <div className='ellipses'>
                <FaEllipsisV className="ellipsis" style={{ cursor: "pointer", float: "right", marginTop: "10px", color: "rgba(160, 160, 160, 0) " }} />
            </div>
        </OverlayTrigger>
    )

};


