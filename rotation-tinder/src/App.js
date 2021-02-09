import './App.css';
import React, {useState} from 'react';
import SwipeyBoi from "./SwipeyBoi";


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
      </div>
  );
};

export default App;
