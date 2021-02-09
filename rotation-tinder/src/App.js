import './App.css';
import React, {useState} from 'react';
import SwipeyBoi from "./SwipeyBoi";
import {SiAwesomelists, GiCrownedHeart} from "react-icons/all";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import FavoriteIcon from '@material-ui/icons/Favorite';



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

    const [currentlySelected, setCurrentlySelected] = useState(
        "search"
    );

    const handleChange = (e, newValue) => {
        setCurrentlySelected(newValue)

    }

    const bottomNavigation = (
        <div>
{/*         <SiAwesomelists onClick={swipeButtonClicked} />
            <GiCrownedHeart onClick={listButtonClicked} />*/}
            <BottomNavigation value={currentlySelected} onChange={handleChange} >
                <BottomNavigationAction label="Search" value="search" icon={<RecentActorsIcon />} />
                <BottomNavigationAction label="Shortlist" value="shortlist" icon={<FavoriteIcon />} />
            </BottomNavigation>
        </div>
    );

    if (currentlySelected === "search") {
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




