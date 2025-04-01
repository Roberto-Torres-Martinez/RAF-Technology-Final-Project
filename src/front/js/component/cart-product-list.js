import React, { useContext, useEffect, useState } from 'react';
import { ListProduct } from './cart-product-list-product';
import { Context } from '../store/appContext';
import { deleteCart } from '../apiservices/callToApi';
import { createCart } from '../apiservices/callToApi';

export const ProductList = ({ user_id }) => {
    const { store, actions } = useContext(Context)


    const cleanCart = async () => {
        await deleteCart(user_id)
        await createCart(user_id)
        window.location.reload()

    }
    return (
        <>
            <div className="container-fluid my-5">
                <div>
                    <div className="container-fluid mb-5">
                        <div className="">
                            <div>
                                <h1>Carrito</h1>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <span><p>Lista de productos en tu carrito personal</p></span>
                                    </div>
                                    <div>

                                        <button 
                                        className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" title="Vaciar carrito"><i class="fs-3 fa-solid fa-xmark"></i></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {store.cart.map((item) => {
                            return (
                                <>
                                    <div className="p-2">
                                        <ListProduct name={item.modelo} description={item.descripcion} quantity={item.cantidad} image={item.imagen} color={item.color} user_id={user_id} />
                                    </div>
                                </>
                            )
                        })}
                    </div>

                </div>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Vaciar carrito</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                               Todos los productos se eliminaran, en caso de querer recuperarlos deberás agregarlos manualmente
                               ¿Estás de acuerdo?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button onClick={() => {
                                            cleanCart()
                                        }} type="button" class="btn btn-primary">Entendido</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}