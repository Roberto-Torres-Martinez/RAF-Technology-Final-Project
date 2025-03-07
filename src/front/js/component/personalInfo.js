import React from 'react';

export const PersonalInfo = () => {
    return (
        <>
            <div className="container-fluid">
                <h1>Zona personal</h1>
                <div className="border-top w-100">
                    <div className="w-50 mx-auto personal-info">
                        <div className="personal-form">
                            <form>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Nombre:</label>
                                    </div>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Facundo" disabled />
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Apellido:</label>
                                    </div>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Facundo" disabled />
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Usuario:</label>
                                    </div>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Facundo" disabled />
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Email:</label>
                                    </div>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Facundo" disabled />
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Contraseña:</label>
                                    </div>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Facundo" disabled />
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="labels-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Dirección:</label>
                                    </div>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Facundo" disabled />
                                </div>
                                <div class="mb-3 d-flex">
                                    <div className="birth-personal d-flex align-items-center">
                                        <label for="exampleInputEmail1" class="form-label me-2  my-auto">Fecha de nacimiento:</label>
                                    </div>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="Facundo" disabled />
                                </div>

                            </form>
                        </div>
                        <div className="personal-button">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}