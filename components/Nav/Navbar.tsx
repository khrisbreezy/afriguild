import Link from 'next/link';
import Image from 'next/image';

import Nav from './Nav';
import NavProfile from './NavProfile';

const NavBar = (props: any) => {

    return (
        <>
            <nav id="navbar_top" className="navbar navbar-expand-lg">
                <Link href="/" className="navbar-brand">
                    {/* <a className="navbar-brand"> */}
                     <Image alt="logo" src="/images/logo.png" width={150} height={30} />
                    {/* </a> */}
                </Link>

                <button onClick={props.click} className="navbar-toggler" id="show-nav" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <img className="navbar-toggler-icon" src="/images/menu.png" alt=""/>
                </button>

                <Nav />

                <NavProfile />
            </nav>
        </>
    );
};

export default NavBar;