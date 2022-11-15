import React from 'react';
import styles from './backdrop.module.scss';

const Backdrop = (props: { show: any; close: React.MouseEventHandler<HTMLDivElement> | undefined }) => {
  return (
    props.show ?
    <div className={styles.backdrop} onClick={props.close}></div>
    :
    null
  )
}

export default Backdrop;