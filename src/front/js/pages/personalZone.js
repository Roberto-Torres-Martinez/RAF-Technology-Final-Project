import React from 'react';
import { PersonalNavbar } from '../component/personalNavbar';
import { PersonalInfo } from '../component/personalInfo';

export const PersonalZone = () => {
    return (
        <>
        <div className="container-fluid dark-background text-white ">
        <PersonalNavbar/>
        <PersonalInfo/>
        </div>
        </>
    )
}