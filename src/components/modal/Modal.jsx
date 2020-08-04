import React from 'react'

const Modal = (props) => {
    return (
        <div className="modal-window">
            <div className="modal-bdy">
                {props.children}
            </div>
        </div>
    )
}

export default Modal





