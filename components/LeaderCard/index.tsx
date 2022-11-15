import React from "react";
import Image from "next/image";

import styles from './leaderBoard.module.scss';

type LeaderProps = {
    tag: string;
    points: number;
    imageUrl: string
}

const LeaderCard: React.FunctionComponent<LeaderProps>  = ({imageUrl, points, tag}) => {
  
    return (
        <>
            <div className="mx-auto">
                <div className={styles.leaderCard}>
                    <Image alt="leaderCard" src={imageUrl} width={80} height={80} />
                    <p className={styles.name}>{tag}</p>
                    <p className={styles.point}>{points} {`pt${points > 1 ? 's' : ''}`}</p>
                </div>
            </div>              
        </>
    )
};

export default LeaderCard;