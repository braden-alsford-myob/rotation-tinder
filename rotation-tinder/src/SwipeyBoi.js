import './App.css';
import React from 'react';


const SwipeyBoi = (props) => {

    const allTeams = props.allTeams.map(team => {
        return (
            <div>{team['name']}</div>
        )
    });


    return (
        <div>
            {allTeams}
        </div>
    );
};

export default SwipeyBoi;
