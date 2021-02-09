import './App.css';
import TeamCard from "./card";
import { data } from "./dummyData";

function ShortListView() {
    return (
        <div className="App">
            <header className="App-header">
                { data.map((entryData) => {
                    return <TeamCard entry={entryData}/>;
                }) }
            </header>
        </div>
    );
}

export default ShortListView;