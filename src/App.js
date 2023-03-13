import {useEffect, useState} from "react";
import './App.css';



const App = () => {

    const [dateState, setDateState] = useState("");

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div className="App">
            <h1>interface Homeland</h1>
        </div>
    );
}

export default App;
