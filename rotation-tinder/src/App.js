import './App.css';
import React, {useState} from 'react';
import SwipeyBoi from "./SwipeyBoi";
import {Badge, BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {data} from "./dummyData.js";
import ShortListView from "./ShortListView";
import logo from "./Logo.svg";


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
                    <div>
                        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
                        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
                        <h1>Rotation<img src={logo} className="logo" alt="logo" style={{ padding: '0 0.75em' }}/>Tinder</h1>
                    </div>
                    <div className={"contentContainer"}>
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
                    <div>
                        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
                        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
                        <h1>Rotation<img src={logo} className="logo" alt="logo" style={{ padding: '0 0.75em' }}/>Tinder</h1>
                    </div>
                    <div className={"contentContainer"}>
                        <h2>No Teams!</h2>
                    </div>
                    {bottomNavigation}
                </div>
            );
        }
    }

    else {
        return (
            <div className={"outer"}>
                <div>
                    <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
                    <h1>Rotation<img src={logo} className="logo" alt="logo" style={{ padding: '0 0.75em' }}/>Tinder</h1>
                </div>
                <div className={"contentContainer"}>
                    <ShortListView data={shortList}/>
                </div>
                {bottomNavigation}
            </div>
        );
    }
};

export default App;




