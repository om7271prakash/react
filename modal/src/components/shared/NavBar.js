import React, { useState } from "react"
import Modal from "./Modal";
import s from './NavBar.module.css'

const NavBar = (props) => {
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
      setShowModal(true);
    }
  
    const hideModalHandler = () => {
      setShowModal(false);
    }
    return (
        <div className={s.container}>
            <div>MyTitle</div>
            <div>
                <button
                    onClick={showModalHandler}
                >
                    Login
                </button>
                {showModal && <Modal hideModal={hideModalHandler} />}
            </div>
        </div>
    )
}

export default NavBar;