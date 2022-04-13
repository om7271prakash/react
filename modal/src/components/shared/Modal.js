import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import s from "./Modal.module.css"

const Modal = (props) => {

    console.log(s)
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalElement hideModal={props.hideModal} />, document.getElementById('portal'))}
        </Fragment>
    )
}

const ModalElement = (props) => {
    return (
        <div id={s.portal}>
            <div id={s.overlay} 
                onClick={props.hideModal}
            />
            <div id={s.modal}>
                <div className={s["modal-container"]}>
                    <div className={s["modal-header"]}>
                        <span>Please Choose your option</span>
                    </div>
                    <div className={s["modal-content"]}>
                        <p>Are You Sure?</p>
                    </div>
                    <div className={s["modal-action"]}>
                        <button className={s["modal-cancel"]}
                            onClick={props.hideModal}
                        >
                            Cancel
                        </button>
                        <button className={s["modal-submit"]}
                            onClick={props.hideModal}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 


export default Modal;