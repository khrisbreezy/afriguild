import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavProfile: React.FC = () => {
  return (
  
    <div className="navbar-collapse ms-xs-auto collapse" id="navbarSupportedContent">
        <ul className={"navbar-nav mt-md-0 mt-4 mb-sm-0 mb-4"}>
            <li className="nav-item nav-hover">
                <Link href="/wallet" className="nav-link">
                    My Wallet
                </Link>
            </li>
            <li  className="nav-item">
                <Image alt="bell" src="/images/bell.png" width={30} height={30} />
            </li>
            <li  className="nav-item">
                <Image alt="avatar" src="/images/avatar.png" width={30} height={30} />
            </li>
            <li  className="nav-item">
                <div className="d-flex align-items-center">
                    <p className='profile-name'>stanleywest</p>
                    <Image alt="dropdown" src="/images/dropdown.png" width={12} height={8} />
                </div>
            </li>
        </ul>
    </div>

  )
}

export default NavProfile