import './App.css';
import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import Cards, { Card } from 'react-swipe-card'

const SwipeyBoi = (props) => {
    const data = ['Alexandre', 'Thomas', 'Lucien']

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    const allTeams = props.allTeams.map(team => {
        return (
            <div>{team['name']}</div>
        )
    });


    return (
        <Cards /*onEnd={action('end')}*/ className='master-root'>
            {data.map(item =>
                <Card
                    /*                        onSwipeLeft={action('swipe left')}
                                            onSwipeRight={action('swipe right')}*/>
                    <h2>{item}</h2>
                </Card>
            )}
        </Cards>
    );
};

export default SwipeyBoi;
