import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Nav/Navbar';
import Footer from '../components/Footer';
import SideDrawer from '../components/SideDrawer/SideDrawer';

interface LayoutProps {
    children: JSX.Element[] | JSX.Element
}

const Layout: React.FunctionComponent<LayoutProps> =  ({ children }) => {
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script> */}
    </Head>

    const [ state, setState ] = useState({
        showSideDrawer : false
    })

    const sideDrawerClosedHandler =()=>{
        setState({
            showSideDrawer: false
        });
    }

    const sideDrawerToggleHandler =()=>{
        const { showSideDrawer } = state
        setState({
            showSideDrawer:!showSideDrawer
        })
        
    }

    return (
        <>
            <Navbar click={sideDrawerToggleHandler} />

            {children}

            <div className="d-lg-none d-block">
                <SideDrawer show={state.showSideDrawer} click={sideDrawerToggleHandler} title={''} />
            </div>

            <Footer />
        </>
    )
};

export default Layout;