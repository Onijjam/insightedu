import './App.css'
import {Sidebar} from "./components/Sidebar.jsx";
import {Login} from "./pages/Login.jsx";
import {ErrorPage} from "./pages/ErrorPage.jsx";
import {useEffect, useState} from "react";
import {ContactSupport} from "./pages/ContactSupport.jsx";

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
                    <div className={"bg-gray-900/10 w-full h-full rounded-md lg:p-5"}>
                        {/*<ErrorPage/>*/}
                        <ContactSupport />
                    </div>
                </Sidebar>
            ) : (
                <Login onSuccessfulLogin={handleLogin} />
            )}
        </>
    );
}

export default App
