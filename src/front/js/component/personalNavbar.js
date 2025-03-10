import React, { useContext } from 'react';
import { Context } from '../store/appContext';
export const PersonalNavbar = () => {

    const { store, actions } = useContext(Context)
    const infoUser = store.infoUser

    return (
        <>
            <div className="d-flex mb-4 pt-4 ms-5">
                <div className="profile-photo pe-3">
                    <div className="position-relative" style={{ width: "10em", height: "10em" }}>
                        <div className="profile-circle ratio ratio-1x1">
                            <img className="photo-personal-zone" src="https://media.cnn.com/api/v1/images/stellar/prod/cnne-212344-monkey-selfie.jpeg?c=16x9&q=h_833,w_1480,c_fill" />
                        </div>
                        <span className="edit-pen position-absolute  translate-middle rounded-circle p-2 "><i className="p-2 icon-pen fa-solid fa-pen"></i><span className="visually-hidden">unread messages</span></span>
                    </div>
                </div>
                <div className="text my-auto fs-3">
                    <div className="mb-0 pb-0">
                        <p className="mb-0 message-personal">Hola, <b>{infoUser.username}</b>!</p>
                    </div>
                    <div className="mt-0">
                        <button onClick={() =>
                            actions.setEdit()
                        } type="button" className="btn edit-button"><i className="fa-solid fa-pen-to-square"></i> Editar información</button>
                    </div>
                </div>
            </div>
        </>
    )
}