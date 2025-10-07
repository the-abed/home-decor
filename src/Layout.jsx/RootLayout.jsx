import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
           <div className='flex-1 max-w-6xl mx-auto'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;