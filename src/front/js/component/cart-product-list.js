import React, { useContext, useEffect, useState } from 'react';
import { ListProduct } from './cart-product-list-product';
import { Context } from '../store/appContext';

export const ProductList = ({ user_id }) => {
    const { store, actions } = useContext(Context)
    const [edit, setEdit] = useState(false)

    return (
        <>
            <div className="container-fluid my-5">
                <div>
                    <div className="container-fluid mb-5">
                        <div className="d-flex justify-content-between">
                        <div>
                        <h1>Carrito</h1>
                        <span><p>Lista de productos en tu carrito personal</p></span>
                        </div>
                        </div>
                        {store.cart.map((item) => {
                            return (
                                <>
                                    <div className="p-2">
                                        <ListProduct edit={edit} name={item.modelo} description={item.descripcion} quantity={item.cantidad} image={item.image}  color={item.color}tipo={item.tipo} user_id={user_id} product_id={item.product_id} />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                   { edit && <div div className="d-flex justify-content-end">
                        <span>
                            <button onClick={()=>{
                                setEdit(false)
                            }}>Cancelar</button>
                            <button onClick={()=>{
                                setEdit(false)
                                actions.getCart(user_id)
                            }}>Guardar cambios</button>
                        </span>
                    </div>}
                </div>
            </div>
        </>
    )
}