import './App.css';
import React, {useState} from 'react';
import SwipeyBoi from "./SwipeyBoi";
import {SiAwesomelists, GiCrownedHeart} from "react-icons/all";



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
    );

    const swipeButtonClicked = () => {
        setCurrentlySwiping(true)
    };

    const listButtonClicked = () => {
        setCurrentlySwiping(false)
    };

    const bottomNavigation = (
        <div>
            <SiAwesomelists onClick={swipeButtonClicked} />
            <GiCrownedHeart onClick={listButtonClicked} />
        </div>
    );

    if (currentlySwiping) {
        return (
            <div>
                <div>
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
                    <div> hosiahpisahsc </div>
                </div>
                {bottomNavigation}
            </div>
        );
    }


};

export default App;




