import './App.css'
import NavBar from "./components/NavBar.jsx"
import {Login} from "./pages/Login.jsx";
import { Outlet } from "react-router-dom";
import React, {useEffect, useState} from "react";

export const Datacontext = React.createContext(undefined);

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [competenceMaj, setCompetenceMaj] = useState(null);
    const [competenceMin, setCompetenceMin] = useState(null);
    const [competenceNote, setCompetenceNote] = useState(null);

    useEffect(() => {
        const loggedIn = sessionStorage.getItem("loggedIn");
        if (loggedIn === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Datacontext.Provider value={{ competenceMaj,setCompetenceMaj,competenceMin,setCompetenceMin,competenceNote,setCompetenceNote }}>
            {isLoggedIn ? (
                <NavBar utilisateur={"apprenant"}>
                    <div className={"bg-gray-900/10 w-full h-full rounded-md sm:p-5"}>
                        <Outlet />
                    </div>
                </NavBar>
            ) : (
                <Login onSuccessfulLogin={handleLogin} />
            )}
        </Datacontext.Provider>
    );
}

export default App
