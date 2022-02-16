import './App.css';
import {useEffect, useState} from "react";

import List from "./components/UsersList.js";
import MostPopularName from "./components/MostPopularName";

function App() {
    const [show, setShow] = useState(false);
    const [showPopular, setShowPopular] = useState(false);


    return (
        <div className="App">
            <button onClick={() => setShow(!show)}>List of people</button>
            {
                show ? <List/> : null
            }
            <button onClick={() => setShowPopular(!showPopular)}>List of people</button>
            {
                showPopular ? <MostPopularName/> : null
            }
        </div>
    )
}

export default App;