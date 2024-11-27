import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from "react-transition-group";

import './modal.css';

const Modal = ({ onClose, show }) => {
    return (
        <CSSTransition
            in={show} // Управляет отображением модального окна
            timeout={300}   // Длительность анимации
            classNames="modal" // Префикс для классов анимации
            unmountOnExit   // Убирает из DOM, если не отображается
        >
            <div className="modal">
                {/* <div className={`modal ${show ? 'show' : ''}`}> */}
                <div className="container">
                    <div className="modal__inner">
                        <div className="modal__header">
                            <div className="modal__header-text">Typical modal window</div>
                            <div className="modal__header-close" onClick={() => onClose(false)}>
                                <FontAwesomeIcon icon={faXmark} size="1x" color="black" />
                            </div>
                        </div>
                        <div className="modal__body">Modal body content</div>
                        <div className="modal__footer">
                            <button onClick={() => onClose(false)} className="modal__close">Close</button>
                            <button onClick={() => onClose(false)} className="modal__save"  >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </CSSTransition>
    );
};

function App() {

    const [modal, setModal] = useState(false);
    return (
        <>
            {<Modal show={modal} onClose={setModal} />}
            {/* {modal ? <Modal show={modal} onClose={setModal} /> : null} */}
            <button
                className='btn'
                type='button'
                onClick={() => setModal(true)}>Open Modal</button>

        </>
    )
}

export default App;