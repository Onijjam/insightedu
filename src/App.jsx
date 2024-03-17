import NavBar from "./components/NavBar.jsx"
import {Login} from "./pages/Login.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Footer from "./components/Footer.jsx";
import PasswordCreation from "./pages/PasswordCreation.jsx";
import FormCompetences from "./pages/FormCompetences.jsx";

export const Datacontext = React.createContext(undefined);

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [isPasswordChange, setPasswordChange] = useState(false);
    const [competenceMaj, setCompetenceMaj] = useState(null);
    const [competenceMin, setCompetenceMin] = useState(null);
    const [competenceNote, setCompetenceNote] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = sessionStorage.getItem("loggedIn");
        const PasswordChange = sessionStorage.getItem("PasswordChange");
        const FirstTime = sessionStorage.getItem("FirstTime");
        if (loggedIn === "true") {
            setIsLoggedIn(true);
        }
        if (PasswordChange === "true") {
            setPasswordChange(true);
        }
        if (FirstTime === "false") {
            setIsFirstTime(false);
        }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate(0);
    };

    const handleDisconnectUser = () => {
        sessionStorage.setItem("loggedIn", "false");
        sessionStorage.setItem("formateur", "false");
        setIsLoggedIn(false);
    };

    const handlePasswordChange = () => {
        setPasswordChange(true);
    };

    const handleFirstTime = () => {
        setIsFirstTime(false);
    };

    return (
        <Datacontext.Provider value={{ competenceMaj,setCompetenceMaj,competenceMin,setCompetenceMin,competenceNote,setCompetenceNote }}>
            {isLoggedIn ? (
                isFirstTime ? (
                    isPasswordChange ? (
                        <div className={"flex justify-center items-center lg:py-6 lg:px-6 bg-gray-900/10 w-screen h-screen overflow-y-auto scroll"}>
                            <FormCompetences onSuccess={handleFirstTime}/>
                        </div>
                        ) : (
                        <div className={"flex justify-center items-center bg-gray-900/10 w-screen h-screen"}>
                            <PasswordCreation onSuccess={handlePasswordChange} />
                        </div>
                        )
                ) : (
                    <>
                        <NavBar utilisateur={sessionStorage.getItem("formateur") === "true" ? "formateur" : "apprenant"} disconnect={handleDisconnectUser}>
                            <div className={"bg-gray-900/10 w-full h-full rounded-md sm:p-5"}>
                                <Outlet />
                            </div>
                        </NavBar>
                        <Footer />
                    </>
                )

            ) : (
                <Login onSuccessfulLogin={handleLogin} />
            )}
        </Datacontext.Provider>
    );
}

export default App
