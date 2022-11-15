import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <div className="navbar-collapse mx-auto collapse" id="navbarSupportedContent">
        <ul className={"navbar-nav mt-md-0 mt-4 mb-sm-0 mb-4"}>
            <li className="nav-item nav-hover">
                <Link href="/" className="nav-link">
                    Home
                </Link>
            </li>

            <li className="nav-item nav-hover">
                <Link href="/games" className="nav-link">
                    Games
                </Link>
            </li>

            <li className="nav-item nav-hover">
                <Link href="/leaderboard" className="nav-link active">
                    Leaderboard
                </Link>
            </li>

            <li className="nav-item">
                <div className="search d-flex align-items-center">
                    <Image alt="logo" src="/images/search.png" width={15} height={15} />
                    <input type="text" placeholder='Find a tournament' />
                </div>
            </li>
        </ul>
    </div>

  )
}

export default Nav