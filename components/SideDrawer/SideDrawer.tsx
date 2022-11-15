import React from 'react'
import Image from 'next/image'
import Backdrop from '../Backdrop/Backdrop';
import styles from  './sidedrawer.module.scss';
import { composeStrings } from '../../utils/utils';

const SideDrawer = (props: { show: any; click: React.MouseEventHandler<HTMLDivElement> | undefined; title: string }) => {
  return (
    <>
    <Backdrop show={props.show} close={props.click} />
    <div className={styles.sidedrawer}
        style = {{
            transform:props.show ? 'translateX(0)' : 'translateX(-100%)',
            opacity: props.show ? '1' :'0',
            
        }}
    >
       
        <Image alt="logo" src="/images/logo.png" width={150} height={30} />
       
        <ul className={styles.mobileUl}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Leaderboard</a></li>
        </ul>

        <div className={composeStrings("d-flex align-items-center", styles.search)}>
            <Image alt="logo" src="/images/search.png" width={15} height={15} />
            <input type="text" placeholder='Find a tournament' />
        </div>

        <ul className={styles.mobileUl}>
            <li><a href="#">My wallet</a></li>
            <li>
                <Image alt="bell" src="/images/bell.png" width={30} height={30} />
            </li>
            <li>
                <Image alt="avatar" src="/images/avatar.png" width={30} height={30} />
            </li>
            <li>
                <div className="d-flex align-items-center">
                    <a href="#" className={'mb-0 pe-2'}>stanleywest</a>
                    <Image alt="dropdown" src="/images/dropdown.png" width={12} height={8} />
                </div>
            </li>
        </ul>
    </div>
    </>
  )
}

export default SideDrawer