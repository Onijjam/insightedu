import './App.css'
import {Sidebar} from "./components/Sidebar.jsx";
import {Login} from "./pages/Login.jsx";
import {ErrorPage} from "./pages/ErrorPage.jsx";
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
                <Sidebar>
                    <div className={"bg-gray-300 w-full h-full rounded-md lg:p-5"}>
                        <ErrorPage />
                    </div>
                </Sidebar>
            ) : (
                <Login onSuccessfulLogin={handleLogin} />
            )}
        </>
    );
}

export default App
