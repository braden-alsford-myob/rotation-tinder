import './App.css';
import TeamCard from "./card";
import { data } from "./dummyData";

function ShortListView() {
    return (
        <div className="Short-list-page">
                { data.map((entryData) => {
                    return <TeamCard entry={entryData}/>;
                }) }
        </div>
    );
}

export default ShortListView;