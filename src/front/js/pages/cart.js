import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';


export const Cart = () =>{


const {actions} = useContext(Context)

useEffect(()=>{
    actions.setNegativeColors()
    actions.setNavbarVisibility()
},[])

return (
    <>
    <div className="container-fluid negative-background">
        <h1 className="pb-0 mb-0">Hola, soy un carrito</h1>
    </div>
    </>
)
}