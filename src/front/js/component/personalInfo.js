import React, { useContext } from 'react';
import { Context } from '../store/appContext';
export const PersonalInfo = () => {

    const {store} = useContext(Context)

    return (
        <>
            <div className="container-fluid">
                <h1 className="personal-zone-title">Zona personal</h1>
                <div className="border-top w-100 div-personal-zone">
                    <div className="w-50 mx-auto personal-info rounded">
                        <div className="personal-form">
                            <form>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Nombre:</label>
                                    </div>
                                    <input type="email" class="input-personal form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Facundo" disabled={!store.edit}/>
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Apellido:</label>
                                    </div>
                                    <input type="email" class="input-personal form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Scrollini"  disabled={!store.edit}/>
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Usuario:</label>
                                    </div>
                                    <input type="email" class="input-personal form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="facuscrollini"  disabled={!store.edit} />
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Email:</label>
                                    </div>
                                    <input type="email" class="input-personal form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="facuscrollini@gmail.com"  disabled={!store.edit} />
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Contraseña:</label>
                                    </div>
                                    <input type={store.edit? "text": "password"} class="input-personal form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="1234"  disabled={!store.edit} />
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Dirección:</label>
                                    </div>
                                    <input type="email" class="input-personal form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Av. Siempre Viva 14, Valencia"  disabled={!store.edit} />
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="birth-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Fecha de nacimiento:</label>
                                    </div>
                                    <input type="date" class="input-personal form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="1997-12-05"  disabled={!store.edit} />
                                </div>

                            </form>
                        </div>
                        <div className="personal-button">
                            <button type="submit" class="btn cancel-button me-3"  disabled={!store.edit}>Cancelar</button>
                            <button type="submit" class="btn save-button"  disabled={!store.edit} >Guardar información</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}