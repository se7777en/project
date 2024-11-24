// import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './modal.css';

const Modal = () => {
    return (
        <div className="modal">
            <div className="container">
                <div className="modal__inner">
                    <div className="modal__header">
                        <div className="modal__header-text">Typical modal window</div>
                        <div className="modal__header-close">
                            <FontAwesomeIcon icon={faXmark} size="1x" color="black" />
                        </div>
                    </div>
                    <div className="modal__body">Modal body content</div>
                    <div className="modal__footer">
                        <button className="modal__close">Close</button>
                        <button className="modal__save">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
        <>
            <button className='btn'>Open Modal</button>
            <Modal />
        </>
    )
}

export default App;