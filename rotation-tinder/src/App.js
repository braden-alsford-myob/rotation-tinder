import './App.css';
import React, {useState} from 'react';
import SwipeyBoi from "./SwipeyBoi";
import ShortListView from "./ShortListView";


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



  return (
      <div>
          <button className="button">Add team</button>
          <SwipeyBoi allTeams={allTeams}/>
          <ShortListView/>
      </div>
  );
};

export default App;
