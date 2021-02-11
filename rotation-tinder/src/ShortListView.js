import './App.css';
import TeamCard from "./card";
import React from "react";

function ShortListView(props) {
    console.log(props.data);
    if (props.data.length === 0) {
        return (
            <div>
                <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
                <h1>No Teams Shortlisted... Yet.</h1>
            </div>
        )
    }
    else {
        return (
            <div className="Short-list-page">
                { props.data.map((entryData) => {
                    return <TeamCard entry={entryData}/>;
                }) }
            </div>
        );
    }

}

export default ShortListView;