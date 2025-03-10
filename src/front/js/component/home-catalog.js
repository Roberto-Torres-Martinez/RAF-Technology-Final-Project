import React, { useState, useEffect } from 'react';
import { ProductSection } from './product-section';

const urlBackend = process.env.BACKEND_URL;

export const HomeCatalog = () => {
    const [phones, setPhones] = useState([]);
    const [tvs, setTvs] = useState([]);
    const [laptops, setLaptops] = useState([]);

    const idPhone = [36, 37, 38];
    const idTv = [16, 17, 18];
    const idLaptop = [16, 17, 18];


    const fetchProducts = async (product, idProduct, setProduct) => {
        try {
            const productPromises = idProduct.map(async (id) => {
                const response = await fetch(`${urlBackend}${product}/${id}`);
                return response.json(); // Devuelve el JSON de la respuesta
            });
            const data = await Promise.all(productPromises); // Espera todas las promesas
            setProduct(data); // Actualiza el estado con un array de datos            
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        };
    };

    useEffect(() => {
        fetchProducts('phone', idPhone, setPhones);
        fetchProducts('tv', idTv, setTvs);
        fetchProducts('laptop', idLaptop, setLaptops);
    }, []);

    return (
        <>
            <div className="container-fluid py-5">
                <ProductSection name="Moviles" products={phones} />
                <ProductSection name="TVs" products={tvs} />
                <ProductSection name="Laptops" products={laptops} />
            </div>
        </>
    );
};