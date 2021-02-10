import './SwipeyBoi.css';
import React, {useState} from 'react';
import TinderCard from 'react-tinder-card'
import Confetti from 'react-dom-confetti';


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
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />

            <h1>Bianca presents: FMA Rotation Tinder</h1>
            <Confetti active={ confetti } config={ config }/>

            <div className='cardContainer'>
                {props.allTeams.map((team) =>
                    <TinderCard preventSwipe={['up', 'down']} className='swipe' key={team.teamName} onSwipe={(dir) => swiped(dir, team)} onCardLeftScreen={() => outOfFrame(team.teamName)}>
                        <div style={{ backgroundImage: 'url(' + team.image + ')' }} className='card'>
                            <h3 style={{color: "black"}}>{team.teamName}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
        </div>
    )
};

export default SwipeyBoi;
