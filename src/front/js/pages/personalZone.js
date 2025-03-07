import React, { useEffect } from 'react';
import { PersonalNavbar } from '../component/personalNavbar';
import { PersonalInfo } from '../component/personalInfo';
import { privateUser } from '../apiservices/callToApi';
import { useNavigate } from 'react-router-dom';

export const PersonalZone = () => {

    const navigate = useNavigate();
    const checkout = async () =>{
        const verified = await privateUser();
        if(!verified){
            navigate('/');
        }; 
    };

    useEffect(()=>{
        checkout();
    });

    return (
        <div className="container-fluid dark-background text-white ">
            <PersonalNavbar/>
            <PersonalInfo/>
        </div>
    )
}