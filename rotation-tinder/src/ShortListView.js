import './App.css';
import TeamCard from "./card";

function ShortListView(props) {
    return (
        <div className="Short-list-page">
                { props.data.map((entryData) => {
                    return <TeamCard entry={entryData}/>;
                }) }
        </div>
    );
}

export default ShortListView;