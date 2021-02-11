import './SwipeyBoi.css';
import React, {useState} from 'react';
import TinderCard from 'react-tinder-card'
import Confetti from 'react-dom-confetti';
import DetailCard from "./DetailCard";


const SwipeyBoi = (props) => {

    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 500,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 0,
        width: "28px",
        height: "29px",
        perspective: "623px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    const [confetti, setConfetti] = useState(false)

    const swiped = (direction, team) => {
        console.log('removing: ' + team)
        if (direction == "right") {
            setConfetti(true);
            setConfetti(false);
            props.addTeamCallback(team);
            props.removeTeamCallback(team);
        }
        if (direction == "left") {
            props.resetTeamPosition(team);
        }
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    };

    return (
        <div>

            <Confetti active={ confetti } config={ config }/>

            <div className='cardContainer'>
                {props.allTeams.map((team) =>
                    <TinderCard preventSwipe={['up', 'down']} className='swipe' key={team.teamName} onSwipe={(dir) => swiped(dir, team)} onCardLeftScreen={() => outOfFrame(team.teamName)}>
                        <DetailCard team={team} />
                    </TinderCard>
                )}
            </div>
        </div>
    )
};

export default SwipeyBoi;
