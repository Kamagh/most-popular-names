import './App.css';
import {useEffect, useState} from "react";

import List from "./components/UsersList.js";
import MostPopularName from "./components/MostPopularName";
import MostPopularNameInCentury from "./components/MostPopularNameinCentury";

function App() {
    const [show, setShow] = useState(false);
    const [showPopular, setShowPopular] = useState(false);


    return (
        <div className="App">
            <button onClick={() => setShow(!show)}>List of people</button>
            {
                show ? <List/> : null
            }
            <button onClick={() => setShowPopular(!showPopular)}>Most popular name</button>
            {
                showPopular ? <MostPopularName/> : null
            }
           {/* <MostPopularNameInCentury/>*/}
        </div>
    )
}

export default App;