import './App.css';
import TeamCard from "./card";
import React from "react";

function ShortListView(props) {
    console.log(props.data);
    if (props.data.length === 0) {
        return (
            <div>
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