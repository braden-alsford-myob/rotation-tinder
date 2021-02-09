import './App.css';
import React, {useState} from 'react';
import SwipeyBoi from "./SwipeyBoi";


const App = () => {

    const [allTeams, setAllTeams] = useState([
        {
            name: "Leah"
        },
        {
            name: "Braden"
        }
        ]
    );

    const [shortList, setShortList] = useState(
        []
    );

    const [currentlySwiping, setCurrentlySwiping] = useState(
        false
    )

    const swipeButtonClicked = () => {
        setCurrentlySwiping(true)
    }

    const listButtonClicked = () => {
        setCurrentlySwiping(false)
    }

    const bottomNavigation = (
        <div>
            <button onClick={swipeButtonClicked}> Swiping </button>
            <button onClick={listButtonClicked}> List </button>
        </div>
    )

    if (currentlySwiping) {
        return (
            <div>
                <div>
                    <button className="button">Add team</button>
                    <SwipeyBoi allTeams={allTeams}/>
                </div>
                {bottomNavigation}
            </div>
        );
    }

    else {
        return (
            <div>
                <div>
                    <button className="button">Add team</button>
                    <div> hosiahpisahsc </div>
                </div>
                {bottomNavigation}
            </div>
        );
    }


};

export default App;
