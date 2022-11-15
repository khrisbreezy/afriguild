import React from "react";
import Image from "next/image";

import styles from './ranking.module.scss';

import { composeStrings } from "../../utils/utils";

type LeaderProps = {
    tag: string;
    points: number;
    imageUrl: string;
    name: string;
    sn: number
}

const RankingCard: React.FunctionComponent<LeaderProps> = ({imageUrl, tag, name, points, sn}) => {
    return (
        <>
            <div className={styles.rankingCard}>
                <div className="d-flex align-items-center">
                    <Image alt="dropdown" src={`/images/${points > 10 ? 'green-mark.png' : 'red-mark.png'}`} width={12} height={8} />
                    <p className={styles.number}>{sn + 1}</p>
                </div>
                <div className={composeStrings("d-flex align-items-center justify-content-between flex-wrap", styles.rankings)}>
                    <div className="d-flex align-items-center mb-sm-0 mb-2">
                        <Image alt="dropdown" src={imageUrl} width={60} height={60} />
                        <div className={styles.info}>
                            <p className={styles.name}>{name}</p>
                            <p className={styles.tag}>{tag}</p>
                        </div>
                    </div>
                    <div className={composeStrings("d-flex align-items-end", styles.points)}>
                        <p className={styles.point}>{points}</p>
                        <p className={styles.sub}>{`point${points > 1 ? 's' : ''}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RankingCard;