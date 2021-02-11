import './App.css';
import React, {useState} from 'react';
import SwipeyBoi from "./SwipeyBoi";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {data} from "./dummyData.js";
import ShortListView from "./ShortListView";
import {SiAwesomelists, GiCrownedHeart} from "react-icons/all";


const App = () => {


    const [allTeams, setAllTeams] = useState(data);

    const [shortList, setShortList] = useState([]);

    const addTeamToShortList = team => {
        setShortList(shortList => [...shortList, team]);
    };

    const removeTeamfromTeamList = team => {
        console.log(allTeams)
        setAllTeams(allTeams => [...allTeams.filter(t => t.id !== team.id)]);
        console.log(allTeams)
    }

    const resetTeamPosition = team => {
        console.log(allTeams)
        removeTeamfromTeamList(team)
        setAllTeams(allTeams => [team, ...allTeams]);
        console.log(allTeams)
    }

    const [currentlySelected, setCurrentlySelected] = useState(
        "search"
    );

    const handleChange = (e, newValue) => {
        setCurrentlySelected(newValue)
    }

    const bottomNavigation = (
        <div className={"footer"}>
            <BottomNavigation className={"navbar"} value={currentlySelected} onChange={handleChange} >
                <BottomNavigationAction label="Search" value="search" icon={<RecentActorsIcon />} />
                <BottomNavigationAction label="Shortlist" value="shortlist" icon={<FavoriteIcon />} />
            </BottomNavigation>
        </div>
    );

    if (currentlySelected === "search") {
        if (allTeams.length !== 0) {
            return (
                <div className={"outer"}>
                    <div className={"contentContainer"}>
                        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
                        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />

                        <h1>Team Cupid presents: FMA Rotation Tinder</h1>
                        <SwipeyBoi
                            allTeams={allTeams}
                            addTeamCallback={addTeamToShortList}
                            removeTeamCallback={removeTeamfromTeamList}
                            resetTeamPosition={resetTeamPosition}/>
                    </div>
                    {bottomNavigation}
                </div>
            );
        }
        else {
            return (
                <div className={"outer"}>
                    <div className={"contentContainer"}>
                        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
                        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />

                        <h1>Bianca presents: FMA Rotation Tinder</h1>
                        <h2>No Teams!</h2>
                    </div>
                    {bottomNavigation}
                </div>
            );
        }
    }

    else {
        return (
            <div>
                <div className={"contentContainer"}>
                    <ShortListView data={shortList}/>
                </div>
                {bottomNavigation}
            </div>
        );
    }
};

export default App;




