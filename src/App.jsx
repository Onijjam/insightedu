import './App.css'
import {Sidebar} from "./components/Sidebar.jsx";
import NavBar from "./components/NavBar.jsx"
import {Login} from "./pages/Login.jsx";
import { Outlet } from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <>
            {isLoggedIn ? (
                <NavBar utilisateur={"isfec"}>
                    <div className={"bg-gray-900/10 w-full h-full rounded-md lg:p-5"}>
                        <Outlet />
                    </div>
                </NavBar>
            ) : (
                <Login onSuccessfulLogin={handleLogin} />
            )}
        </>
    );
}

export default App
