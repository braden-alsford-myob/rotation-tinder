import './App.css';
import TeamCard from "./card";

function ShortListView() {
    return (
        <div className="App">
            <header className="App-header">
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </header>
        </div>
    );
}

export default ShortListView;