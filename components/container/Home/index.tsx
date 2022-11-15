import React, { useState } from 'react';
import Image from 'next/image';

import LeaderCard from '../../LeaderCard';
import RankingCard from '../../RankingCard';

import { LEADERBOARD } from '../../../helpers/leaders';


const HomePage = () => {

    const [ state, setState ] = useState({
        rankState: 'week'
    });

    const { rankState } = state;


    const toggleRankHandler = (val: string) => {
        setState({
            ...state,
            rankState: val
        })
    }


    return (
        <>
            <section className="leaderboard">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="d-flex align-items-center justify-content-between pe-5 leaderboard-header flex-wrap">
                                <h1>Leaderboard</h1>
                                <Image alt="leaderboard" src="/images/leader-icon.png" width={550} height={25} />
                            </div>  

                            <h2>Top players on Afriguild this week</h2>
                            <div className="d-flex pe-3 flex-wrap align-items-center leader-grid">
                                {LEADERBOARD.map((leader, i) => {                
                                    return <LeaderCard key={i} tag={leader.tag} imageUrl={leader.imageUrl} points={leader.points} />
                                })}
                            </div>

                            <div className="liveRanking">
                                <div className="ranking-sect d-flex align-items-center justify-content-between flex-wrap">
                                    <h3>Live ranking</h3>
                                    <div className="tabs d-flex align-items-center">
                                        <button onClick={() => toggleRankHandler('all')} className={rankState == 'all' ? "tab-list active" : "tab-list"}>All</button>
                                        <button onClick={() => toggleRankHandler('week')} className={rankState == 'week' ? "tab-list active" : "tab-list"}>This week</button>
                                        <button onClick={() => toggleRankHandler('connection')} className={rankState == 'connection' ? "tab-list active" : "tab-list"}>My connections</button>
                                    </div>
                                </div>

                                <div className="row mt-4 ranking-scroll">
                                    <div className="col-md-9">
                                        <p className='ranking-content'>Welcome to the weekly live ranking on Afriguild, players are ranked based on final position in every tournament they play in. The more you play, and the more you win the higher your ranking.</p>
                                        <p className='ranking-content bold'>The weekly leaderboard is rest at 00.00 WAT every Mondays. </p>

                                        <button className="see-ranking">
                                            See my ranking
                                        </button>

                                        <div>
                                        {LEADERBOARD.map((leader, i) => {
                                            return  <RankingCard key={i} tag={leader.tag} imageUrl={leader.imageUrl} points={leader.points} name={leader.name} sn={i} />
                                        })}
                                           
                                            {/* // <RankingCard />
                                            // <RankingCard />
                                            // <RankingCard />
                                            // <RankingCard />
                                            // <RankingCard /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-xl-block d-none">
                            <div className="side-leader-board"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default HomePage;