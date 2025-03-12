import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';


export const PersonalNavbar = () => {

    const { store, actions } = useContext(Context)
    const infoUser = store.infoUser
    const [file, setFile] = useState("");


    const changeUploadImage = async (e) => {
        setFile(e.target.files[0]);
    };

    const sendImage = async () => {
        const urlBackend = process.env.BACKEND_URL;
        try {
            const form = new FormData();
            form.append("img", file);
            const response = await fetch(urlBackend + 'upload-image', {
                method: 'POST',
                body : form
            })
            const data = await response.json();
            console.log("data", data);
            
        } catch (error) {
            console.log(error);
        }
    }
    

//     const changeUploadImage = async (e) => {
//         const files = e.target.files[0];
        
//         const data = new FormData();
// -
//         data.append("file", files);
//         data.append("upload_preset", "preset_react");

//         const response = await fetch('https://api.cloudinary.com/v1_1/dkowti9mk/image/upload',{
//             method: 'POST',
//             body: data
//         })

//         const file = await response.json()
//         setUrlImagen( file.secure_url);
//     }



    return (
        <>
            <div className="d-flex mb-4 pt-4 ms-5">
                <div className="profile-photo pe-3">
                    <div className="position-relative" style={{ width: "10em", height: "10em" }}>
                        <div>
                            <input type='file' accept='image/*' onChange={changeUploadImage}/>
                            <button onClick={sendImage}>subir foto</button>                        
                        </div>
                        <div className="profile-circle ratio ratio-1x1">
                            <img className="photo-personal-zone" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
                        </div>
                        {/* <span className="edit-pen position-absolute  translate-middle rounded-circle p-2 "><i className="p-2 icon-pen fa-solid fa-pen"></i><span className="visually-hidden">unread messages</span></span> */}
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